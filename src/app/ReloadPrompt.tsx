import { useRegisterSW } from "virtual:pwa-register/react";
import { RefreshCw } from "lucide-react";
import { useEffect } from "react";
import { useNotification } from "@/features/notifications/NotificationContext";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log("Service Worker registered:", r);
    },
    onRegisterError(error: any) {
      console.log("Service Worker registration error:", error);
    },
  });

  const { addNotification } = useNotification();

  useEffect(() => {
    if (offlineReady) {
        addNotification("App ready to work offline", "success");
        setOfflineReady(false);
    }
  }, [offlineReady, addNotification, setOfflineReady]);

  useEffect(() => {
      if (needRefresh) {
          addNotification(
            <div className="flex flex-col gap-2">
                <span>New content available.</span>
                <button 
                    onClick={() => updateServiceWorker(true)}
                    className="flex items-center gap-2 bg-white text-blue-500 px-3 py-1 rounded font-bold text-sm w-fit"
                >
                    <RefreshCw size={14} /> Reload
                </button>
            </div>,
            "info"
          )
      }
  }, [needRefresh, addNotification, updateServiceWorker]);

  return null;
}

export default ReloadPrompt;

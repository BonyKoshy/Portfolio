import { useRegisterSW } from "virtual:pwa-register/react";
import { X, RefreshCw } from "lucide-react";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log("Service Worker registered:", r);
    },
    onRegisterError(error: any) {
      console.log("Service Worker registration error:", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!offlineReady && !needRefresh) {
    return null;
  }

  return (
    <div
      className="fixed right-4 bottom-4 m-4 p-3 border border-[var(--prelayer-2)] rounded-lg z-[1000] text-left shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-[var(--panel-bg)] text-[var(--text-primary)] flex items-center gap-4"
      role="alert"
    >
      <div className="flex-grow">
        {offlineReady ? (
          <span>App ready to work offline</span>
        ) : (
          <span>New content available, click on reload button to update.</span>
        )}
      </div>
      <div className="flex gap-2">
        {needRefresh && (
          <button
            className="flex items-center gap-2 bg-[var(--accent)] text-[var(--background)] border-none rounded-md px-4 py-2 cursor-pointer font-medium"
            onClick={() => updateServiceWorker(true)}
          >
            <RefreshCw size={16} />
            Reload
          </button>
        )}
        <button
          className="flex items-center gap-2 bg-[var(--prelayer-1)] text-[var(--text-secondary)] border-none rounded-md px-4 py-2 cursor-pointer font-medium"
          onClick={() => close()}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default ReloadPrompt;

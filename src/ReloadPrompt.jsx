// src/ReloadPrompt.jsx
import React from 'react';
import './ReloadPrompt.css';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { X, RefreshCw } from 'lucide-react';

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('Service Worker registered:', r);
    },
    onRegisterError(error) {
      console.log('Service Worker registration error:', error);
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
    <div className="pwa-toast" role="alert">
      <div className="pwa-toast-message">
        {offlineReady ? (
          <span>App ready to work offline</span>
        ) : (
          <span>New content available, click on reload button to update.</span>
        )}
      </div>
      <div className="pwa-toast-buttons">
        {needRefresh && (
          <button className="pwa-toast-button" onClick={() => updateServiceWorker(true)}>
            <RefreshCw size={16} />
            Reload
          </button>
        )}
        <button className="pwa-toast-button close" onClick={() => close()}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default ReloadPrompt;
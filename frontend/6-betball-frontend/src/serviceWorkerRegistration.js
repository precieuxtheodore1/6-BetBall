// serviceWorkerRegistration.js

// Enregistre le service worker pour activer le mode PWA
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker enregistré :', registration);
        })
        .catch(error => {
          console.log('Erreur Service Worker :', error);
        });
    });
  }
}

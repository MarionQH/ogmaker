export function loadingBar() {
    return {
        progress: 0, // Progression initiale
        isLoaded: false, // État de chargement (barre masquée quand true)

        startLoading() {
            // Simule une progression lente jusqu'à 90%
            const interval = setInterval(() => {
                if (this.progress < 90) {
                    this.progress += 10;
                } else {
                    clearInterval(interval); // Arrête l'incrémentation
                }
            }, 200);

            // Lorsque la page est complètement chargée
            window.addEventListener('load', () => {
                this.progress = 100; // Passe directement à 100%
                setTimeout(() => {
                    this.isLoaded = true; // Change l'état à `true`
                }, 500); // Attente de 500ms avant de masquer la barre
            });
        },
    };
}

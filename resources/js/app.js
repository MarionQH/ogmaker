import Alpine from 'alpinejs';
import { loadingBar } from './loadingbar.js';

// Déclare le composant `loadingBar` pour Alpine
window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('loadingBar', loadingBar);
});

// Lance Alpine.js
Alpine.start();

console.log('Alpine.js et loadingBar initialisés avec succès');
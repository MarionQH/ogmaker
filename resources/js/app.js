import Alpine from 'alpinejs';
import { loadingBar } from './loadingbar.js';
import { handleImageError } from './imageerror.js';
import { handleImageErrorform } from './formimageerror.js';
import { copyToClipboard } from './copyurl.js';
import { openEditPopup, closeEditPopup } from './namepopup.js';

// Déclare le composant `loadingBar` pour Alpine
window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('loadingBar', loadingBar);
});

// Gestion des erreurs pour les images générales
const globalImages = document.querySelectorAll('.global-img');
globalImages.forEach((img) => {
  img.addEventListener('error', () => handleImageError(img));
});

// Gestion des erreurs pour les images des formulaires
const formImages = document.querySelectorAll('.form-img');
formImages.forEach((img) => {
  img.addEventListener('error', () => handleImageErrorform(img));
});

// Attache un gestionnaire d'événements après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.querySelector('[data-action="copy-url"]');
  if (copyButton) {
    copyButton.addEventListener('click', copyToClipboard);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Gère le clic sur les boutons d'édition
  document.querySelectorAll('.edit-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = button.dataset.id; // Récupère l'ID
      const name = button.dataset.name; // Récupère le nom
      openEditPopup(id, name);
    });
  });

  // Gère le clic sur le bouton de fermeture
  const closeButton = document.querySelector('#editPopup button[onclick="closeEditPopup()"]');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      closeEditPopup();
    });
  }
});



// Lance Alpine.js
Alpine.start();

console.log('Alpine.js et loadingBar initialisés avec succès');
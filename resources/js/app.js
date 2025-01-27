import Alpine from 'alpinejs';
import { loadingBar } from './loadingbar.js';
import { handleImageError } from './imageerror.js';
import { handleImageErrorform } from './formimageerror.js';
import { copyToClipboard } from './copyurl.js';
import { openEditPopup, closeEditPopup } from './namepopup.js';

// Déclare le composant `loadingBar` pour Alpine
window.Alpine = Alpine;

// Initialisation du composant loadingBar dans Alpine
document.addEventListener('alpine:init', () => {
    Alpine.data('loadingBar', loadingBar);
});

// Fonction pour gérer les erreurs d'image (image générale et image de formulaire)
function setupImageErrorHandling() {
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
}

// Fonction pour gérer le bouton de copie
function setupCopyButton() {
  const copyButton = document.querySelector('[data-action="copy-url"]');
  if (copyButton) {
    copyButton.addEventListener('click', copyToClipboard);
  }
}

// Fonction pour gérer les boutons d'édition
function setupEditButtons() {
  document.querySelectorAll('.edit-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = button.dataset.id;  // Récupère l'ID
      const name = button.dataset.name;  // Récupère le nom
      openEditPopup(id, name);
    });
  });

  // Gestion du clic sur le bouton de fermeture de la popup
  const closeButton = document.querySelector('#editPopup button[onclick="closeEditPopup()"]');
  if (closeButton) {
    closeButton.addEventListener('click', closeEditPopup);
  }
}

function checkLoadingCompletion() {
    // Sélectionne toutes les images
    const allImages = document.querySelectorAll('img');
    let loadedImages = 0;

    allImages.forEach(img => {
        if (img.complete || img.style.display === "none") {
            loadedImages++;
        }
    });

    // Si toutes les images sont chargées (ou échouées), mettre à jour la barre de progression
    if (loadedImages === allImages.length) {
        // Mise à jour de la barre de progression (fin de chargement)
        const alpineData = document.querySelector('[x-data="loadingBar()"]');
        if (alpineData) {
            alpineData.__x.$data.isLoaded = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupImageErrorHandling(); 
    setupCopyButton();
    setupEditButtons();

    // Ajouter des événements pour surveiller le chargement des images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.addEventListener('load', () => checkLoadingCompletion());
        img.addEventListener('error', () => checkLoadingCompletion());
    });

    // Vérifier l'état des images au départ
    checkLoadingCompletion();
});


Alpine.start();


console.log('Alpine.js et loadingBar initialisés avec succès');

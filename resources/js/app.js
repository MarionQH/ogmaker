import Alpine from 'alpinejs';
import { copyToClipboard } from './copyurl.js';
import { openEditPopup, closeEditPopup } from './namepopup.js';
import 'unpoly/unpoly.css';
import 'unpoly/unpoly.js';

// Déclare le composant `loadingBar` pour Alpine
window.Alpine = Alpine;

console.log('Script loaded'); // Log pour vérifier que le script est chargé

/**
 * Fonction pour gérer le bouton de copie d'URL.
 */
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

function spinner() {
  const spinner = document.getElementById('loading-spinner'); // Le spinner
  const image = document.getElementById('openGraphImage'); // L'image à charger

  console.log('Spinner element:', spinner); // Log pour vérifier que le spinner est sélectionné
  console.log('Image element:', image); // Log pour vérifier que l'image est sélectionnée

  // Fonction pour afficher le spinner
  function showSpinner() {
    console.log('Showing spinner');
    spinner.classList.remove('hidden');  // Afficher le spinner
  }

  // Fonction pour cacher le spinner lorsque l'image est chargée
  function hideSpinner() {
    console.log('Hiding spinner');
    spinner.classList.add('hidden');  // Cacher le spinner
  }

  // Afficher le spinner au début du chargement de l'image
  showSpinner();

  // Ajouter un paramètre de requête unique pour forcer le chargement de l'image
  const uniqueParam = `?cacheBuster=${new Date().getTime()}`;
  image.src = image.src + uniqueParam;

  // Vérifier si l'image est déjà dans le cache
  if (image.complete) {
    console.log('Image already loaded from cache');
    hideSpinner(); // Si l'image est déjà complètement chargée (cache), cacher le spinner
  } else {
    // Sinon, attacher les événements d'image
    image.onload = function() {
      console.log('Image loaded');
      hideSpinner(); // Masquer le spinner une fois l'image chargée
    };
    image.onerror = function() {
      console.log('Image load error');
      hideSpinner(); // En cas d'erreur, cacher le spinner et afficher un message d'erreur
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired'); // Log pour vérifier que l'événement DOMContentLoaded est déclenché
  setupCopyButton(); // Initialisation du bouton de copie
  setupEditButtons(); // Initialisation des boutons d'édition
  spinner();
});

// Démarrage d'Alpine.js
  Alpine.start();
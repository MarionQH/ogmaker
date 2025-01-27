 export function handleImageError(imgElement) {
    // Remplace l'image par défaut ou affiche un message d'erreur
    imgElement.style.display = "none"; // Cache l'image défectueuse
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("text-center", "text-gray-500", "font-bold", "text-sm", "mt-4", "p-16");
    errorMessage.innerText = "There's something wrong with your url, which may be due to the font.";
    imgElement.parentNode.insertBefore(errorMessage, imgElement);
  }
 export function handleImageErrorform(imgElement) {
    // Remplace l'image par défaut ou affiche un message d'erreur
    imgElement.style.display = "none"; // Cache l'image défectueuse
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("text-center", "text-red-500", "font-bold");
    errorMessage.innerText = "This font is not supported by cloudinary, please choose another one";
    imgElement.parentNode.appendChild(errorMessage);
  }
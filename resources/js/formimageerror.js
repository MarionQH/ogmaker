export function handleImageErrorform(imgElement) {
    // Cache l'image défectueuse
    imgElement.style.display = "none";
    
    // Vérifie si le message d'erreur existe déjà, sinon on le crée
    let errorMessage = imgElement.parentNode.querySelector(".error-message");
    if (!errorMessage) {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("text-center", "text-red-500", "font-bold", "error-message");
        errorMessage.innerText = "This font is not supported by cloudinary, please choose another one";
        imgElement.parentNode.appendChild(errorMessage);
    }

    // Marque l'erreur et met à jour la barre de progression
    checkLoadingCompletion();
}

export function handleImageLoadform(imgElement) {
    imgElement.style.display = "block";  // Affiche l'image si elle se charge correctement
    const errorMessage = imgElement.parentNode.querySelector(".error-message");
    if (errorMessage) {
        errorMessage.remove(); // Supprime le message d'erreur en cas de succès
    }
    
    checkLoadingCompletion();
}



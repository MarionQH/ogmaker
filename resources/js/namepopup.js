 // Fonction pour ouvrir la popup
  export function openEditPopup(id, name) {
    document.getElementById("editPopup").classList.remove("hidden");
    document.getElementById("openGraphId").value = id;
    document.getElementById("openGraphName").value = name;
  }
  // Fonction pour fermer la popup
  
  export function closeEditPopup() {
    document.getElementById("editPopup").classList.add("hidden");
  }
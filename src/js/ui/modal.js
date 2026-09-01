/* ==========================================================================
   Fichier : modal.js
   Gestion de l'ouverture et de la fermeture du modal
========================================================================== */

const modal = document.querySelector("#task-modal");
const closeModalButton = document.querySelector("#close-modal-button");
const cancelModalButton = document.querySelector("#cancel-modal-button");

console.log("MODAL.JS CHARGÉ");
console.log("Modal trouvé :", modal);


/**
 * Ouvrir le modal
 */
export function openModal() {
    modal.classList.add("is-visible");

    console.log("OPEN MODAL APPELÉ");
}


/**
 * Fermer le modal
 */
export function closeModal() {
    modal.classList.remove("is-visible");

    console.log("CLOSE MODAL APPELÉ");
}


/**
 * Bouton X
 */
closeModalButton.addEventListener("click", closeModal);


/**
 * Bouton Annuler
 */
cancelModalButton.addEventListener("click", closeModal);
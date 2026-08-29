/* ==========================================================================
   Fichier : modal.js

   Description :
   Gestion de l'ouverture et de la fermeture du modal.

   Responsabilité :
   - Ouvrir le modal
   - Fermer le modal

   Ce fichier ne crée PAS de tâche.
============================================================================== */
/**
 * Ouvre le modal.
*/

export function openModal(modal) {
    modal.classList.add("is-open");
}

/**
 * Ferme le modal.
*/

export function closeModal(modal) {
    modal.classList.remove("is-open");
}
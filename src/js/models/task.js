/* ==========================================================================
   Fichier : task.js

   Description :
   Modèle représentant une tâche de notre Todo App.

   Responsabilité :
   - Définir la structure d'une tâche
   - Créer une nouvelle tâche

   Ce fichier ne s'occupe PAS :
   - de l'affichage
   - du HTML
   - du LocalStorage
   - des événements
============================================================================== */

/**
 * Crée une nouvelle tâche.
 *
 * @param {string} title - Titre de la tâche
 * @param {string} description - Description de la tâche
 * @param {string} priority - Priorité de la tâche
 * @returns {Object} Une nouvelle tâche
*/
export function createTask(title, description='', prioprity = "medium"){
    return {
        id: crypto.randomUUID(),
        title : title,
        description: description,
        status: "todo",
        prioprity: prioprity,
        dueDate: null,
        reminder: null,
        attachment: null,
        estimatedTime: null
    }
}
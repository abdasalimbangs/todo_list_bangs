/* ==========================================================================
   Fichier : taskService.js

   Description :
   Service responsable de la gestion des tâches.

   Responsabilités :
   - Créer une tâche
   - Ajouter une tâche à la collection
   - Rechercher une tâche
   - Supprimer une tâche
   - Modifier une tâche

   Ce fichier ne s'occupe PAS :
   - du HTML
   - du DOM
   - de l'affichage
   - des événements utilisateur
============================================================================== */
import { createTask } from "../models/task";

/**
 * Ajoute une nouvelle tâche à une collection.
 *
 * @param {Array} tasks - Collection des tâches
 * @param {string} title - Titre de la tâche
 * @param {string} description - Description de la tâche
 * @param {string} priority - Priorité de la tâche
 * @returns {Object} La tâche créée
*/

export function addTask(tasks, title, description, priority) {
    
    // Créer la nouvelle tâche grâce au modèle Task
    const newTask = createTask(
        title,
        description,
        prioprity
    );

    // Ajouter la tâche a notre collection
    tasks.push(newTask);

    // Retourne la tâche créer
    return newTask;
}
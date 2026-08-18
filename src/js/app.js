/* ==========================================================================
   Fichier : app.js

   Description :
   Point d'entrée JavaScript de notre Todo App.

   Responsabilités actuelles :
   - Définir les premières données de l'application
   - Tester notre modèle de tâche

   Projet : Todo App
==============================================================================*/
/*
|--------------------------------------------------------------------------
| Première tâche
|--------------------------------------------------------------------------
|
| Une tâche est représentée par un objet JavaScript.
|
| Pour l'instant, nous créons une seule tâche afin de comprendre
| la structure de nos données avant de passer à la génération
| dynamique des cartes.
|
*/

const tasks =  [
    {
        id: "task-1",
        title: "Apprendre JavaScript",
        description: "Étudier les objets et les tableaux JavaScript.",
        status: "todo",
        priority: "high"
    },
    {
        id: "task-2",
        title: "Faire les exercices JavaScript",
        description: "Terminer les exercices du chapitre.",
        status: "in-progress",
        priority: "medium"
    },
    {
        id: "task-3",
        title: "Faire le TP",
        description: "Réaliser le TP JavaScript.",
        status: "todo",
        priority: "high"
    },
    {
        id: "task-4",
        title: "Faire les exercices TP4",
        description: "Terminer les exercices du TP4.",
        status: "done",
        priority: "low"
    }
]

const taskList = document.querySelector('.task-list')



/**
 * ==========================================================================
 * Création d'une carte de tâche
 * ==========================================================================
 *
 * Cette fonction reçoit une tâche et construit l'élément HTML
 * correspondant.
 *
 * @param {Object} task - La tâche à afficher
 * @returns {HTMLElement} La carte HTML de la tâche
 * ==========================================================================
 */

function createTaskCard(task) {

    // Creation de l'élément principal de la carte
    const taskCard = document.createElement("article");
    taskCard.classList.add("task-card")

    /*
     * ----------------------------------------------------------------------
     * Identification de la tâche
     * ----------------------------------------------------------------------
     *
     * Nous stockons l'identifiant de la tâche directement sur l'élément HTML.
     *
     * Cela nous permettra plus tard de retrouver facilement la tâche
     * lorsque l'utilisateur voudra la modifier ou la supprimer.
     * ----------------------------------------------------------------------
    */
    taskCard.dataset.taskId = task.id
    console.log(taskCard)
    // ----------------------------------------------------------------------
    // Titre
    // ----------------------------------------------------------------------

    const taskTitle = document.createElement("h3")
    taskTitle.textContent = task.title

    // ----------------------------------------------------------------------
    // Description
    // ----------------------------------------------------------------------

    const taskDescription = document.createElement("p")
    taskDescription.textContent = task.description

    // ----------------------------------------------------------------------
    // Statut
    // ----------------------------------------------------------------------

    const taskStatus = document.createElement("span")
    taskStatus.textContent = task.status

     // ----------------------------------------------------------------------
    // Priorité
    // ----------------------------------------------------------------------

    const taskPriority = document.createElement("span");
    taskPriority.textContent = task.priority;

    // ----------------------------------------------------------------------
    // Assemblage de la carte
    // ----------------------------------------------------------------------

    taskCard.append(
        taskTitle,
        taskDescription,
        taskStatus,
        taskPriority
    )
    return taskCard
}

tasks.forEach((task) => {
    const taskCard = createTaskCard(task)
    taskList.append(taskCard)
});
/*
|--------------------------------------------------------------------------
| Vérification
|--------------------------------------------------------------------------
|
| Nous affichons notre objet dans la console du navigateur afin
| de vérifier que JavaScript a correctement créé notre donnée.
|
*/









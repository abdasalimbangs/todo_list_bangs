import { openModal,closeModal } from "./ui/modal.js";
import { addTask } from "./services/taskService.js";
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
const taskList = document.querySelector('.task-list')
const addTaskButton = document.querySelector("#add-task-button");

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

    // carte principale
    const taskCard = document.createElement("article");
    taskCard.classList.add('task-card');
    taskCard.dataset.task = task.id ;
    
    // Checkbox
    const checkContainer = document.createElement("div");
    checkContainer.classList.add("task-card__check");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = task.id;
    
    const checkLable = document.createElement("label");
    checkLable.htmlFor = task.id
   
    checkContainer.append(checkbox, checkLable)

    // Contenu
    const contenu = document.createElement("div");
    contenu.classList.add("task-card__content");

    // header
    const header = document.createElement("div");
    header.classList.add("task-card__header");

    const title = document.createElement("h3");
    title.textContent = task.title
    
    const proprity = document.createElement("span");
    proprity.classList.add("task-card__priority");

    proprity.textContent = task.priority === "high"
        ? "Haut"
        : task.priority === "medium"
            ? "Moyen"
            : "Bas";
    
    header.append(title, proprity)
    

    // Description
    const description = document.createElement("p");
    description.classList.add("task-card__description");
    description.textContent = task.description || "";

    // Informations
    const meta = document.createElement("div");
    meta.classList.add("task-card__meta");

    const dueDate = document.createElement("span");
    dueDate.textContent = task.dueDate
        ? `📅 ${task.dueDate}`
        : "";

    const estimatedTime = document.createElement("span");
    estimatedTime.textContent = task.estimatedTime
        ? `⏱ ${task.estimatedTime}`
        : "";

    meta.append(dueDate, estimatedTime);
    

    // Assemblage du contenu
    contenu.append(header, description, meta);
    
    // Bouton menu
    const menu = document.createElement("button");
    menu.classList.add("task-card__menu");
    menu.type = "button";
    menu.setAttribute("aria-label", "Options de la tâche");
    menu.textContent = "⋮";

    // Assemblage final
    taskCard.append(
        checkContainer,
        contenu,
        menu
    );

    return taskCard; 
    
}

/**
 * ==========================================================================
 * Création d'une nouvelle tâche
 * ==========================================================================
 *
 * @param {string} title - Titre de la tâche
 * @param {string} description - Description de la tâche
 * @param {string} priority - Priorité de la tâche
 * @returns {Object} La nouvelle tâche
*/
const newTask = addTask(
    tasks,
    title,
    description,
    priority
);

/* ==========================================================================
 * Mise de jour de l'interface
 * ==========================================================================*/
function renderTasks() {
    // Vider la liste avant de generer les cartes
    taskList.innerHTML = "";

    // Generer les cartes pour chaque tâche
    tasks.forEach((task) => {

        const taskCard = createTaskCard(task)
        taskList.append(taskCard)
    });
}

renderTasks();


     

/*
|--------------------------------------------------------------------------
| Vérification
|--------------------------------------------------------------------------
|
| Nous affichons notre objet dans la console du navigateur afin
| de vérifier que JavaScript a correctement créé notre donnée.
|
*/

addTaskButton.addEventListener("click", () => {
    openModal();
});









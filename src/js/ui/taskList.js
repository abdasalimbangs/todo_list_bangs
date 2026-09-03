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

export function createTaskCard(task) {

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
    
    const checkLabel = document.createElement("label");
    checkLabel.htmlFor = task.id
   
    checkContainer.append(checkbox, checkLabel)

    // Contenu
    const contenu = document.createElement("div");
    contenu.classList.add("task-card__content");

    // header
    const header = document.createElement("div");
    header.classList.add("task-card__header");

    const title = document.createElement("h3");
    title.textContent = task.title
    
    const priority = document.createElement("span");
    priority.classList.add("task-card__priority");

    priority.textContent = task.priority === "high"
        ? "Haut"
        : task.priority === "medium"
            ? "Moyen"
            : "Bas";
    
    header.append(title, priority)
    

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

/* ==========================================================================
 * Mise de jour de l'interface
 * ==========================================================================*/

export function renderTasks(taskList, tasks) {
    // Vider la liste avant de generer les cartes
    taskList.innerHTML = "";

    // Generer les cartes pour chaque tâche
    tasks.forEach((task) => {

        const taskCard = createTaskCard(task)
        taskList.append(taskCard)
    });
}
     


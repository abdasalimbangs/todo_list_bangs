import { openModal,closeModal } from "./ui/modal.js";
import {createTaskCard, renderTasks} from "./ui/taskList.js";
import { addTask } from "./services/taskService.js";

// Collection des tâches
const tasks = [
    {
        id: "task-1",
        title: "Apprendre le JS",
        description: "Introduction au JS",
        status: "todo",
        priority: "medium",
        dueDate: null,
        reminder: null,
        attachment: null,
        estimatedTime: null
    },

    {
        id: "task-2",
        title: "Apprendre le Laravel",
        description: "Introduction au Laravel",
        status: "in-progress",
        priority: "low",
        dueDate: null,
        reminder: null,
        attachment: null,
        estimatedTime: null
    },

    {
        id: "task-3",
        title: "Apprendre le Python",
        description: "Introduction au Python",
        status: "done",
        priority: "high",
        dueDate: null,
        reminder: null,
        attachment: null,
        estimatedTime: null
    }
];
    
const taskList = document.querySelector('.task-list')
const addTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");



/*
|--------------------------------------------------------------------------
| Vérification
|--------------------------------------------------------------------------
|
| Nous affichons notre objet dans la console du navigateur afin
| de vérifier que JavaScript a correctement créé notre donnée.
|
*/
// Ouvrir le modal
addTaskButton.addEventListener("click", () => {
    openModal();
});

taskForm.addEventListener("submit", (event)=> {

    // Empêche le rechardgement de la page 
    event.preventDefault();

    // Récuper les valeurs du formulaire
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const priority = document.querySelector("#task-priority").value;

    // Créer et Ajout la Tâche
    const newTask = addTask (
        tasks,
        title,
        description,
        priority
    )
    console.log("Nouvelle tâche :", newTask);

    // Réafficher les tâches
    renderTasks();

    // Réinitialiser le formulaire
    taskForm.reset();

    // Fermer le modal
    closeModal();

});








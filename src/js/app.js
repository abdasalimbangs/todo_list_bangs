
import { openModal,closeModal } from "./ui/modal.js";
import { renderTasks} from "./ui/taskList.js";
import { addTask } from "./services/taskService.js";
import { saveTasks, getTasks } from "./services/storageService.js";

// Collection des tâches
// Reperation des tâches depuis le localStorage
const tasks = getTasks()
    
const taskList = document.querySelector('.task-list')
const addTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");

// Réafficher les tâches
renderTasks(taskList,tasks);

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

    // Sauvegarde de la tâche dans localStorage
    saveTasks(tasks);

    //actualiser la page pour afficher les taches
    renderTasks(taskList, tasks)
    
    // Réinitialiser le formulaire
    taskForm.reset();

    // Fermer le modal
    closeModal();

});









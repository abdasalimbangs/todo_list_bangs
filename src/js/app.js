
/*
|--------------------------------------------------------------------------
| 1. IMPORTATION DES MODULES
|--------------------------------------------------------------------------
|
| Nous importons les fonctions nécessaires depuis les différents modules.
| Chaque module a une responsabilité précise :
|
| - modal.js : ouvrir et fermer la fenêtre d'ajout d'une tâche.
| - taskList.js : afficher les tâches dans l'interface.
| - taskService.js : ajouter et supprimer des tâches.
| - storageService.js : lire et sauvegarder les tâches dans localStorage.
|
*/

import { openModal, closeModal } from "./ui/modal.js";
import { renderTasks } from "./ui/taskList.js";
import { addTask, removeTask } from "./services/taskService.js";
import { saveTasks, getTasks } from "./services/storageService.js";


/*
|--------------------------------------------------------------------------
| 2. RÉCUPÉRATION DES DONNÉES
|--------------------------------------------------------------------------
|
| Nous récupérons les tâches sauvegardées dans localStorage.
|
| - Si des tâches existent, getTasks() les retourne.
| - Si aucune tâche n'existe, getTasks() retourne un tableau vide.
|
| Le tableau tasks devient la collection de travail de l'application.
| Les ajouts et suppressions modifieront cette collection.
|
*/

const tasks = getTasks();


/*
|--------------------------------------------------------------------------
| 3. SÉLECTION DES ÉLÉMENTS HTML
|--------------------------------------------------------------------------
|
| Nous récupérons les éléments HTML avec lesquels JavaScript doit interagir.
|
| - taskList : conteneur qui affiche les cartes des tâches.
| - addTaskButton : bouton qui ouvre la fenêtre d'ajout.
| - taskForm : formulaire de création d'une tâche.
|
*/

const taskList = document.querySelector(".task-list");
const addTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");


/*
|--------------------------------------------------------------------------
| 4. GESTION DE LA SUPPRESSION D'UNE TÂCHE
|--------------------------------------------------------------------------
|
| Cette fonction est appelée lorsqu'un utilisateur clique sur le menu
| d'une carte de tâche.
|
| Elle reçoit l'identifiant de la tâche à supprimer.
|
| Étape 1 : supprimer la tâche du tableau.
| Étape 2 : sauvegarder le tableau modifié.
| Étape 3 : actualiser l'affichage avec les tâches restantes.
|
| Nous transmettons également cette fonction à renderTasks() afin que
| les cartes nouvellement affichées puissent gérer leurs clics.
|
*/

function handleTaskMenuClick(taskId) {
    // Étape 1 : supprimer la tâche correspondant à cet identifiant.
    removeTask(tasks, taskId);

    // Étape 2 : sauvegarder les données après la suppression.
    saveTasks(tasks);

    // Étape 3 : réafficher les tâches restantes.
    renderTasks(taskList, tasks, handleTaskMenuClick);
}


/*
|--------------------------------------------------------------------------
| 5. AFFICHAGE INITIAL DES TÂCHES
|--------------------------------------------------------------------------
|
| Au démarrage de l'application, nous affichons les tâches récupérées
| depuis localStorage.
|
| Le troisième argument est la fonction de rappel qui sera utilisée
| lorsqu'un utilisateur cliquera sur le menu d'une tâche.
|
*/

renderTasks(taskList, tasks, handleTaskMenuClick);


/*
|--------------------------------------------------------------------------
| 6. OUVERTURE DE LA FENÊTRE D'AJOUT
|--------------------------------------------------------------------------
|
| Lorsque l'utilisateur clique sur le bouton "Ajouter une tâche",
| nous ouvrons la fenêtre contenant le formulaire.
|
*/

addTaskButton.addEventListener("click", () => {
    openModal();
});


/*
|--------------------------------------------------------------------------
| 7. TRAITEMENT DU FORMULAIRE DE CRÉATION
|--------------------------------------------------------------------------
|
| Lorsque l'utilisateur soumet le formulaire, nous :
|
| 1. empêchons le rechargement de la page ;
| 2. récupérons les valeurs saisies ;
| 3. créons et ajoutons la nouvelle tâche ;
| 4. sauvegardons les données ;
| 5. actualisons l'affichage ;
| 6. réinitialisons le formulaire ;
| 7. fermons la fenêtre d'ajout.
|
*/

taskForm.addEventListener("submit", (event) => {

    // Étape 1 : empêcher le navigateur de recharger la page.
    event.preventDefault();


    // Étape 2 : récupérer les valeurs saisies dans le formulaire.
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const priority = document.querySelector("#task-priority").value;


    // Étape 3 : créer la tâche et l'ajouter au tableau.
    addTask(
        tasks,
        title,
        description,
        priority
    );


    // Étape 4 : sauvegarder le tableau actualisé dans localStorage.
    saveTasks(tasks);


    // Étape 5 : réafficher les tâches et conserver leur gestionnaire de clic.
    renderTasks(taskList, tasks, handleTaskMenuClick);


    // Étape 6 : vider les champs du formulaire.
    taskForm.reset();


    // Étape 7 : fermer la fenêtre d'ajout.
    closeModal();

});

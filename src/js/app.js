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

const tasks = [
    {
        id: "task-1",
        title: "Apprendre JavaScript",
    },
    {
        id: "task-2",
        title: "Faire les exercices JavaScript",
    },
    {
        id: "task-3",
        title: "Faire le TP",
    },
    {
        id: "task-4",
        title: "Faire les exercices TP4",
    }
];
const taskList = document.querySelector('.task-list')

tasks.forEach((task) => {
    const taskCard = document.createElement("article");
    const taskTitle = document.createElement("h3")
    
    taskTitle.textContent = task.title
    console.log(taskTitle)

    taskCard.append(taskTitle)
    taskCard.classList.add("task-card");
    taskList.appendChild(taskCard);
})
/*
|--------------------------------------------------------------------------
| Vérification
|--------------------------------------------------------------------------
|
| Nous affichons notre objet dans la console du navigateur afin
| de vérifier que JavaScript a correctement créé notre donnée.
|
*/









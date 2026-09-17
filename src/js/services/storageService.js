
// Fonction pour sauveger les Tâches dans LocalStorage
export function saveTasks(tasks) {
    const jsonTasks =  JSON.stringify(tasks)
    localStorage.setItem("task" ,jsonTasks);  
}

// Fonction pour recuper les Tâches depuis Le LocalStorage
export function getTasks() {

    const jsonTasks = localStorage.getItem("task");
    const resultat = JSON.parse(jsonTasks)

    return resultat ;
    
}
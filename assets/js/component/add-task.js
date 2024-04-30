import getTask from "./get-task.js";


const addTask = () => {
    
    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const taskDate = document.getElementById('task-date');
    const taskSubmit = document.getElementById('submit-task');
    const modal = document.getElementById("myModal");
    

    taskSubmit.addEventListener('click', () => {
        let todo = {
            nom : `${taskTitle.value}`,
            description : `${taskDescription.value}`,
            date : `${taskDate.value}`,
            etat : `todo`
        }

        let todos = JSON.parse(localStorage.getItem('todos')) || [];

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));
        modal.style.display = "none";
        getTask();
        
    })
}

export default addTask;
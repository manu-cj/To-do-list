import getTask from "./get-task.js";


const addTask = async () => {
    
    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const taskDate = document.getElementById('task-date');
    const taskSubmit = document.getElementById('submit-task');
    const modal = document.getElementById("myModal");
    
    function generateToken(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            token += chars.charAt(randomIndex);
        }
    
        return token;
    }

    taskSubmit.addEventListener('click', () => {
        let todo = {
            token : generateToken(5),
            nom : `${taskTitle.value}`,
            description : `${taskDescription.value}`,
            date : `${taskDate.value}`,
            etat : `todo`
        }

        let todos = JSON.parse(localStorage.getItem('todos')) || [];

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));
        modal.style.display = "none";
        window.location.href = "";
        
    })
}

export default addTask;
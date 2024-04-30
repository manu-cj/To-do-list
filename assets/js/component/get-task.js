
const getTask = () => {

    let backgroundColors = ['#FFCCCC','#FFDAB9', '#CCCCFF','teal', '#00FF00', 'tomato', 'cyan', '#FFFFCC', '#FFCCFF'];

    const todoContent = document.getElementById('todo-content');
    const doneContent = document.getElementById('done-content');
    const dateActuelle = new Date();
    let todos = JSON.parse(localStorage.getItem('todos')) || [];


    function getTodoTask(etat, path) {
        path.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            let todo = todos[i];
            if (todo.etat === etat) {
                

                const dateFin = new Date(todo.date);
                const differenceEnMillisecondes = dateFin - dateActuelle;
                const jours = Math.floor(differenceEnMillisecondes / (1000 * 60 * 60 * 24));
                const heures = Math.floor((differenceEnMillisecondes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

                //création des élements html
                let checkedDiv = document.createElement('div');
                let isDone = document.createElement('input');
                let taskContent = document.createElement('div');
                let task = document.createElement('li');
                let taskOptions = document.createElement('div');
                let garbageIcon = document.createElement('i');
                let updateIcon = document.createElement('i');
                let taskTitle = document.createElement('h3');
                let taskDescription = document.createElement('i');
                let taskDate =document.createElement('i');

                //ajout du type de l'input
                isDone.type = 'checkbox';
                isDone.name = 'is-done';

                //ajout de class et id ou autre atribut
                checkedDiv.classList.add('checked-div');
                isDone.classList.add('is-done');
                taskContent.classList.add('task-content');
                task.classList.add('task');
                taskOptions.classList.add('task-options')
                garbageIcon.classList.add('fas', 'fa-trash');
                garbageIcon.title = 'Delete';
                updateIcon.classList.add('fas', 'fa-edit');
                updateIcon.title = 'Update';
                taskTitle.classList.add('task-title');
                taskDescription.classList.add('task-description');
                taskDate.classList.add('task-date');

                //ajout de couleur aléatoire
                let rand = Math.floor(Math.random() * backgroundColors.length);
                task.style.backgroundColor = backgroundColors[rand];

                if (jours < 1) {
                    task.classList.add('alert-time');
                    task.style.backgroundColor = 'tomato';
                }

                //Ajout du des données dans le dom
                taskTitle.textContent = todo.nom;
                taskDescription.textContent = todo.description;
                if (etat === 'todo') {
                    taskDate.textContent = `Temps restant : ${jours} jours, ${heures} heures`;
                }else {
                    taskDate.textContent = `Is done`;
                }
                
                //ajout des élements html
                path.appendChild(task);
                if (etat === 'todo') {
                    task.appendChild(checkedDiv);
                checkedDiv.appendChild(isDone);
                }
                task.appendChild(taskContent);
                taskContent.appendChild(taskOptions);
                taskOptions.appendChild(updateIcon);
                taskOptions.appendChild(garbageIcon);
                taskContent.appendChild(taskTitle);
                taskContent.appendChild(taskDescription);
                taskContent.appendChild(taskDate);
            }           
        }
    }
    getTodoTask('todo', todoContent);
    getTodoTask('done', doneContent);
}

export default getTask;
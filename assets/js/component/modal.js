const createModal = async (actionType, submitValue, index) => {

    const modal = document.getElementById("myModal");
    const modalContent = document.querySelector('.modal-content');
    const close = document.querySelector(".fa-times");
    const task = document.querySelectorAll('.task');

    //Creation des elements
    let taskTitleLabel = document.createElement('label');
    let taskTitleInput = document.createElement('input');
    let taskDescriptionLabel = document.createElement('label');
    let taskDescriptionInput = document.createElement('textarea');
    let taskDateLabel = document.createElement('label');
    let taskDateInput = document.createElement('input');
    let submitInput = document.createElement('input');

    //Ajout des paramètres
    taskTitleLabel.htmlFor = 'task-title';
    taskTitleInput.type = 'text';
    taskTitleInput.name = 'task-title';
    taskTitleInput.id = 'task-title';

    taskDescriptionLabel.htmlFor = 'task-description';
    taskDescriptionInput.name = 'task-description';
    taskDescriptionInput.id = 'task-description';
    taskDescriptionInput.cols = '25';
    taskDescriptionInput.rows = '10';

    taskDateLabel.htmlFor = 'task-date';
    taskDateInput.type = 'date';
    taskDateInput.name = 'task-date';
    taskDateInput.id = 'task-date';

    submitInput.type = 'submit';
    submitInput.name = actionType;
    submitInput.id = actionType;
    submitInput.value = submitValue;

    //Ajout du text dans le label
    taskTitleLabel.textContent = 'Task-name : ';
    taskDescriptionLabel.textContent = 'Task-description : ';
    taskDateLabel.textContent = 'Done for : ';

    //Ajout du text si update
    if (actionType === 'update-task') {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        let indexUpdate = -1;
        for (let i = 0; i < todos.length; i++){
            if (todos[i].token === task[index].id) {
                indexUpdate = i;
                break;
            } 
        }
        if (indexUpdate !== -1) {
            taskTitleInput.value = todos[indexUpdate].nom;
            taskDescriptionInput.value = todos[indexUpdate].description;
            taskDateInput.value = todos[indexUpdate].date;   
        }
        else {
            console.log("Une erreur c'est produite");
        }

        submitInput.addEventListener('click', () => {
            for (let j = 0; j < todos.length; j++) {
                if (todos[j].token === checkedDiv[index].id) {
                    indexUpdate = j;
                    break;
                }    
            }
            if (indexUpdate !== -1) { 
                todos[indexUpdate].nom = taskTitleInput.value;
                todos[indexUpdate].description = taskDescriptionInput.value;
                todos[indexUpdate].date = taskDateInput.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                window.location.href = "";
            } else {
                console.log("Une erreur c'est produite");
            }

            

        })
    } 

    //Ajout dans dans la fenêtre
    modalContent.appendChild(taskTitleLabel);
    modalContent.appendChild(taskTitleInput);
    modalContent.appendChild(taskDescriptionLabel);
    modalContent.appendChild(taskDescriptionInput);
    modalContent.appendChild(taskDateLabel);
    modalContent.appendChild(taskDateInput);
    modalContent.appendChild(submitInput);
    
    //réinitialisation de la fenêtre modal
    function resetModal() {
        modal.style.display = "none";
        taskTitleLabel.remove();
        taskTitleInput.remove();
        taskDescriptionLabel.remove();
        taskDescriptionInput.remove();
        taskDateLabel.remove();
        taskDateInput.remove();
        submitInput.remove();  
    }
    submitInput.addEventListener('click', () => {
        resetModal();
    })

    close.addEventListener('click', () => {
        resetModal();
    })

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            resetModal();
          }
    })
}
export default createModal;
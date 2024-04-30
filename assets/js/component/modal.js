const createModal = (typeSubmit, valueSubmit, index) => {

    const modal = document.getElementById("myModal");
    const modalContent = document.querySelector('.modal-content');
    const close = document.querySelector(".fa-times");


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
    submitInput.name = typeSubmit;
    submitInput.id = typeSubmit;
    submitInput.value = valueSubmit;

    //Ajout du text dans le label
    taskTitleLabel.textContent = 'Task-name : ';
    taskDescriptionLabel.textContent = 'Task-description : ';
    taskDateLabel.textContent = 'Done for : ';

    //Ajout du text si update
    if (typeSubmit === 'update-task') {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        for (let i = 0; i < todos.length; i++){
            taskTitleInput.value = todos[index].nom;
            taskDescriptionInput.value = todos[index].description;
            taskDateInput.value = todos[index].date;
        }
    }
    

    //Ajout dans dans la fenêtre
    modalContent.appendChild(taskTitleLabel);
    modalContent.appendChild(taskTitleInput);
    modalContent.appendChild(taskDescriptionLabel);
    modalContent.appendChild(taskDescriptionInput);
    modalContent.appendChild(taskDateLabel);
    modalContent.appendChild(taskDateInput);
    modalContent.appendChild(submitInput);
    
    function resetModal(params) {
        modal.style.display = "none";
        taskTitleLabel.remove();
        taskTitleInput.remove();
        taskDescriptionLabel.remove();
        taskDescriptionInput.remove();
        taskDateLabel.remove();
        taskDateInput.remove();
        submitInput.remove();  
    }
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
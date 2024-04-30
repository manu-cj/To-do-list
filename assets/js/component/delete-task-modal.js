import getTask from "./get-task.js";

const deleteTaskModal = async () => {
    const deleteBtn = document.querySelectorAll('.fa-trash');
    const modal = document.getElementById("myModal");
    const modalContent = document.querySelector('.modal-content');
    const close = document.querySelector(".fa-times");
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const task = document.querySelectorAll('.task');


    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', () => {

            //Création des élements
            let taskTitleLabel = document.createElement('label');
            let deleteRequest = document.createElement('div');
            let taskdeleteYes = document.createElement('input');
            let taskdeleteNo = document.createElement('input');

            //Ajout des paramètres
            taskTitleLabel.htmlFor = 'task-title';
            taskTitleLabel.textContent = `Do you want to remove the stain "${todos[i].nom}" ?`;

            deleteRequest.classList.add('delete-request');

            taskdeleteYes.type = 'submit';
            taskdeleteYes.name = 'delete-yes';
            taskdeleteYes.id = 'delete-yes';
            taskdeleteYes.value = 'Yes';

            taskdeleteNo.type = 'submit';
            taskdeleteNo.name = 'delete-no';
            taskdeleteNo.id = 'delete-no';
            taskdeleteNo.value = 'No';

            //Ajout des élement dans l'html
            modalContent.appendChild(taskTitleLabel);
            modalContent.appendChild(deleteRequest);
            deleteRequest.appendChild(taskdeleteYes);
            deleteRequest.appendChild(taskdeleteNo);

            //affichage de la fenêtre
            modal.style.display = "block";

            //suppresion de la tache
            taskdeleteYes.addEventListener('click', () => {


                let index = -1;
                for (let j = 0; j < todos.length; j++) {
                    if (todos[j].token === task[i].id) {
                        index = j;
                        break;
                    }    
                }
                if (index !== -1) { 
                    todos.splice(index, 1);
                    localStorage.setItem('todos', JSON.stringify(todos));
                    window.location.href = "";
                } else {
                    console.log("Une erreur c'est produite");
                }
            })

            //reinitialisation
            function resetModal() {
                modal.style.display = "none";
                taskTitleLabel.remove();
                deleteRequest.remove();
            }

            taskdeleteNo.addEventListener('click', () => {
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
        })
        
    }
}

export default deleteTaskModal;
import createModal from "./component/modal.js";
import addTask from "./component/add-task.js";
import getTask from "./component/get-task.js";
let toggleModal = 0;
const addTaskBtn = document.querySelector('.add-task');
const taskSubmit = document.getElementById('submit-task');
const modal = document.getElementById("myModal");

addTaskBtn.addEventListener('click', () => {
    modal.style.display = "block";
    createModal('submit-task', 'Add-task', 'none');
})





addTaskBtn.addEventListener('click', () => {
    toggleModal = 1;
})
if (taskSubmit) {
    taskSubmit.addEventListener('click', () => {
        toggleModal = 0;
    })
}
if (toggleModal === 1) {
    addTask();
}

getTask();
const updateTask = document.querySelectorAll('.fa-edit');
for (let i = 0; i < updateTask.length; i++) {
    updateTask[i].addEventListener('click', () => {
        console.log('hello');
        modal.style.display = "block";
        createModal('update-task', 'Update-task', i);
    })
}

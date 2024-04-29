const modal = () => {

const modal = document.getElementById("myModal");
const addTask = document.querySelector(".add-task");
const close = document.querySelector(".fa-times");

addTask.addEventListener('click', () => {
    modal.style.display = "block";
})

close.addEventListener('click', () => {
    modal.style.display = "none";
})


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
      }
})

}
export default modal;
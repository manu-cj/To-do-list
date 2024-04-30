function taskChecked() {
    const taskCheck = document.querySelectorAll('.is-done');
    const task = document.querySelectorAll('.task');
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    for (let i = 0; i < taskCheck.length; i++) {
        
        taskCheck[i].addEventListener('change', () => {
            
            let index = -1;
            for (let j = 0; j < todos.length; j++) {
                if (todos[j].token === task[i].id) {
                    index = j;
                    break;
                }    
            }
            if (index !== -1) { 
                todos[index].etat = 'done';
                localStorage.setItem('todos', JSON.stringify(todos));
                window.location.href = "";
            } else {
                console.log("Une erreur c'est produite");
            }
        })      
    }
}

export default taskChecked;
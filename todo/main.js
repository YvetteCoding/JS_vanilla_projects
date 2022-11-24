
let todolist = ["call to kitchen master", "make appointment", "do dinner"]

let buttonAdd = document.getElementById('AddBtn');
buttonAdd.addEventListener('click', addTodo());

function addTodo() {
    let textBox = document.getElementById('todo-title');
    let title = textBox.value;
    todolist.push(title);
    render()
}



function render() {
    //reset our list
    document.getElementById("todo-list").innerHTML = '';

    todolist.forEach(function (todoTask) {
        let element = document.createElement('div');
        element.innerText = todoTask;
        let todolist = document.getElementById('todo-list');
        todolist.appendChild(element);
    })
}




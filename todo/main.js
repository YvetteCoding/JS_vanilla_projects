let buttonAdd = document.getElementById('AddBtn');
//listen for click
buttonAdd.addEventListener('click', addTodo);


//MODEL section

// if local storage has a todolist array than use it
// otherwise use the default array

let todolist;
// first we retrive localstorage
const savedTodos = JSON.parse(localStorage.getItem('todolist'));
// check if it's an array

if (Array.isArray(savedTodos)) {
    todolist = savedTodos;
} else {
    todolist = [{
        title: "call to kitchen master",
        dueDate: '2022-12-12',
        id: 1
    }, {
        title: "make appointment",
        dueDate: '2022-12-12',
        id: 2
    }, {
        title: "buy flowers",
        dueDate: '2022-12-12',
        id: 3
    }
    ]  
 }

// create method

function createTodo(title, dueDate) {
    let id = new Date().getTime();
    todolist.push(
        {
            title: title,
            dueDate: dueDate,
            id: id

        });
        saveTodo()
}

//delete method 
function removeTodo(idToDelete) {
    todolist = todolist.filter(function (todo) {
        // if the id of this todo matches idToDelete, return false
        // for everything else, return true

        if (todo.id == idToDelete) {
            return false;
        } else {
            return true;
        }
    });
    saveTodo()
}

// save to todo

function saveTodo() {
    localStorage.setItem("todolist", JSON.stringify(todolist)); 
}

//CONTROLLER section

function addTodo() {

    let textBox = document.getElementById('todo-title');
    let title = textBox.value;
    let datePicker = document.getElementById("date-picker");
    let dueDate = datePicker.value
    createTodo(title, dueDate);
    render()
}


function deleteTodo(event) {
    const deleteBtn = event.target;
    idToDelete = deleteBtn.id;
    removeTodo(idToDelete);
    render();
}

//VIEW

function render() {
    //reset our list
    document.getElementById("todo-list").innerHTML = '';

    todolist.forEach(function (todo) {
        let element = document.createElement('div');
        element.innerText = todo.title + " " + todo.dueDate;
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "delete";
        element.appendChild(deleteBtn);
        deleteBtn.style = "margin-left: 1rem;";
        deleteBtn.onclick = deleteTodo
        deleteBtn.id = todo.id;

        let todolist = document.getElementById('todo-list');
        todolist.appendChild(element);
    })
}
render()






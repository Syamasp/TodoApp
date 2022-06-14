let TodoInput = document.querySelector(".to-in");
let TodoButton = document.querySelector(".to-btn");

let TodoList = document.querySelector(".todo-list");

//adding event listener

TodoButton.addEventListener('click', addto);

//adding  other event listener

TodoList.addEventListener('click', Del);

//add functions

function addto(e) {
    //create todo list div

    const todoDiv = document.createElement('div')

    e.preventDefault()

    todoDiv.classList.add('todo')

    //create todo list 

    const toLi = document.createElement('li')
    toLi.classList.add('todoItems')

    toLi.innerText = TodoInput.value

    todoDiv.appendChild(toLi)

    //trash button

    const trashbtn = document.createElement('button')
    trashbtn.classList.add('trash')



    trashbtn.innerText = '- del'
    todoDiv.appendChild(trashbtn)

    TodoList.appendChild(todoDiv)

    // clear input bar


    TodoInput.value = "";
}

function Del(e) {
    const item = e.target

    if (item.classList[0] === 'trash') {

        const todo = item.parentElement;

        todo.remove();
    }
}
let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
let $allTasks;
let $idNumber=0;
let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}
const prepareDOMElements = () => {

     $todoInput = document.querySelector('.todo-input');
     $alertInfo = document.querySelector('.alert-info');
     $addBtn = document.querySelector('.add-btn');
     $ulList = document.querySelector('.todo-list ul');
     //$newTask = document.querySelector('.');
     $allTasks = document.querySelectorAll('li');
     //$idNumber = document.querySelector('.');
     $popup = document.querySelector('.popup');
     $popupInfo = document.querySelector('.popup-info');
     //$editedTodo = document.querySelector('.');
     $popupInput = document.querySelector('.popup-input');
     $addPopupBtn = document.querySelector('.accept');
     $closeTodoBtn = document.querySelector('.cancel');
}
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $todoInput.addEventListener('keup',enterCheck);
    $ulList.addEventListener('click',checkClick);
    $addPopupBtn.addEventListener('click',changeTodo);
    $closeTodoBtn.addEventListener('click',closePopup)
}
const addNewTask = () => {
    if($todoInput.value !==''){
$idNumber++;
$newTask = document.createElement('li');
$newTask.innerText = $todoInput.value;
$newTask.setAttribute('id',`todo-${$idNumber}`);
$ulList.appendChild($newTask);
$todoInput.value ='';
$alertInfo.innerText ='';
createToolsArea();
    }else{
        $alertInfo.innerText = 'Wpisz treść zadania!';
    }
}


const enterCheck = event => {
    if(event.keyCode ==13) {
        addNewTask();
    }
}
const createToolsArea = () => {

const toolsPanel = document.createElement('div');
toolsPanel.classList.add('tools');
$newTask.appendChild(toolsPanel);

const completeBtn = document.createElement('button');
completeBtn.classList.add('complete');
completeBtn.innerHTML= '<i class="fas fa-check">';

const editBtn = document.createElement('button');
editBtn.classList.add('edit');
editBtn.innerHTML= '<i class="fas fa-pen">';

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete');
deleteBtn.innerHTML= '<i class="fas fa-times">';

toolsPanel.appendChild(completeBtn);
toolsPanel.appendChild(editBtn);
toolsPanel.appendChild(deleteBtn);

}

const checkClick = e => {
if(e.target.classList.value !== ''){
   if(e.target.closest('button').classList.contains('complete')){
    e.target.closest('li').classList.toggle('completed');
    e.target.closest('button').classList.toggle('completed');
    
   }else if(e.target.closest('button').classList.contains('edit')){
editTask(e);
   }else if(e.target.closest('button').classList.contains('delete')){
deleteTask(e);
   }
}}
const changeTodo = () => {
    if($popupInput.value !== '')
    { 
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.textContent = '';
    }else{
        $popupInfo.innerText = 'Musisz podać treść zadania!';
    }
}
const editTask = e => {
    const oldTodo = e.target.closest('li').id;
    console.log(oldTodo);
    $editedTodo = document.getElementById(oldTodo);
    $popup.style.display = 'flex';
    $popupInput.value = $editedTodo.firstChild.textContent;
}
const deleteTask = e => {
const deleteTodo = e.target.closest('li');
console.log(deleteTodo);
deleteTodo.remove();
if($allTasks.length === 0){
    $alertInfo.innerText= 'Brak zadań na liście.';
}
}
const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.textContent ='';
}
document.addEventListener('DOMContentLoaded',main)
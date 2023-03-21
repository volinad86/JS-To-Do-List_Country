const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn-main');
const toDoContainer = document.querySelector('.toDoContainer');

// ***********************************************

btn.addEventListener('click', function(){
const item = document.createElement('li');
item.innerText = inputField.value;

toDoContainer.appendChild(item);
item.classList.add ('toDoAdded');
inputField.value = ' ';

item.addEventListener('click', function(){
    toDoContainer.removeChild(item);
})
})
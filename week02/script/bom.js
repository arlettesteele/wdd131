let input = document.querySelector('input');

let button = document.querySelector('button');

let list = document.querySelector('ul');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append(deleteButton);

list.append(li);

button.addEventListener('click', function(){
    
})
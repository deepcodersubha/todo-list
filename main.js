let addToDo = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
// let nightMode = document.getElementById('nightMode');
// let dayMode = document.getElementById('dayMode');
let heading = document.getElementById('heading');
let clearAll = document.getElementById('clearAll');


addToDo.addEventListener('click', function() {
   
  // var box = document.createElement('INPUT');
  // box.setAttribute("type", "checkbox");
  // toDoContainer.appendChild(box);
    
  var paragraph = document.createElement('p');
  paragraph.innerHTML = "# " + inputField.value;
  toDoContainer.appendChild(paragraph);

  
    // var line = document.createElement('hr');
    // toDoContainer.appendChild(line);
    // line.classList.add('hr');

    paragraph.classList.add('paragraph-styling');
    inputField.value = "";


    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
      toDoContainer.removeChild(paragraph);
     
    })
});



clearAll.addEventListener('click', function() {
  toDoContainer.innerText = "";
});




var List = document.querySelector("#List");
var addToDo = document.querySelector("#addToDo");
var inputfield = document.querySelector("#inputfield");

addToDo.addEventListener('click' , function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value;
    List.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick' , function(){
        List.removeChild (paragraph)

    })
})
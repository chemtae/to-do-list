const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput=toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";



let toDos=[];

function deleteToDo(event) {
    const btn=event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function editToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    li.classList.toggle("TODOS_LS", false);
    li.classList.toggle("TODOS_LS", true);
    li.style.textDecoration="line-through";
    const completeToDo=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    });
    toDos=completeToDo;
    saveToDos();
}



function paintToDo(text){
const li = document.createElement("li");
li.className="makeAList";
const delBtn = document.createElement("button");
delBtn.className = "makeButton";
const span = document.createElement("span");
const newId = toDos.length+1;
const lucky = document.createElement("button");
lucky.innerText = "🔥";
lucky.addEventListener("click",editToDo);

lucky.className = "makeButton2";
delBtn.innerText = "❌";
delBtn.addEventListener("click",deleteToDo);
span.innerText = text;
li.appendChild(lucky);
li.appendChild(span);
li.appendChild(delBtn);
li.id=newId;
toDoList.appendChild(li);
const toDoObj={
    text: text,
    id: newId};
    toDos.push(toDoObj);
    saveToDos();
}



function handleSubmit(event) {
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    toDoInput.addEventListener("click",hover);
}



function loadToDos (){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos!==null){
        const parsedToDos=JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){paintToDo(toDo.text);});
    } 
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();

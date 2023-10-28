const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const taskList=document.getElementById('taskList')
function addtask(){
    if(inputBox.value === ""){
        alert('You must write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

document.getElementById("input-box").addEventListener("keydown", function(event){
    if (event.keyCode === 13) {
        addtask();
    }
});


// Event listener for the input box to detect "Enter" key press
// inputBox.addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) {
//         addtask();
//     }
// });

listContainer.addEventListener('click',function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');

}
showTask();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask()
{
    if(inputBox.value === '')
    {
        alert('You must write somethinf');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keydown", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        addtask();
    }
});

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
const inputBox = document.getElementById('input-box'); // REMOVE QUOTES
const listContainer = document.getElementById('list-container'); // REMOVE QUOTES

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); // Call saveData here to persist the new task
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Call saveData here after checking/unchecking
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Call saveData here after deleting
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() { // Renamed from displayTask as per your code
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call showTask when the script loads to display any saved tasks
showTask();
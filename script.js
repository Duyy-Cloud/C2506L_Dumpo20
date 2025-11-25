document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let text = document.getElementById("taskInput").value;

    if (text.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <div>
            <button class="done-btn">Done</button>
            <button class="remove-btn">Remove</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";

    
    li.querySelector(".done-btn").onclick = () => {
        li.querySelector(".task-text").classList.toggle("done");
    };

    
    li.querySelector(".remove-btn").onclick = () => {
        li.remove();
    };
}

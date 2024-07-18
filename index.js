const noteContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    if (localStorage.getItem("notes")) {
        noteContainer.innerHTML = localStorage.getItem("notes");
    }
    // Make sure contenteditable is set after loading notes
    const loadedNotes = document.querySelectorAll(".input-box");
    loadedNotes.forEach(note => {
        note.setAttribute("contenteditable", "true");
    });
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    noteContainer.appendChild(inputBox);
    updateStorage();
});

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

noteContainer.addEventListener("keyup", function (e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});
document.addEventListener("keydown", event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
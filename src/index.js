document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    buildToDoList(event.target.newTaskDescription.value);
    form.reset();
  });
});

function buildToDoList(toDo) {
  let li = document.createElement("li");
  let edt = document.createElement("button");
  edt.addEventListener("click", (event) => {
    event.target.parentNode.edit();
  });
  edt.textContent = "Edit";
  let dlt = document.createElement("button");
  dlt.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
  dlt.textContent = "x";
  li.textContent = `${toDo}   `
  li.appendChild(edt);
  li.appendChild(dlt);
  document.querySelector("ol").appendChild(li);
};

function editToDoList(toDo) {
  document.getElementById("li").innerHTML = `${toDo}  `
}
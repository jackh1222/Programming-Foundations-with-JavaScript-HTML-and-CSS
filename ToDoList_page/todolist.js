function addTask() {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML =
      '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
      '<input type="button" class="important" onclick="important(this.parentNode)" value="!" /> ' +
      newTask;

    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);

    input.value = "";

    input.placeholder = "enter next task ...";
  }
}

// change styling used for given item
function markDone(item) {
  item.className = "finished";
}

function remove(item) {
  // Check if the item has the 'finished' class
  if (item.className == "finished") {
    item.remove();
  } else {
    alert("You need to check off the item before removing it.");
  }
}

function doAbout() {
  var aboutDiv = document.getElementById("divabout");
  aboutDiv.innerHTML =
    '<span class="yellowbackground">Author is Juzheng Huang </span>';
}

function clearAbout() {
  var aboutDiv = document.getElementById("divabout");
  aboutDiv.innerHTML = "";
}

function important(item) {
  item.className = "important";
  var taskList = document.getElementById("tasks");
  taskList.insertBefore(item, taskList.firstChild);
}

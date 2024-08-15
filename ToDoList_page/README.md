# To-Do List Project

This project is a simple To-Do List application built using HTML, CSS, and JavaScript. The application allows users to add, mark as done, remove, and prioritize tasks. It also includes features to display information about the author and to clear that information.

## Features

- **Add Task:** Users can add a new task to the list by typing in the input field and clicking the "Add" button.
- **Mark Task as Done:** Each task has a green checkmark button (`✔`). When clicked, the task is marked as done, turning its background gray and applying a line-through style to the text.
- **Remove Task:** Each task has a red X button (`✘`). Users can remove a task only after it has been marked as done. If a user tries to remove a task that hasn't been marked as done, an alert is shown.
- **Mark Task as Important:** Each task has an important button (`!`). When clicked, the task is highlighted with a light blue background and moved to the top of the task list, indicating that it has priority.
- **About:** Clicking the "About" button displays the author's name in a highlighted yellow background.
- **Clear About:** Clicking the "Clear" button removes the author's information from the display.

## Project Structure

- **HTML:**
  - The structure of the application, including the input field, buttons, task list, and author information section, is defined in HTML.
- **CSS:**
  - Styling is applied to various elements, including the task list items, buttons, and the author information section.
  - Classes such as `.done`, `.remove`, `.important`, `.yellowbackground`, and `.finished` control the appearance of the elements when tasks are marked as done, removed, or prioritized.
- **JavaScript:**
  - Contains functions to handle adding tasks (`addTask()`), marking tasks as done (`markDone()`), removing tasks (`remove()`), marking tasks as important (`important()`), displaying author information (`doAbout()`), and clearing author information (`clearAbout()`).

## How to Use

1. **Add a Task:** Type a task into the input field and click the "Add" button. The task will appear in the list below.
2. **Mark a Task as Done:** Click the green checkmark button next to a task. The task's appearance will change (the background becomes gray and a line-through the words) to indicate it has been completed.
3. **Remove a Task:** After marking a task as done, click the red X button to remove it from the list.
4. **Mark a Task as Important:** Click the exclamation mark button next to a task to prioritize it. The task will move to the top of the list and be highlighted in light blue.
5. **View Author Information:** Click the "About" button to display the author's name.
6. **Clear Author Information:** Click the "Clear" button to remove the author's name from the display.

Visual display of the to-do list application

**Add task**

<img width="663" alt="image" src="https://github.com/user-attachments/assets/90ddb25f-7ea6-4e70-9be9-59fd6b50b00d">

<img width="664" alt="image" src="https://github.com/user-attachments/assets/01c7b653-138d-4fa2-8555-e575ef046ced">

Alert message if not checked before delete

<img width="1433" alt="image" src="https://github.com/user-attachments/assets/139fc356-2fcd-41df-a292-d7783c3abf17">

**Delete**

<img width="666" alt="image" src="https://github.com/user-attachments/assets/aa90acfa-abcb-49f8-a3b9-5d2f938b22e9">

**Prioritize task**

<img width="663" alt="image" src="https://github.com/user-attachments/assets/df468fdd-eee2-43b9-b1ea-f63c28af719d">

**Get author info and clear info**

<img width="667" alt="image" src="https://github.com/user-attachments/assets/dfbff643-4a42-4430-ae06-794d257919c1">

<img width="664" alt="image" src="https://github.com/user-attachments/assets/8d3abf27-854f-49c9-81bb-df492ad1b6a5">


Link to the application:https://codepen.io/Jackh1222/pen/vYqWjjG







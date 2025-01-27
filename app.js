// document.addEventListener("DOMContentLoaded", function () {
//     const taskInput = document.getElementById("task-input");
//     const addButton = document.getElementById("add-button");
//     const pendingList = document.getElementById("pending-list");
//     const completedList = document.getElementById("completed-list");

//     // Track original positions
//     const taskMap = new Map();

//     addButton.addEventListener("click", function () {
//         const taskText = taskInput.value.trim();
//         if (taskText !== "") {
//             // Create a new task item
//             const taskItem = document.createElement("li");
//             taskItem.innerHTML = `
//                 <span>${taskText}</span>
//                 <button class="important-button">Important</button>
//                 <button class="complete-button">Complete</button>
//                 <button class="delete-button">Delete</button>
//             `;

//             // Add event listeners for buttons
//             const importantButton = taskItem.querySelector(".important-button");
//             const completeButton = taskItem.querySelector(".complete-button");
//             const deleteButton = taskItem.querySelector(".delete-button");

//             // Store the task's original index in a Map
//             taskMap.set(taskItem, Array.from(pendingList.children).length);

//             // Toggle "Important" status
//             importantButton.addEventListener("click", function () {
//                 if (taskItem.classList.contains("important-task")) {
//                     // Unmark important: restore to original position
//                     taskItem.classList.remove("important-task");
//                     importantButton.textContent = "Important";

//                     const originalIndex = taskMap.get(taskItem);
//                     const allTasks = Array.from(pendingList.children);

//                     if (originalIndex < allTasks.length) {
//                         pendingList.insertBefore(taskItem, allTasks[originalIndex]);
//                     } else {
//                         pendingList.appendChild(taskItem);
//                     }
//                 } else {
//                     // Mark important: move to top
//                     taskItem.classList.add("important-task");
//                     importantButton.textContent = "Unmark Important";
//                     pendingList.insertBefore(taskItem, pendingList.firstChild);
//                 }
//             });

//             // Mark as Completed
//             completeButton.addEventListener("click", function () {
//                 if (taskItem.classList.contains("completed-task")) {
//                     pendingList.appendChild(taskItem);
//                 } else {
//                     completedList.appendChild(taskItem);
//                 }
//                 taskItem.classList.toggle("completed-task");
//                 taskItem.classList.remove("important-task"); // Remove importance
//                 importantButton.textContent = "Important"; // Reset button text
//             });

//             // Delete Task
//             deleteButton.addEventListener("click", function () {
//                 if (confirm("Are you sure you want to delete this task?")) {
//                     taskMap.delete(taskItem); // Remove from Map
//                     taskItem.remove();
//                 }
//             });

//             // Add the new task to the pending list
//             pendingList.appendChild(taskItem);

//             // Clear the input field
//             taskInput.value = "";
//         }
//     });
// });




document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const pendingList = document.getElementById("pending-list");
    const completedList = document.getElementById("completed-list");

    // Track original positions
    const taskMap = new Map();

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            // Create a new task item
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="important-button">Important</button>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            `;

            // Add event listeners for buttons
            const importantButton = taskItem.querySelector(".important-button");
            const completeButton = taskItem.querySelector(".complete-button");
            const deleteButton = taskItem.querySelector(".delete-button");

            // Store the task's original index in a Map
            taskMap.set(taskItem, Array.from(pendingList.children).length);

            // Toggle "Important" status
            importantButton.addEventListener("click", function () {
                if (taskItem.classList.contains("important-task")) {
                    // Unmark important: restore to original position
                    taskItem.classList.remove("important-task");
                    importantButton.textContent = "Important";

                    const originalIndex = taskMap.get(taskItem);
                    const allTasks = Array.from(pendingList.children);

                    if (originalIndex < allTasks.length) {
                        pendingList.insertBefore(taskItem, allTasks[originalIndex]);
                    } else {
                        pendingList.appendChild(taskItem);
                    }
                } else {
                    // Mark important: move to top
                    taskItem.classList.add("important-task");
                    importantButton.textContent = "Unmark Important";
                    pendingList.insertBefore(taskItem, pendingList.firstChild);
                }
            });

            // Mark as Completed
            completeButton.addEventListener("click", function () {
                if (taskItem.classList.contains("completed-task")) {
                    pendingList.appendChild(taskItem);
                } else {
                    completedList.appendChild(taskItem);
                }
                taskItem.classList.toggle("completed-task");
                taskItem.classList.remove("important-task"); // Remove importance
                importantButton.textContent = "Important"; // Reset button text
            });

            // Delete Task
            deleteButton.addEventListener("click", function () {
                if (confirm("Are you sure you want to delete this task?")) {
                    taskMap.delete(taskItem); // Remove from Map
                    taskItem.remove();
                }
            });

            // Add the new task to the pending list
            pendingList.appendChild(taskItem);

            // Clear the input field
            taskInput.value = "";
        }
    });
});


    $(document).ready(function () {
        let tasks = [];

        // Function to add a task
        function addTask(taskText) {
            tasks.push(taskText);
            updateTaskList();
        }

        // Function to update the task list
        function updateTaskList() {
            const taskList = $("#addtasklist tbody");
            taskList.empty();

            tasks.forEach((task, index) => {
                const row = $("<tr>");
                row.append(`<td>${task}</td>`);
                row.append(
                    `<td><button class="btn btn-primary btn-sm edit-task" data-index="${index}">Edit</button> <button class="btn btn-danger btn-sm delete-task" data-index="${index}">Delete</button></td>`
                );
                taskList.append(row);
            });

            // Add event listeners for edit and delete buttons
            $(".edit-task").click(function () {
                const index = $(this).data("index");
                $("#addtaskinput").val(tasks[index]);
                $("#saveindex").val(index);
                $("#addtaskbtn").hide();
                $("#savetaskbtn").show();
            });

            $(".delete-task").click(function () {
                const index = $(this).data("index");
                tasks.splice(index, 1);
                updateTaskList();
            });

            // Clear input fields
            $("#addtaskinput").val("");
            $("#saveindex").val("");

            // Show the "Add task" button and hide the "Save task" button
            $("#addtaskbtn").show();
            $("#savetaskbtn").hide();
        }

        // Event listener for the "Add task" button
        $("#addtaskbtn").click(function () {
            const taskText = $("#addtaskinput").val().trim();
            if (taskText !== "") {
                addTask(taskText);
            }
        });

        // Event listener for the "Save task" button
        $("#savetaskbtn").click(function () {
            const index = $("#saveindex").val();
            const taskText = $("#addtaskinput").val().trim();
            if (index !== "" && taskText !== "") {
                tasks[index] = taskText;
                updateTaskList();
            }
        });

        // Event listener for the "Delete All" button
        $("#deleteallbtn").click(function () {
            tasks = [];
            updateTaskList();
        });
    });

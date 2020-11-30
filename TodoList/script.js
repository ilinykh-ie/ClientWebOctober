function ready() {
    var inputNote = document.getElementById("input_text");
    var button = document.getElementById("add_note_button");
    var list = document.getElementById("todo_list");
    var addAlert = document.getElementById("add_alert");

    button.addEventListener("click", function () {
        var text = inputNote.value;

        if (text.trim() === "") {
            addAlert.textContent = "Нельзя добавлять пустую заметку";
            return;
        }

        addAlert.textContent = "";

        var li = document.createElement("li");
        li.className = "list_item";

        function createNote() {
            li.textContent = text;

            var editAlert = document.createElement("output");
            editAlert.className = "alert";

            var editButton = document.createElement("Button");
            editButton.textContent = "Редактировать";
            editButton.type = "Button";
            editButton.className = "li_buttons";
            editButton.addEventListener("click", function () {
                li.innerHTML = "<input/>";
                li.firstChild.value = text;

                var saveButton = document.createElement("Button");
                saveButton.textContent = "Сохранить";
                saveButton.type = "Button";
                saveButton.className = "li_buttons";
                saveButton.addEventListener("click", function () {
                    if (li.firstChild.value.trim() === "") {
                        editAlert.textContent = "Нельзя сохранить пустую заметку";
                        return;
                    }

                    editAlert.textContent = "";

                    text = li.firstChild.value;
                    createNote();
                });
                li.appendChild(saveButton);

                var cancelButton = document.createElement("Button");
                cancelButton.textContent = "Отмена";
                cancelButton.type = "Button";
                cancelButton.className = "li_buttons";
                cancelButton.addEventListener("click", function () {
                    createNote();
                });
                li.appendChild(cancelButton);

                li.appendChild(document.createElement("br"));
                li.appendChild(editAlert);
            });

            li.appendChild(editButton);

            var deleteButton = document.createElement("Button");
            deleteButton.textContent = "Удалить";
            deleteButton.type = "Button";
            deleteButton.className = "li_buttons";
            deleteButton.addEventListener("click", function () {
                li.parentNode.removeChild(li);
            });

            li.appendChild(deleteButton);
        }

        createNote();

        list.appendChild(li);
        inputNote.value = "";
    });
}

document.addEventListener("DOMContentLoaded", ready);
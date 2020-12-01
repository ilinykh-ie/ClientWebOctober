$(document).ready(function () {
    var inputNote = $("#input_text");
    var button = $("#add_note_button");
    var list = $("#todo_list");
    var addAlert = $("#add_alert");

    button.on("click", function () {
        var text = inputNote.val();

        if (text.trim() === "") {
            addAlert.val("Нельзя добавлять пустую заметку");
            return;
        }

        addAlert.val("");

        var li = $("<li class='list_item'/>");

        function createNote() {
            li.text(text);

            var editAlert = $("<output class='alert' />");

            var editButton = $("<button class='li_buttons' type='button'>Редактировать</button>");
            editButton.click(function () {
                li.html("<input type='text'/>");
                li.find("input").val(text);

                var saveButton = $("<button class='li_buttons' type='button'>Сохранить</button>");
                saveButton.click(function () {
                    if (li.find("input").val().trim() === "") {
                        editAlert.val("Нельзя сохранить пустую заметку");
                        return;
                    }

                    editAlert.val("");

                    text = li.find("input").val();
                    createNote();
                });
                li.append(saveButton);

                var cancelButton = $("<button class='li_buttons' type='button'>Отмена</button>");
                cancelButton.click(function () {
                    createNote();
                });
                li.append(cancelButton);

                li.append($("<br/>"));
                li.append(editAlert);
            });

            li.append(editButton);

            var deleteButton = $("<button class='li_buttons' type='button'>Удалить</button>");
            deleteButton.click(function () {
                li.remove();
            });

            li.append(deleteButton);
        }

        createNote();

        list.append(li);
        inputNote.val("");
    })
});
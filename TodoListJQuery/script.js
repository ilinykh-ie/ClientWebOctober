$(document).ready(function () {
    var inputNote = $("#input_text");
    var button = $("#add_note_button");
    var list = $("#todo_list");
    var add_alert = $("#add_alert");

    button.on("click", function () {
        var text = inputNote.val();

        if (text.trim() === "") {
            add_alert.val("Нельзя добавлять пустую заметку");
            return;
        }

        add_alert.val("");

        var li = $("<li class='list_item'/>");

        function createNote() {
            li.text(text);

            var edit_alert = $("<output class='alert' />");

            var edit_button = $("<button class='li_buttons' type='Button'>Редактировать</button>");
            edit_button.click(function () {
                li.html("<input type='text'/>");
                li.find("input").val(text);

                var save_button = $("<button class='li_buttons' type='Button'>Сохранить</button>");
                save_button.click(function () {
                    if (li.find("input").val().trim() === "") {
                        edit_alert.val("Нельзя сохранить пустую заментку");
                        return;
                    }

                    edit_alert.val("");

                    text = li.find("input").val()
                    createNote();
                });
                li.append(save_button);

                var cancel_button = $("<button class='li_buttons' type='Button'>Отмена</button>");
                cancel_button.click(function () {
                    createNote();
                })
                li.append(cancel_button);

                li.append($("<br/>"));
                li.append(edit_alert);
            })

            li.append(edit_button);

            var delete_button = $("<button class='li_buttons' type='Button'>Удалить</button>");
            delete_button.click(function () {
                li.remove();
            })

            li.append(delete_button);
        }

        createNote();

        list.append(li);
        inputNote.val("");
    })
});
(function () {
    var inputNote = document.getElementById("input_text");
    var button = document.getElementById("add_note_button");
    var list = document.getElementById("todo_list");
    var add_alert = document.getElementById("add_alert");

    button.addEventListener("click", function () {
        var text = inputNote.value;

        if (text.trim() === "") {
            add_alert.textContent = "Нельзя добавлять пустую заметку"
            return;
        }

        add_alert.textContent = "";

        var li = document.createElement("li");
        li.className = "list_item";

        function createNote() {
            li.textContent = text;

            var edit_alert = document.createElement("output");
            edit_alert.className = "alert";

            var edit_button = document.createElement("Button");
            edit_button.textContent = "Редактировать";
            edit_button.type = "Button";
            edit_button.className = "li_buttons";
            edit_button.addEventListener("click", function () {
                li.innerHTML = "<input/>";
                li.firstChild.value = text;

                var save_button = document.createElement("Button");
                save_button.textContent = "Сохранить";
                save_button.type = "Button";
                save_button.className = "li_buttons";
                save_button.addEventListener("click", function () {
                    if (li.firstChild.value.trim() === "") {
                        edit_alert.textContent = "Нельзя сохранить пустую заментку";
                        return;
                    }

                    edit_alert.textContent = "";

                    text = li.firstChild.value;
                    createNote();
                });
                li.appendChild(save_button);

                var cancel_button = document.createElement("Button");
                cancel_button.textContent = "Отмена"
                cancel_button.type = "Button";
                cancel_button.className = "li_buttons";
                cancel_button.addEventListener("click", function () {
                    createNote();
                })
                li.appendChild(cancel_button);

                li.appendChild(document.createElement("br"));
                li.appendChild(edit_alert);
            })

            li.appendChild(edit_button);

            var delete_button = document.createElement("Button");
            delete_button.textContent = "Удалить";
            delete_button.type = "Button";
            delete_button.className = "li_buttons";
            delete_button.addEventListener("click", function () {
                li.parentNode.removeChild(li);
            })

            li.appendChild(delete_button);
        }

        createNote();

        list.appendChild(li);
        inputNote.value = "";
    })
})();
// noinspection JSUnusedGlobalSymbols
new Vue({
    el: "#app",

    data: {
        items: [],
        todoText: "",
        newId: 1,
        createAlert: ""
    },

    methods: {
        addTodoItem: function () {
            var text = this.todoText;

            if (text.trim().length === 0) {
                this.createAlert = "Нельзя добавить пустую заметку";
                return;
            }

            this.createAlert = "";

            this.items.push({
                id: this.newId,
                text: text,
                isEditing: false,
                editText: text,
                editAlert: ""
            });

            this.todoText = "";
            this.newId++;
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (todoItem) {
                return todoItem !== item;
            });
        },

        editItem: function (item) {
            item.isEditing = true;
        },

        save: function (item) {
            if (item.editText.trim().length === 0) {
                item.editAlert = "Нельзя сохранить пустую заметку";
                return;
            }

            item.editAlert = "";
            item.isEditing = false;
            item.text = item.editText;
        },

        cancel: function (item) {
            item.isEditing = false;
            item.editText = item.text;
            item.editAlert = "";
        }
    }
});
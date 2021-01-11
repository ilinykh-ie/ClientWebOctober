Vue.component("contact", {
    props: {
        item: {
            type: Object,
            required: true
        },

        index: {
            type: Number,
            required: true
        }
    },

    data: function () {
        return {};
    },

    methods: {
        deleteContact: function () {
            this.$emit("delete-contact", this.item);
        }
    },

    template: "#contact-template"
});

Vue.component("phone-book", {
    data: function () {
        return {
            items: [],  //{checked, id, name, surname, phone}
            checked: false,
            name: "",
            surname: "",
            phone: "",
            newId: 1,
            nameAlert: "",
            surnameAlert: "",
            phoneAlert: "",
            isMainChecked: false,
            isAddClicked: false
        };
    },

    computed: {
        isNameValid() {
            return this.isAddClicked && this.name.trim() !== "";
        },

        isNameInvalid() {
            return this.isAddClicked && this.name.trim() === ""
        },

        isSurnameValid() {
            return this.isAddClicked && this.surname.trim() !== "";
        },

        isSurnameInvalid() {
            return this.isAddClicked && this.surname.trim() === "";
        },

        isPhoneValid() {
            return this.isAddClicked && this.phone.length === 16;
        },

        isPhoneInvalid() {
            return this.isAddClicked && this.phone.length !== 16;
        }
    },

    methods: {
        addContact: function () {
            this.isAddClicked = true;

            if (this.name.trim() === "") {
                this.nameAlert = "Имя обязательно для заполнения";
            } else {
                this.nameAlert = "";
            }

            if (this.surname.trim() === "") {
                this.surnameAlert = "Фамилия обязательна для заполнения";
            } else {
                this.surnameAlert = "";
            }

            if (this.phone.trim() === "") {
                this.phoneAlert = "Телефон обязателен для заполнения";
            } else if (this.phone.length !== 16) {
                this.phoneAlert = "Введите телефон в формате +7 (xxx)-xxx-xx-xx";
            } else {
                this.phoneAlert = "";
            }

            if (this.isNameValid && this.isSurnameValid && this.isPhoneValid) {
                this.items.push({
                    checked: false,
                    id: this.newId,
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone
                });

                this.name = "";
                this.surname = "";
                this.phone = "";

                this.isAddClicked = false;

                this.newId++;
            }
        },

        deleteContact: function (item) {
            if (confirm("Удалить контакт?")) {
                this.items = this.items.filter(function (contact) {
                    return contact !== item;
                });
            }
        },

        deleteSelectedContacts() {
            var isAnyChecked = this.items.some(function (contact) {
                return contact.checked;
            });

            if (isAnyChecked) {
                if (confirm("Удалить выделенные строки?")) {
                    this.items = this.items.filter(function (contact) {
                        return contact.checked === false;
                    });
                }
            }
        },

        checkAll: function () {
            var self = this;

            this.items.forEach(function (item) {
                item.checked = self.isMainChecked;
            });
        }
    },

    template: "#table-template"
});

new Vue({
    el: "#app"
});
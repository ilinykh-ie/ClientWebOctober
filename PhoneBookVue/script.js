Vue.component("contact", {
    props: {
        item: {
            type: Object,
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
            isNameValid: false,
            isSurnameValid: false,
            isPhoneValid: false,
            nameAlert: "",
            surnameAlert: "",
            phoneAlert: "",
            isMainChecked: false
        }
    },

    watch: {
        name() {
            this.isNameValid = this.name.trim() !== "";
        },

        surname() {
            this.isSurnameValid = this.surname.trim() !== "";
        },

        phone() {
            if (this.phone.trim() === "") {
                this.isPhoneValid = false;
            } else this.isPhoneValid = this.phone.length === 16;
        }
    },

    methods: {
        addContact: function () {
            if (this.name.trim() === "") {
                this.nameAlert = "Имя обязательно для заполения";
            } else {
                this.nameAlert = "";
            }

            if (this.surname.trim() === "") {
                this.surnameAlert = "Фамилия обязательна для заполения";
            } else {
                this.surnameAlert = "";
            }

            if (this.phone.trim() === "") {
                this.phoneAlert = "Телефон обязателен для заполения";
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

                this.updateContactsId();
            }
        },

        deleteContact: function (item) {
            if (confirm("Удалить контакт?")) {
                this.items = this.items.filter(function (i) {
                    return i !== item;
                });

                this.updateContactsId();
            }
        },

        deleteSelectedContacts() {
            var isAnyChecked = false;

            this.items.forEach(function (i) {
                if (i.checked) {
                    isAnyChecked = true;
                }
            });

            if (isAnyChecked) {
                if (confirm("Удалить выделенные строки?")) {
                    this.items = this.items.filter(function (i) {
                        return i.checked === false;
                    });

                    this.updateContactsId();
                }
            }
        },

        updateContactsId: function () {
            this.items.forEach(function (currentValue, index) {
                currentValue.id = index + 1;
            })

            this.newId = this.items.length + 1;
        },

        checkAll: function () {
            if (this.isMainChecked) {
                this.items.forEach(function (item) {
                    item.checked = true;
                })
            } else {
                this.items.forEach(function (item) {
                    item.checked = false;
                })
            }
        }
    },

    template: "#table-template"
});


new Vue({
    el: "#app"
});
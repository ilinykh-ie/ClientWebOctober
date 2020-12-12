function get(url, data) {
    return $.get(url, data);
}

function post(url, data) {
    return $.post({
        url: url,
        contentType: "application/json",
        data: JSON.stringify(data)
    });
}

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
            items: [],
            checked: false,
            name: "",
            surname: "",
            phone: "",
            isNameValid: false,
            isSurnameValid: false,
            isPhoneValid: false,
            nameAlert: "",
            surnameAlert: "",
            phoneAlert: "",
            isMainChecked: false,
            term: ""
        }
    },

    created: function () {
        this.loadContacts();
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
        loadContacts: function () {
            var self = this;

            get("/api/getContacts", {term: this.term}).done(function (response) {
                self.items = response;
            });
        },

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
                var request = {
                    contact: {
                        checked: false,
                        name: this.name,
                        surname: this.surname,
                        phone: this.phone
                    }
                }

                var self = this;

                post("/api/createContact", request).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    self.name = "";
                    self.surname = "";
                    self.phone = "";

                    self.loadContacts();
                });
            }
        },

        deleteContact: function (item) {
            var self = this;

            if (confirm("Удалить контакт?")) {
                post("/api/deleteContact", {id: item.id}).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    self.loadContacts();
                });
            }
        },

        deleteSelectedContacts() {
            var selectedIds = [];

            this.items.forEach(function (i) {
                if (i.checked) {
                    selectedIds.push(i.id);
                }
            });

            var self = this;

            if (selectedIds.length !== 0) {
                if (confirm("Удалить выделенные строки?")) {
                    post("/api/deleteSelectedContacts", selectedIds).done(function (response) {
                        if (!response.success) {
                            alert(response.message);
                            return;
                        }

                        self.loadContacts();
                    });
                }
            }
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
        },

    },

    template: "#table-template"
});


new Vue({
    el: "#app"
});
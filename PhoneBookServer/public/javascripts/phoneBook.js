import {get, post} from "./ajax.js";

class PhoneBookService {
    constructor() {
        this.baseUrl = "/api/";
    }

    loadContacts = function (term) {
        return get(this.baseUrl + "getContacts", {term: term});
    }

    addContact = function (contact) {
        return post(this.baseUrl + "createContact", {contact: contact});
    }

    deleteContact = function (id) {
        return post(this.baseUrl + "deleteContact", {id: id});
    }

    deleteSelectedContacts = function (selectedIds) {
        return post(this.baseUrl + "deleteSelectedContacts", {selectedIds: selectedIds});
    }
}

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
            items: [],
            checked: false,
            name: "",
            surname: "",
            phone: "",
            nameAlert: "",
            surnameAlert: "",
            phoneAlert: "",
            isMainChecked: false,
            term: "",
            service: new PhoneBookService(),
            isAddClicked: false
        };
    },

    created: function () {
        this.loadContacts();
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
        loadContacts: function () {
            var self = this;

            this.service.loadContacts(this.term).done(function (response) {
                self.items = response;
            });
        },

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
                var contact = {
                    checked: false,
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone
                }

                var self = this;

                this.service.addContact(contact).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    self.name = "";
                    self.surname = "";
                    self.phone = "";

                    self.isAddClicked = false;

                    self.loadContacts();
                });
            }
        },

        deleteContact: function (item) {
            var self = this;

            if (confirm("Удалить контакт?")) {
                this.service.deleteContact(item.id).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    self.loadContacts();
                });
            }
        },

        deleteSelectedContacts() {
            var selectedIds = this.items
                .filter(function (item) {
                    return item.checked;
                })
                .map(function (item) {
                    return item.id;
                });

            var self = this;

            if (selectedIds.length !== 0) {
                if (confirm("Удалить выделенные строки?")) {
                    this.service.deleteSelectedContacts(selectedIds);

                    self.loadContacts();
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
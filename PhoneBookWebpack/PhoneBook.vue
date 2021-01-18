<template>
  <div class="container">
    <div class="row">
      <table class="table-bordered border-primary col-md-6 col-sm-12">
        <thead class="table-success">
        <tr>
          <th>
            <!--suppress HtmlFormInputWithoutLabel -->
            <input type="checkbox" v-model="isMainChecked" @change="checkAll">
          </th>
          <th scope="col">№</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Номер телефона</th>
          <th scope="col">Удалить контакт</th>
        </tr>
        </thead>
        <tbody>
        <contact class="py-2"
                 v-for="(item, index) in items"
                 :item="item"
                 :index="index"
                 @delete-contact="deleteContact"
                 :key="item.id"></contact>
        </tbody>
      </table>
      <form class="col-md-6 col-sm-12">
        <label>
            <span>
                Введите имя:
            </span>
          <input type="text"
                 v-model="name"
                 class="form-control"
                 title="Введите имя"
                 :class="{'is-valid': isNameValid, 'is-invalid': isNameInvalid}">
        </label>
        <div class="error">{{ nameAlert }}</div>
        <hr>
        <label>
            <span>
            Введите фамилию:
                </span>
          <input type="text"
                 v-model="surname"
                 title="Введите фамилию"
                 class="form-control"
                 :class="{'is-valid': isSurnameValid, 'is-invalid': isSurnameInvalid}">
        </label>
        <div class="error">{{ surnameAlert }}</div>
        <hr>
        <label>
            <span>
            Введите номер телефона:
                </span>
          <input type="text"
                 v-model="phone"
                 class="form-control"
                 maxlength="11"
                 :class="{'is-valid': isPhoneValid,'is-invalid': isPhoneInvalid}">
        </label>
        <div class="error">{{ phoneAlert }}</div>
        <hr>
        <button type="button" @click="addContact" class="btn btn-primary">Добавить</button>
        <hr>
        <button type="button" @click="deleteSelectedContacts" class="btn btn-danger">Удалить выделенные контакты
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  data() {
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
    }
  },

  components: {
    "contact": Contact
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
      return this.isAddClicked && this.phone.length === 11;
    },

    isPhoneInvalid() {
      return this.isAddClicked && this.phone.length !== 11;
    }
  },

  methods: {
    addContact() {
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
      } else if (this.phone.length !== 11) {
        this.phoneAlert = "Введите телефон в формате 8xxxxxxxxxx (11 цифр)";
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

    deleteContact(item) {
      if (confirm("Удалить контакт?")) {
        this.items = this.items.filter(contact => contact !== item);
      }
    },

    deleteSelectedContacts() {
      let isAnyChecked = this.items.some(contact => contact.checked);

      if (isAnyChecked) {
        if (confirm("Удалить выделенные строки?")) {
          this.items = this.items.filter(contact => contact.checked === false);
        }
      }
    },

    checkAll() {
      this.items.forEach(item => item.checked = this.isMainChecked);
    }
  },
}
</script>
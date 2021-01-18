import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Vue from "vue";
import "./style.scss";

import PhoneBook from "./PhoneBook.vue";

Vue.component("phone-book", PhoneBook);

new Vue({
el:"#app"
});
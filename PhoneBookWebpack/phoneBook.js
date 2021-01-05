import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Vue from "vue";

import "./style.scss";

import * as PhoneBook from "./PhoneBook";
import Contact from "./Contact";

Vue.component("contact", Contact);

Vue.component("phone-book", PhoneBook);

new Vue({
    el: "#app"
});
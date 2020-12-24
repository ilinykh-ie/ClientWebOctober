var express = require("express");
var router = express.Router();

var contacts = [];
var newId = 1;

router.get("/api/getContacts", function (req, res) {
    var term = (req.query.term || "").toUpperCase();

    var result = term.length === 0
        ? contacts
        : contacts.filter(function (c) {
            return c.name.toUpperCase().indexOf(term) >= 0 || c.surname.toUpperCase().indexOf(term) >= 0
                || c.phone.toUpperCase().indexOf(term) >= 0;
        });
    res.send(result);
});

router.post("/api/deleteContact", function (req, res) {
    var id = req.body.id;

    contacts = contacts.filter(function (c) {
        return c.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
});

router.post("/api/deleteSelectedContacts", function (req, res) {
    var selectedIds = req.body;

    console.log(selectedIds)

    contacts = contacts.filter(function (c) {
        return !selectedIds.includes(c.id);
    });

    res.send({
        success: true,
        message: null
    });
});

router.post("/api/createContact", function (req, res) {
    var contact = req.body.contact;

    if (!contact) {
        res.send({
            success: false,
            message: "Неверный формат данных"
        });

        return;
    }

    if (!contact.name) {
        res.send({
            success: false,
            message: "Необходимо задать имя контакта"
        });

        return;
    }

    if (!contact.surname) {
        res.send({
            success: false,
            message: "Необходимо задать фамилию контакта"
        });

        return;
    }

    if (!contact.phone) {
        res.send({
            success: false,
            message: "Необходимо задать телефон контакта"
        });

        return;
    }

    if (contact.phone.length !== 16) {
        res.send({
            success: false,
            message: "Необходимо задать телефон контакта в формате +7 (xxx)-xxx-xx-xx"
        });

        return;
    }

    if (contacts.some(function (c) {
        return c.phone === contact.phone;
    })) {
        res.send({
            success: false,
            message: "Контакт с таким телефоном уже сохранен"
        });

        return;
    }

    contact.id = newId;
    newId++;

    contacts.push(contact);

    res.send({
        success: true,
        message: null
    });
});

router.get("/", function (req, res) {
    res.render("index", {title: "Express"});
});

module.exports = router;
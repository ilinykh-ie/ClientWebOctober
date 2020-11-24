$(document).ready(function () {
    var name = $("#name");
    var surname = $("#surname");
    var phone = $("#phone");
    var input_field = $("form.input_field");
    var table = $("table.phone_book_table");
    var tbody = $(".phone_book_table tbody");

    phone.mask("9(999)999-99-99");

    input_field.validate({
        rules: {
            name: {
                required: true,
                minlength: 1,
            },
            surname: {
                required: true,
                minlength: 1,
            },
            phone: {
                required: true,
                minlength: 15,
            },
        },
        messages: {
            name: {
                required: "Это поле обязательно для заполнения",

            },
            surname: {
                required: "Это поле обязательно для заполнения",

            },
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Введите номер в формате x(xxx)xxx-xx-xx",
            },
        }
    });

    var check = $("#check");

    check.change(function () {
        tbody.children().each(function () {
            if (check.prop("checked")) {
                $(this).find("[type='checkbox']").prop("checked", true);
            } else {
                $(this).find("[type='checkbox']").prop("checked", false);
            }
        });

    })

    var delete_selected_button = $("#delete_selected_button");

    delete_selected_button.click(function () {
        var is_any_checked = false;

        tbody.children().each(function () {
            if ($(this).find("[type='checkbox']").prop("checked")) {
                is_any_checked = true;
                return false;
            }
        });

        if (!is_any_checked) {
            return false;
        }

        if (confirm("Удалить выделенные строки?")) {
            tbody.children().each(function () {
                if ($(this).find("[type='checkbox']").prop("checked")) {
                    $(this).remove();
                }
            });

            check.prop("checked", false);
        }
    });

    var add_button = $("#add_button");

    add_button.click(function () {
        if (name.valid() && surname.valid() && phone.valid()) {
            var isMatches = false;

            tbody.children().each(function () {
                if ($(this).children().eq(3).text() === phone.val()) {
                    isMatches = true;
                    return false;
                }
            });

            if (isMatches) {
                alert("Контакт с таким номером телефона уже существует")
                return;
            }

            var tr = $("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>");

            var delete_button = $("<button type='button'>x</button>");
            delete_button.click(function () {
                if (confirm("Удалить строку?")) {
                    tr.remove();
                }
            })

            tr.children().eq(0).append($("<input type='checkbox'>"));
            tr.children().eq(1).text(tr.index());
            tr.children().eq(2).text(name.val());
            tr.children().eq(3).text(surname.val());
            tr.children().eq(4).text(phone.val());
            tr.children().eq(5).append(delete_button);

            tbody.append(tr);

            name.val("");
            surname.val("");
            phone.val("");
        }
    })

    var isChanging = false;

    table.on("DOMSubtreeModified", function () {
        if (!isChanging) {
            isChanging = true;

            tbody.children().each(function () {
                $(this).children().eq(1).text(($(this).index() + 1));
            })

            isChanging = false;
        }
    })
});
$(document).ready(function () {
    var name = $("#name");
    var surname = $("#surname");
    var phone = $("#phone");
    var inputField = $("form.input_field");
    var tbody = $(".phone_book_table tbody");

    phone.mask("9(999)999-99-99");

    inputField.validate({
        errorPlacement: function (error, element) {
            if (element.prop("name") === "name") {
                error.appendTo($("#name_error"));
            } else if (element.prop("name") === "surname") {
                error.appendTo($("#surname_error"));
            } else if (element.prop("name") === "phone") {
                error.appendTo($("#phone_error"));
            }
        },

        errorClass: "error",
        rules: {
            name: {
                required: true,
                minlength: 1
            },
            surname: {
                required: true,
                minlength: 1
            },
            phone: {
                required: true,
                minlength: 15
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно для заполнения"
            },
            surname: {
                required: "Это поле обязательно для заполнения"
            },
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Введите номер в формате x(xxx)xxx-xx-xx"
            }
        }
    });

    var check = $("#check");

    check.change(function () {
        $("tbody").find("[type='checkbox']").prop("checked", check.prop("checked"));
    });

    var deleteSelectedButton = $("#delete_selected_button");

    deleteSelectedButton.click(function () {
        var isAnyChecked = false;

        tbody.children().each(function () {
            if ($(this).find("[type='checkbox']").prop("checked")) {
                isAnyChecked = true;
                return false;
            }
        });

        if (!isAnyChecked) {
            return false;
        }

        if (confirm("Удалить выделенные строки?")) {
            tbody.children().each(function () {
                if ($(this).find("[type='checkbox']").prop("checked")) {
                    $(this).remove();
                }
            });

            updateRowsNumbers();

            check.prop("checked", false);
        }
    });

    var addButton = $("#add_button");

    addButton.click(function () {
        if (name.valid() && surname.valid() && phone.valid()) {
            var isMatches = false;

            tbody.children().each(function () {
                if ($(this).children().eq(3).text() === phone.val()) {
                    isMatches = true;
                    return false;
                }
            });

            if (isMatches) {
                alert("Контакт с таким номером телефона уже существует");
                return;
            }

            var tr = $("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>");

            var deleteButton = $("<button type='button' title='Удалить строку'>x</button>");
            deleteButton.click(function () {
                if (confirm("Удалить строку?")) {
                    tr.remove();
                    updateRowsNumbers();
                }
            });

            tr.children().eq(0).append($("<input type='checkbox'>"));
            tr.children().eq(1).text(tr.index());
            tr.children().eq(2).text(name.val());
            tr.children().eq(3).text(surname.val());
            tr.children().eq(4).text(phone.val());
            tr.children().eq(5).append(deleteButton);

            tbody.append(tr);
            updateRowsNumbers();

            name.val("");
            surname.val("");
            phone.val("");
        }
    });

    var isChanging = false;

    function updateRowsNumbers() {
        if (!isChanging) {
            isChanging = true;

            tbody.children().each(function () {
                $(this).children().eq(1).text($(this).index() + 1);
            });

            isChanging = false;
        }
    }
});
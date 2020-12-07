document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("input_number");
    var selectedScale = document.getElementById("selected_scale");
    var button = document.getElementById("calculate_button");
    var result = document.getElementById("result");

    button.addEventListener("click", function () {
        result.textContent = "";

        if (inputField.value === "") {
            return false;
        }

        if (selectedScale.value === "1") {
            result.textContent = (Number(inputField.value) * 9 / 5) + 32;
        } else if (selectedScale.value === "2") {
            result.textContent = Number(inputField.value) + 273.15;
        }
    });
});
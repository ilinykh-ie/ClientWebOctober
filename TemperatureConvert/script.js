(function () {
    var inputNumber = document.getElementById("input_number");
    var selectedScale = document.getElementById("selectedScale");
    var button = document.getElementById("calculateButton");
    var result = document.getElementById("result");

    button.addEventListener("click", function () {
        result.textContent = "";

        if (inputNumber.value === "") {
            return false;
        }

        if (selectedScale.value === "1") {
            result.textContent = (Number(inputNumber.value) * 9 / 5) + 32;
        } else if (selectedScale.value === "2") {
            result.textContent = Number(inputNumber.value) + 273.15;
        }
    })
})();

(function () {
    var initialArray = [10, 8, 15, 2.2, -5, 345, 12, -6, 0];
    console.log(initialArray + " - исходный массив");

    function sortDescending(array) {
        return array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    console.log(sortDescending(initialArray) + " - массив, отсортированный по убыванию");

    function getFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    console.log(getFirstFiveElements(initialArray) + " - первые 5 элементов");

    function getLastFiveElements(array) {
        return array.slice(initialArray.length - 5);
    }

    console.log(getLastFiveElements(initialArray) + " - последние 5 элементов");

    function isEven(element) {
        return element % 2 === 0;
    }

    function getEvenNumbersSum(array) {
        return array
            .filter(isEven)
            .reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
    }

    console.log(getEvenNumbersSum(initialArray) + " - сумма четных элементов массива");

    var arrayFrom1To100 = [];

    for (var i = 1; i <= 100; i++) {
        arrayFrom1To100.push(i);
    }

    function getSquareEvenNumbersArray(array) {
        return array
            .filter(isEven)
            .map(function (element) {
                return Math.pow(element, 2)
            });
    }

    console.log(getSquareEvenNumbersArray(arrayFrom1To100) + " - список квадратов четных чисел");
})();

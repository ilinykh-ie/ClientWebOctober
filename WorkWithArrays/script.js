(function () {
    var initialArray = [10, 8, 15, 2.2, -5, 345, 12, -6, 0];
    console.log(initialArray + " - исходный массив");

    function getSortedArray(array) {
        return array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    console.log(getSortedArray(initialArray) + " - массив, отсортированный по убыванию")

    function getFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    console.log(getFirstFiveElements(initialArray) + " - первые 5 элементов")

    function getLastFiveElements(array) {
        return array.slice(initialArray.length - 5);
    }

    console.log(getLastFiveElements(initialArray) + " - последние 5 элементов");

    function getEvenNumbersSum(array) {
        var evenNumbersSum = 0;

        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                evenNumbersSum += array[i];
            }
        }

        return evenNumbersSum;
    }

    console.log(getEvenNumbersSum(initialArray) + " - сумма четных элементов массива");

    var arrayFrom1To100 = [];

    for (var i = 1; i <= 100; i++) {
        arrayFrom1To100.push(i);
    }

    function getSquareEvenNumbersArray(array) {
        return array.filter(x => x % 2 === 0)
            .map(x => Math.pow(x, 2));

    }

    console.log(getSquareEvenNumbersArray(arrayFrom1To100) + " - список квадратов четных чисел");
})();

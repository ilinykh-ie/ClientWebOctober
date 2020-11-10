var initialArray = [10, 8, 15, 2.2, -5, 345, 12, -6, 0];
console.log(initialArray + " - исходный массив");

function sort(array) {
    console.log(array.sort(function (e1, e2) {
        return e2 - e1;
    }) + " - массив, отсортированный по убыванию");
}

sort(initialArray);

function firstFive(array) {
    console.log(array.slice(0, 5) + " - первые 5 элементов");
}

firstFive(initialArray);

function lastFive(array) {
    console.log(array.slice(initialArray.length - 5, initialArray.length) + " - последние 5 элементов");
}

lastFive(initialArray);

function evenNumbersSum(array) {
    var evenNumbersSum = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbersSum += array[i];
        }
    }

    console.log(evenNumbersSum + " - сумма четных элементов массива");
}

evenNumbersSum(initialArray);

var arrayFrom1To100 = [];

for (var i = 1; i < 101; i++) {
    arrayFrom1To100.push(i);
}

function arrayOfSquareEvenNumbers(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(Math.pow(array[i], 2));
        }
    }

    console.log(result + " - список квадратов четных чисел");
}

arrayOfSquareEvenNumbers(arrayFrom1To100);

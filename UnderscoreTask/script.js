(function () {
    var peopleList = [{
        name: "Alexander",
        lastName: "Lapshin",
        age: 18
    },
        {
            name: "Anastasia",
            lastName: "Terentyeva",
            age: 32
        },
        {
            name: "Maria",
            lastName: "Aleksandrova",
            age: 25
        },
        {
            name: "Sophia",
            lastName: "Kasyanova",
            age: 21
        },
        {
            name: "Denis",
            lastName: "Vorobyov",
            age: 38
        },
        {
            name: "Roman",
            lastName: "Babushkin",
            age: 12
        },
        {
            name: "Boris",
            lastName: "Tikhonov",
            age: 45
        },
        {
            name: "Pavel",
            lastName: "Vasilyev",
            age: 27
        },
        {
            name: "Svetlana",
            lastName: "Anichkina",
            age: 18
        },
        {
            name: "Vladimir",
            lastName: "Kuznetsov",
            age: 51
        }];

    console.log("Изначальный список людей: ")
    console.log(peopleList);

    function getAverageAge(array) {
        var sum = _.reduce(peopleList, function (memo, element) {
            return memo + element.age;
        }, 0);

        return sum / array.length;
    }

    var averageAge = getAverageAge(peopleList);
    console.log("Средний возраст равен: " + averageAge + " лет.");

    function getOrderedListOfPeopleFrom20To30(array) {
        var result = _.filter(array, function (element) {
            return element.age >= 20 && element.age <= 30;
        });

        return _.sortBy(result, "age");
    }

    var orderedList = getOrderedListOfPeopleFrom20To30(peopleList);
    console.log("Список людей от 20 до 30 по возраствнию:");
    console.log(orderedList);

    function addFullName(array) {
        return _.map(array, function (element) {
            element.fullName = element.name + " " + element.lastName;
            return element;
        });
    }

    var changedList = addFullName(peopleList);
    console.log("Список с добавленным полем 'полное имя': ");
    console.log(changedList);
})();

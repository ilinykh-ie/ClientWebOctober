(function () {
    var peopleList = [
        {
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
        }
    ];

    console.log("Изначальный список людей: ");
    var copiedPeopleList = peopleList.map(function (x) {
        return _.clone(x);
    })
    console.log(copiedPeopleList);

    function getAverageAge(peopleArray) {
        var sum = _.reduce(peopleArray, function (memo, person) {
            return memo + person.age;
        }, 0);

        return sum / peopleArray.length;
    }

    var averageAge = getAverageAge(peopleList);
    console.log("Средний возраст равен: " + averageAge + " лет.");

    function getOrderedListOfPeopleFrom20To30(array) {
        return _.chain(array)
            .filter(function (person) {
                return person.age >= 20 && person.age <= 30;
            })
            .sortBy("age")
            .value();
    }

    var orderedList = getOrderedListOfPeopleFrom20To30(peopleList);
    console.log("Список людей от 20 до 30 по возраствнию:");
    console.log(orderedList);

    function addFullName(array) {
        _.each(array, function (person) {
            person.fullName = person.name + " " + person.lastName;
        });
    }

    addFullName(peopleList);
    console.log("Список с добавленным полем 'полное имя': ");
    console.log(peopleList);
})();

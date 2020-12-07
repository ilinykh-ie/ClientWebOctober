(function () {
    var countriesArray = [
        {
            name: "Italy",
            cities: [
                {
                    name: "Roma",
                    population: 2643581
                },
                {
                    name: "Milano",
                    population: 1300977
                },
                {
                    name: "Napoli",
                    population: 1002619
                }]
        },
        {
            name: "Russian Federation",
            cities: [
                {
                    name: "Moscow",
                    population: 8389200
                },
                {
                    name: "St Petersburg",
                    population: 4694000
                },
                {
                    name: "Novosibirsk",
                    population: 1398800
                },
                {
                    name: "Jekaterinburg",
                    population: 1266300

                }]
        },
        {
            name: "Germany",
            cities: [
                {
                    name: "Berlin",
                    population: 3386667
                },
                {
                    name: "Hamburg",
                    population: 1704735
                },
                {
                    name: "Munich",
                    population: 1194560
                },
                {
                    name: "Essen",
                    population: 599515
                }]
        }];

    function getCountriesWithMaxCitiesCount(array) {
        var maxCitiesCount = array.reduce(function (max, currentValue) {
            if (currentValue.cities.length > max) {
                max = currentValue.cities.length;
            }

            return max;
        }, 0);

        var result = [];

        array
            .filter(function (item) {
                return item.cities.length === maxCitiesCount;
            })
            .forEach(function (item) {
                result.push(item.name + ", количество городов: " + item.cities.length);
            });

        return result;
    }


    var countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount(countriesArray);
    console.log(countriesWithMaxCitiesCount);

    function getCountriesInformationObject(array) {
        var countriesInformationObject = {};

        array.forEach(function (item) {
            countriesInformationObject[item.name] = item.cities
                .map(function (item) {
                    return item.population;
                })
                .reduce(function (accumulator, currentValue) {
                    return accumulator + currentValue;
                }, 0);
        });

        return countriesInformationObject;
    }

    var countriesInformationObject = getCountriesInformationObject(countriesArray);

    for (var key in countriesInformationObject) {
        console.log("Название страны: " + key + ", население: " + countriesInformationObject[key]);
    }
})();
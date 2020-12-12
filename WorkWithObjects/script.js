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
                }
            ]
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

                }
            ]
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
                }
            ]
        }
    ];

    function getCountriesWithMaxCitiesCount(array) {
        var maxCitiesCount = array.reduce(function (max, country) {
            if (country.cities.length > max) {
                max = country.cities.length;
            }

            return max;
        }, 0);


        return array
            .filter(function (item) {
                return item.cities.length === maxCitiesCount;
            })
            .map(function (item) {
                return item.name;
            });
    }


    var countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount(countriesArray);
    console.log("Страны с максимальным количеством городов: " + countriesWithMaxCitiesCount);

    function getCountriesInformationObject(countriesArray) {
        var countriesInformationObject = {};

        countriesArray.forEach(function (country) {
            countriesInformationObject[country.name] = country.cities
                .reduce(function (totalPopulation, city) {
                    return totalPopulation + city.population;
                }, 0);
        });

        return countriesInformationObject;
    }

    var countriesInformationObject = getCountriesInformationObject(countriesArray);

    for (var key in countriesInformationObject) {
        console.log("Название страны: " + key + ", население: " + countriesInformationObject[key]);
    }
})();
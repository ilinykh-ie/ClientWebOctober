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

    function getCountriesWithMaxCitiesCount(countriesArray) {
        var maxCitiesCount = countriesArray.reduce(function (max, country) {
            return Math.max(max, country.cities.length);
        }, 0);

        return countriesArray
            .filter(function (item) {
                return item.cities.length === maxCitiesCount;
            })
            .map(function (item) {
                return item;
            });
    }

    var countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount(countriesArray);
    var countryNumber = 0;

    console.log("Страны с максимальным количеством городов: ");
    countriesWithMaxCitiesCount.forEach(function (country) {
        countryNumber++;
        console.log(countryNumber + ". " + country.name);
    });

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
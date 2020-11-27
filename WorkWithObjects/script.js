(function () {
    var countriesArray = [{
        name: "Italy",
        cities: [{
            name: "Roma",
            population: 2643581,
            getPopulation: function () {
                return this.population;
            }
        },
            {
                name: "Milano",
                population: 1300977,
                getPopulation: function () {
                    return this.population;
                }
            },
            {
                name: "Napoli",
                population: 1002619,
                getPopulation: function () {
                    return this.population;
                }
            }],
        getCitiesCount: function () {
            return this.cities.length;
        },
        getName: function () {
            return this.name;
        },
        getCities: function () {
            return this.cities;
        }
    },
        {
            name: "Russian Federation",
            cities: [{
                name: "Moscow",
                population: 8389200,
                getPopulation: function () {
                    return this.population;
                }
            },
                {
                    name: "St Petersburg",
                    population: 4694000,
                    getPopulation: function () {
                        return this.population;
                    }
                },
                {
                    name: "Novosibirsk",
                    population: 1398800,
                    getPopulation: function () {
                        return this.population;
                    }
                },
                {
                    name: "Jekaterinburg",
                    population: 1266300,
                    getPopulation: function () {
                        return this.population;
                    }
                }],
            getCitiesCount: function () {
                return this.cities.length;
            },
            getName: function () {
                return this.name;
            },
            getCities: function () {
                return this.cities;
            }
        },
        {
            name: "Germany",
            cities: [{
                name: "Berlin",
                population: 3386667,
                getPopulation: function () {
                    return this.population;
                }
            },
                {
                    name: "Hamburg",
                    population: 1704735,
                    getPopulation: function () {
                        return this.population;
                    }
                },
                {
                    name: "Munich",
                    population: 1194560,
                    getPopulation: function () {
                        return this.population;
                    }
                },
                {
                    name: "Essen",
                    population: 599515,
                    getPopulation: function () {
                        return this.population;
                    }
                }],
            getCitiesCount: function () {
                return this.cities.length;
            },
            getName: function () {
                return this.name;
            },
            getCities: function () {
                return this.cities;
            }
        }];

    function getCountriesWithMaxCitiesCount(array) {
        var maxCitiesCount = 0;

        array.forEach(function (item) {
            if (item.getCitiesCount() > maxCitiesCount) {
                maxCitiesCount = item.getCitiesCount();
            }
        })

        var result = [];

        array.filter(function (item) {
            return item.getCitiesCount() === maxCitiesCount;
        })
            .map(function (item) {
                result.push(item.getName() + ", количество городов: " + item.getCitiesCount())
            });

        return result;
    }

    getCountriesWithMaxCitiesCount(countriesArray).forEach(function (element) {
        console.log(element);
    });

    function getCountriesInformationObject(array) {
        var object = {};

        array.forEach(function (item) {
            object[item.getName()] = item
                .getCities()
                .map(function (item) {
                    return item.getPopulation();
                })
                .reduce(function (accumulator, currentValue) {
                    return accumulator + currentValue;
                }, 0);
        });

        return object;
    }

    var object = getCountriesInformationObject(countriesArray);

    for (var key in object) {
        console.log("Название страны: " + key + ", население: " + object[key]);
    }
})();
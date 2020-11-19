(function () {
    class City {
        constructor(name, population) {
            this.population = population;
            this.name = name;
        }

        getPopulation() {
            return this.population
        }
    }

    class Country {
        constructor(name, cities) {
            this.name = name;
            this.cities = cities;
        }

        getCitiesCount() {
            return this.cities.length;
        }

        getName() {
            return this.name;
        }

        getCities() {
            return this.cities;
        }
    }

    var berlin = new City("Berlin", 3386667);
    var hamburg = new City("Hamburg", 1704735);
    var munich = new City("Munich", 1194560);
    var essen = new City("Essen", 599515);
    var germany = new Country("Germany", [berlin, hamburg, munich, essen])

    var moscow = new City("Moscow", 8389200);
    var stPetersburg = new City("St Petersburg", 4694000);
    var novosibirsk = new City("Novosibirsk", 1398800);
    var jekaterinburg = new City("Jekaterinburg", 1266300);
    var russia = new Country("Russian Federation", [moscow, stPetersburg, novosibirsk, jekaterinburg]);

    var roma = new City("Roma", 2643581);
    var milano = new City("Milano", 1300977);
    var napoli = new City("Napoli", 1002619);
    var italy = new Country("Italy", [roma, milano, napoli]);

    var countriesArray = [germany, russia, italy];

    function getMaxCitiesCount(array) {
        var maxCitiesCount = 0;

        array.forEach(function (item) {
            if (item.getCitiesCount() > maxCitiesCount) {
                maxCitiesCount = item.getCitiesCount();
            }
        })

        return maxCitiesCount;
    }

    var maxCitiesCount = getMaxCitiesCount(countriesArray);

    countriesArray.filter(x => x.getCitiesCount() === maxCitiesCount)
        .map(x => console.log(x.getName + ", количество городов: " + x.getCitiesCount()));

    function getCountriesInformationObject(array) {
        var object = {};

        array.forEach(function (item) {
            object[item.getName()] = item.getCities().map(x => x.getPopulation())
                .reduce((accumulator, currentValue) => accumulator + currentValue);
        });

        return object;
    }

    var object = getCountriesInformationObject(countriesArray);


    for (var key in object) {
        console.log("Название страны: " + key + ", население: " + object[key]);
    }
})();
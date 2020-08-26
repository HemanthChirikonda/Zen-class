var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var petshop = /** @class */ (function () {
    function petshop() {
        this.allPets = [];
        this.requests = [];
    }
    petshop.prototype.getallPets = function () {
        return this.allPets;
    };
    petshop.prototype.getavilablePets = function () {
        var arr = [];
        this.allPets.forEach(function (element) {
            if (element.availabile == 'yes') {
                arr.push(element);
            }
        });
        return arr;
    };
    petshop.prototype.insert = function (animal) {
        this.allPets.push(animal);
    };
    petshop.prototype.getpetsbyname = function (value) {
        var arr = [];
        this.allPets.forEach(function (element) {
            if (element.name === value) {
                arr.push(element);
            }
        });
        return arr;
    };
    petshop.prototype.getpetsbybreed = function (value) {
        var arr = [];
        this.allPets.forEach(function (element) {
            if (element.breed === value) {
                arr.push(element);
            }
        });
        return arr;
    };
    petshop.prototype.getpetsbyPrice = function (value) {
        var arr = [];
        this.allPets.forEach(function (element) {
            if (element.price === value) {
                arr.push(element);
            }
        });
        return arr;
    };
    petshop.prototype.getavilablePetsCount = function (array) {
        var arr = {
            'Dogs': 0,
            'Cats': 0,
            'Lizards': 0
        };
        array.forEach(function (element) {
            if (element.availabile == 'yes') {
                if (element.type === 'Dog') {
                    arr.Dogs++;
                }
                else if (element.type === 'Cat') {
                    arr.Cats++;
                }
                else if (element.type === 'Lizard') {
                    arr.Lizards++;
                }
            }
        });
        return arr;
    };
    petshop.prototype.getallRequests = function () {
        return this.requests;
    };
    petshop.prototype.createRequestsbytype = function (request) {
        this.requests.push(request);
    };
    petshop.prototype.createRequestsbyPrice = function (request) {
        this.requests.push(request);
    };
    petshop.prototype.createRequestsbyName = function (request) {
        this.requests.push(request);
    };
    petshop.prototype.createRequestsbybreed = function (request) {
        this.requests.push(request);
    };
    petshop.prototype.getaviablepetsFor5enquries = function () {
        var avilPets = this.getavilablePets();
        var enqpets = [];
        this.requests.forEach(function (element) {
            avilPets.forEach(function (element1) {
                if (element.request === element1[element.requestType]) {
                    var flag_1 = true;
                    element.requestData.push(element1);
                    enqpets.forEach(function (element2) {
                        if (element2 === element1) {
                            flag_1 = false;
                        }
                    });
                    if (flag_1) {
                        enqpets.push(element1);
                    }
                }
            });
        });
        return enqpets;
    };
    return petshop;
}());
var enquries = /** @class */ (function () {
    function enquries(request, requestType) {
        this.requestData = [];
        this.request = request;
        this.requestType = requestType;
    }
    return enquries;
}());
var availability = /** @class */ (function () {
    function availability(availabile) {
        this.availabile = availabile;
    }
    return availability;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(type, name, breed, availabile, price) {
        var _this = _super.call(this, availabile) || this;
        _this.type = type;
        _this.name = name;
        _this.breed = breed;
        _this.price = price;
        return _this;
    }
    return Animal;
}(availability));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type, name, breed, availabile, price, typeOfCoat, sheddingType) {
        var _this = _super.call(this, type, name, breed, availabile, price) || this;
        _this.sheddingType = sheddingType;
        _this.typeOfCoat = typeOfCoat;
        return _this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(type, name, breed, availabile, price, clawType, typeOfCoat) {
        var _this = _super.call(this, type, name, breed, availabile, price) || this;
        _this.clawType = clawType;
        _this.typeOfCoat = typeOfCoat;
        return _this;
    }
    return Cat;
}(Animal));
var Lizard = /** @class */ (function (_super) {
    __extends(Lizard, _super);
    function Lizard(type, name, breed, color, availabile, price, size, weight, temperament) {
        var _this = _super.call(this, type, name, breed, availabile, price) || this;
        _this.color = color;
        _this.size = size;
        _this.weight = weight;
        _this.temperament = temperament;
        return _this;
    }
    return Lizard;
}(Animal));
var petshop1 = new petshop();
for (var index = 0; index < 3; index++) {
    petshop1.insert(new Dog('Dog', 'dog' + index + '', 'Samoyed', 'yes', 1200, 'DOUBLE COAT', 'Low'));
    if (index % 2 === 0) {
        petshop1.insert(new Lizard('Lizard', 'lizard' + index + '', 'sa', 'yellow', 'yes', 1500, 12, 35, 'high'));
        petshop1.insert(new Cat('Cat', 'cat' + index + '', 'Sam', 'yes', 1100, 'DOUBLE COAT', 'Low'));
    }
    else {
        petshop1.insert(new Lizard('Lizard', 'lizard' + index + '', 'sa', 'yellow', 'yes', 1200, 12, 35, 'high'));
        petshop1.insert(new Cat('Cat', 'cat' + index + '', 'Sam', 'no', 1200, 'DOUBLE COAT', 'Low'));
    }
}
petshop1.insert(new Lizard('Lizard', 'lizard10', 'sa', 'yellow', 'no', 1500, 12, 35, 'high'));
console.log('All pets  :', petshop1.getallPets());
console.log('All Avilable pets' + '  ', petshop1.getavilablePets());
console.log('Avilable pets Count' + '  ', petshop1.getavilablePetsCount(petshop1.getavilablePets()));
petshop1.createRequestsbytype(new enquries('Dog', 'type'));
petshop1.createRequestsbyName(new enquries('dog2', 'name'));
petshop1.createRequestsbybreed(new enquries('Samoyed', 'breed'));
petshop1.createRequestsbyPrice(new enquries(1200, 'price'));
petshop1.createRequestsbyName(new enquries('cat2', 'name'));
console.log('All Enquries', petshop1.getallRequests());
console.log('Avilable pets as per Enquries' + '  ', petshop1.getaviablepetsFor5enquries());
console.log('Avilable pets Count as per Enquries ' + '  ', petshop1.getavilablePetsCount(petshop1.getaviablepetsFor5enquries()));

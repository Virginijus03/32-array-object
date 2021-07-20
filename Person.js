const { firstname } = require("./data");


class Person {
    constructor(duomenys) {
        this.duomenys = duomenys;
    }
    fullName() {
        console.log(this.duomenys.firstname + ' ' + this.duomenys.lastname);
    }
    intro() {
        console.log(`Hi, my name is ${this.duomenys.firstname} and I am ${(this.duomenys.age)} years old.`);
    }
    firstChild() {
        const child = this.duomenys.children[0];
        console.log(`${child.firstname} ${child.lastname} (${child.age})`);
    }
    lastChild() {
        const child = this.duomenys.children[2];
        console.log(child.firstname + ' ' + child.lastname + ' (' + child.age + ')');
    }
    firstCar() {
        const car = this.duomenys.cars[0];
        console.log(car.brand + ' ' + car.model + ' (' + car.color + ')');
    }
    lastCar() {
        const car = this.duomenys.cars[2];
        console.log(car.brand + ' ' + car.model + ' (' + car.color + ')');
    }
    children() {
        console.log(`This is a children of ${this.duomenys.firstname} ${this.duomenys.lastname}:`);
        let count = 0;
        for (let i = 0; i < this.duomenys.children.length; i++) {
            const vaikai = this.duomenys.children[i];
            ++count;
            console.log(`${count}. ${vaikai.firstname} ${vaikai.lastname} (${vaikai.age})`);
        }
    }
    aliveChildren() {
        let gyvi = 0;
        for (let i = 0; i < this.duomenys.children.length; i++) {
            const vaikas = this.duomenys.children[i];
            if (vaikas.alive) {
                ++gyvi;
            }
        }
        console.log(`${this.duomenys.firstname} ${this.duomenys.lastname} has only  ${gyvi} children alive.`);
    }
    autopark() {
        console.log(`This is ${this.duomenys.firstname} cars:`);
        let count = 0;
        for (let i = 0; i < this.duomenys.cars.length; i++) {
            const masinos = this.duomenys.cars[i];
            ++count;
            console.log(`${count}. ${masinos.brand} ${masinos.model} (${masinos.color})`);
        }
    }
    wherePersonLive() {
        console.log(`${this.duomenys.firstname} is living at ${this.duomenys.adress.city} ${this.duomenys.adress.street} ${this.duomenys.adress.houseNumber}`);
    }
    carPrice(index) {
        const masinos = this.duomenys.cars[index];
        console.log(`${masinos.brand} ${masinos.model} is purshased for ${masinos.price} ${masinos.currency}`);
    }
    totalSpentForCars(arSpausdinti = true) {
        let howMuch = 0;
        for (let i = 0; i < this.duomenys.cars.length; i++) {
            const auto = this.duomenys.cars[i];
            if (auto.currency === 'Euros') {
                howMuch += auto.price;
            }
            if (auto.currency === 'Litas') {
                howMuch += auto.price / 3.45;
            }
        }
        if (arSpausdinti) {
            console.log(`${this.duomenys.firstname} has spent ${howMuch.toFixed(2)} Euros for his cars.`);
        }
        return howMuch;
    }
    totalSpentForApartments(arSpausdnti = true) {

        let kaina = this.duomenys.adress.price;
        if (arSpausdnti) {
            console.log(`${this.duomenys.firstname} has spent ${kaina} Euros for his cars.`);
        }
        return kaina;
    }
    totalSpendings() {
        const totalIsleista = this.totalSpentForApartments(false) + this.totalSpentForCars(false);
        console.log(`${this.duomenys.firstname} has spent ${totalIsleista.toFixed(2)} Euros tottaly.`);
    }
}

module.exports = Person;
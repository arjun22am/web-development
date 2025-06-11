class Vehicle {
    constructor(make,model){
        this.make = make
        this.model= model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}
class Car extends Vehicle {
    drive(){
        return `${this.make} -- this is inheritance`
    }
}

let newcar = new Car("toyota","cambri")
console.log(newcar.start());
console.log(newcar.drive());
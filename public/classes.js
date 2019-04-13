

class Car{
    constructor() {
        this.wheels = 4
        this.brand = 'Toyota'
    }
}

//inheritance

class Toyota extends Car {
    constructor(){
        super() // super function for constructor of Car 
        this.windows = 4
    }

}

const mycar = new Car(); //instance of class
console.log(mycar.brand);
const mytoyota = new Toyota();
console.log(mytoyota.wheels)

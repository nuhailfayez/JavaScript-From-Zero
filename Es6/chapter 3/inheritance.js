class car{
    constructor(Brand){
        this.Brand = Brand;
    }

    parent(){
        return 'my  Car Brand is ' + this.Brand
    }
}

class Model extends car{
    constructor(Brand,Model){
        super(Brand);
        this.model = Model;
        
    }
    show(){
        return this.parent() + 'And Model is ' + this.model;
    }
}

let myCar = new Model('Ford', 'Mustang')
console.log(myCar.show())
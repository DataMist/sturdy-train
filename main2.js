// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Homes{
    constructor(location, sqft, stories, bedrooms){
        this._location = location
        this._sqft = sqft
        this._stories = stories
        this.bedrooms = bedrooms
    }
   getaddress(){
       return this._location
   }
    }
    address (){
        console.log(`I live at ${this._address}`)
    }
}

class MobileHome extends Homes{
    constructor(lotSize, pieces){
    this.lotSize = lotSize
    this.pieces = pieces
}
sayLotSize(){
    console.log(`I have ${this.lotSize}`)
}
}

class MILunit extends Homes{
    constructor(location, unitSize, doors){
        super(location)
        this.unitSize = unitSize
        this.doors = doors
    }
    sayunitSize(){
        console.log(`I have ${this.unitSize}`)
    }
}




//Inheritance
// Implementing Inheritance using the extends keyword

class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}
class Dog extends Animal{
    constructor(name, collarColor){
        super(name);
        this.collarColor=collarColor;
    }
    speak(){
        super.speak();
        console.log(`${this.name} barks`);
    }
}

let d=new Dog("Mitzie","red");
d.speak();
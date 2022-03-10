// polymorphism in JS

class Shape{
    area(){
        return 0;
    }
    toString(){
        return `The area of ${Object.getPrototypeOf(this).constructor.name} is ${this.area()}`;
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return Math.PI*this.radius**2;
    }
}
class Rectangle extends Shape{
    constructor(width, lenght){
        super();
        this.width=width;
        this.lenght=lenght;
    }
    area(){
        // console.log(this.width*this.lenght);
        return this.width*this.lenght;
    }
}
class Triangle extends Shape{
    
    constructor(base, height){
        super();
        this.base=base;
        this.height=height;
    }
    area(){
        return 0.5*this.base*this.height;
    }
}

function calcSumArea(shapes){
    sumArea=0.0;
    for(sh of shapes){
        // console.log(typeof sh);
         // console.log(sh.area());
        sumArea+=sh.area();
    }
    return sumArea;

}

const shapes =[
    new Circle(4),
    new Rectangle(1,2),
    new Triangle(4,5)
];
console.log(calcSumArea(shapes));

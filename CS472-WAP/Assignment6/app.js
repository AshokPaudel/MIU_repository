//Assignment Week 2 Day 3 Lab – Closure and Module Pattern
//Q.N6
var addMo=( function(){
    var counter=0;
    function add(val){
        counter+=val;
    }
    return{
        add : function(){
            add(1);
        },
        reset:function(){
            counter=0;
        },
        getCounter:function(){
            return counter;
        }

    }
})();
addMo.add();
addMo.add();
console.log("After addMo.add called 2 times, counter is: "+addMo.getCounter()); 
addMo.reset();
console.log("After resetting the counter , counter = "+addMo.getCounter());

//Q.N 7 : Free variables is counter, counter is defined to outside of function add,
// that is being used in add

//Q.N8

var make_adder=(function (inc){
    var counter = 0;
    function add(){
        
        return counter +=  inc;
    }
    return {
        add: add,
        getCounter: function() {
            return counter;
        }
    }
});

var add5  = make_adder(5);
var add7  = make_adder(7);
add5.add();
add5.add();
add5.add();
add7.add();
add7.add();
add7.add();
var add8  = make_adder(8);
console.log(add5.getCounter());
console.log(add7.getCounter());
add8.add();
console.log(add8.getCounter());

//Assignment purpose

const make_addernew=(function(inc){
    let counter=0;
    function add(){
        counter+=inc;
        console.log("counter = "+counter);
        
    }
    return add;

});

const adder5=make_addernew(5);
adder5();
adder5();
adder5();
const adder7=make_addernew(7);
adder7();
adder7();
adder7();

// console.log("adder val after calling once )

//Q.N.9 How to prevent global namespace littering
/*
    Use Module to wrap functions, so that you can limit the scope of variables. 
*/

//Q.N 10

const Employee=function(){
    let name;
    let age;
    let salary;
    function setAge (newAge){
        age=newAge;
    }
    function setName(newName){
        name=newName;
    }
    function setSalary(newSalary){
        salary=newSalary;
    }
    function getAge(){
        return age;
    }
    function getName(){
        return name;
    }
    function getSalary(){
        return salary;
    }
    return{
        setAge:function(a){
            setAge(a);
        },
        setName:function(n){
            setName(n);
        },
        setSalary:function(s){
            setSalary(s);
        },
        getName:function(){
            return getName();
        },
        getAge:function(){
            return getAge();
        },
        getSalary:function(){
            return getSalary();
        },
        increaseSalary:function(percent){
            setSalary(getSalary()*(1+percent/100));

        },
        increaseAge:function(){
            setAge(getAge()+1);
        }

    }
}
let emp1=Employee();
emp1.setName("ashok");
emp1.setSalary(5000);
emp1.setAge(18);

console.log(emp1.getName());
console.log(emp1.getSalary());
emp1.increaseSalary(10);
emp1.increaseAge();
console.log(emp1.getSalary());
console.log(emp1.getAge());

var Address={
    street:"1000N 4th st",
    city:"Fairfield",
    state:"IA",
    zip:"52557"
};
Employee.address=Address;
function setAddress(st,ct,stat,z){
    Employee.address.street=st;
    Employee.address.city=ct;
    Employee.address.state=stat;
    Employee.address.zip=z;
}
function getAddress(){
    // return Employee.address.street;
    return (Employee.address.street +", " +Employee.address.city+", "+
    Employee.address.state+" "+Employee.address.zip);
}
Employee.setAddress=setAddress;
Employee.getAddress=getAddress;

console.log(Employee.getAddress());
Employee.setAddress("1000N 4th St","chicago","NY","54556");
console.log(Employee.getAddress());
console.log(Employee);
console.log(Employee.getName());
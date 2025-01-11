let person = {
    name : "john",
    age  : 34,
    greet : function(){
        console.log("hello " + this.name);
    }

};
console.log(person.name);
person.greet(); 



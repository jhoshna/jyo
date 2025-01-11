let person = new Object();
person.name="alice",
person.age=34,
person.greet=function(){
    console.log("hello "+this.name);
};
console.log(person.name);
person.greet();
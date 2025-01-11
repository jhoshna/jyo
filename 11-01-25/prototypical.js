function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    console.log(`${this.name} makes a sound`);
};
const dog = new Animal("Bobby");
console.log(dog.name);
dog.speak();
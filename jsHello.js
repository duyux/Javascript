function Person(name, age, job)
{
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby","Count"];
}
Person.prototype = {
    constructor:Person,
    sayName:function(){
    alert(this.name);
}
}



function sayHi() {
    var person1 = new Person("Michase",20,"Soft");
    person1.sayName();
}
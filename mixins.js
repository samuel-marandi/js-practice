const myMixin = {
    sayHi() {
      console.log("Hello, " + this.name);
    },
    sayBye() {
      console.log("Goodbye, " + this.name);
    }
  };
  
  const obj1 = {
    name: "John",
    age: 30
  };
  
  const obj2 = {
    name: "Jane",
    age: 25
  };
  
  Object.assign(obj1, myMixin);
  Object.assign(obj2, myMixin);
  
  obj1.sayHi(); // Output: "Hello, John"
  obj1.sayBye(); // Output: "Goodbye, John"
  
  obj2.sayHi(); // Output: "Hello, Jane"
  obj2.sayBye(); // Output: "Goodbye, Jane"
  
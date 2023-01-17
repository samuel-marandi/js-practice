const parentObject = {
    value1: 'hello',
    method2: function(){
        console.log('The value of value1 is ', this.value1);  
    },
    method1() {
      console.log(`The value of value1 is ${this.value1}`);
    }
};

console.log(parentObject.method2())

console.log(parentObject.method1())
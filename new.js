const parentObject = {
    value1: 'hello',
    method1: function() {
      console.log('This is method1');
      return 0;
    }
  };
  
  const childObject = Object.create(parentObject);
  console.log(childObject.value1); // Output: "hello"
  console.log(childObject.method1()); // Output: "This is method1"
  const childObject2 = Object.assign(Object.create(parentObject), { value2: 'test' });
  console.log(childObject2.value2);
  
const myModule = (function() {
    let privateVariable = "I am a private variable";
    let privateMethod = function() {
      console.log("I am a private method");
    }
  
    return {
      publicMethod: function() {
        console.log("I am a public method");
      },
      publicVariable: "I am a public variable",
      getPrivate: function() {
        console.log(privateVariable);
      }
    }
  })();
  
  console.log(myModule.publicMethod()); // Output: "I am a public method"
  console.log(myModule.publicVariable); // Output: "I am a public variable"
  console.log(myModule.getPrivate()); // Output: "I am a private variable"
  console.log(myModule.privateMethod); // Output: undefined
  
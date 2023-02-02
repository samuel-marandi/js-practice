// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const p1 = new Person('John', 30);
// // const p2 = Person('Will', 25);

// console.log(p1);
// // console.log(p2);

// class PersonClass{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
// }

// const p2 = new PersonClass('Will', 25);
// console.log(p2);


// class PersonService{
//     constructor(person){
//         this.person = person;
//     }

//     getPerson(){
//         console.log('Person', this.person.name);
//     }
// }

// const pService = new PersonService(p1);

// pService.getPerson();


function User(name) {
    this.name = name;
  }
  
  function UserService(user) {
    this.user = user;
    this.getUserName = function(){
        console.log('Returing...')
        return this.user.name;
    }
  }
  
//   UserService.prototype.getUserName = function() {
//       return this.user.name;
//   }
  
  const user = new User('John Doe');
  const userService = new UserService(user);
  console.log(userService.getUserName()); // Output: 'John Doe'
  
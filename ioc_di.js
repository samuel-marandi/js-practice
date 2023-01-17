// class User {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   class UserService {
//     constructor(user) {
//       this.user = user;
//     }
  
//     getUserName() {
//       return this.user.name;
//     }
//   }
  
//   const user = new User('John Doe');
//   const userService = new UserService(user);
//   console.log(userService.getUserName()); // Output: 'John Doe'
  
function User(name){
    this.name = name;
}

function UserService(user){
    this.user = user;
    this.getUserName = function(){
        if(user && user.name) {
            return this.user.name;
        }

        return 'No name has be set';
    }
}

const user = new User('Samuel');
const userService = new UserService(user);

console.log(userService.getUserName())
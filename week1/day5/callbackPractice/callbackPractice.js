/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and what you should write is the sayHi function that makes the code above work, 
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
*/


// 1. Write a function called first that returns the first item of the array using a callback function

 var first = function(arr, cb) {
   return cb(arr[0]);
 } // Code Here

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



// 2. Write a function called last which returns the last item of the array using a callback function.

var last = function(arr, cb) {
  return cb(arr[arr.length - 1]);  //Code Here
}
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



// 3. Write a function called multiply that multiplies two numbers using a callback function.

  //Code Here
var multiply = function(num1, num2, cb){
  return cb(num1 * num2);
}


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that checks if a name exists in an array. 
// If it does, return true using the callback, if not return false.

 var contains = function(arr, name, cb) {
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] === name) {
       return cb(true);
     }
     return cb(false);
   }
 } //Code Here 

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes the names array and removes all duplicates and returns 
// the callback function with the array of unique names.

var uniq = function(names, cb) {
      var uniqArr = [];
       for (var i = 0; i < names.length; i++ ) {
        if(uniqArr.indexOf(names[i]) === -1){
             uniqArr.push(names[i]);
           }
          }
          return cb(uniqArr);
}

//Code Here

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// 6. Write a function called each that takes in an array of names. For each item, use a callback 
// function to return the indices and item.

    var each = function(name, fun) {
     for (var i = 0; i < name.length; i++) {
          var indice = name[i];
          var item = i;
          fun(indice, item);
      }
    }  //Code Here 

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID 
// and returns that user.

var getUserById = function(obj,trg,cb){
  for(var i = 0; i < obj.length; i++){
    if(obj[i].id === trg){
  	  cb(obj[i]);
  	}
  }
 }//Code Here

var users = [
  {
    id: '12d',
    email: 'todd@gmail.com',
    name: 'Todd',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'Lee@gmail.com',
    name: 'Lee',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'giant@gmail.com',
    name: 'giant',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
// function testfunction(...x) {
//     console.log(x);
//     let numbers=0
//     for ( let y of x){
//         numbers=numbers+y;
//         // console.log(numbers);
//     }
//     return numbers;
// }
// let sum = testfunction(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(sum);


function testfunction(...y) {
    numbers=0
    for (let x of y){
        if (x>0) {
          numbers+=x
        }
            
            
        }
       return numbers;
    }
  
    

let sum = testfunction (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(sum);


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

if (user.isloggedin=='true') {
    console.log(giorgi );
} 
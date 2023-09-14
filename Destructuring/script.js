// Destructuring Function Arguments
// Suppose we have the following example:

let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`

let person = {
    firstName: 'Sonny',
    lastName: 'Sangha'
}

displayFullName(person);

//Compare the two...

// let displayFullName = (person) => `${person.firsName} ${person.lastName}`
// let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`

//ES6 is the cleaner approach once practived several times!

// Its possible to destructure the object argument passed into the function...

// it's possible to destructure nested properties as well as parent property:

// let member = {
//     id: 0o1,
//     name: {
//         firstName: 'Sonny',
//         lastName: 'Sangha'
//     }
// };

// let {id, name: {firstName, lastName}} = member;

// console.log(firstName) // Sonny
// console.log(lastName) // Sangha
// console.log(name) // {firstName: 'Sonny', lastName: 'Sangha'}


//==============================================================
//Nested Object Destructuring
// Assuming that you have a member in the PAPFAM where the object has a name object as the property:

// let member = {
//     id: 0o1,
//     name: {
//         firstName: 'Sonny',
//         lastName: 'Sangha'
//     }
// };

// // heres how to destructure it...
// let {id, name: {firstName, lastName} } = member;

// console.log(id)
// console.log(firstName)// Sonny
// console.log(lastName)//Sangha

// =============================================================
// // a function may return an object or null in some situations
// //For Example:

// function getPerson() {
//     return null;
// }

// let {firstName, lastName } = getPerson() || {};

// console.log(firstName, lastName);


// //==============================================================
// // in this example, two varables are swapped using the destructuring assignment syntax:

// let name1 = 'Sonny';
// let name2 = 'Jay';

// // swapping variables
// [name1, name2] = [name2, name1]

// console.log(name1); //Jay
// console.log(name2); // Sonny

// // !NOTE: the variable with te spread syntax cannot have a trailing comma ,. You should use this rest element (variable with spread syntax) as the last variable. for example:

// const names = ['Sonny', 'Jay', 'Brian', 'Rodgers']

// //throws an error
// const [y, ...x] = names;

// console.log(x)
// //==============================================================
// //This trick works in object destructuring too!
// const person = {
//     name: 'Sonny Sangha',
//     age: 28,
//     gender: 'Male'
// }

// // destructuring assignment
// // assigning remaining properties to rest
// let { name, ...rest} = person;

// console.log(name); // Sonny Sangha
// console.log(rest); // {age: 28, gender: 'Male'}

//==============================================================

// Assign Remaining Elements to a Single Variable

// You can assign the remaining elements of an array to a variable using the spread syntax `...`

// const names = ['Sonny', 'Jay', 'Brian', 'Rodgers'];

// // destructuring assignment in arrays
// // assigning remaining elements to y

// const [x, a, ...y] = names;

// console.log(x); // Sonny
// console.log(a); 
// console.log(y); // ["Jay", "Brian", "Rodgers"]


//==============================================================
// // Skipping items when array destructuring

// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays

// const [x, ,z] = arrValue;

// console.log(x); // one
// console.log(z); // three

// ==========================================================
// Prior to ES6, when you want to assing the elements of the array to variables, you typically do it like this:

// const arr = [1, 2, 3];

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

// console.log(x)
// console.log(y)
// console.log(z)

// But NOW ES6 introduces the array destructuring syntax that provides an alternative way to assign elements of an array to variables

// let [x, y, z] = arr;

// let [a, b, c, d] = [1, 2, 3, 4,];


// ==============================================================
// Accessing Objects the Old way

// let person = {
//     firstName: 'Sonny',
//     lastName: 'Sangha',
//     middleName: 'Singh',
//     currentAge: 28
// };



// let personFirstName = person.firstName;
// let personLastName = person.lastName;

// personFirstName
// personLastName



// ==============================================================
// Access Objects the New way

// let { firstName, lastName, middleName = '', currentAge: age = 20 } = person;

// console.log(middleName); // 'Singh'
// console.log(age); // 28

// ==============================================================
// We can also RENAME the variables with the New Way

// let {firstName: fName, lastName: lName} = person;

// fName
// lName


// ==============================================================
// What happens if you destruct a property that does not exist

// let {firstName, lastName, middleName} = person;
// console.log(middleName);   undefined



// Create an array of people objects with first name, last name, and age, then write a 
// JavaScript function that takes in an array and console logs the 
// first and last names of all the people.



// make object
const people = [
    {
      firstName: 'Darren',
      lastName : 'Kim',
      age      : 28
    },
    {
      firstName: 'John',
      lastName : 'Smith',
      age      : 35
    },
    {
      firstName: 'Jane',
      lastName : 'Doe',
      age      : 15
    }
  ]

//   loop through every object in the array
  function getNames (array) {
    array.forEach(function(name) {
    // show only the first and last name in every object
      console.log(`${name.firstName} ${name.lastName}`)
    })
  }
getNames(people)
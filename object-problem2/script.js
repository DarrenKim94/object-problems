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
  function getName (array) {
    for (let i = 0; i < array.length; i++) {
        // show only the first and last name in every object
        // i in array is each object
      console.log(array[i].firstName + ' '  + array[i].lastName)
    }
  }
getName(people)
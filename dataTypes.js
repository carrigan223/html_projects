const testObject = {
  name: "Andrew",
  dob: "02/23/88",
  age: 34,
  pets: [
    {
      name: "Nacho",
      animalType: "dog"
    }
  ],
  city: "San Diego",
  driversLiscenes: true,
  pilotsLiscenes: false
};

const testArray = [1, "andrew", testObject.pets[0].name];

  // var flattenedArray = arr.flat();//[].concat.apply([], arr);


// console.log(testArray);

// function hello(word) {
//     return "hello world"
// }

const hello = (word) => {
    return word;
};

// console.log(typeof testObject.name);
// console.log(typeof testArray);
// console.log(typeof testObject.pilotsLiscenes);
console.log(hello("Andrew"));



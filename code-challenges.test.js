// ASSESSMENT 2: Coding Practical Questions with Jest

const { string } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("functionName", () => {
//     it("describe what my  test and function does", () => {
//         expect(functionName("pass any params needed").toEqual("Expect output"))
//     })
// })

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

//  describe("divisibleBy", () => {
//        it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
//            expect(divisibleBy("15").toBe("is divisible by three"))
//            expect(divisibleBy("0").toBe("is divisible by three"))
//            expect(divisibleBy("-7").toBe("is not divisible by three"))
//        })
//    })
// -------toBe is not a function
//  b) Create the function that makes the test pass.

// ------Pseudocode-------
// create a function called divisibleBy and a conditional statemet for 3 numbers to determmine if they are divisible by three or not divisible by three.

//  const divisibleBy = (num3) => {
//      if(num3 % 2 === 1) {
//          return ("is divisible by three");
//      } else return ("is not divisble by three")
//  }
//  console.log(divisibleBy())
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//  describe("firstLetter", () => {
//       it("takes in an array of words and returns an array with all the words capitalized", () => {
//           expect(firstLetter(["streetlamp", "potato", "teeth", "conclusion", "nephew"]).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]))
//           (firstLetter(["temperature", "database", "chopsticks", "mango", "deduction"]).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]))
//       })
//   })

//   error code return
//   b) Create the function that makes the test pass.

// Pseudocode
// Create a function called firstLetter that takes the two given arrays and changes the first letter of each string in the array and returns an Uppercase letter by creating a variable within that takes the index of each word in the array and changes the lower case letter toUppercase.
//  const firstLetter = (randomNouns1, randomNouns2) => {
//  let(newArray = [0], i < newArray.length, i++) 
//       newArray[i] = newArray[i].charAt(0).toUpperCase();
//       return randomNouns1
//  }


//  console.log(firstLetter)
//  Returned [Function: firstLetter]



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//  describe("vowelTester", () => {
//          it("takes in a string and logs the index of the first vowel", () => {
//          expect(vowelTester1("learn").toEqual(1))
//          expect(vowelTester2("academy").toEqual(0))
//          expect(vowelTester3("challenges").toEqual(2))
//           })
//       })
// vowelTester is not a function
// b) Create the function that makes the test pass.

// -----Pseudocode
// Create a function called vowelTester that takes in a string, splits the string, creates a for loop for the split string.
// Create conditional statement for new string to define the vowel postion in an index and and return the index.

// function vowelTester(str) {
//     let newstr = str.split('');
//     for(i=0; i<newstr.length; i++){
//         if(newstr[i] == 'a'  || newstr[i] == 'e' || newstr[i] == 'i' || newstr[i] == '0' | newstr[i] == 'u' || newstr[i] == 'A'  || newstr[i] == 'E' || newstr[i] == 'I' || newstr[i] == 'O' | newstr[i] == 'U') {
//             return i;
//         }
//     }
// }
// console.log(vowelTester(vowelTester2)) 
// 0
// console.log(vowelTester(vowelTester1)) 
// 1
// console.log(vowelTester(vowelTester3)) 
// 2

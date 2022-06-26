// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Delta 2022"
// console.log(cohort.split(""))

// a) Your answer: "D" "e" "l" "t" "a" "2" "0" "2" "2"
// b) Verify and explain: The .split method took the entire string and seperated each item in the string, returning individual strings for each item.
// ----'D', 'e', 'l', 't',----
// ----'a', ' ', '2', '0',----
// ----'2', '2'----


// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain:Undefined
// The function is missing a return so LEARN Student will not been assigned to name until a ret 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:--Each number in the array is called or mapped to a new array where their values have been multiplited by 2.
// -----[ 8, 10, 12, 14, 16 ]------


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain:Each number in the onlyOdds array is filter by value, ultimetly looking for any value that is not even but odd.
// -----[ 11, 13, 15 ]-----


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:Javascript
// b) Verify and explain:The console.log is looking at the function myCodingSkills, then the object languages, and then asking what the value of index 0 is.
// ----JavaScript----


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: student: 'George', cohort: 'Bravo', year: 2022 
// b) Verify and explain:The class provided a bluprint for the objects cohort and year but the object for student wasn't assigned until a new object(George) was assigned under another variable learnStudent.
// Learn { student: 'George', cohort: 'Bravo', year: 2022 }

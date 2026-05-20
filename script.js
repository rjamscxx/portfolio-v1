// 1. Store your info in const variables
const fullName = "Robert James Cabansay";
const myLocation = "San Pedro, Laguna, Philippines";
const yearStarted = 2026;
const skills = ["HTML", "CSS", "JavaScript"];
const isHiringReady = false;

// 2. Calculate how many days you've been learning
//    (Day 8 means... you guessed it)
const daysLearning = 8;

// 3. Build a greeting using template literals
const greeting = `Hi, I'm ${fullName} from ${myLocation}.
I've been learning to code for ${daysLearning} days.
Skills so far: ${skills.length} (and counting).`;

// 4. Print it
console.log(greeting);

// 5. BONUS — change the page title dynamically from JS
document.title = `${fullName} | Day ${daysLearning} of Code`;
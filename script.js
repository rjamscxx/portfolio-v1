function greet(name) {
  return "Hello, " + name;
}

greet("Robert");
greet("Maria");

function isEven(n) {
  if (n % 2 === 0) {
  return true;
  } else {
    return false;
  }
}

console.log(isEven(4));    // should print: true
console.log(isEven(7));    // should print: false
console.log(isEven(10));   // should print: true

// 3. Write a function "skillLevel" that takes days of learning
//    and returns:
//      "Beginner"      if days < 30
//      "Intermediate"  if days < 90
//      "Advanced"      otherwise
//
//    HINT: Use if / else if / else

  function skillLevel(days) {
    if (days < 30) {
      return "Beginner";
    } else if (days < 90) {
      return "Intermediate";
    } else {
      return "Advanced";
    }
  }

  console.log(skillLevel(5));     // should print: Beginner
  console.log(skillLevel(45));    // should print: Intermediate
  console.log(skillLevel(120));   // should print: Advanced
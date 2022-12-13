/*
"Loves me, loves me not" is a traditional game in which a person plucks off all the petals of a flower one by one, saying the phrase "Loves me" and "Loves me not" when determining whether the one that they love, loves them back.

Given a number of petals, return a string which repeats the phrases "Loves me" and "Loves me not" for every alternating petal, and return the last phrase in all caps. Remember to put a comma and space between phrases.

Examples
lovesMe(3) ➞ "Loves me, Loves me not, LOVES ME"

lovesMe(6) ➞ "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"

lovesMe(1) ➞ "LOVES ME"
Notes
Remember to return a string.
The first phrase is always "Loves me".
*/

function lovesMe(num) {
  //your code
  let phrase1 = "Loves me";
  let phrase2 = "Loves me not";

  if (num % 2) {
    //odd number
    let sentenceOdd = `${phrase1}, ${phrase2}, `;
    return `${sentenceOdd.repeat(num / 2)}${phrase1.toUpperCase()}`;
  } else {
    //even number
    let sentenceEven = `${phrase1}, ${phrase2}, `;
    let newNum = num / 2;
    let longSentenceEven = `${sentenceEven.repeat(
      newNum - 1
    )}${phrase1}, ${phrase2.toUpperCase()}`;
    return longSentenceEven;
  }
}

exports.solution = lovesMe;

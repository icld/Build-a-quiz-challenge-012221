// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['What instrument has 4 strings?', 'bass'],
  ['What instrument uses sticks?', 'drums'],
  ['What instrument uses a bow?', 'violin'],
  ['What instrument uses a pick?', 'guitar'],
]
let score = 0;
let numCorrect = [];
let numWrong = [];

// 2. Store the number of questions answered correctly

for (let i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);
  if (answer === response) {
    score++;
    numCorrect.push(question);
  } else {
    numWrong.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

let html = `
<h1> You got ${score} correct</h1>
<h2> You got these questions right:</h2>
<ol>
${createListItems(numCorrect)}
</ol>
<h2> You got these questions wrong:</h2>
<ol>
${createListItems(numWrong)}
</ol>
`;

document.querySelector('main').innerHTML = html;


    //   } if (quizQ === `${questions[i][1]}`) {
//     score++;
//     console.log(score)
//   } else {
//     score--;
//     console.log(score)
//   } return score
// }
// console.log(score)



/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/


// 4. Display the number of correct answers to the*/
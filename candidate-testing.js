const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName='';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer;
let candidateAnswer=[];
let questions=["Who was the first American woman in space? ",
            "True or false: 5000 meters = 5 kilometers. ",
            "(5 + 3)/2 * 10 = ? ",
            "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
            "What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride",
"True",
"40",
"Trajectory",
"3"];
let candidateAnswers=[];
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please Enter your name: ")
}
function askQuestion() {
  //  1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //return candidateAnswer = input.question(question);
  let i = 0;
  while (i < questions.length) {
    candidateAnswers[i] = input.question(questions[i]);
    i++;
  }
}

function gradeQuiz(candidateAnswers) {

  //  1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let i = 0;
  let grade = 0;
  let status = ''
  console.log(`Candidate Name: ${candidateName}`);
  while (i < questions.length) {
    
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
      grade += 20;
    } else {
      grade;
    }
    console.log(`${Number([i]) + 1}) ${questions[i]} \n Your answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]} \n `);
    i++;
  }

  if (grade >= 80) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }
  console.log(`>>> Overall Grade: ${grade}% (${grade / 100 * 5} of 5 responses correct) <<< \n>>> Status: ${status} <<<`);

  return grade;
}  

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name // 
  console.log(`Welcome, ${candidateName}`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
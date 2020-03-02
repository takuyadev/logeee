var gameQuestions = [
  {
    statements: "Let's go to Kirby Cafe instead of Pokemon Cafe.",
    question1: {
      questionText: "The service at Pokemon Cafe is better",
      answer: false
    },
    question2: {
      questionText: "The food at Pokemon Cafe is better",
      answer: false
    },
    question3: {
      questionText: "The Kirby Cafe is closed",
      answer: true
    },
    question4: {
      questionText: "The decor at the Pokemon Cafe is better",
      answer: false
    }
  },
  {
    statements: "Let's go to Pokemon Cafe instead of Kirby Cafe",
    question1: {
      questionText: "The Pokemon Cafe is closed",
      answer: true
    },
    question2: {
      questionText: "The service at Kirby Cafe is better",
      answer: false
    },
    question3: {
      questionText: "The decor at the Kirby Cafe is better",
      answer: false
    },
    question4: {
      questionText: "The food at Kirby Cafe is better",
      answer: false
    }
  },
  {
    statements: "Let's go to Pokemon Cafe instead of Kirby Cafe",
    question1: {
      questionText: "The Pokemon Cafe is closed",
      answer: true
    },
    question2: {
      questionText: "The service at Kirby Cafe is better",
      answer: false
    },
    question3: {
      questionText: "The decor at the Kirby Cafe is better",
      answer: false
    },
    question4: {
      questionText: "The food at Kirby Cafe is better",
      answer: false
    }
  },
  {
    statements: "Let's go to Pokemon Cafe instead of Kirby Cafe",
    question1: {
      questionText: "The Pokemon Cafe is closed",
      answer: true
    },
    question2: {
      questionText: "The service at Kirby Cafe is better",
      answer: false
    },
    question3: {
      questionText: "The decor at the Kirby Cafe is better",
      answer: false
    },
    question4: {
      questionText: "The food at Kirby Cafe is better",
      answer: false
    }
  },
  {
    statements: "Let's go to Pokemon Cafe instead of Kirby Cafe",
    question1: {
      questionText: "The Pokemon Cafe is closed",
      answer: true
    },
    question2: {
      questionText: "The service at Kirby Cafe is better",
      answer: false
    },
    question3: {
      questionText: "The decor at the Kirby Cafe is better",
      answer: false
    },
    question4: {
      questionText: "The food at Kirby Cafe is better",
      answer: false
    }
  }
];

// var noPreviousQuestions = [];
var randomGenerator = 0;
var progressBarStatus = 0;
var healthStatus = 3;
startGame();

function startGame() {
  // var randomGenerator = Math.floor(Math.random() * 3);
  document.querySelector(".statement").innerText = gameQuestions[randomGenerator].statements;
  document.querySelector("#question1").innerText = gameQuestions[randomGenerator].question1.questionText;
  document.querySelector("#question2").innerText = gameQuestions[randomGenerator].question2.questionText;
  document.querySelector("#question3").innerText = gameQuestions[randomGenerator].question3.questionText;
  document.querySelector("#question4").innerText = gameQuestions[randomGenerator].question4.questionText;
  // noPreviousQuestions.push(randomGenerator);
}

var varQuestionAnswer = undefined;
function clearAnswer() {
  document.querySelector("#question1").style.border = "5px solid transparent";
  document.querySelector("#question2").style.border = "5px solid transparent";
  document.querySelector("#question3").style.border = "5px solid transparent";
  document.querySelector("#question4").style.border = "5px solid transparent";
}
function questionAnswer1() {
  clearAnswer();
  document.querySelector("#question1").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[randomGenerator].question1.answer;
  console.log(varQuestionAnswer);
}

function questionAnswer2() {
  clearAnswer();
  document.querySelector("#question2").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[randomGenerator].question2.answer;
  console.log(varQuestionAnswer);
}
function questionAnswer3() {
  clearAnswer();
  document.querySelector("#question3").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[randomGenerator].question3.answer;
  console.log(varQuestionAnswer);
}
function questionAnswer4() {
  clearAnswer();
  document.querySelector("#question4").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[randomGenerator].question4.answer;
  console.log(varQuestionAnswer);
}

function initQuestion() {
  if (progressBarStatus == 100) {
    document.write("Finish");
  } else {
    startGame();
    varQuestionAnswer = undefined;
    document.querySelector(".screen").style.display = "none";
    document.querySelector(".btnConfirm").style.display = "none";
  }
}
function confirm() {
  if (healthStatus === 1 && varQuestionAnswer === false) {
    document.querySelector(".questionPage").style.display = "none";
    healthStatus = healthStatus - 1;
    document.querySelector(".healthBarStatus").innerHTML = healthStatus + "/3";
  } else if (varQuestionAnswer === undefined) {
    document.querySelector(".result").innerHTML = "Please Select an answer.";
  } else if (varQuestionAnswer === false) {
    document.querySelector(".result").innerHTML = "Incorrect.";
    healthStatus = healthStatus - 1;
    document.querySelector(".healthBarStatus").innerHTML = healthStatus + "/3";
  } else if (varQuestionAnswer === true) {
    document.querySelector(".result").innerHTML = "Correct!";
    progressBarStatus = progressBarStatus + 20;
    document.querySelector(".screen").style.display = "flex";
    document.querySelector(".btnConfirm").style.display = "flex";
    document.querySelector(".greenBar").style.width = progressBarStatus + "%";
    ++randomGenerator;
  } else {
    document.querySelector(".result").innerHTML = "Please Select an answer.";
  }
}

/*   {
          statements: ,
          question1: ,
          question2: ,
          question3: ,
          question4: ,
          answer: true
        },
        {
          statements: "There",
          question1: "is",
          question2: "not",
          question3: "enough",
          question4: "questions",
          answer: true
        },
  ];*/

// function questionAnswer(n){
//   var blah = n.toString();
//   var varQuestionAnswer = gameQuestions[randomGenerator].question[randomGenerator].answer;
//   console.log(varQuestionAnswer)
//   if (varQuestionAnswer === false){
//     document.querySelector(".result").innerHTML = "Incorrect.";
//   }
// else if(varQuestionAnswer === true){
//   document.querySelector(".result").innerHTML = "Correct!";
// }

// }

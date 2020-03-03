var gameQuestions = [
  {
    statements: "Let's go to Kirby Cafe instead of Pokemon Cafe.",
    reasoning: "deductive reasoning",
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
    reasoning: "inductive reasoning",
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
var questionCounter = 0;
var progressBarStatus = 0;
var healthStatus = 3;
var questionCounterPage = 1;
var practiceQuestion = 1;

// Start Game
startGame();
function startGame() {
  document.querySelector(".reasoning").innerText = gameQuestions[questionCounter].reasoning;
  document.querySelector(".statement").innerText = gameQuestions[questionCounter].statements;
  document.querySelector("#question1").innerText = gameQuestions[questionCounter].question1.questionText;
  document.querySelector("#question2").innerText = gameQuestions[questionCounter].question2.questionText;
  document.querySelector("#question3").innerText = gameQuestions[questionCounter].question3.questionText;
  document.querySelector("#question4").innerText = gameQuestions[questionCounter].question4.questionText;
  if (practiceQuestion === 1) {
    document.querySelector(".questionCount").innerText = "Practice Question";
    document.querySelector(".reasoning").innerText = gameQuestions[questionCounter].reasoning;
    document.querySelector(".statement").innerText = gameQuestions[questionCounter].statements;
    document.querySelector("#question1").innerText = "Practice";
    document.querySelector("#question2").innerText = "Practice";
    document.querySelector("#question3").innerText = "Click on me!";
    document.querySelector("#question4").innerText = "Practice";
  } else if (practiceQuestion === 0) {
    document.querySelector(".questionCount").innerText = "Question " + questionCounterPage;
  }
}

// Questions Program
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
  varQuestionAnswer = gameQuestions[questionCounter].question1.answer;
  console.log(varQuestionAnswer);
}

function questionAnswer2() {
  clearAnswer();
  document.querySelector("#question2").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[questionCounter].question2.answer;
  console.log(varQuestionAnswer);
}
function questionAnswer3() {
  if (practiceQuestion === 1) {
    varQuestionAnswer = true;
  }
  clearAnswer();
  document.querySelector("#question3").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[questionCounter].question3.answer;
  console.log(varQuestionAnswer);
}
function questionAnswer4() {
  clearAnswer();
  document.querySelector("#question4").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[questionCounter].question4.answer;
  console.log(varQuestionAnswer);
}

// Next Question
function initQuestion() {
  if (progressBarStatus == 100) {
    document.write("Finish");
    practiceQuestion = 1;
  } else {
    startGame();
    varQuestionAnswer = undefined;
    document.querySelector(".nextQuestionPage").style.display = "none";
    document.querySelector(".nextQuestionBtn").style.display = "none";
    clearAnswer();
  }
}

//Try Again
function tryAgain() {
  document.querySelector(".incorrectPage").style.display = "none";
  document.querySelector(".tryAgainButton").style.display = "none";
  if (healthStatus == 0) {
    document.querySelector(".questionPage").style.display = "none";
    document.querySelector(".#tryAgainPage").style.display = "flex";
  }
}

// Incorrect and Correct Pages
function incorrectPageShow() {
  document.querySelector(".incorrectPage").style.display = "flex";
  document.querySelector(".tryAgainButton").style.display = "flex";
  if (practiceQuestion == 1) {
    document.querySelector(".result2").innerHTML = "Oops!";
    document.querySelector(".resultsDescription2").innerHTML =
      "Try hovering over the <u> underlined </u> word to see what the definitions are again!";
  } else {
    document.querySelector(".result2").innerHTML = "Oops!";
    document.querySelector(".resultsDescription2").innerHTML =
      "Try hovering over the <u> underlined </u> word to see what the definitions are again!";
    healthStatus = healthStatus - 1;
    document.querySelector(".healthStatus").innerHTML = healthStatus + "/3";
  }
}

function correctPageShow() {
  document.querySelector(".nextQuestionBtn").style.display = "flex";
  document.querySelector(".nextQuestionPage").style.display = "flex";
  if (practiceQuestion == 1) {
    document.querySelector(".result").innerHTML = "You got it!";
    document.querySelector(".resultsDescription").innerHTML =
      "You're ready to go! Beat those questions, I know you can do it!";
    practiceQuestion = 0;
  } else {
    document.querySelector(".result").innerHTML = "You got it!";
    document.querySelector(".resultsDescription").innerHTML = "Way to go champ!";
    progressBarStatus = progressBarStatus + 20;
    document.querySelector(".blueBar").style.width = progressBarStatus + "%";
    ++questionCounter;
    ++questionCounterPage;
  }
}

// Confirm Function
function confirm() {
  if (varQuestionAnswer === false) {
    incorrectPageShow();
  } else if (varQuestionAnswer === true) {
    correctPageShow();
  }
}

function page4(){
    document.querySelector(".questionPage").style.display = "none";
    document.querySelector("#page4Content").style.display = "flex";
  }
  
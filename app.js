// Header Navigation Bar
var Slide_state = 1;
function Slidebar(n) {
  Slide_state = n;
  if (Slide_state === 1) {
    document.querySelector("#navbar_bar").style.left = "3%";
  } else if (Slide_state === 2) {
    document.querySelector("#navbar_bar").style.left = "33%";
  } else if (Slide_state === 3) {
    document.querySelector("#navbar_bar").style.left = "66%";
  }

  //Page Change States
}
function clearPages() {
  document.querySelector("#page1").style.display = "none";
  document.querySelector("#page2").style.display = "none";
  document.querySelector("#page3").style.display = "none";
  document.querySelector("#page4").style.display = "none";
  document.querySelector("#page5").style.display = "none";
}

function nextPage(n) {
  clearPages();
  Slidebar(n);
  document.querySelector("#page" + n).style.display = "none";
  n = n + 1;
  document.querySelector("#page" + n).style.display = "flex";
  document.querySelector("header").style.display = "block";
  document.querySelector("#gameOver").style.display = "none";
  document.querySelector("#congratulations").style.display = "none";
  if (n == 5) {
    document.querySelector("header").style.display = "none";
  }
}

function pageQuestionPage() {
  document.querySelector("#page4Content").style.display = "none";
  document.querySelector(".questionPage").style.display = "flex";
}

//Tab State Change
function inductiveTab() {
  document.querySelector("#inductTab").style.padding = "10px 20px 35px";
  document.querySelector("#inductTab").style.backgroundColor = "#F46969";
  document.querySelector("#inductTab").style.textDecoration = "white underline";
  document.querySelector("#inductTab").style.height = "25 px";
  document.querySelector("#inductTab").style.marginTop = "22px";
  document.querySelector("#inductTab").style.transition = "0.4s";
  document.querySelector("#deductTab").style.padding = "5px 20px 15px";
  document.querySelector("#deductTab").style.backgroundColor = "#AF6262";
  document.querySelector("#deductTab").style.textDecoration = "none";
  document.querySelector("#deductTab").style.height = "22px";
  document.querySelector("#deductTab").style.marginTop = "45px";
  document.querySelector("#deductTab").style.transition = "0.4s";
  document.querySelector("#reasoningHeader").innerHTML = "Inductive Reasoning";
  document.querySelector("#reasoningSubHeading").innerHTML =
    "Opinions over Facts";
  document.querySelector("#reasoningBody").innerHTML =
    "Inductive reasoning is when, instead of arguing with facts, you attempt to convince someone of your beleifs by providing strong opinions that are likely true. <br/> <br/>  While inductive arguments are weaker, as they don't use proven facts, it is rare that we know all the details in every situation. Thus being able to provide convincing points is vital to achieving the outcomes we want";
  document.querySelector(".buttonGray").style.backgroundColor = "#4098D7";
  document.querySelector("#nextPageBlue").style.display = "block";
  document.querySelector("#nextPageGray").style.display = "none";
}

function deductiveTab() {
  document.querySelector("#nextPageBlue").style.display = "none";
  document.querySelector("#inductTab").style.padding = "5px 20px 15px";
  document.querySelector("#inductTab").style.backgroundColor = "#AF6262";
  document.querySelector("#inductTab").style.height = "23 px";
  document.querySelector("#inductTab").style.marginTop = "47px";
  document.querySelector("#inductTab").style.textDecoration = "none";
  document.querySelector("#deductTab").style.padding = "10px 20px 30px";
  document.querySelector("#deductTab").style.backgroundColor = "#F46969";
  document.querySelector("#deductTab").style.textDecoration = "white underline";
  document.querySelector("#deductTab").style.height = "25px";
  document.querySelector("#deductTab").style.marginTop = "22px";
  document.querySelector("#deductTab").style.transition = "0.4s";
  document.querySelector("#reasoningHeader").innerHTML = "Deductive Reasoning";
  document.querySelector("#reasoningSubHeading").innerHTML =
    "Facts over Opinions";
  document.querySelector("#reasoningBody").innerHTML =
    "Deductive reasoning is when a person makes an arguement or decsion by using true facts. <br/> <br/> Deductive reasoning is harder to disprove, as it uses indisputable facts, however, it is a more difficult reasoning to use in everyday life, as it requires you to know all the relevent details of the siutation to successfully argue your point.";
  document.querySelector("#nextPageBlue").style.display = "block";
}

//Game Questions
var gameQuestions = [
  {
    statements: "Let's go to Kirby Cafe instead of Pokemon Cafe.",
    reasoning: "deductive reasoning",
    yesorno: "Yes, because...",
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
    statements: "Should I get the new Nintendo Switch Console over the PS4?",
    reasoning: "deductive reasoning",
    yesorno: "Yes, because...",
    question1: {
      questionText: "It is portable, so we can play anywhere.",
      answer: true
    },
    question2: {
      questionText: "I like the games on it better.",
      answer: false
    },
    question3: {
      questionText: "The controller feels more comfortable.",
      answer: false
    },
    question4: {
      questionText: "The neon colors on it are better.",
      answer: false
    }
  },
  {
    statements: "Cmon, we should play some kickball instead of baseball.",
    reasoning: "deductive reasoning",
    yesorno: "No, because...",
    question1: {
      questionText: "My feet HURT!",
      answer: false
    },
    question2: {
      questionText: "We only have baseball balls right now.",
      answer: true
    },
    question3: {
      questionText: "Kickball is more competitive.",
      answer: false
    },
    question4: {
      questionText: "Kicking is more satisfying than throwing.",
      answer: false
    }
  },
  {
    statements: "I think we should travel to Disneyland in July?",
    reasoning: "inductive reasoning",
    yesorno: "No, because...",
    question1: {
      questionText: "All the flights for that month are booked up",
      answer: false
    },
    question2: {
      questionText: "There are no hotels in the area for us to stay at.",
      answer: false
    },
    question3: {
      questionText: "Our current budget cannot afford the trip this year.",
      answer: false
    },
    question4: {
      questionText: "Mickey Mouse scares me...",
      answer: true
    }
  },
  {
    statements: "Should we go see the new Marvel movie this weekend?",
    reasoning: "inductive reasoning",
    yesorno: "Yes, because...",
    question1: {
      questionText:
        "The movie is playing at a time when we are both available. ",
      answer: false
    },
    question2: {
      questionText: "Marvel movies are the best!",
      answer: true
    },
    question3: {
      questionText:
        "It is playing at our local cinema, so it will be easiest to go to.",
      answer: false
    },
    question4: {
      questionText: "The movie has been getting good reviews from critics. ",
      answer: false
    }
  }
];
var questionCounter = 0;
var progressBarStatus = 0;
var healthStatus = 3;
var questionCounterPage = 1;
var practiceQuestion = 1;
var playedBefore = false;

function restartGame() {
  questionCounter = 0;
  progressBarStatus = 0;
  healthStatus = 3;
  questionCounterPage = 1;
  document.querySelector(".healthStatus").innerHTML = healthStatus + "/3";
  progressBarStatus = progressBarStatus;
  document.querySelector(".blueBar").style.width = progressBarStatus + "%";
  randomizer();
  startGame();
}

function randomizer() {
  gameQuestions.sort(function(a, b) {
    return 0.5 - Math.random();
  });
}
// Start Game
function startGame() {
  document.querySelector(".questionCount").innerText =
    "Question " + questionCounterPage;
  document.querySelector(".reasoning").innerText =
    gameQuestions[questionCounter].reasoning;
  document.querySelector(".statement").innerText =
    gameQuestions[questionCounter].statements;
  document.querySelector("#question1").innerText =
    gameQuestions[questionCounter].question1.questionText;
  document.querySelector("#question2").innerText =
    gameQuestions[questionCounter].question2.questionText;
  document.querySelector("#question3").innerText =
    gameQuestions[questionCounter].question3.questionText;
  document.querySelector("#question4").innerText =
    gameQuestions[questionCounter].question4.questionText;
  if (practiceQuestion === 1) {
    document.querySelector(".questionCount").innerText = "Practice Question";
    document.querySelector(".reasoning").innerText = "Practice!";
    document.querySelector(".statement").innerText = "Practice!";
    document.querySelector("#question1").innerText = "Practice";
    document.querySelector("#question2").innerText = "Practice";
    document.querySelector("#question3").innerText = "Click on me!";
    document.querySelector("#question4").innerText = "Practice";
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
  document.querySelector(".confirm").style.backgroundColor = "#F46969";
  document.querySelector("#question1").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[questionCounter].question1.answer;
  console.log(varQuestionAnswer);
}

function questionAnswer2() {
  clearAnswer();
  document.querySelector(".confirm").style.backgroundColor = "#F46969";
  document.querySelector("#question2").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[questionCounter].question2.answer;
  console.log(varQuestionAnswer);
}
function questionAnswer3() {
  if (practiceQuestion == 1) {
    varQuestionAnswer = true;
  }
  clearAnswer();
  document.querySelector(".confirm").style.backgroundColor = "#F46969";
  document.querySelector("#question3").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[questionCounter].question3.answer;
  console.log(varQuestionAnswer);
}
function questionAnswer4() {
  clearAnswer();
  document.querySelector(".confirm").style.backgroundColor = "#F46969";
  document.querySelector("#question4").style.border = "5px solid #F46969";
  varQuestionAnswer = gameQuestions[questionCounter].question4.answer;
  console.log(varQuestionAnswer);
}

// Next Question
function initQuestion() {
  document.querySelector(".nextQuestionPage").style.display = "none";
  document.querySelector(".nextQuestionBtn").style.display = "none";
  document.querySelector(".confirm").style.backgroundColor = "#B4B4B4";
  if (practiceQuestion == 1) {
    randomizer();
    practiceQuestion = 0;
    startGame();
  }
}

//Try Again
function tryAgain() {
  document.querySelector(".incorrectPage").style.display = "none";
  document.querySelector(".tryAgainButton").style.display = "none";
  if (healthStatus == 0) {
    document.querySelector("#page5").style.display = "none";
    document.querySelector("#gameOver").style.display = "flex";
  }
}

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
  } else {
    document.querySelector(".result").innerHTML = "You got it!";
    document.querySelector(".resultsDescription").innerHTML =
      "Way to go champ!";
    progressBarStatus = progressBarStatus + 20;
    document.querySelector(".blueBar").style.width = progressBarStatus + "%";
    ++questionCounterPage;
    ++questionCounter;
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

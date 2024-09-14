//  use this quizData in your app.
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  // you can add more quiz here
];
let currentQuestion = 0;
let score = 0;
let nos = quizData.length;
function setQuestion() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
  let questionElement = document.getElementById("question");
  const currentQuiz = quizData[currentQuestion];

  questionElement.innerText = currentQuiz.question;
  document.querySelector('label[for="op1"]').innerText = currentQuiz.a;
  document.querySelector('label[for="op2"]').innerText = currentQuiz.b;
  document.querySelector('label[for="op3"]').innerText = currentQuiz.c;
  document.querySelector('label[for="op4"]').innerText = currentQuiz.d;

  var ele = document.getElementsByTagName("input");
  ele[0].value = currentQuiz.a;
  ele[1].value = currentQuiz.b;
  ele[2].value = currentQuiz.c;
  ele[3].value = currentQuiz.d;
}
document.addEventListener("DOMContentLoaded", setQuestion);
function checkAnswer() {
  let chosenOption;
  if (currentQuestion <= (nos-1)) {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const selectedOption = Array.from(radioButtons).find(
      (radio) => radio.checked
    );
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }
    var ele = document.getElementsByTagName("input");
    for (let i = 0; i < nos; i++) {
      if (ele[i].checked === true) {
        chosenOption = ele[i].value;
      }
    }

    // i have to find key of the chosenOption from quizData[currentQuestion]
    let obj = quizData[currentQuestion];
    let a = "",
      b = "";
    const keys = Object.keys(obj);
    for (const key_opt of keys) {
      if (obj[key_opt] === chosenOption) {
        // console.log(key_opt);
        a = key_opt;
      }
    }

    for (const key_ans in obj) {
      if (key_ans === "correct") {
        // console.log(obj[key_ans]);
        b = obj[key_ans];
      }
    }

    if (a === b) {
      // console.log("correct");
      score++;
      // console.log(score);
    } else {
      // console.log("wrong");
    }
    currentQuestion++;
    if (currentQuestion < nos) {
      setQuestion();
    } else {
      showFinalScore();
    }
  }
}

function showFinalScore() {
  document.querySelector(
    "#question"
  ).innerHTML = `<h1>Score : <br> ${score} / ${nos}</h1>`;
  document.querySelector("#questions").innerHTML = "";
  document.querySelector(".container").classList.add("flex");
  document.getElementById("reset").style.display = "flex";
}
function reset() {
  location.href = "http://127.0.0.1:3000/week-3/easy/quiz-app/index.html";
}

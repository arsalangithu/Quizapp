
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDsmWoQzdGpeA6B0Pd32jOe4Dgwr6JinZc",
    authDomain: "quiz-app-7080d.firebaseapp.com",
    projectId: "quiz-app-7080d",
    storageBucket: "quiz-app-7080d.appspot.com",
    messagingSenderId: "735005355326",
    appId: "1:735005355326:web:5b6d83c50845730a3a106f",
    measurementId: "G-X9616YDBLV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




var questions = [

    {
        question: 'what is the difference between XML and HTML?',
        options: ['HTML is used for exchange data , XML is not.', 'XML is used for exchange data , HTML is not.', 'HTML can have user defined tags,XML cannot. ', 'XML can have user defined tags,HTMl cannot.'],
        correctAns: 'XML is used for exchange data , HTML is not.'
    },
    {
        question: 'Opening Tag of HTML is called as ______________.',
        options: ['Closed Tag', 'Starting Tag', 'Forward Tag', 'Ending Tag'],
        correctAns: 'Starting Tag'
    },
    {
        question: 'HTML stands for ________________.',
        options: ['Hyper Text Markup Language', 'Hypo Text Markup Language', 'Hyper Text Marking Language', 'None of these'],
        correctAns: 'Hyper Text Markup Language'
    },
    {
        question: 'HTML program is saved using ____________________ extension',
        options: ['.Htl', '.html', '.hml', '.htlm'],
        correctAns: '.html'
    },
    {
        question: 'HTML program is saved using ____________________ extension',
        options: ['.Htl', '.html', '.hml', '.htlm'],
        correctAns: '.html'
    },
    {
        question: 'HTML program is saved using ____________________ extension',
        options: ['.Htl', '.html', '.hml', '.htlm'],
        correctAns: '.html'
    },
    {
        question: 'HTML program is saved using ____________________ extension',
        options: ['.Htl', '.html', '.hml', '.htlm'],
        correctAns: '.html'
    },
    {
        question: 'HTML program is saved using ____________________ extension',
        options: ['.Htl', '.html', '.hml', '.htlm'],
        correctAns: '.html'
    },
    {
        question: 'HTML program is saved using ____________________ extension',
        options: ['.Htl', '.html', '.hml', '.htlm'],
        correctAns: '.html'
    },

]

var currentQuestion = document.getElementById('currentQuestion')
var totalQuestion = document.getElementById('totalQuestion')
var question = document.getElementById('question')
var answerParent = document.getElementById('answerParent')
var indexNum = 0
var score = 0

function renderQuestion() {
    currentQuestion.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length
    var obj = questions[indexNum]
    question.innerHTML = obj.question
    answerParent.innerHTML = ''
    for (var i = 0; i < obj.options.length; i++) {
        answerParent.innerHTML += `<div class="py-2">
    <button onclick="checkQuestion( '${obj.options[i]}', '${obj.correctAns}')" class="btn btn-dark fs-4 rounded-pill w-100">
    ${obj.options[i]}
    </button>
  </div>
</div>`
    }


}
renderQuestion()

function nextQueestions(){
    indexNum++
    renderQuestion()
}


function checkQuestion(a,b){
    if (a == b){
        score++
        console.log('score')
    }
 nextQueestions()

}
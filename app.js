
//Question bank
var questionBank = [
    {

        question: "What does HTML stand for.?",
        option: ['Hyper Text Preprocessor', 'Hyper Text Multiple Language', 'Hyper Tool Multi Language', 'Hyper Text Markup Language'],
        answer: 'Hyper Text Markup Language'
    },
    {

        question: "What does CSS stand for.?",
        option: ['Common style sheet', 'Cascading style sheet', 'Computer style sheet', 'Colorful style sheet'],
        answer: 'Cascading style sheet'
    },
    {
        question: 'This set of Javascript Multiple Choice Questions & Answers (MCQs) focuses on “Object Attributes and Serialization”.',
        option: ['String', 'Object', 'Variable', 'Serialized Object'],
        answer: 'Object'
    },
    {
        question: 'Which HTML tag is used to define on internal style sheet?',
        option: ['script', 'style', 'html', 'link'],
        answer: 'style'
    },
    {
        question: "In the above syntax, the datatype within the square brackets must be",
        option: ['A String', 'An object', 'An integer', 'A variable'],
        answer: 'A String'
    },
    {
        question: 'Which property is used to change the background color?',
        option: ['backgroundColor', 'BgColor', 'Color-Background', 'background'],
        answer: 'background'
    },
    {
        question: "What does XML stand for.?",
        option: ['eXtensible Markup Language', 'eXecutable Multiple Language', 'eXtra Multi-Program Language', 'eXamine Multiple Language'],
        answer: 'eXtensible Markup Language'
    },
    {
        question: "A linkage of series of prototype objects is called as",
        option: ['prototype stack', 'prototype chain', 'prototype class', 'All of these'],
        answer: 'prototype chain'
    },
    {
        question: 'Which is the correct CSS syntax?',
        option: ['body{color:black;}', 'body[color:black;]', 'body{color=black;}', 'body(color-black,)'],
        answer: 'body{color:black;}'
    },
    {
        question: "In the above snippet, firstname and surname are",
        option: ['properties', 'property values', 'property names', 'property number'],
        answer: 'property names'
    },
    {
        question: "The object has three object attributes namely",
        option1: ['Class, parameters, object’s extensible flag', 'Prototype, class, object’s extensible flag', 'Prototype, class, objects’ parameters', 'None of these'],
        answer: 'Prototype, class, object’s extensible flag'
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option: ['s-/s', 'javascript-/javascript', 'script-/script', 'scripting'],
        answer: 'script-/script'
    },
    {
        question: "What does SQL stand for.?",
        option: ['Stylish Question Language', 'Stylesheet Query Language', 'Statement Question Language', 'Structured Query Language'],
        answer: 'Structured Query Language'
    },
    {
        question: "How to write on IF statement in JavaScript.?",
        option: ['if j == 5', 'if(j == 5)', 'if(j==5)then', 'if j == 5 then,'],
        answer: 'if(j == 5)'
    },
    {

        question: "If you have a function f and an object o, you can define a method named m of o with",
        option: ['o.m=m.f;', 'o.m=f;', 'o=f.m;', 'o.mm=f;'],
        answer: "o.m=m.f;"
    },
    {

        question: " Do functions in JavaScript necessarily return a value ",
        option: ['It is mandatory', 'Not necessary', 'Few functions return values by default', 'It is temporary'],
        answer: "Few functions return values by default"
    },
    {

        question: "How does a WHILE loop start.?",
        option: ['while(i<= 0)', 'while(i<=0; i++)', 'while i <= 0', 'while(i++ i<= 0)'],
        answer: 'while(i <= 0)'
    },
    {

        question: "The basic purpose of the toLocaleString() is to",
        option: ['return a localised object representation', 'return a parsed string', 'return a localized string representation of the object', 'None of these'],
        answer: 'return a localized string representation of the object'
    },
    {

        question: "What does PHP stand for.?",
        option: ['Hypertext Preprocessor', 'Hypertext Programming ', 'Hypertext Preprogramming', 'Hometext Prepeocessor'],
        answer: 'Hypertext Preprocessor'
    },
    {

        question: "How do you insert a comment in a HTML file.?",
        option: ['/*This is comment*/', '//This is comment', '!--This is comment--', '====This is comment===='],
        answer: '!--*This is comment---'
    },
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    }
    else {
        // points.innerHTML = score + '/' + questionBank.length;
        points.innerHTML = score/questionBank.length*100 + "%";
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
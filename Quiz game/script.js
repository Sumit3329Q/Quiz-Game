let quizData=[
    {
    question:"what is the fullform of CSS?",
    a:"Central Style Sheets",
    b:"Cascading Style Sheets",
    c:"Carotid Sinus Syndrome",
    d:"Community Support Services",
    correct:"b",
},
{
    question:"What year was javaScript language?",
    a:"1996",
    b:"1995",
    c:"1874",
    d:"none of the above",
    correct:"b",
},
{
    question:"Which language runs in a web browser?",
    a:"Java",
    b:"C++",
    c:"Python",
    d:"javascript",
    correct:"d",
},
{
    question:"What is the fullform of HTML?",
    a:"Hypertext Markup Language",
    b:"Hypertext Markdown Language",
    c:"Hyperloop Machine Language",
    d:"Helicopters Terminals Motorboats Launched",
    correct:"a",
}
];

const quiz=document.getElementById('quiz');
const answerElement=document.querySelectorAll('.answer');
const questionEle=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let Score=0;

loadQuiz()


function loadQuiz(){
    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]

    questionEle.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}
function deselectAnswers(){
    answerElement.forEach(answerEle=> answerEle.checked= false)
}
function getselected(){
    let answerEle
    answerElement.forEach(answerEle=>{
        if(answerEle.checked){
            answer=answerEle.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer=getselected()
    if(answer){
        if (answer===quizData[currentQuiz].correct){
            Score++
        }
    currentQuiz++

    if(currentQuiz<quizData.length){
        loadQuiz()
    }else {
        quiz.innerHTML=`
        <h2> You answered ${Score}/${quizData.length} questions correctly</h2>
        
        <button onclick="location.reload()">Reload</button>
        `
    }
    }
})
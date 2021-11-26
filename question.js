var quizNum = 1;
var problemList = [1, 2, 3, 4, 5];
var answer;

let answer_info = []; // for local_storage and algorithm for recommendation

function save_answer(){
  localStorage.setItem("answer_info", JSON.stringify(answer_info))
}
function load_answer() {

  let loaded_answer = localStorage.getItem("answer_info")
    if(!loaded_answer){
        return;
    }
    answer_info = JSON.parse(loaded_answer);
}
function loading(answers){

}
function shuffeQuestion(){
  let currentIndex = problemList.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [problemList[currentIndex], problemList[randomIndex]] = [problemList[randomIndex], problemList[currentIndex]];
  }
  showInfo();
  console.log(problemList);
}

function showQuizNum(){
  document.getElementById("quiznumber").innerHTML="Question "+quizNum+"/4";
}

function showProblem(number){
  var question;
  var choiceA, choiceB, choiceC, choiceD;
  switch(number){
    case 1:
      question = "Purpose of designing the Javascript";
      choiceA = "To Perform Server Side Scripting Operation";
      choiceB = "To add interactively to HTML Pages";
      choiceC = "To Style HTML Pages";
      choiceD = "All of the above";
      answer = 1;
      break;
    case 2:
      question = "Why so Javascript and Java have similar name?";
      choiceA = "They both originated on the island of Java";
      choiceB = "Javascript's syntax is loosely based on Java's";
      choiceC = "Both A and B";
      choiceD = "None of the above";
      answer = 1;
      break;
    case 3:
      question = "Original Name of Javascript is";
      choiceA = "Mocha";
      choiceB = "Livescript";
      choiceC = "Escript";
      choiceD = "Javascript";
      answer = 0;
      break;
    case 4:
      question = "Which type of language is Javascript";
      choiceA = "Programming";
      choiceB = "Scripting";
      choiceC = "Markup";
      choiceD = "None of the above";
      answer = 1;
      break;
    case 5:
      question = "Which is not valid data type in Javascript";
      choiceA = "Undefinded";
      choiceB = "Boolean";
      choiceC = "float";
      choiceD = "Number";
      answer = 2;
      break;
  }
  document.getElementById("question").innerHTML=question;
  document.getElementById("choiceA").innerHTML=choiceA;
  document.getElementById("choiceB").innerHTML=choiceB;
  document.getElementById("choiceC").innerHTML=choiceC;
  document.getElementById("choiceD").innerHTML=choiceD;
}

function go_to_back_problem(){ // go to back and delete answer in local storage.
  
  
  for( var i = 0 ; i < answer_info.length; i++){
    if(answer_info[i].problem_number === quizNum-1){
      answer_info.splice(i,1);
    }
  }
  save_answer();

  if(quizNum == 1){
    location.href = "index.html"
    return;
  }

  quizNum--;
  let px = 50 * quizNum;
  px = px + "px";
  document.getElementsByClassName("box1")[0].style.width=px;
  
  
  showInfo();
}
function go_to(Num){
  quizNum = Num;

  let px = 50 * quizNum;
  px = px + "px";
  document.getElementsByClassName("box1")[0].style.width=px;
  showInfo();
}

// when users clicked a answer of questions, call the CheckAnswer(i) : i is a answer number.
function checkAnswer(number){
  let user_answer = { 
    problem_number : quizNum,
    user_clicked : number
  }
  for( var i = 0 ; i < answer_info.length; i++){ // if users click the problems number directly, there are some duplicate so delete it.
    if(answer_info[i].problem_number === quizNum){
      answer_info.splice(i,1);
    }
  }
  answer_info.push(user_answer);
  save_answer();

  console.log(number);
  var choice = [document.getElementsByClassName("text")[0],
                document.getElementsByClassName("text")[1],
                document.getElementsByClassName("text")[2],
                document.getElementsByClassName("text")[3]]

  if(number == answer){
    choice[number].style.backgroundColor="green";
  }
  else {
    choice[number].style.backgroundColor="red";
  }
  if (quizNum < 4){
    setTimeout(function() {
      quizNum++;
      choice[number].style.backgroundColor="white";
      let px = 50 * quizNum;
      px = px + "px";
      document.getElementsByClassName("box1")[0].style.width=px;
      showInfo();
    }, 100);
    
  } else {
    setTimeout(function() {
      location.href="analyze.html";
    }, 1500);
  }
}

function showInfo(){
  showQuizNum();
  showProblem(problemList[quizNum-1]);
}

// window.onload = shuffeQuestion;

window.addEventListener("load", () => {
  load_answer();

  shuffeQuestion();

})

var quizNum = 1;
var problemList = [1, 2, 3, 4, 5];
var answer;

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

function checkAnswer(number){
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
      if (quizNum == 1){
        document.getElementsByClassName("box1")[0].style.width="50px";
      } else if (quizNum == 2){
        document.getElementsByClassName("box1")[0].style.width="100px";
      } else if (quizNum == 3) {
        document.getElementsByClassName("box1")[0].style.width="150px";
      } else if (quizNum == 4) {
        document.getElementsByClassName("box1")[0].style.width="202px";
      }
      showInfo();
    }, 1500);
  } else {
    setTimeout(function() {
      location.href="result.html";
    }, 1500);
  }
}

function showInfo(){
  showQuizNum();
  showProblem(problemList[quizNum-1]);
}

window.onload = shuffeQuestion;

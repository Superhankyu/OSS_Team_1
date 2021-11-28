var quizNum = 1;
var problemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let answer_info = []; // for local_storage and algorithm for recommendation
var max_num = 1;

function save_answer() {
  localStorage.setItem("answer_info", JSON.stringify(answer_info))
}

function load_answer() {

  let loaded_answer = localStorage.getItem("answer_info");
  if (!loaded_answer) {
    return;
  }
  answer_info = JSON.parse(loaded_answer);
}

function showQuizNum() {
  document.getElementById("quiznumber").innerHTML = "Question " + quizNum + "/15";
}

function showProblem(number) {
  var question;
  var choiceA, choiceB;
  switch (number) {
    case 1:
      question = "당신은 열심히 수업을 듣고 난 후 학교 근처 맛집에서 친구들과 밥을 먹기로 했습니다. 그리고 식당에 도착한 뒤, 당신은?";
      choiceA = "주변을 둘러보니 12번 테이블 자리가 비어 있다. 저 자리로 걸어가 앉는다.";
      choiceB = "점원에게 가서 말한다. ‘네 명 앉을 자리 있나요?’";
      break;
    case 2:
      question = "기분 좋게 식사를 마치고 나오면 어느 한 외국인이 길을 물어옵니다. 영어가 서툰 당신은 만능 구글 번역기를 사용하기로 합니다.";
      choiceA = "“그러니까… 직진해서 간다가 뭐지? 고 스트레잇 원블락 앤드….” 문장을 하나씩 번역해가면서 길을 알려준다.";
      choiceB = "‘한 블록 직진해서 간 다음에, 오른쪽으로 돌아서 보이는 은행 반대편에 있다고 말하면 되겠지.’ 설명할 말들은 모두 적은 후에 한꺼번에 번역해서 길을 알려준다.";
      break;
    case 3:
      question = "외국인은 친절한 당신에게 고맙다는 인사를 하고 갑니다. 밥 먹고 나서는 커피 한 잔 하는 게 국룰이죠. 당신은 자판기 앞에 섭니다. 이 자판기는…";
      choiceA = "'나는 돈을 가지고 있고 자판기는 캔커피를 가지고 있으니까 내가 하는 일은 돈을 넣어서 캔커피를 받는 일이고 자판기가 하는 일은 돈을 검사해서 캔커피를 주는 거겠네.' 각각의 주어진 기능을 수행한다.";
      choiceB = "'내가 지폐투입구에 돈을 넣으면 자판기가 검사를 해서 캔커피와 잔돈을 꺼내주고...' 절차적으로 작동한다.";
      break;
    case 4:
      question = "당신은 자판기 커피를 마시며 문득 생각에 잠깁니다. 졸업 논문 때문에 교수님을 찾아 뵈어야 하는데… 당신의 지도 교수님은?";
      choiceA = "‘라떼는 말이야~’ 뭐 하나 이슈가 생기면 일일이 보고 해야 하는 라떼 같은 분이시다.";
      choiceB = "‘하고 싶은 거 다 해봐~’ 너무 풀어주셔서 가끔은 뭘 해야 할지 모르게 만드시는 자유로운 영혼 같은 분이시다.";
      break;
    case 5:
      question = "그러고 보니 요즘 코딩이 그렇게 핫하던데… 최근 당신의 눈길이 가는 분야는?";
      choiceA = "사용자 인터페이스와 디자인을 담당하는 프론트엔드 개발";
      choiceB = "API개발 및 데이터베이스, 서버, 클라우드를 관리하는 백엔드 개발";
      break;
    case 6:
      question = "그래, 너로 정했다! 어디 한번 코딩에 도전해볼까?";
      choiceA = "무작정 hello world!부터 출력해본다.";
      choiceB = "포인터? 메모리 할당? 생소한 프로그래밍 용어부터 찾아본다.";
      break;
    case 7:
      question = "뭘하든 장비가 중요하지. 코딩 공부를 시작하기에 앞서 멋진 키보드를 하나 장만하려고 합니다. 당신의 선택은?";
      choiceA = "잘 팔리는 게 좋은 거 아니겠어. 판매순위가 높은 제품을 산다.";
      choiceB = "사람들이 남긴 리뷰를 확인해가며 평가가 좋은 제품을 산다.";
      break;
    case 8:
      question = "근데 이 키보드, 옵션으로 추가할 수 있는 악세사리가 엄청 많습니다.";
      choiceA = "나중에 필요할 일이 생길지도 모르니 이것저것 다양한 옵션을 추가한다.";
      choiceB = "키보드가 타자만 잘 쳐지면 되지. 그외 부가적인 기능은 상관없다.";
      break;
    case 9:
      question = "고민 끝에 키보드를 주문하고 다시 자리에 앉습니다. 당신의 책상 위를 보면?";
      choiceA = "모든 물건이 딱딱 제 자리에 정리되어 있다.";
      choiceB = "조금 어지럽혀져 있어도 필요한 건 다 있다.";
      break;
    case 10:
      question = "아니? 방바닥에 굴러다니는 먼지도 눈에 들어옵니다. 청소를 할 때 당신은?";
      choiceA = "내 손으로 직접 구석구석 청소기로 청소를 해야 직성이 풀린다.";
      choiceB = "21세기를 살아가는 현대인이라면 자동화의 이점을 누려야지. 로봇 청소기 최고!";
      break;
    case 11:
      question = "쇠뿔도 단김에 빼라는데. 생각난 김에 화장실 청소도 하기로 합니다. 어디 보자...";
      choiceA = "락스 하나만 있으면 충분하지.";
      choiceB = "물때는 이게 잘 지워지고, 찌든때는 저게 잘 지워지던데. 용도별로 세제가 구비되어있다.";
      break;
    case 12:
      question = "그러던 중에 슬슬 배가 고파집니다. 컵라면을 끓여먹는 당신은?";
      choiceA = "대충 다 익은 것 같은데? 설익은 면을 먹는다.";
      choiceB = "참을성 있게 3분을 다 기다려서 먹는다.";
      break;
    case 13:
      question = "컵라면을 먹으며 TV를 보고 있으면 마침 인공지능에 관한 뉴스가 지나갑니다. 당신의 반응은?";
      choiceA = "인공지능으로 저런 것도 가능하구나! 마구 관심이 간다.";
      choiceB = "오... 그렇구나. 나와는 다른 세계의 이야기다.";
      break;
    case 14:
      question = "뉴스가 끝나고 패션 광고가 나옵니다. 요즘은 저런 옷이 트렌드라던데...";
      choiceA = "나는 유행에 민감한 편이다.";
      choiceB = "무작정 유행을 따르기보다는 옷은 편안한 게 제일이다.";
      break;
    case 15:
      question = "벌써 마지막 문항이라고? 어떤 결과가 나올까?";
      choiceA = "무슨 결과가 나오든 내 마음에 드는 프로그래밍 언어를 배우고 싶다.";
      choiceB = "이왕 테스트 해본 거 나에게 맞는 프로그래밍 언어라고 생각하고 배워볼 의향이 있다.";
      break;
  }
  document.getElementById("question").innerHTML = question;
  document.getElementById("choiceA").innerHTML = choiceA;
  document.getElementById("choiceB").innerHTML = choiceB;
}

function go_to_back_problem() { // go to back and delete answer in local storage.

  for (var i = 0; i < answer_info.length; i++) {
    if (answer_info[i].problem_number === quizNum - 1) {
      answer_info.splice(i, 1);
    }
  }
  save_answer();

  if (quizNum == 1) {
    location.href = "index.html"
    localStorage.removeItem("answer_info");
    return;
  }

  quizNum--;
  let px = 20 * quizNum;
  px = px + "px";
  document.getElementsByClassName("box1")[0].style.width = px;
  showInfo();
}

function go_to(Num) {
  if (Num > max_num) {
    return;
  }
  quizNum = Num;

  let px = 20 * quizNum;
  px = px + "px";
  document.getElementsByClassName("box1")[0].style.width = px;
  showInfo();
}

// when users clicked a answer of questions, call the CheckAnswer(i) : i is a answer number.
function checkAnswer(number) {
  let user_answer = {
    problem_number: quizNum,
    user_clicked: number
  }
  for (var i = 0; i < answer_info.length; i++) { // if users click the problems number directly, there are some duplicate so delete it.
    if (answer_info[i].problem_number === quizNum) {
      answer_info.splice(i, 1);
    }
  }
  answer_info.push(user_answer);
  save_answer();

  console.log(number);
  var choice = [document.getElementsByClassName("text")[0],
    document.getElementsByClassName("text")[1]
  ]

  choice[number].style.backgroundColor = "orange";

  document.getElementsByClassName("problems")[quizNum].className += ' checked';

  if (quizNum < 15) {
    setTimeout(function() {
      if (max_num === quizNum) {
        max_num++;
      }
      quizNum++;
      choice[number].style.backgroundColor = "white";
      let px = 20 * quizNum;
      px = px + "px";
      document.getElementsByClassName("box1")[0].style.width = px;
      showInfo();
    }, 1000);

  } else {

    setTimeout(function() {
      location.href = "analyze.html";
    }, 1000);
  }
}

function showInfo() {
  showQuizNum();
  showProblem(problemList[quizNum - 1]);
}

window.addEventListener("load", () => {
  load_answer();
  showInfo();
})

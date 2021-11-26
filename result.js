let calculation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//the element in weightList represent C, C++, C#, JAVA, Javascript, Python, Kotlin, Swift, Ruby, Go, Scala, Rust, PHP, Typescript, Racket in order.
var weightList = [[7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],//Q1-A1
                  [0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Q1-A2
                  [0, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0],//Q2-A1
                  [3, 3, 3, 3, 0, 0, 3, 3, 0, 3, 3, 3, 0, 3, 3],//Q2-A2
                  [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],//Q3-A1
                  [3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0],//Q3-A2
                  [5, 5, 5, 5, 0, 0, 5, 5, 0, 5, 5, 5, 0, 5, 0],//Q4-A1
                  [0, 0, 0, 0, 5, 5, 0, 0, 5, 0, 0, 0, 5, 0, 5],//Q4-A2
                  [0, 0, 0, 0, 5, 0, 5, 5, 0, 0, 0, 5, 0, 5, 0],//Q5-A1
                  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],//Q5-A2
                  [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 0],//Q6-A1
                  [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3],//Q6-A2
                  [5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0],//Q7-A1
                  [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5],//Q7-A2
                  [3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 3, 3, 0, 3],//Q8-A1
                  [0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 3, 0],//Q8-A2
                  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Q9-A1
                  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],//Q9-A2
                  [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],//Q10-A1
                  [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3],//Q10-A2
                  [3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 0, 3, 3],//Q11-A1
                  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0],//Q11-A2
                  [3, 3, 3, 3, 3, 0, 3, 3, 0, 3, 3, 3, 0, 3, 0],//Q12-A1
                  [0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 3],//Q12-A2
                  [7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0],//Q13-A1
                  [0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7],//Q13-A2
                  [0, 0, 5, 0, 0, 0, 5, 5, 0, 5, 5, 5, 0, 5, 0],//Q14-A1
                  [5, 5, 0, 5, 5, 5, 0, 0, 5, 0, 0, 0, 5, 0, 5],//Q14-A2
                  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Q15-A1
                  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]]//Q15-A2

function load_answer() {

    let loaded_answer = localStorage.getItem("answer_info")
      if(!loaded_answer){
          return;
      }
      answer_info = JSON.parse(loaded_answer);
}

function showResult(number, place){
    var LanguageType;
    var percent, explain;
    switch(number){
      case 1:
        LanguageType = "C Language";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 2:
        LanguageType = "C++";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 3:
        LanguageType = "C#";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 4:
        LanguageType = "JAVA";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 5:
        LanguageType = "Javascript";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 6:
        LanguageType = "Python";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 7:
        LanguageType = "Kotlin";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 8:
        LanguageType = "Swift";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 9:
        LanguageType = "Ruby";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 10:
        LanguageType = "Go";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 11:
        LanguageType = "Scala";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 12:
        LanguageType = "Rust";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 13:
        LanguageType = "PHP";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 14:
        LanguageType = "Typescript";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
      case 15:
        LanguageType = "Racket";
        percent = "프로그래밍 언어 사용자의 n%가 이 언어를 사용합니다.";
        explain = "설명";
        break;
    }
   
    let a = "PL"+place;
    let b = "user_percentage"+place;
    let c = "recommend"+place;
    document.getElementById(a).innerHTML=LanguageType;
    document.getElementById(b).innerHTML=percent;
    document.getElementById(c).innerHTML=explain;
    }


window.addEventListener("load", () => {
    load_answer();

    for( var i = 0 ; i < answer_info.length; i++){
        if(answer_info[i].user_clicked === 0){
          for( var j = 0 ; j < answer_info.length; j++){
            calculation[j] += weightList[2*i][j];
          }
        }
        else {
            for( var j = 0 ; j < answer_info.length; j++){
                calculation[j] += weightList[2*i+1][j];
              }
        }
    }

    //get idxs of hightest score in array 'calculation' 
    var sorted_idx = Array.from(Array(calculation.length).keys())
        .sort((a, b) => calculation[a] < calculation[b] ? -1 : (calculation[b] < calculation[a]) | 0)
    sorted_idx.splice(0, 12);
    sorted_idx.reverse();

    showResult(sorted_idx[0], 1);
    showResult(sorted_idx[1], 2);
    showResult(sorted_idx[2], 3);
    



    
   









  })
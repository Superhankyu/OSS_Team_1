let calculation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//the element in weightList represent C, C++, C#, JAVA, Javascript, Python, Kotlin, Swift, Ruby, Go, Scala, Rust, PHP, Typescript, Racket in order.
var weightList = [
  [7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], //Q1-A1
  [0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Q1-A2
  [0, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0], //Q2-A1
  [3, 3, 3, 3, 0, 0, 3, 3, 0, 3, 3, 3, 0, 3, 3], //Q2-A2
  [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //Q3-A1
  [3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0], //Q3-A2
  [5, 5, 5, 5, 0, 0, 5, 5, 0, 5, 5, 5, 0, 5, 0], //Q4-A1
  [0, 0, 0, 0, 5, 5, 0, 0, 5, 0, 0, 0, 5, 0, 5], //Q4-A2
  [0, 0, 0, 0, 5, 0, 5, 5, 0, 0, 0, 5, 0, 5, 0], //Q5-A1
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], //Q5-A2
  [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 0], //Q6-A1
  [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3], //Q6-A2
  [5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0], //Q7-A1
  [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5], //Q7-A2
  [3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 3, 3, 0, 3], //Q8-A1
  [0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 3, 0], //Q8-A2
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Q9-A1
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], //Q9-A2
  [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0], //Q10-A1
  [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3], //Q10-A2
  [3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 0, 3, 3], //Q11-A1
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0], //Q11-A2
  [3, 3, 3, 3, 3, 0, 3, 3, 0, 3, 3, 3, 0, 3, 0], //Q12-A1
  [0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 3], //Q12-A2
  [7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0], //Q13-A1
  [0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7], //Q13-A2
  [0, 0, 5, 0, 0, 0, 5, 5, 0, 5, 5, 5, 0, 5, 0], //Q14-A1
  [5, 5, 0, 5, 5, 5, 0, 0, 5, 0, 0, 0, 5, 0, 5], //Q14-A2
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Q15-A1
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]  //Q15-A2
]

function load_answer() {
  let loaded_answer = localStorage.getItem("answer_info")
  if (!loaded_answer) {
    return;
  }
  answer_info = JSON.parse(loaded_answer);
}

function showResult(number, place) {
  var languageType, img_path;
  switch (number) {
    case 1:
      languageType = "C";
      img_path = "assets/C_logo.png"
      break;
    case 2:
      languageType = "C++";
      img_path = "assets/C++_logo.png"
      break;
    case 3:
      languageType = "C#";
      img_path = "assets/Csharp_logo.png"
      break;
    case 4:
      languageType = "JAVA";
      img_path = "assets/Java_logo.png"
      break;
    case 5:
      languageType = "Javascript";
      img_path = "assets/Javascript_logo.png"
      break;
    case 6:
      languageType = "Python";
      img_path = "assets/Python_logo.png"
      break;
    case 7:
      languageType = "Kotlin";
      img_path = "assets/Kotlin_logo.png"
      break;
    case 8:
      languageType = "Swift";
      img_path = "assets/Swift_logo.png"
      break;
    case 9:
      languageType = "Ruby";
      img_path = "assets/Ruby_logo.png"
      break;
    case 10:
      languageType = "Go";
      img_path = "assets/Go_logo.png"
      break;
    case 11:
      languageType = "Scala";
      img_path = "assets/Scala_logo.png"
      break;
    case 12:
      languageType = "Rust";
      img_path = "assets/Rust_logo.png"
      break;
    case 13:
      languageType = "PHP";
      img_path = "assets/PHP_logo.png"
      break;
    case 14:
      languageType = "Typescript";
      img_path = "assets/Typescript_logo.png"
      break;
    case 15:
      languageType = "Racket";
      img_path = "assets/Racket_logo.png"
      break;
  }

  let a = "PL" + place;
  let b = "recommend_img_" + place;

  document.getElementById(a).innerHTML = languageType;
  document.getElementById(b).src = img_path;
}

function reset_test() {
  localStorage.removeItem("answer_info");
}

window.addEventListener("load", () => {
  load_answer();

  for (var i = 0; i < answer_info.length; i++) {
    if (answer_info[i].user_clicked === 0) {
      for (var j = 0; j < answer_info.length; j++) {
        calculation[j] += weightList[2 * i][j];
      }
    } else {
      for (var j = 0; j < answer_info.length; j++) {
        calculation[j] += weightList[2 * i + 1][j];
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
});

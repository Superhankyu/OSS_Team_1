



window.addEventListener("load" , () =>
{   
    setTimeout(function(){
        document.getElementById("result_3").textContent = "4초남음"
        setTimeout(function(){
            document.getElementById("result_3").textContent = "3초남음"
        }, 1000);
        setTimeout(function(){
            document.getElementById("result_3").textContent = "2초남음"
        }, 2000);
        setTimeout(function(){
            document.getElementById("result_3").textContent = "1초남음"
        }, 3000);
        setTimeout(function(){
            document.getElementById("result_1").textContent = ""
            document.getElementById("result_2").textContent = ""
            document.getElementById("result_3").textContent = "분석이 완료되었습니다!"
            document.getElementById("result_4").textContent = "결과 보러 가기"
        }, 4000);
    }, 1000);
    

    setTimeout(function(){
        document.getElementById("an").src = "assets/complete.jpg"
    }, 5000);

}
)
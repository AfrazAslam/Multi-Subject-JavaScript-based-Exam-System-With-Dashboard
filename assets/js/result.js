var check = [0, 0, 0, 0];
var fail = false;
var quiz1 = ((JSON.parse(localStorage.getItem("quiz1")))* 100) / 20;
var quiz2 = ((JSON.parse(localStorage.getItem("quiz2")))* 100) / 30;
var quiz3 = ((JSON.parse(localStorage.getItem("quiz3")))* 100) / 10;
var quiz4 = ((JSON.parse(localStorage.getItem("quiz4")))* 100) / 20;
var quiz5 = ((JSON.parse(localStorage.getItem("quiz5")))* 100) / 20;



function resultCheck(){
       
//Checking For the result of the first quiz1
    if (quiz1 > 70) {
        document.getElementById('quiz11').innerHTML = "Introduction To Financial Services And Products";
        check[0] += 1;
    } else if (quiz1 > 60 && quiz1 < 70) {
        document.getElementById('quiz12').innerHTML = "Introduction To Financial Services And Products";
        check[1] += 1;
    } else if (quiz1 > 50 && quiz1 < 60) {
        document.getElementById('quiz13').innerHTML = "Introduction To Financial Services And Products";
        check[2] += 1;
    } else if (quiz1 > 40 && quiz1 < 50) {
        document.getElementById('quiz14').innerHTML = "Introduction To Financial Services And Products";
        check[4] += 1;
    } else if (quiz1 < 40) {
        document.getElementById('fail1').innerHTML = "Introduction To Financial Services And Products";
        fail = true;
    }

//Checking For the result of the first quiz2

    if (quiz2 > 70) {
        document.getElementById('quiz21').innerHTML = "Introduction To Mutual Funds";
        check[0] +=1;
    } else if(quiz2 > 60 && quiz2 < 70) {
    document.getElementById('quiz22').innerHTML="Introduction To Mutual Funds";
    check[1] +=1;
    } else if (quiz2 > 50 && quiz2 < 60) {
    document.getElementById('quiz23').innerHTML="Introduction To Mutual Funds";
    check[2] +=1;
    } else if (quiz2 > 40 && quiz2 < 50){
    document.getElementById('quiz24').innerHTML="Introduction To Mutual Funds";
    check[3] +=1;
    } else if ( quiz2 < 40 ) {
        document.getElementById('fail2').innerHTML ="Introduction To Mutual Funds";
        fail = true;
    }



//Checking For the result of the first quiz3

if(quiz3>70){
    document.getElementById('quiz31').innerHTML="Regulatory Framework";
    check[0] +=1;
}else if(quiz3>60 &&quiz3<70){
    document.getElementById('quiz32').innerHTML="Regulatory Framework";
    check[1] +=1;
}else if(quiz3>50 &&quiz3<60){
    document.getElementById('quiz33').innerHTML="Regulatory Framework";
    check[2] +=1;
}else if(quiz3>40 &&quiz3<50){
    document.getElementById('quiz34').innerHTML="Regulatory Framework";
    check[3] +=1;
}else if(quiz3<40){
    document.getElementById('fail3').innerHTML = "Regulatory Framework";
    fail = true;
}



//Checking For the result of the first quiz4

if(quiz4>70){
    document.getElementById('quiz41').innerHTML="Funds, Features and Mechnics";
    check[0] +=1;
}else if(quiz4>60 &&quiz4<70){
    document.getElementById('quiz42').innerHTML="Funds, Features and Mechnics";
    check[1] +=1;
}else if(quiz4>50 &&quiz4<60){
    document.getElementById('quiz43').innerHTML="Funds, Features and Mechnics";
    check[2] +=1;
}else if(quiz4>40 &&quiz4<50){
    document.getElementById('quiz44').innerHTML="Funds, Features and Mechnics";
    check[3] +=1;
}else if(quiz4<40){
    document.getElementById('fail4').innerHTML = "Funds, Features and Mechnics";
    fail =true;
}


//Checking For the result of the first quiz5

if(quiz5>70){
    document.getElementById('quiz51').innerHTML="Ethics, Disclosure and Best Practices";
    check[0] +=1;
}else if(quiz5>60 &&quiz5<70){
    document.getElementById('quiz52').innerHTML="Ethics, Disclosure and Best Practices";
    check[1] +=1;
}else if(quiz5>50 &&quiz5<60){
    document.getElementById('quiz53').innerHTML="Ethics, Disclosure and Best Practices";
    check[2] +=1;
}else if(quiz5>40 &&quiz5<50){
    document.getElementById('quiz54').innerHTML="Ethics, Disclosure and Best Practices";
    check[3] +=1;
}else if(quiz5<40){
    document.getElementById('fail5').innerHTML ="Ethics, Disclosure and Best Practices";
    fail =true;
}

}



function Result(){   
    resultCheck();
    document.getElementById("resultoverlay").style.display = "block";

  if ( fail ==true){
    document.getElementById("resultstatus").innerHTML = "Fail";
  }else{
    document.getElementById("resultstatus").innerHTML = "Pass";

  }
if(check[0]>0 && check[1]<3 && check[2]<3 && check[3]< 1){
  fail = false;
}
}
function exitResult(){
  document.getElementById("resultoverlay").style.display = "none";
}


										var usrname = localStorage.getItem('username');
										var scoreQ1 = JSON.parse(localStorage.getItem("quiz1"));
										var scoreQ2 = JSON.parse(localStorage.getItem("quiz2"));
										var scoreQ3 = JSON.parse(localStorage.getItem("quiz3"));
										var scoreQ4 = JSON.parse(localStorage.getItem("quiz4"));
										var scoreQ5 = JSON.parse(localStorage.getItem("quiz5"));
										var scoreFinal;
//Assigning Values to the AdminPannel;
												window.onload = function(){
													  document.getElementById("resultoverlay").style.display = "none";
													if(usrname==null){
														nameon();
													}else{
														document.getElementById('title').innerHTML = usrname;
													}
													if(scoreQ1){
												 		document.getElementById("marksq1").innerHTML = scoreQ1;
											 		}
											 		if(scoreQ2 != null){
														document.getElementById("marksq2").innerHTML = scoreQ2;
											 		}
													if(scoreQ3 != null){
											 			document.getElementById("marksq3").innerHTML = scoreQ3;
										 	 		}
										 			if(scoreQ4 != null){
														document.getElementById("marksq4").innerHTML = scoreQ4;
											 		}
											 		if(scoreQ5 != null){
										 	 			document.getElementById("marksq5").innerHTML = scoreQ5;
									 		 		}
												}
												function logincheck(){
														usrname = document.getElementById("stdname").value;
														document.getElementById('title').innerHTML = usrname;
														if(usrname.length!=0){
															localStorage.setItem("username",usrname);
															nameoff();
														}else {
															alert("Enter A userName");
														}
												}


												function nameon() {
													document.getElementById("overlay").style.display = "block";
												}

												function nameoff() {
													document.getElementById("overlay").style.display = "none";
												}




function logout(){
	localStorage.clear();
	window.location.href = "index.html";

}
document.addEventListener('DOMContentLoaded', function() {
   // your code here

var doughnutData = [
		{
			value: ((scoreQ1+scoreQ2+scoreQ3+scoreQ4+scoreQ5)/100)*100,
			color:"#68dff0"
		},
		{
			value : 100-(((scoreQ1+scoreQ2+scoreQ3+scoreQ4+scoreQ5)/100)*100),
			color : "#fdfdfd"
		}
	];
	document.getElementById("Percentage").innerHTML = ((scoreQ1+scoreQ2+scoreQ3+scoreQ4+scoreQ5)/100)*100;
	var myDoughnut = new Chart(document.getElementById("serverstatus01").getContext("2d")).Doughnut(doughnutData);
}, false);

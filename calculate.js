var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

 function testFunction(){
 	var MAX, AP,A, AM, BP, B, BM, CP, C, CM, D, F;
 	MAX = document.getElementById('MAX').value;
 	AP = document.getElementById('AP').value;
 	A = document.getElementById('A').value;
 	AM = document.getElementById('AM').value;
 	BP = document.getElementById('BP').value;
 	B = document.getElementById('B').value;
 	BM = document.getElementById('BM').value;
 	CP = document.getElementById('CP').value;
 	C = document.getElementById('C').value;
 	CM = document.getElementById('CM').value;
 	D = document.getElementById('D').value;
 	F = document.getElementById('F').value;
 	if ( AP < A || A < AM || AM < BP || BP < B || B < BM || BM < CP || CP < C || C < CM || CM < D || D < F){ 
		document.getElementById("warning").innerHTML ="the order of each rangers is wrong, error!";
		document.getElementById("APP").innerHTML = "";
		document.getElementById("AA").innerHTML = "";
		document.getElementById("AMM").innerHTML = "";
		document.getElementById("BPP").innerHTML = "";
		document.getElementById("BB").innerHTML = "";
		document.getElementById("BMM").innerHTML = "";
		document.getElementById("CPP").innerHTML = "";
		document.getElementById("CC").innerHTML = "";
		document.getElementById("CMM").innerHTML = "";
		document.getElementById("DD").innerHTML = "";
		document.getElementById("FF").innerHTML = "";
	}
 	else{
  	var A1=0;
 	var A2=0;
 	var A3=0;
 	var B1=0;
 	var B2=0;
 	var B3=0;
 	var C1=0;
 	var C2=0;
 	var C3=0;
 	var D1=0;
 	var F1=0;
 	for(var i=0;i<grades.length;i++){
 		if(grades[i]<=MAX && grades[i]>=AP){
 			A1++;
 		}
 		else if(grades[i]<AP && grades[i]>=A){
 			A2++;
 		}
 		else if(grades[i]<A && grades[i]>=AM){
 			A3++;
 		}
 		else if(grades[i]<AM && grades[i]>=BP){
 			B1++;
 		}
 		else if(grades[i]<BP &&grades[i]>=B){
 			B2++;
 		}
 		else if(grades[i]<B &&grades[i]>=BM){
 			B3++;
 		}
 		else if(grades[i]<BM &&grades[i]>=CP){
 			C1++;
 		}
 		else if(grades[i]<CP && grades[i]>=C){
 			C2++;
 		}
 		else if(grades[i]<C &&grades[i]>=CM){
 			C3++;
 		}
 		else if(grades[i]<CM &&grades[i]>=D){
 			D1++;
 		}
 		else{
 			F1++;
 		}
 		
 		document.getElementById("APP").innerHTML = A1;
		document.getElementById("AA").innerHTML = A2;
		document.getElementById("AMM").innerHTML = A3;
		document.getElementById("BPP").innerHTML = B1;
		document.getElementById("BB").innerHTML = B2;
		document.getElementById("BMM").innerHTML = B3;
		document.getElementById("CPP").innerHTML = C1;
		document.getElementById("CC").innerHTML = C2;
		document.getElementById("CMM").innerHTML = C3;
		document.getElementById("DD").innerHTML = D1;
		document.getElementById("FF").innerHTML = F1;

 }

}
}
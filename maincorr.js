function square1(x) { 
 return x * x ; 
 } 
 function square2 (x) { 
 return x * x ; 
 } 
 function square3 (x)  { 
 return x * x;
}
function square(x) {
	return x * x; 
} 
 function square(x) { 
 	return x * x; 
 } 
 function square(x) { 
 return x * x; 
 }

 function cube(x) {
 return x * x * x; 
 }
 function fullName(FirstName, LastName) { 
 
 return FirstName+' '+LastName;
 } 
 function Average(X, Y) {
 	return ( (X + Y) / 2);
 }
 function greeter(name) { 
 return hello+' '+name ;
 }
 // new chapter Boolean 
 

function PasswordLongEnough(Password) {
 	if (Password.length>=8){
 		return true
 	}
 	return false
 } 
 function PLE(Pass){
 	return Pass.length>=8;
 }

function rentalCar(Name,Age) {
if (Age>=21) 
 {
  return 'Have fun driving'
 }
	return 'You cannot have the key'; 
}
function max (num1,num2){
	if (num1>num2){
		return num1;
	}
	return num2;
}
function larger (str1,str2) {
	if (str1.length>str2.length) {
		return str1
	}
return str2;
}
// day 4

function scoreToGrade(score){
	if (score>=90&& score<=100){
return'your grade is A'
	}
	else if (score <90 &&score>=80){
		return 'Your grade is B'
	}
	else if (score <80 &&score>=70){
		return 'Your grade is c'
	}
	else if (score <70 &&score>=0){
		return 'Your grade is D'
	}
	else{ return 'INVALID SCORE'}
};

function whatToDoOutside (temperature, weather) {
	if (temperature>=24&&'weather'=='sunny'){
		return' The is iseal for water sport'
	}
	else if (temperature <24 && temperature >=14&& 'weather'=='sunny') {
		return'The weather is ideal for team sport'
	}
};


function counter(Z) { 
		var X = 1;
		return X = X+1; 
		var X =Z ;
	}

function guessMyNumber(n) { 
	var upperBound = 5;
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and upperBound.'; 
 } else if (n === randInt(upperBound)) { 
 return 'You guessed my number!'; 
 } 
 return 'Nope! That wasnt it'; 
} 
function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

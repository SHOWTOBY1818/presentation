console.log("external file");

var city;
var cityFrom = "";
var cityName = "New York City";
var x = 32; 

console.log("cityName, x: ", cityName, x);

var firstname = "Judi", lastname = "Desire";
console.log("firstname,lastname", firstname,lastname);

var s = "2019";
var s2 = 2019;
var n = 2001;
console.log("age: ", s - n);
console.log("age: ", s + n);
console.log("this year: ", s + parseInt (n) );
console.log("age:", s2 + n);

var escapequotes = "this is Judi's \"city\" name";
console.log ("escapequotes:", escapequotes);





 var myString = "This is mystring.";
 var stringlength = myString.length;
 console.log ("stringlength: ",stringlength);
 var convertoUppercase = myString.toUpperCase();
 console.log("convertoUppercase",convertoUppercase, myString.toUpperCase());


//number  
       //javascript has only one type of number. Numbers can be written with or without */


var x = 3.14;   // A numer with decimals
var y = 3;      //A number without decimals
console.log("x + y", (x=y), x);  // 6.140000000001 -3.14

var x1 = 123e5; //12300000
var y2 = 123e-5  //0.00123

var a = 0.2 +0.1;    //x will be 0.300000004
var d = (0.2 * 10 + 0.1 * 10) /10;    // x will be 0.3





var xy = (x+y);
var m = Math.round (xy);
console.log ("m: ",m);


var show_random_num = Math.random ();
console.log("show_random_um: ", show_random_num);

/* Boolen */
console.log("cityName:", Boolean(cityName), cityName);
console.log("city:", Boolean(city), city);
var x = null;
console.log ("x:", Boolean (x));

console.log("city From:", cityFrom, Boolean(cityFrom));
cityFrom = "Brooklyn";
console.log("city From:", cityFrom, Boolean(cityFrom));

/* Objects */
var myObj ={}
console.log(myObj)
var myObj ={ 
	"state": "New York",
	 "zipcode": 10027
	}
console.log("object: ",myObj, myObj.zipcode)

var myArray = new Array;
console.log(myArray)
myArray = ["Monday", "Tuesday", "Sunday"];
console.log(myArray,myArray[2])

var daysoftheweek = [
	"Sunday"
	"Monday"
	"tuesday"
	"wednesday"
	"thursday"
	"friday"
	"saturday"
	]



























console.log("extra boroughs:");
nycBoroughs.push("Yonkers";
console.log('push boroughs:', nycBoroughs);

//removing last item from the array
nycBoroughs.pop();
console.log('pop boroughs:', nycBoroughs);
console.log('what pop? ', nycBoroughs());

//shift() Remove an item from the beginning of an array
nycBoroughs.shift();
console.log("what shift",nycBoroughs);
//unshift() Add items to the beginning of an array
nycBoroughs.unshift('Long Island');
nycBoroughs.unshift('Hudson Valley', 'Albany');
console.log('unshift boroughs: ', nycBoroughs);
console.log('unshift() returns length:', nycBoroughs.unshift());
//Splice (where you want to start, how many to remove)
nycBoroughs.splice(2,2)
//Splice (where you want to start, how many to remove)
nycBoroughs.splice(2,2)
console.log('splice boroughs:', nycBoroughs);

//using a strict
var one =1,two=2;
console.log('one===one', one===one);
console.log('one==one', one == one);
console.log('one === two',) one  === two);
console.log('one ===  two ', one === two);
console.log(',one !== two', one !== two);


//using a non-strict
one = "1";
console.log('one < two', one < two);
console.log('one === one', one === one);
console.log ('one!= one' one !=one);

console.log ('one < two', one < two);
console.log ('one> two', > two);
console.log ('one <= two', one <= two);


var animal1 = "cow"
var animal2 = "bear"
var animal 3 = "tiger"
var animal 4 = "lion"
// And
console.log ('animal &&', animal1 === "cow" && animal2 === "bear");

//or
console.log('one|| two', one || two);
console.log('animal1 || animal2', animal === "coa" || animal2 === "lion"

console.log('animal1 || animal3' animal1 === "bear")



//not or bang
console.log("not true", |true);
console.log("not false", |false);
console.log('not animal1 || animal2', |(animal1 ==="cow" || animal2 === "bear"));

// If statement
/*
compare the difference between alert and window confirm.
window.confirm()
alert()
*/

var answer = window. confirm("click ok, get true. click Cancel, get false. ");
answer;// execute function

//alert('alert box');
  	console.log("you clicked ok.");
 if (answer === true) {
 	console.log("you clicked ok.");
}

// if else statment if (anser === true){}

If (answer === true) {
	console.log ("you clicked Cancel.");
} else {
	console.lo("you clicked Cancel.");
}

var answer =window.prompt(" type YES,NO,MAYBE. Then click ok");
if (answer === "YRD") {
	console.log("you wrote Maybe.")
}
else if(answer === 'MAYBE'){
	console.log ("you wrote Mayve.");
}
else if(answer ==='NO') {
	console.log("you wrote NO.");
}
else }
	console.log('else answer', answer)
	//console.log('Boolean(answer.length)')





























switch(answer) {
	case "YES":
		// code block
		console.log("You wrote YES.");
		break;
	case "NAYBE"
		// code block
		console.log("You wrote MAYBE.");
		break 
 	case "NO":
 	// code block

}






*/
//One line If statement
var fname = "FirstName"
if.(fname === "FirstName") console.log("first name", fname);

var transportation = "bicycle", birthdaygift = "bicycle", iGot = false;
//birthdayGift = "metrocard"
if (transportation === birthdayGift) {
	console.log("YAY!")
	iGot = false;
} else {
	console.log('oh no! I need to five more hints');
var transport = "bicycle";	
//transport 
transport === "bicycle"
? console.log("Your transport is bicycle")
: console.log ("Your transport is subway")



var transportType = transport === "bicycle" ? "type bicycle": "type subway";
console.log ("transportType", transportType);
//
var transportType = (transport === "bicycle") ?"type bicycle": "type subway";
}






	
console.log(typeoff.typeoff)
var thing = [];
thing = [];
console.log("typeof",);







far(i;i < daysoftheweek.length;i++) {
	daysoftheweek [i];
	console.log("daysoftheweek[i]',"daysoftheweek"[i]);
}
















































































































		"zipcode": "11212"
     }
];

// for loops: sequential
var 1 =0; //set intergerindex
console.log("1,nycMarkets,nycMarkets.length,1 nycMarkets,v.length")
// ( index; when to stop;increments)
for (1;1 <nycMarkets.length; 1++) {}
nycMarkets[1]console.log('nycMarkets[i],'nycMarkets[i]);
console.log("nycMarkets[i]"
console.log("cooking", cooking);
var openYearRound = (nycMarkets [i].open_year_round ===true) ? "yes"; "no";
console.log('cooking",cooking);')



























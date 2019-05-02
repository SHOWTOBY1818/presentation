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


number  
       javascript has only one type of number. Numbers can be written with or without */


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
















































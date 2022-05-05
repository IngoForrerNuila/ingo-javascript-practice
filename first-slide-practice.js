//format text with javascript and html in strings//
document.write("<b><h1><center>THIS IS THE FIRST SLIDE OF JAVASCRIPT PRACTICE</h1></b><center>");

document.write("<br> <br>");
//creating a fortune teller//

document.write('<h3>Exercises with Variables</h3>')

var kids = 5;
var partner = 'Paulina Rubio';
var country = 'Germany';
var job = 'Web Developer';

var future = 'You are going to be ' + job + ' in ' + country +
    ', and married to ' + partner + '' + ' with ' + kids + ' kids.';
document.write(future);

document.write("<br> <br>");

//Calculating how old I will be in the future//

var birthYear = 1988;
var futureYear = 2030;
var age = futureYear - birthYear;

var futureAge = "I am going to be eiter " + (futureYear - birthYear) +
    " or " + (age + 1) + " in 2030, the year of the new world order.";
document.write(futureAge);

document.write("<br> <br>");

//Creating a Lifetime Supply Calculator//

var myAge = 34;
var maxAge = 90;//
var estAmount = 3;//numero de snaks//
var diferenciaAnos = maxAge - myAge; //Aca sacamos cuantos anos quedan entre 34 a 90//
var diferenciaDias = diferenciaAnos * 365;//aca multiplicamos cuandos dias nos suman el numero de anos entre 34 a 90//
var snaksAmount = diferenciaDias * 3;//aca obtenemos cuantos snacks nos comemos diarios cada dia, lo multiplica el numero de dias entre numero de snaks//

var calculate = "You will need " + (snaksAmount) + " Kebabs"
    + " to last you until the ripe old age of " + (maxAge);
document.write(calculate);

document.write("<br> <br>");

//Making a temperature converter//

var celsiusTemperature = 20;//here we have a random celsius temperature//
var fahrenheit = celsiusTemperature * 1.8 + 32;//here we convert the celsius into fahrenheit//
var result1 = celsiusTemperature + "°C is " + fahrenheit + "°F";//here we create variable result that contains both variables//
document.write(result1);//printing the final variable//

document.write("<br>");

var fahrenheitTemperature = 90;//here we have a random fahrenheit//
var celsius = fahrenheitTemperature - 32 % 1.8;// we convert this fahrenheit to celsius//
var result2 = fahrenheitTemperature + "°F is " + celsius + "°C";//here we create a result mixing both variables//
document.write(result2); //printing variable//

document.write("<br> <br>");


document.write("<h3><center>Exercising Functions with Arguments</h3><center>");

//Making a fortune teller Ver.2 using Functions//

/*here we are creating a function named *tellFortune* this function posses 4 
4 different properties *the ones that goes inside the () parentesis* Once we have
Named the Function and created its properties, we create a *Variable* named fortune
that is equal = to a string in which we summon or call the different properties the
Function has. Then finally we write the command for print it in the screen */
function tellFortune(numberChildern, partnersName, geoLocation, jobTitle) {
    var fortune = 'You are going to be a ' + jobTitle + ' in ' + geoLocation +
        ' and married to ' + partnersName + ' with ' + numberChildern +
        ' kids ';
    document.write(fortune);

}

/* NOW here we CALL or SUMMON this function like summoning an Evil Spirit
by using the name of the Function in this case *tellFortune* HOWEVER here we define 
what the Function properties are!!! here for instance we set up the Function Properties
inside () parentesis after the *tellFortune* HERE you are free to define
what you want to summon or call inside the --> var fortune <-- so *var fortune* it is
going to call the string plus + the function properties, we call the function
*tellFortune* 3 different times with 3 different property variants >:-) */
tellFortune(2, 'Roke Dalton', 'France', 'Arkitekt');
document.write("<br>");
tellFortune(4, 'Bob MaloN', 'Germany', 'Secretary');
document.write("<br>");
tellFortune(1, 'Cameron Dias', 'United States', 'Cooker');

document.write("<br> <br>");

//Making a puppy age calculator//

function calculateDogAge(humanAge) {
    var dogAge = humanAge * 7;
    var answer = 'Your Dog Age is ' + dogAge + ' Years old';
    document.write(answer);

}

calculateDogAge(7)

document.write("<br> <br>");

//Making a like time supply calculator with Functions//

function calculateSupply(age, amountPerDay) {
    var edadRestante = 90 - age;
    var sacoNumeroDeDias = edadRestante * 365;
    var cantidadDeSnaks = sacoNumeroDeDias * amountPerDay;
    var laRespuesta = 'Currently you have ' + age + ' then You will need ' + cantidadDeSnaks + ' Chocolates to last you until the ripe old age of 90 years old';
    document.write(laRespuesta);

}

calculateSupply(34, 2);
document.write("<br>");
calculateSupply(24, 4);
document.write("<br>");
calculateSupply(14, 1);

document.write("<br><br>");

//Lets Convert Temperature with Functions//

function celsiusToFahrenheit() {
    var celsiusTemperature = 40;
    var fahrenheit = celsiusTemperature * 1.8 + 32;
    var result1 = celsiusTemperature + "°C is " + fahrenheit + "°F";
    document.write(result1);

}

celsiusToFahrenheit();

document.write("<br>");


function fahrenheitToCelsius() {
    var fahrenheitTemperature = 120;
    var celsius = fahrenheitTemperature - 32 % 1.8;
    var result2 = fahrenheitTemperature + "°F is " + celsius + "°C";
    document.write(result2);
}

fahrenheitToCelsius();

document.write("<br> <br>");

document.write("<img border='0' src='img/keanu1.jpeg' />");




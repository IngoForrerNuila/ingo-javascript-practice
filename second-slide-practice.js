//format text with javascript and html in strings//
document.write("<b><h1><center>THIS IS THE SECOND SLIDE JAVASCRIPT PRACTICE</h1></b><center>");

document.write('<h3>IF/ELSE exercises</h3>')
//Practica de IF/ELSE CONDITIONALS//

function greaterNum(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        var message = '<br>The number provided is too low';
        document.write(message);
    } else {
        (firstNumber > secondNumber)
        var message = 'the Number Provided is Higher ;-) ';
        document.write(message);
    }
}

greaterNum(8, 7);
greaterNum(6, 7);

document.write("<br><br>");

//Now The World Translator//

function helloWorld(language) {
    if (language == 'en') {
        var message = 'Hello, World<br>';
        document.write(message);

    } else {
        (language == 'es')
        var message = 'Hola, el Mundo';
        document.write(message);

    }
}

helloWorld('en');
helloWorld('es');

document.write("<br><br>");

//making now The Pluralizer//

function pluralize(number, noun) {
    if (number > '1') {
        var plural = noun + 's';
        var answer = number + plural;
        document.write(answer);
    } else {
        (number = '1')
        var answer = number + noun;
        document.write(answer);
    }

}

pluralize(10, 'Dog');
document.write("<br>");
pluralize(1, 'Cat');
document.write("<br>");
pluralize(12, 'Monkey');

document.write("<br><br>");


//LOOPS EXERCISES The even/odd reporter//

document.write("<h3><center>Exercises: for loops</h3><center>");

for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + ' is even ');
    } else {
        document.write(i + ' is odd ');
    }
}

document.write("<br><br>");

//Multiplication Tables//I NEED TO STUDY THIS IN DEEP//

for (var i = 0; i <= 10; i++) {
    var multiples = 9;
    var result = multiples * i;
    document.write(multiples + ' * ' + i + ' = ' + result);

}



document.write("<h3><center>Exercises: Arrays</h3><center>");


document.write("<br><br>");

//Here we are exercising arrays//

var colors = ['red', 'blue', 'green', 'black', 'red'];
for (var i = 0; i < colors.length; i++) {
    var answerColors = ' My #' + (i + 1) + ' choice is ' + colors[i];
    document.write(answerColors);
}

//Here we are using a loop For/if in order to pluralize or to add St, rd, th for every number//

for (var i = 0; i < colors.length; i++) {
    var colorsNum = i + 1;
    var colorsNumSufix;
    if (colorsNum == 1) {
        colorsNumSufix = 'st';

    } else if (colorsNum == 2) {
        colorsNumSufix = 'nd';

    } else if (colorsNum == 3) {
        colorsNumSufix = 'rd';
    } else {
        colorsNumSufix = 'th';
    }
    var answerColors2 = '<br><br>' + 'My' + colorsNum + colorsNumSufix + ' choice is ' + colors[i];
    document.write(answerColors2);

}

document.write("<br><br>");

document.write("<img border='0' src='img/keanu2.jpg'>");

document.write("<br><br>");


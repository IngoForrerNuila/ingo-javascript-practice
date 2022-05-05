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
        var answer =   number + plural;
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
        document.write(i + ' is even');
    } else {
        document.write(i + ' is odd');
    }
}


//Multiplication Tables//I NEED TO STUDY THIS IN DEEP//

for (var i= 0;i <= 10;) {
    if (i * 9 === 0){
        document.write(i + ' Here you have something')

    } else {


    }


}






/* Этот сценарий выводит на экран приветствие пользователю, основываясь на текущем времени */
var today = new Date();  // создаем новый объект данных
var hourNow = today.getHours();  // находим текущий час
var greeting;

                              // отображаем приветствие в зависимости от текущего времени
if (hourNow > 18) {
    greeting = "Добрый вечер!";
} else if (hourNow > 12) {
    greeting = "Добрый день!";
} else if (hourNow > 0) {
    greeting = "Доброе утро!";
} else {
    greeting = "Приветствую!";
}

document.write('<h3>' + greeting + '</h3>');

// var colors = ['white', 'black', 'blue'];
// colors[0] = 'red';
// // var el = document.getElementById('colors');
// console.log(colors);
// console.log(colors.length);

var firstName = "Katerina";
var lastName = "Smirnova";
var fullName = firstName + " " + lastName;
console.log(fullName);
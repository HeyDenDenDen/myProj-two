let questionAnswer;
let number = 54;

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

let questionFunc = function(){

    questionAnswer = prompt('Угадай число от 1 до 100');

    if(questionAnswer === null){
        alert('Игра окончена');
        return;
    } else if(questionAnswer > number){
        alert('Загаданное число меньше');
    } else if(questionAnswer < number){
        alert('Загаданное число больше');
    } else if(!isNumber(questionAnswer)){
        alert('Введи число!');
    }  else {
        alert('Поздравляю, Вы угадали!!!');
        return;
    }

    questionFunc();
}

questionFunc();

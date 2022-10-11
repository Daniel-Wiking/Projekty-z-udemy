const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answerArr = ['Tak!','Nie!','Może.','Ciężko powiedzieć','Nie chcesz znać odpowiedzi na to pytanie...:/'];
const generateAnswer =() => {
    const number = Math.floor(Math.random()*5);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
}

generateAnswer();


ball.shake;
ball.addEventListener('click',generateAnswer)
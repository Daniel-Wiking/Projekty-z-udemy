const price = document.querySelector('#price');
const people= document.querySelector('#people');
const error = document.querySelector('.error');
const count = document.querySelector('.count');
const cost = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');
const countBtn = document.querySelector('.count');
const tip = document.querySelector('#tip')

const showBill = () => {
    if(price.value ==""||people.value==''||tip.value==0) {
error.textContent='Uzupełnij wszystkie pola!';
costInfo.style.display ='none';
    }
    else {
        error.textContent='';
        countBill()
    }
}
countBtn.addEventListener('click',showBill);
const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
const sum = (newPrice*(newTip +1))/newPeople;
costInfo.style.display ='block';
cost.textContent =sum.toFixed(2);

}

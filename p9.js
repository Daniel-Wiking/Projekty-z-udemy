const settings= document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection= document.querySelector('.image-section');


const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear= document.querySelector('#event-year');
const eventImg= document.querySelector('#event-image');


const daysCount= document.querySelector('.days-count');
const hoursCount= document.querySelector('.hours-count');
const minutesCount= document.querySelector('.minutes-count');
const secondsCount= document.querySelector('.seconds-count');


const saveBtn= document.querySelector('.save');
const eventSpan= document.querySelector('.event');

let usersTime;



const setTime = () => {
    const currentTime = new Date();
    const result = usersTime - currentTime;
    const days = Math.floor(result / 1000 / 60 / 60 / 24) ;
    const hours = Math.floor(result / 1000 / 60 /60) % 24;
    const minutes = Math.floor(result / 1000 / 60) % 60;
    const seconds = Math.floor(result / 1000) % 60;

console.log(result);
console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);

    daysCount.textContent = days;
    minutesCount.textContent = minutes;
    hoursCount.textContent = hours;
    secondsCount.textContent = seconds;
}

const appUpdate = () => {
eventSpan.textContent= eventName.value;
imageSection.style.backgroundImage = `url('${eventImg.value})`
usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)


setTime();

}












saveBtn.addEventListener('click',appUpdate)
settingsBtn.addEventListener('click',() => {
    settingsBtn.classList.toggle('active');
});
appUpdate();
setInterval(setTime, 1000)




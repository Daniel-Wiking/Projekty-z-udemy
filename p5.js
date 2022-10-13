const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const historyBtn = document.querySelector('.history');
const resetBtn = document.querySelector('.reset');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');
const colorChange = document.querySelector('.fa-paint-brush');
const select = document.querySelector('.select');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

let countTime;
let minutes=0;
let seconds=0;
let hours = 0;

let timesArray = [];



const handleStart = () => {
    clearInterval(countTime);
countTime = setInterval(() => {
if(seconds<9){
seconds++;
stopwatch.textContent = `${minutes}:0${seconds}`}
else if(seconds>=9 && seconds<59){
seconds++;
stopwatch.textContent = `${minutes}:${seconds}`
}
else {
    minutes++;

    seconds = 0;
    stopwatch.textContent = `${minutes}:00`
}



},1000)
}
const handlePause = () => {
    clearInterval(countTime)
}

const handleStop =()=>{
   
    
   
    if(stopwatch.textContent !== '0:00'){
        
        time.style.visibility = 'visible';
        time.textContent = `Ostatni czas: ${stopwatch.textContent}`;
        timesArray.push(stopwatch.textContent)
        console.log(timesArray);
    }
    clearRecords();
}

const handleReset = () => {
    clearRecords();
    time.textContent ="";
    timesArray = [];
}

const clearRecords = () => {
    clearInterval(countTime);
    timeList.textContent = '';
    seconds =0;
    minutes = 0;
    stopwatch.textContent='0:00'
}
const showHistory = () =>
{ let num=1;
    timeList.textContent = '';
    timesArray.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num} : <span>${time}</span>`
        timeList.appendChild(newTime);
        num++
    })
}
 const showModal = () =>
 {
    if(!(modalShadow.style.display === 'block')){
modalShadow.style.display = 'block';
    }
    else {
        modalShadow.style.display = 'none';
    }
    modalShadow.classList.toggle('modal-animation')
 }
 



var r = document.querySelector(':root');


// function myFunction_get() {
  
//   var rs = getComputedStyle(r);
//   // Alert the value of the --blue variable
//   alert("The value of --blue is: " + rs.getPropertyValue('--default-color'));
// }


const greenColor =() =>{
  
  r.style.setProperty('--default-color', 'rgb(34, 234, 34)');
  console.log('color changed to green');
}
const redColor =() =>{
  
    r.style.setProperty('--default-color', 'rgb( 234,34, 34)');
    console.log('color changed to red');
  }
  const blueColor =() =>{
  
    r.style.setProperty('--default-color', 'rgb(34, 34, 234)');
    console.log('color changed to blue');
  }
  const showColors = () =>{
    if(select.style.display == 'none'){
select.style.display = 'flex';}
else{
    select.style.display = 'none';
}
  }
  colorChange.addEventListener('click',showColors)
red.addEventListener('click',redColor);
green.addEventListener('click',greenColor);
blue.addEventListener('click',blueColor);



startBtn.addEventListener('click',handleStart);
pauseBtn.addEventListener('click',handlePause);
stopBtn.addEventListener('click',handleStop);
resetBtn.addEventListener('click',handleReset);
historyBtn.addEventListener('click',showHistory);
infoBtn.addEventListener('click',showModal);
closeModalBtn.addEventListener('click',showModal);





window.addEventListener('click',e => e.target === modalShadow ? showModal() : false)
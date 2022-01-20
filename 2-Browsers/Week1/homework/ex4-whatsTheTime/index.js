'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {

  const body = document.querySelector('body');
  body.style.height = '%100';
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  body.style.minHeight = '100vh'
  body.style.alignItems = 'center';
  body.style.justifyContent = 'center';
  body.style.background = 'linear-gradient(to right,#4e54c8,#8f94fb)';
  const div = document.createElement('div');
  div.style.background = '#fffc00';
  div.style.color = '#000';
  div.style.minWidth = '20vw';
  div.style.height = '12vh'
  div.style.textAlign = 'center'
  div.style.fontSize = '4rem';
  div.style.padding = '1rem'
  div.style.boxShadow = '10px 10px 6px #fdf133';


  
  body.appendChild(div)
  const timer = () =>{
    const date = new Date()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    div.textContent = `${hours} : ${minutes} : ${seconds}`;
  }
  setInterval(timer,1000);

}

window.addEventListener('load',addCurrentTime);
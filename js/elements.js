const $html = document.querySelector('html')
const bttnPlay = document.querySelector('.play')
const bttnPause = document.querySelector('.pause')
const bttnStop = document.querySelector('.stop')
const bttnUpTime = document.querySelector('.upTime')
const bttnDownTime = document.querySelector('.downTime')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const bttnTree = document.querySelector('.tree')
const bttnRain = document.querySelector('.rain')
const bttnHouse = document.querySelector('.house')
const bttnFire = document.querySelector('.fire')
const bttnSun = document.querySelector('.sun')
const bttnMoon = document.querySelector('.moon')
const sliderTree = document.querySelector('#volumeTree')
const sliderRain = document.querySelector('#volumeRain')
const sliderHouse = document.querySelector('#volumeHouse')
const sliderFire = document.querySelector('#volumeFire')
let timerTimeOut;

export const elements = { 
  $html,
  bttnPlay,
  bttnPause,
  bttnStop,
  bttnUpTime,
  bttnDownTime,
  minutesDisplay,
  secondsDisplay,
  bttnTree,
  bttnRain,
  bttnHouse,
  bttnFire,
  bttnSun,
  bttnMoon,
  sliderTree,
  sliderRain,
  sliderHouse,
  sliderFire,
  timerTimeOut
}
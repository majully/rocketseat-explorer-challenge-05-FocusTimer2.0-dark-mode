import Timer from './functions.js'
import Sounds from './sounds.js'
import { elements } from './elements.js'

const { 
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
} = elements

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  bttnMoon,
  bttnSun,
  $html,
  bttnPause,
  bttnPlay
})

const sound = Sounds({ 
  sliderTree,
  sliderRain,
  sliderHouse,
  sliderFire,
  bttnTree,
  bttnRain,
  bttnHouse,
  bttnFire
})

bttnUpTime.addEventListener('click', () => {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
  minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, '0')
  sound.pressButton()
  if (minutesDisplay.textContent >= 100) { 
    minutesDisplay.textContent = 95
    alert('Limite é até 95 minutos')
  }
})

bttnDownTime.addEventListener('click', () => {
  minutesDisplay.textContent = String(minutesDisplay.textContent - 5).padStart(2, '0')
  sound.pressButton()
  if (minutesDisplay.textContent <= 0) { 
    minutesDisplay.textContent = 25
    alert('Não é aceito menor a zero!')
  }
})

bttnPlay.addEventListener('click', function() {
  timer.countdown()
  timer.play()
  sound.pressButton()
})

bttnStop.addEventListener('click', function() { 
  timer.resetTimer()
  sound.pressButton()
})

bttnPause.addEventListener('click', function() { 
  timer.hold()
  timer.pause()
  sound.pressButton()
})

bttnRain.addEventListener('click', function(){
  sound.pressRain()
})

bttnTree.addEventListener('click', function(){
  sound.pressTree()
})

bttnHouse.addEventListener('click', function(){
  sound.pressHouse()
})

bttnFire.addEventListener('click', function(){
  sound.pressFire()
})

bttnSun.addEventListener('click', function() { 
  timer.pressButtonSun()
})

bttnMoon.addEventListener('click', function() { 
  timer.pressButtonMoon()
})
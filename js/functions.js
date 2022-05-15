import Sound from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  bttnMoon,
  bttnSun,
  $html,
  bttnPause,
  bttnPlay
}) {

const sound = Sound({})

  function resetTimer() {
    sound.timeEnd()
    minutesDisplay.textContent = 25
    secondsDisplay.textContent = '00'
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      if (Number(secondsDisplay.textContent) <=0 && Number(minutesDisplay.textContent) <= 0) {
        resetTimer()
        return
      }
      if (Number(secondsDisplay.textContent) <= 0) { 
        secondsDisplay.textContent = 60
        minutesDisplay.textContent = String(--minutesDisplay.textContent).padStart(2, '0')
      }
        secondsDisplay.textContent = String(--secondsDisplay.textContent).padStart(2,'0')
        countdown()
    }, 1000)
  }
  
  function hold() {
    clearTimeout(timerTimeOut)
  }

  function pressButtonSun() {
    bttnMoon.classList.remove('hide')
    bttnSun.classList.add('hide')
    $html.classList.add('dark-mode')
    $html.classList.remove('white-mode')
  }

  function pressButtonMoon() {
    bttnSun.classList.remove('hide')
    bttnMoon.classList.add('hide')
    $html.classList.remove('dark-mode')
    $html.classList.add('white-mode')
  }

  function play() {
    bttnPlay.classList.add('hide')
    bttnPause.classList.remove('hide')
  }

  function pause() {
    bttnPlay.classList.remove('hide')
    bttnPause.classList.add('hide')
  }

  
  return {
    resetTimer,
    countdown,
    hold,
    pressButtonSun,
    pressButtonMoon,
    play,
    pause
  }
}
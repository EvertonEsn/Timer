const timer = document.querySelector('.timer')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const zero = document.querySelector('.zero')

let contMin = 0
let contSec = 0
let contHour = 0
let cont

const verifyCont = (contMinu, contSeco, contHours) => {
  if (contSeco === 60) return contMin++, (contSec = 0)
  if (contMinu === 60) return contHour++, (contMin = 0)
}

const ajustTimer = cont => {
  if (cont < 10) return `0${cont}`
  return cont
}

const startTimer = () => {
  cont = setInterval(() => {
    contSec += 1
    verifyCont(contMin, contSec, contHour)
    timer.innerHTML = `${ajustTimer(contHour)}:${ajustTimer(
      contMin
    )}:${ajustTimer(contSec)}`
  }, 1000)
}

document.addEventListener('click', e => {
  const element = e.target

  if (element.classList.contains('start')) {
    timer.classList.remove('timerPause')
    clearInterval(cont)
    startTimer()
  }

  if (element.classList.contains('pause')) {
    timer.classList.add('timerPause')
    clearInterval(cont)
  }

  if (element.classList.contains('zero')) {
    timer.classList.remove('timerPause')
    clearInterval(cont)
    timer.innerHTML = '00:00:00'
    contSec = 0
    contHour = 0
    contMin = 0
  }
})

// start.addEventListener('click', event => {
//   timer.classList.remove('timerPause')
//   clearInterval(cont)
//   startTimer()
// })

// pause.addEventListener('click', event => {
//   clearInterval(cont)
//   timer.classList.add('timerPause')
// })

// zero.addEventListener('click', event => {
//   clearInterval(cont)
//   timer.innerHTML = '00:00:00'
//   contSec = 0
//   contHour = 0
//   contMin = 0
// })

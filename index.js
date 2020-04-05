function minutesToSeconds(minutes) {
  return minutes * 60
}

function secondsToMinutes(miliseconds) {
  return miliseconds / 60
}

const audio = document.querySelector('audio')
const timeRemaining = document.querySelector('.time-remaining')
const phraseRemaining = document.querySelector('.phrase-remaining')

function pomodoroTimer() {
  let working = true
  let seconds = minutesToSeconds(25)
  let secondsPlaying

  setInterval(() => {
    seconds -= 1
    secondsPlaying -= 1

    const minutes = Math.floor(secondsToMinutes(seconds))
    timeRemaining.textContent = `${minutes} min ${seconds - minutes * 60}s`

    phraseRemaining.textContent = `Remaining ${working ? 'work' : 'rest'} time:`

    if (seconds === 0) {
      if (working) {
        seconds = minutesToSeconds(5)
        working = false
      } else {
        seconds = minutesToSeconds(25)
        working = true
      }
      audio.play()
      secondsPlaying = 2
    }

    if (secondsPlaying === 0) {
      audio.pause()
    }
  }, 1000)

  tomato.removeEventListener('click', pomodoroTimer)
}

const tomato = document.querySelector('.tomato')
tomato.addEventListener('click', pomodoroTimer)

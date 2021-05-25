let day = document.getElementById("days")
let hour = document.getElementById("hours")
let min = document.getElementById("minutes")
let sec = document.getElementById("seconds")
let id = undefined

const endTime = new Date("December 31 2021 23:59:59")

const updateCountdown = () => {
  const currTime = new Date()
  diff = endTime - currTime
  days = Math.floor((((diff/1000)/60)/60)/24)
  hours = Math.floor(((diff/1000)/60)/60)
  hours %= 24
  minutes = Math.floor((diff/1000)/60)
  minutes %= 60
  seconds = Math.floor(diff/1000)
  seconds %= 60

  day.innerHTML = days
  hour.innerHTML = hours
  min.innerHTML = minutes
  sec.innerHTML = seconds
} 

document.getElementById("start").onclick = startCounter

function startCounter() {
  if(id === undefined) id = setInterval(updateCountdown,1000)
}

document.getElementById("stop").onclick = stopCounter

function stopCounter() {
  clearInterval(id);
  id = undefined;
}
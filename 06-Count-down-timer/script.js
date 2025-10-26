const result = document.getElementById("result")

setInterval(function () {

    const currentTime = Date.now()

    const olympicTime = new Date(2028, 6, 14).getTime()

    let timer = olympicTime - currentTime; // millisecond

    const day = Math.floor((timer) / (1000 * 60 * 60 * 24)) // second*min*hr*day
    timer %= 1000 * 60 * 60 * 24

    const hour = Math.floor((timer) / (1000 * 60 * 60)) // second*min*hr
    timer %= 1000 * 60 * 60

    const minute = Math.floor((timer) / (1000 * 60)) // second*min
    timer %= 1000 * 60

    const second = Math.floor((timer) / (1000)) // second*min
    timer %= 1000

    result.textContent = `${day} : Days  ${hour} : Hour  ${minute} : Minute  ${second} : Second`
}, 1000)






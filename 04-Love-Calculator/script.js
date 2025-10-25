const form = document.querySelector("form")

form.addEventListener("submit", function (e) {

    e.preventDefault()

    const boy = document.querySelector("#boy")
    const girl = document.querySelector("#girl")

    const l1 = boy.value.length;
    const l2 = girl.value.length;

    const result = Math.pow(l1 + l2, 3) % 101;

    document.querySelector("h2").textContent = `Result : ${result}%`

    form.reset()
})
let timer = document.querySelector('#timer')
let sec = document.querySelector('#sec')
let day = document.querySelector('#day')

const ArrayDay = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

const formatTimer = (time) => time < 10 ? `0${time}` : time  

const clock = () => {
    let data = new Date()
    let option = { hour: '2-digit', minute: '2-digit'}
    data.toLocaleDateString('pt-BR', option)

    timer.innerText = `${formatTimer(data.getHours())}:${formatTimer(data.getMinutes())}`

    sec.innerText = formatTimer(data.getSeconds())

    day.innerHTML = `${ArrayDay[data.getDay()]} ${formatTimer(data.getDate())}`
}

setInterval(clock, 500)

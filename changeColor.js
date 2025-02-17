let body = document.querySelector('#body')

const changeColor = () => {
    let hours = new Date()

    if(hours.getHours() > 6 && hours.getHours() < 18) {
        body.classList.remove('bg-dark')
        body.classList.add('bg-light')
    } else {
        body.classList.remove('bg-light')
        body.classList.add('bg-dark')
    }
}

setInterval(changeColor, 1000)


const button = document.querySelector('button')
const timelog = () => {
    console.log(event.timeStamp)
    button.toggleAttribute('disabled')
}

button.addEventListener('click', timelog)
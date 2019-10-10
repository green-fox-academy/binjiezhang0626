const title = document.querySelector('h1')
const keyup = event => {
    console.log(event)
    title.textContent = `Last pressed key code is: ${event.keyCode}`
}
this.addEventListener('keyup', keyup)
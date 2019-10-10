const button = document.querySelector('button')
const para = document.querySelector('p')
const onClickFunction = event => {
    setTimeout(() => {
      para.toggleAttribute('hidden')
    }, 2000)
  }

button.addEventListener('click', onClickFunction)
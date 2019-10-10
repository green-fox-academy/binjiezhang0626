const button = document.querySelector('button')
const para = document.querySelector('p')
const onClickFunction = () => {
    setTimeout(() => {
    //   para.toggleAttribute('hidden')
      para.removeAttribute('hidden')
    }, 2000)
  }

button.addEventListener('click', onClickFunction)
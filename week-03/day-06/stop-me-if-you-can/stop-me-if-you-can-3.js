'use strict'

const button = document.querySelector('button')

async function waitForButtonClicked() {
    await new Promise((resolve, reject) => {
        let timeout = setTimeout(() => {    
            resolve(alert('5 Seconds passed!'))
        }, 5000)
        button.addEventListener('click', () => reject(clearTimeout(timeout)))
    })
}

waitForButtonClicked()
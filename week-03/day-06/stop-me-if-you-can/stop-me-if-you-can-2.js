'use strict'

const button = document.querySelector('button')

const waitForButtonClicked = button => {
    return new Promise(function(resolve, reject){
        let timeout = setTimeout(() => {    
            resolve(alert('5 Seconds passed!'))
        }, 5000)
    
        button.addEventListener('click', () => {
            reject(clearTimeout(timeout))
        })
    })
}

waitForButtonClicked(button)
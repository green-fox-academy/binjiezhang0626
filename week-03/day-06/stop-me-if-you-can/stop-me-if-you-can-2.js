'use strict'

const button = document.querySelector('button')

// let timer = setTimeout(() => {
//       alert('5 secs passed')
//     }, 5000)


// button.addEventListener('click',() => {
//     clearTimeout(timer)
// })

// const waitForButtonClicked = () => {
//     return new Promise ((resolve, reject) => {
            
//     })
// }


// const promiseFunc = () => {
//     return new Promise(resolve => {
//       resolve(++buttonClickedCount)
//     })
//       .then(count => {
//         if (count === 1) {
//           clearTimeout(timer)
//           console.log('Timer cancelled') //intuitive log info
//           return count //for future use cases
//         } else {
//           return Promise.reject(count)
//         }
//       })
//       .catch(error => {
//         console.log(`Clicked ${error} times`) //intuitive log info
//       })
//   }

new Promise(function(resolve, reject){
    let timeout = setTimeout(() => {    
        resolve(alert('5 Seconds passed!'))
    }, 5000)

    button.addEventListener('click', () => {
        reject(clearTimeout(timeout))
    })
})
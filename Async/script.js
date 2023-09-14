
async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log(data)
        console.log(2)
    } catch (err) {
        console.log("Something went wrong...")
        console.log(err)
    }
}

getTodos()


// fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
//     return data.json()
// }).then(jsonData => {
//     console.log(jsonData)
// })
// .catch((err) => {
//     console.log('Oh no somthing went wrong')
// })
// .finally(() => {
//     console.log("well we tried!")
// })

// const promise = new Promise(resolve, reject) => {
//     setTimeout(() => resolve("this is my data from a server"), 2000)
// }

// promise.then(res => {
//     console.log(res)
// })



// const promise = new Promise((resolve, reject) => {
//     // resolve('we did it babyy')
//     // reject("awwe shit here we go again")
//     resolve({user: 'Blanka'})
// })

// promise.then(data => {
//     const user = data 
//     return fetch("https://jsonplaceholder.typicode.com/todos/1")
// })
// .then((todos) => {
//     console.log(todos)
// })
// .catch(err => {
//     console.log(err)
// })

// function message() {
//     console.log("Hello There")
// }

// function logger(message) {
//     message()
// }


// logger(message)



// function first() {
//     console.log(1)
// }

// function second(callback) {
//     setTimeout(()=> {
//         console.log(2)
//         callback()
//     }), 0
// }

// function third() {
//     console.log(3)
// }

// first()
// second(third)


// Global execution context

// console.log("message")

// logger()

// console.log(1)


// function logger () {
//     console.log(2)
//     finish()
//     console.log(3)
//     function finish() {
//         console.log("finished")
//     }
// }

// Function exec conetext
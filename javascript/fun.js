/**
 * 1) functions can be passed as parameter
 * 2) functions can be returned
 * 3) functions are assigned to variables
 */

function funOne() {
    console.log(`first function`)
}
let varOne = funOne
console.log(`${varOne}`)
let varTwo = function() {}

let varThree = () => console.log(`this is lambda`)

let varFour = (nm1, nm2) => nm1 + nm2
console.log(`addition is:${varFour(50,50)}`)

function funTwo() {
    console.log(`returning function`)
    return function() {
        console.log(`function being returned`)
    }
}

let varFv = funTwo()
console.log(`${varFv}`)
varFv()
funTwo()


function funThree(cb) {
    console.log(`function three called`)

    cb()
}
funThree(funOne)


funThree(function() {
    console.log(`its anonymous function`)
})


console.log(`before timeout`)
setTimeout(() => console.log(`function being involked`), 2000)
console.log(`log printed`)
//If-else
console.log(`\n*****If-else*****`)

var i = 6
if (i < 10) {
    console.log('number is less then 10')
} else {
    console.log('number is greater then 10')
}


//switch case
console.log(`\n*****Switch case*****`)

console.log('1.addition \n 2.substraction')
var a, b, result
var ch = 2
switch (ch) {
    case 1:
        {
            result = 4 + 2
            console.log(`addition is: ${result}`)
            break
        }
    case 2:
        {
            result = 4 - 2
            console.log(`substraction is: ${result}`)
            break
        }
}


//do-while loop
console.log(`\n*****Do-while loop*****`)

var i = 0
do {
    console.log(`the no is : ${i}`)
    i++
}
while (i < 10)

//prime numbers
console.log(`\n*****Prime number*****`)

var no
for (no = 2; no < 10; no++) {
    if ((no % 2) != 0) {
        console.log(`the no is prime no ${no}`)
    }
}


//even number
console.log(`\n*****EVEN-ODD Numbers*****`)

var no = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i < no.length; i++) {
    if ((no[i] % 2) == 0) {
        console.log(`the even no is ${no[i]}`)
    } else {
        console.log(`the odd no is ${no[i]}`)
    }
}




//tables
console.log(`\n*****tables*****`)
let n = 5
for (i = 0; i <= 10; i++) {

    console.log(`the table is ${n*i}`)

}
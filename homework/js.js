let arr = []

while(true) {   
    let num = +prompt("san jaz")

    if (num % 2 != 0) {
        break
    } else {
        arr.push(num)
    }
}

console.log(arr);
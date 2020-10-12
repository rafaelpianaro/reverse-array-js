console.log([5,7,9,3,7])
function reverseArray(array) {
    let len = array.length -1
    return array.map(() => {
        return array[len--]
    })
}

console.log(reverseArray([5,7,9,3,7]))
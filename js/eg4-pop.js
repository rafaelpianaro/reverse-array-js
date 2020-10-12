console.log([5,7,9,3,7])
function reverseArray(array) {
    let newArray = [];
    while (array.length) {
        newArray.push(array.pop());
    }
    return newArray;
}
console.log(reverseArray([5,7,9,3,7]))
console.log([5,7,9,3,7])
function reverseArray(a) {
    var len = a.length;
    var newArray = [];
    while(len--) {
        newArray.push(a[len]);
    }
    return newArray;
}

console.log(reverseArray([5,7,9,3,7]))
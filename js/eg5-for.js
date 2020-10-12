console.log([1,2,3,4,5,6,7,8,9,10])
function reverseArray(a) {
    let result = []
    for(i = 0; i < a.length; i++) { 
        result.push(a[a.length -1 -i])
    }
    return result
}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]))
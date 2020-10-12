// let a = [1,2,4,8]
console.log([3,6,8,4])
function reverseArray(a) {
    let ponteiroMenor = 0
    let ponteiroMaior = a.length -1
    while(ponteiroMenor < ponteiroMaior){
        //swap
        let temp = a[ponteiroMenor]
        a[ponteiroMenor] = a[ponteiroMaior]
        a[ponteiroMaior] = temp
        ponteiroMenor++
        ponteiroMaior--
    }
    return a
}
console.log(reverseArray([3,6,8,4]))
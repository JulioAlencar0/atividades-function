function somaArray(n){
    let soma = 0
    for(let i = 0; i < n.length; i++){
        soma += n[i];
    }
    return soma
}console.log(somaArray([1,2,3,4,5]))
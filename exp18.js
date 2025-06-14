function desconto(v, p){
    let d = v * (p / 100)
    let vf = v - d
    return vf
}console.log(desconto(200,25))
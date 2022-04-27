let a = Math.floor(Math.random() * 1000)

function minhaPrimeiraFuncao(){
    let b = Math.floor(Math.random() * 1000)
    // return `${a} + ${b} = ${a + b}`
    if (a > b){
        return `${a} - ${b} = ${a - b}`
    }
    else{
        return `${a} + ${b} = ${a + b}`
    }
}

console.log(minhaPrimeiraFuncao())

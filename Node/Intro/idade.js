// quais as informacoes preciso para calcular a idade de uma pessoa

// ano de nascimento
// mes de nascimento
// dia de nascimento
// ano atual
// mes atual
// dia atual
// idade

let anoNasc = 1984
let mesNasc = 9
let diaNasc = 15
let anoAtual = 2022
let mesAtual = 5
let diaAtual = 10
let diferencaMes = mesNasc - mesAtual

let idade = anoAtual - anoNasc
// condicional que verifica o mes
// if(mesAtual < mesNasc){
//     idade -= 1
// }

idade = mesAtual <= mesNasc && diaAtual < diaNasc ? idade - 1 : idade

console.log(idade)
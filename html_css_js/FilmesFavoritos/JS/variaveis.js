// é a forma de se escrever um comentário em linha no js.

// var, let, const

// number, string, booleano, array, objeto

var nums = [1, 5.3, 4.9, 0.6]
var texts = ['Lucas', "Sarah",'Meu array de número é: ' + nums , `Meu array de números é ${nums}`]

var bool = [true, false]
// true != 'true'

var obj = {
  nome: 'Valério',
  idade: 43,
  cidade: 'Rio de Janeiro',
  profissao: 'Desenvolvedor'
}

let avanade = [
  {
    nome: 'Victor',
    idade: 26,
    cidade: 'São Paulo'
  },
  {
    nome: 'Silvana',
    idade: 33,
    cidade: 'Recife'
  },
  {
    nome: 'Thauan',
    idade: 30,
    cidade: 'Recife'
  }

]
console.log(avanade[1].cidade)

let a
a = 5
var b
b = false
const c = "saude"
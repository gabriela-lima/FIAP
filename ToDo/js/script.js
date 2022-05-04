// pegando a entrada
const inputBox = document.querySelector('#entrada')

// botao de adicionar
const addBtn = document.querySelector('.inputField button')

const todoList = document.querySelector('.todoList')

// botao de deletar todos
const deleteAllBtn = document.querySelector('.footer button')

// habilitar botao + 
// apos a tecla ser pressionada e solta
// arrow function
inputBox.onkeyup = _ => {
    // a variavel pega o valor de entrada do usuario
    let userData = inputBox.value
    // se o usuario nao digitou apenas espaco vazio (space)
    if(userData.trim() != 0){ 
        // colocando o botao ativo (usando a classe no css) 
        addBtn.classList.add('active')
    } else{
        // caso seja falsa remover a classe do ativo do botao (desativando o botao)
        addBtn.classList.remove('active')
    }
}
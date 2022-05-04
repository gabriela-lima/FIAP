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

addBtn.onclick = _ => {
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem('New Todo')
    // Verificando se o armazenamento local for nulo
    if(getLocalStorage == null){
        // Vamos criar um array em branco
        // criando a variavel sem declarar, assim ela pode ser usada globalmente, apesar de ser criada no if
        lisArr = []
    } else{
        // empurrando ou adicionando dados do usuario a nossa lista
        // convertendo o getlocalstorage para json com o parse
        lisArr = JSON.parse(getLocalStorage)
    }
    // empurrando para dentro do array os dados do usuario
    lisArr.push(userData)
    // transformando um objeto js em um fragmento js
    localStorage.setItem('New Todo', JSON.stringify(lisArr))
    // chamando a funcao showTasks
    showTasks()
}

showTasks()

// funcao para adicionar tarefas dentro da lista
function showTasks(){
    // variavel vai pegar o armazenamento local
    let getLocalStorage = localStorage.getItem('New Todo')
    if(getLocalStorage == null){
        lisArr = []
    } else {
        // transformando um objeto js em um fragmento js
        lisArr = JSON.parse(getLocalStorage)
    }
    // o numero de tarefas que tem na lista
    const pendingNum = document.querySelector('.pendingNum')
    pendingNum.textContent = lisArr.length

    // se o tamanho do array for maior que zero
    if(lisArr.length > 0)
    {
        // ativa a classe active
        deleteAllBtn.classList.add('active')
    } else {
        // desativa a classe active
        deleteAllBtn.classList.remove('active')
    }
    let newLiTag = ''
    // Desativando o botao de adicionar
    addBtn.classList.remove('active')
    // arrow function
    lisArr.forEach((element, index) => {
        newLiTag += `
        <li>${element}<span onclick="deleteTask()"></span></li>
        `
    })
    // adicionando uma nova li dentro da nossa lista no hmtl
    todoList.innerHTML = newLiTag
    // uma vez adicionada a tarefa, o campo entrada fica vazio
    inputBox.value = ''

}
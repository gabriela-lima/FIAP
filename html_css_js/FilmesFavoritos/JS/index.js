
let listaDeFilmes = [
    'https://br.web.img3.acsta.net/pictures/14/08/01/15/44/388856.jpg',
    'https://cinemaemcena.com.br/uploads/criticas_old/interstellar_poster5.jpg',
    'https://br.web.img3.acsta.net/pictures/210/140/21014024_20130619225537406.jpg',
    'https://ingresso-a.akamaihd.net/img/cinema/cartaz/6429-cartaz.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Butterflyeffect_poster.jpg/240px-Butterflyeffect_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/d/d4/Ready_Player_One_%28filme%29.png'
]

let listaDeTitulos = [
    'Relatos Selvagens',
    'Interestelar',
    'Truque de Mestre',
    'Cantando na Chuva',
    'Efeito Borboleta',
    'Jogador Nº 1'
]

//! DOM (document object model)
let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')

for (i; i < listaDeFilmes.length; i++){
    //Escrevendo em html dentro do js
    catalogo.innerHTML += `<div class="filme">
        <img src=${listaDeFilmes[i]} alt= ${listaDeTitulos[i]}><figcaption>${listaDeTitulos[i]}
    </div>`
}

let filmeRepetido = true;

// funcao de cadastrar os filmes no site
function cadastrar(){
    // Pegando o valor do input do url 
    let novoFilme = document.querySelector('#filme').value
    
    // Pegando o valor do input do titulo
    let novoTitulo = document.querySelector('#titulo').value
    if (listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo)) {
        //Acionando o erro no html
        erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
      }else{
        listaDeFilmes.push(novoFilme)
        listaDeTitulos.push(novoTitulo)
        //Tirando a mensagem de erro apos cadastrar o filme
        erro.innerHTML = ''
        mostrarFilmes()
      }
      document.querySelector('#filme').value = ''
      document.querySelector('#titulo').value = ''
}

// funcao que mostra os filmes
function mostrarFilmes(){
    do{
        catalogo.innerHTML += `
        <div class= "filme">
            <img src = ${listaDeFilmes[i]} alt= ${listaDeTitulos[i]}><figcaption>${listaDeTitulos[i]}
        </div>`
        i++
    }while (i < listaDeFilmes.length)
}
function pegaDados(){
    console.log('pega dados funcionando')
    // usando ajax do jquery
    // carrega as informaçoes de acordo com o que vc manda
    // recebe um parametro JSON
    $.ajax({
        // pegando os dados da url
        url: "https://iot.14mob.com/lista.json",
        data: "",
        success: function(retorno){
            tratarDados(retorno)
        },
        dataType: "html"
    })
}

function tratarDados(dados){
    // transformando os dados em JSON
    dados = JSON.parse(dados)

    // pegando a referencia da classe do html
    // usando o seletor do jquery
    var lista = $(".listaCachorro")

    // usando o for do jquery
    // dois paramentros, o array e uma funcao
    // duas maneiras
    // $(dados).each(function(chave, valor){
    // })
    // ou
    // $.each(dados, function(index, data){
    // })
    $(dados).each(function(chave, valor){
        // montar um html dinamico
        let conteudo = `<div class="col-md-4"> 
            <div class="card">
                <img src="${valor.imagem}">
                <h5 class="card-title">${valor.nome}</h5>
                <p class="card-text">${valor.descricao}</p>
                <button type="button" class="btn btn-primary abrirModal" onclick= "abrirModal(${valor.id}, ${valor.nome}, ${valor.imagem}, ${valor.descricao})">
                    Detalhes
                </button>
                </div>
            </div>
        </div>` 

    // colocar os dados dos cachorros do json
    lista.append(conteudo)

    })
}

function abrirModal(id, nome, imagem, descricao){

    let conteudo = `<div class="col-md-12"> 
            <div class="card">
                <img src="${imagem}">
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${descricao}</p>
                </div>
            </div>
        </div>` 
    $('.detalheItem').html(conteudo)

    $('#exampleModal').modal('show')
}

// usando o jquery
//  $ jquery
// funcao inicial do jquery, fica pronta quando o DOM esta pronto
// eh executada quando o DOM esta pronto
$(function(){
    pegaDados()
})
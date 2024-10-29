$(document).ready(function(){

const form = document.getElementById("form-avisos")
const formCadastro = document.getElementById("form-cadastro")


    form.addEventListener("submit", function(e){
        e.preventDefault()
    
        addLinha()
        atualizaTabela()
    
    })
    
    let linhas = ""
    
    function addLinha(){
        const inputSelect = document.getElementById("opcoes")
        const inputData = document.getElementsByTagName("input")[0]
        const avisoText = document.getElementsByTagName("textarea")[0]
        
        const selectOp = inputSelect.value
    
        let linha = "<tr>"
        linha += `<td>${inputData.value}</td>`
        linha += `<td>${selectOp}</td>`
        linha += `<td>${avisoText.value}</td>`
        linha += "</tr>"
    
        linhas += linha
    }
    
    function atualizaTabela(){
        const corpoTabela = document.querySelector("tbody")
        corpoTabela.innerHTML = linhas
    }
    
    
    
    const formReservas = document.getElementById("form-reservas")
    formReservas.addEventListener("submit", function(e){
        e.preventDefault()
    
        addLinhaReserva()
        atualizaTabelaReserva()
    })
    
    let linhasReserva = ""
    
    function addLinhaReserva(){
        const nomeReserva = document.getElementById("nome-reserva")
        const dataReserva = document.getElementById("data-reserva")
    
        let linha = "<tr>"
        linha += `<td>${nomeReserva.value}</td>`
        linha += `<td>${dataReserva.value}</td>`
        linha += "</tr>"
    
        linhasReserva += linha
    }
    
    function atualizaTabelaReserva(){
        const corpoTabela = document.querySelector(".table-reserva tbody")
        corpoTabela.innerHTML = linhasReserva
    }


    // formulario cadastro morador
    $("#cpf-morador").mask("000.000.000-00")
    $("#tel-morador").mask("(00)00000 0000")

    // formulario cadastro veiculo
    $("#placa-veiculo").mask("SSS-0000")

    ///formulario cadastro dependentes
    $("#cpf-dependente").mask("000.000.000-00")

    $(formCadastro).submit(function(e){
        e.preventDefault()
    })

})



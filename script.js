//window.alert("Meu código em JavaScript!")

function mostraNumero() {
    var input = document.getElementById("numero")
    var exibe = document.getElementById("botao")
    var resposta = document.querySelector("div#area-numero")
    /*console.log(resposta) para testar se a variavel está realmente sendo declarada corretamente*/ 

    var pega_valor = input.value
    /*console.log(pega_valor) para mostrar o valor no console*/


    if(pega_valor <10){
        resposta.innerHTML = pega_valor

    } else if(pega_valor >10){
        window.alert("Valores maiores que 10 não devem ser mostrados")
    }




}
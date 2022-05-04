var cifra = document.querySelector('#cifra')
var incremento = document.querySelector('#incremento')
var select = document.querySelector('#sele')
var sumiu = document.querySelector('#sumiu')
var codi = document.querySelector('#codi')
var decodi = document.querySelector('#decodi')
var botao = document.querySelector('#botao')
var radio = document.querySelector('#radio')

select.addEventListener('click',  function(e)  {
    if (select.value == '2') {
        sumiu.style.display = 'flex';  
    }else {
        sumiu.style.display = 'none';     
    }

}) 

radio.addEventListener('click', function(e){
    if(codi.checked){
        botao.innerHTML= `<input class="botao" type="button" value="Codificar" onclick="codifica()">`
    }

})
radio.addEventListener('click', function(e){
    if(decodi.checked){
        botao.innerHTML= `<input class="botao" type="button" value="Decodificar" onclick="decodificar()">`
    }

})


//base 64
var base = document.querySelector('#base64')
var entraText = document.querySelector('#entraTxt')
var txt = ""
var saiText =  document.querySelector('#saiTxt')


//codificaBase
function codificaBase(){
    if(codi.checked && select.value == '1' ){
        txt = entraText.value
        saiText.value = btoa(txt)
    }
}

//decodificar
function decodificaBase(){
    if(decodi.checked && select.value == '1')
    txt = entraText.value
    saiText.value = atob(txt)
}

//codificaCifra
var cifra = document.querySelector("cifra")
function codificaCifra(entrada, incremento){
    if(codi.checked && select.valeu == "2" ){
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }

    }
}



var cifra = document.querySelector('#cifra')
var incremento = document.querySelector('#incremento')
var select = document.querySelector('#sele')
var sumiu = document.querySelector('#sumiu')
var codi = document.querySelector('#codi')
var decodi = document.querySelector('#decodi')
var botao = document.querySelector('#botao')
var radio = document.querySelector('#radio')

select.addEventListener('click', function (e) {
    if (select.value == '2') {
        sumiu.style.display = 'flex';
    } else {
        sumiu.style.display = 'none';
    }

})

radio.addEventListener('click', function (e) {
    if (codi.checked) {
        botao.innerHTML = `<input class="botao" type="button" value="Codificar" onclick="codifica()">`
    }

})
radio.addEventListener('click', function (e) {
    if (decodi.checked) {
        botao.innerHTML = `<input class="botao" type="button" value="Decodificar" onclick="decodifica()">`
    }

})


//base 64



//codificaBase
function codifica() {
    var base = document.querySelector('#base64')
    var entraText = document.querySelector('#entraTxt')
    var txt = ""
    var saiText = document.querySelector('#saiTxt')
    if (codi.checked && select.value == '1') {
        txt = entraText.value
        saiText.value = btoa(txt)
    } else if (codi.checked && select.value == '2') {
        codiCesar()
    }
}

//decodificar
function decodifica() {
    var base = document.querySelector('#base64')
    var entraText = document.querySelector('#entraTxt')
    var txt = ""
    var saiText = document.querySelector('#saiTxt')
    if (decodi.checked && select.value == '1') {
        txt = entraText.value
        saiText.value = atob(txt)
    } else if (decodi.checked && select.value == '2') {
        decodiCesar()
    }
}

//Cifra
function codiCesar() {
    var entraText = document.querySelector('#entraTxt').value
    var incremento = document.querySelector('#incremento').value
    var saiText = document.querySelector('#saiTxt')
    var espaco = ""

    for (var i = 0; i < entraText.length; i++) {
        var incre = parseInt(incremento);
        var muda = entraText[i].charCodeAt();

        if (muda >= 97 && muda <= 122) {
            var calc = muda + incre;
            if (calc > 122) {
                calc = 96 + calc - 122;
                
            }
            espaco += String.fromCharCode(calc);
        } else if (muda >= 65 && muda <= 90) {
            var calc = muda + incre;
            if (calc > 90) {
                calc =  calc - 26 ;
            }
            espaco += String.fromCharCode(calc);
        } else {
            espaco += entraText[i];

        }
    }
    saiText.value = espaco;
}

function decodiCesar() {   
    var entraText = document.querySelector('#entraTxt').value
    var incremento = document.querySelector('#incremento').value
    var saiText = document.querySelector('#saiTxt')
    var espaco = ""


    for (var i = 0; i < entraText.length; i++) {
        var incre = parseInt(incremento);
        var muda = entraText[i].charCodeAt();
    
        if (muda >= 97 && muda <= 122) {
            var calc = muda - incre;
            if (calc < 97) {
                calc = 122 + calc - 96;
                
            }
            espaco += String.fromCharCode(calc);
        } else if (muda >= 65 && muda <= 90) {
            var calc = muda - incre;
            if (calc < 65) {
                calc = 26 + muda ;
            }
            espaco += String.fromCharCode(calc);
        } else {
            espaco += entraText[i];

        }
    }
    saiText.value = espaco;
}
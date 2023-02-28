const mousetrap = require('mousetrap')

var actualElemento = document.getElementById('numeroActual')
var resultadoElemento = document.getElementById('resultado')
var actual = ''
var temporal = 0
var operar = false;
var operacion = ''
var resultado = 0

var boton0 = document.getElementById('botonDos').addEventListener('click', clickDos)
var boton1 = document.getElementById('botonUno').addEventListener('click', clickUno)
var boton2 = document.getElementById('botonTres').addEventListener('click', clickTres)
var boton3 = document.getElementById('botonCuatro').addEventListener('click', clickCuatro)
var boton4 = document.getElementById('botonCinco').addEventListener('click', clickCinco)
var boton5 = document.getElementById('botonSeis').addEventListener('click', clickSeis)
var boton6 = document.getElementById('botonSiete').addEventListener('click', clickSiete)
var boton7 = document.getElementById('botonOcho').addEventListener('click', clickOcho)
var boton8 = document.getElementById('botonNueve').addEventListener('click', clickNueve)
var boton9 = document.getElementById('botonCero').addEventListener('click', clickCero)

var botonS = document.getElementById('botonSuma').addEventListener('click', clickSuma)
var botonR = document.getElementById('botonResta').addEventListener('click', clickResta)
var botonM = document.getElementById('botonMulti').addEventListener('click', clickMulti)
var botonD = document.getElementById('botonDivi').addEventListener('click', clickDivi)
var botonI = document.getElementById('botonIgual').addEventListener('click', clickIgual)
var botonI = document.getElementById('botonLimpiar').addEventListener('click', clickLimpiar)


mousetrap.bind('0',clickCero)
mousetrap.bind('1',clickUno)
mousetrap.bind('2',clickDos)
mousetrap.bind('3',clickTres)
mousetrap.bind('4',clickCuatro)
mousetrap.bind('5',clickCinco)
mousetrap.bind('6',clickSeis)
mousetrap.bind('7',clickSiete)
mousetrap.bind('8',clickOcho)
mousetrap.bind('9',clickNueve)
mousetrap.bind('+',clickSuma)
mousetrap.bind('-',clickResta)
mousetrap.bind('*',clickMulti)
mousetrap.bind('/',clickDivi)


function clickCero() {
    actual += '0'
    resultadoElemento.innerHTML = actual
}
function clickUno() {
    actual += '1'
    resultadoElemento.innerHTML = actual
}
function clickDos() {
    actual += '2'
    resultadoElemento.innerHTML = actual
}
function clickTres() {
    actual += '3'
    resultadoElemento.innerHTML = actual
}
function clickCuatro() {
    actual += '4'
    resultadoElemento.innerHTML = actual
}
function clickCinco() {
    actual += '5'
    resultadoElemento.innerHTML = actual
}
function clickSeis() {
    actual += '6'
    resultadoElemento.innerHTML = actual
}
function clickSiete() {
    actual += '7'
    resultadoElemento.innerHTML = actual
}
function clickOcho() {
    actual += '8'
    resultadoElemento.innerHTML = actual
}
function clickNueve() {
    actual += '9'
    resultadoElemento.innerHTML = actual
}
function clickSuma() {
    if (!operar) {
        temporal = parseInt(actual)
        actual = ''
        resultadoElemento.innerHTML = 0
        operar = true
        operacion = '+'
    }
}
function clickResta() {
    if (!operar) {
        temporal = parseInt(actual)
        actual = ''
        resultadoElemento.innerHTML = 0
        operar = true
        operacion = '-'
    }
}
function clickMulti() {
    if (!operar) {
        temporal = parseInt(actual)
        actual = ''
        resultadoElemento.innerHTML = 0
        operar = true
        operacion = '*'
    }
}
function clickDivi() {
    if (!operar) {
        temporal = parseInt(actual)
        actual = ''
        resultadoElemento.innerHTML = 0
        operar = true
        operacion = '/'
    }
}
function clickLimpiar() {
    if (!operar) {
        temporal = 0
        actual = ''
        resultadoElemento.innerHTML = 0
        operar = false
        operacion = '.'
    }
}
function clickIgual() {
    if (operar) {
        switch (operacion) {
            case '+':
                temporal += parseInt(actual)
                resultadoElemento.innerHTML = temporal
                actual = ''
                operar = false
                break;
            case '-':
                temporal = temporal - parseInt(actual)
                resultadoElemento.innerHTML = temporal
                actual = ''
                operar = false
                break;
            case '*':
                temporal = temporal * parseInt(actual)
                resultadoElemento.innerHTML = temporal
                actual = ''
                operar = false
                break;
            case '/':
                temporal = temporal / parseInt(actual)
                resultadoElemento.innerHTML = temporal
                actual = ''
                operar = false
                break;
            case '.':
                temporal = 0
                resultadoElemento.innerHTML = 0
                actual = ''
                operar = false
                break;
            default:
                break;
        }
    }
}

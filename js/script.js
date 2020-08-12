var numbers = [
document.querySelector('#t0'),
document.querySelector('#t1'),
document.querySelector('#t2'),
document.querySelector('#t3'),
document.querySelector('#t4'),
document.querySelector('#t5'),
document.querySelector('#t6'),
document.querySelector('#t7'),
document.querySelector('#t8'),
document.querySelector('#t9')
]

var igual = document.querySelector('#igual')

var som = document.querySelector('#soma')
var sub = document.querySelector('#subtracao')
var div = document.querySelector('#divisao')
var mul = document.querySelector('#multiplicacao')

var campoDeTexto = document.querySelector('#campoDeTexto')

nums_op = []
operacao = ''

function pressButton() {

    // Numeros:
    numbers[0].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }

        campoDeTexto.value += '0'
    })
    numbers[1].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }

        campoDeTexto.value += '1'
    })
    numbers[2].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '2'
    })
    numbers[3].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '3'
    })
    numbers[4].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '4'
    })
    numbers[5].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '5'
    })
    numbers[6].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '6'
    })
    numbers[7].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '7'
    })
    numbers[8].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '8'
    })
    numbers[9].addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        campoDeTexto.value += '9'
    })
    
    // Butoes Especiais:

    igual.addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        numberProcessing(0)
    })
    som.addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        numberProcessing(1)
    })
    sub.addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        numberProcessing(2)
    })
    mul.addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        numberProcessing(3)
    })
    div.addEventListener('click', function(){
        if(operacao == 'reiniciar'){
            campoDeTexto.value = ''
            operacao = '' 
        }
        
        numberProcessing(4)
    })
}

function numberProcessing(button_pressed) {
    if(nums_op[0] == undefined){
        nums_op[0] = campoDeTexto.value

        switch (button_pressed) {
            case 1:
                operacao = 'soma'
                campoDeTexto.value = ''
                break;
            case 2:
                operacao = 'subtracao'
                campoDeTexto.value = ''
                break;
            case 3:
                operacao = 'multiplicacao'
                campoDeTexto.value = ''
                break;
            case 4:
                operacao = 'divisao'
                campoDeTexto.value = ''
                break;
        
            default:
                alert('Digite a Operação')
                break;
        }

    }else{
        nums_op[1] = campoDeTexto.value 

        switch (button_pressed) {
            case 1:
                alert('Aperte no Butão "="')
                break;
            case 2:
                alert('Aperte no Butão "="')
                break;
            case 3:
                alert('Aperte no Butão "="')
                break;
            case 4:
                alert('Aperte no Butão "="')
                break;
        
            default:
                calculate()
                break;
        }

    }

    return 0
}

function calculate(params) {
    switch (operacao) {
        case "soma":
            campoDeTexto.value = parseInt(nums_op[0]) + parseInt(nums_op[1])
            break;
        case "subtracao":
            campoDeTexto.value = parseInt(nums_op[0]) - parseInt(nums_op[1])
            break;
        case "divisao":
            campoDeTexto.value = parseInt(nums_op[0]) / parseInt(nums_op[1])
            break;
        case "multiplicacao":
            campoDeTexto.value = parseInt(nums_op[0]) * parseInt(nums_op[1])
            break;
    
        default:
            campoDeTexto.value = 'error'
            break;
    }

    operacao = 'reiniciar'
    nums_op[0] = undefined
    nums_op[1] = undefined

}

pressButton()
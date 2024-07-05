const textArea  = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","obert"],["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
}


function Desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","obert"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
        for(let i=0; i<matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }
            
        }
        return stringDesencriptada
    }

    function copiar(){
        navigator.clipboard.writeText(mensaje.value);
    }
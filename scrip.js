const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncrptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncrptado = stringEncrptado.toLowerCase() ;
    
    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringEncrptado.includes(matrizCodigo[i][0])){
            stringEncrptado=stringEncrptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }

    }
    return stringEncrptado 
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none"
  
} 



function desencriptar(stringDesencrptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencrptado = stringDesencrptado.toLowerCase() ;
    
    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringDesencrptado.includes(matrizCodigo[i][1])){
            stringDesencrptado=stringDesencrptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }

    }
    return stringDesencrptado 
}

function btncopiar(){
    mensaje.select(); // Selecciona el contenido del textarea mensaje
    document.execCommand("copy"); // Copia el contenido seleccionado al portapapeles
    mensaje.value="";
    mensaje.style.backgroundImage = "none"
    }

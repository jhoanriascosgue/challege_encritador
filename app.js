//Limpiar texto
function limpiarCaja(idElemnto){
    document.querySelector(idElemnto).value = '';
}

//Funcion mostrar texto
function mostrarTexto(texto){
    return document.getElementById(texto).style.display = 'block';
}

//Funcion quitar texto
function desaparecerTexto(texto){
    return document.getElementById(texto).style.display = 'none';
}

//Funcion encriptar modificada para usar cadenas de caracteres
function encriptar(texto){
    let e = texto.replace(/e/g, "ex3");
    let i = e.replace(/i/g, "ix1");
    let a = i.replace(/a/g, "ax4");
    let o = a.replace(/o/g, "ox9");
    let u = o.replace(/u/g, "ux2");

    let encriptado = u;
    return encriptado;
}

//Funcion desencriptar modificada para revertir el proceso de encriptación
function desencriptar(texto){
    let ex3 = texto.replace(/ex3/g, "e");
    let ix1 = ex3.replace(/ix1/g, "i");
    let ax4 = ix1.replace(/ax4/g, "a");
    let ox9 = ax4.replace(/ox9/g, "o");
    let ux2 = ox9.replace(/ux2/g, "u");

    let desencriptado = ux2;
    return desencriptado;
}

function encriptarTexto(){
    //Quitar info de inico en salida
    desaparecerTexto('info');

    //Mostrar estructura para copiar texto
    mostrarTexto('informacionEncriptada');

    //Encriptar texto
    let textoUsuario = document.getElementById('textareaEntrada').value;
    let textoEncriptado = encriptar(textoUsuario);

    //Pasar texto encriptado a textarea de salida
    document.getElementById('infoSalida').value = textoEncriptado;

    //Limpiar caja entrada
    limpiarCaja('#textareaEntrada');
}

function desencriptarTexto(){
    //Quitar info de inico en salida
    desaparecerTexto('info');

    //Mostrar estructura para copiar texto
    mostrarTexto('informacionEncriptada');
    
    //Desencriptar texto
    let textoUsuario = document.getElementById('textareaEntrada').value;
    let textoDesencriptado = desencriptar(textoUsuario);

    //Pasar texto desencriptado a textarea de salida 
    document.getElementById('infoSalida').value = textoDesencriptado;

    //Limpar caja entrada
    limpiarCaja('#textareaEntrada');
}

function copiarTexto(){
    
    //Copiar texto
    let copiarSalida = document.getElementById('infoSalida');
    copiarSalida.select();
    copiarSalida.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("¡Copiado!");

    //Limpiar caja de salida
    limpiarCaja('#infoSalida');
}
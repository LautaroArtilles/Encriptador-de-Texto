/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function Encriptar(texto){
   

    var Encriptacion = texto.replaceAll('e', "enter");
    Encriptacion = Encriptacion.replaceAll('i', "imes");
    Encriptacion = Encriptacion.replaceAll('a', "ai");
    Encriptacion = Encriptacion.replaceAll('o', "ober");
    Encriptacion = Encriptacion.replaceAll('u', "ufat");

    document.querySelector("#msg").value = Encriptacion;  // Modifico el valor del Input
}



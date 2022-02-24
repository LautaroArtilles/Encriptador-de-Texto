/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function Desencriptar(texto){
   

    var Desencriptar = texto.replaceAll('enter',"e");
    Desencriptar = Desencriptar.replaceAll('imes',"i");
    Desencriptar = Desencriptar.replaceAll('ai',"a");
    Desencriptar = Desencriptar.replaceAll('ober',"o");
    Desencriptar = Desencriptar.replaceAll('ufat', "u");

    document.querySelector("#msg").value = Desencriptar;  // Modifico el valor del Input
}
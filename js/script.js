var botonEncriptar = document.querySelector("#btn-encriptar");  // Capturo el Boton

botonEncriptar.addEventListener("click", function(event){   // Añado un evento cuando el boton es clickeado

    event.preventDefault();  // Evito que se recargue la página
    var texto = document.querySelector("#input-texto").value.toLowerCase();  // Tomo el valor de entrada del texto
    Encriptar(texto);
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function(event){   

    event.preventDefault();  
    var texto = document.querySelector("#input-texto").value.toLowerCase();  
    Desencriptar(texto);
});

var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click", function(event){

   event.preventDefault();
   document.querySelector("#msg").focus();  // Se centra en el texto del cuadro derecho
   document.execCommand("selectAll");  //Selecciona todo
   document.execCommand("copy");  // Y lo copia
});

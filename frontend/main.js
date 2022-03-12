window.onload = () => {
   //Capturamos el formulario
   let form = document.getElementById("form");
   //estamos a la espera de que se pulse el boton
   form.addEventListener("submit", (e) => {
      //evitamos el comportamiento por defecto
      e.preventDefault();
      //Capturamos cada imput de texto
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let text = document.getElementById("field").value;
      //con esta función descargamos el archivo
      function download(filename, text) {
         var element = document.createElement('a');
         element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
         element.setAttribute('download', filename);

         element.style.display = 'none';
         document.body.appendChild(element);

         element.click();

         document.body.removeChild(element);
      }

      //construimos la variable de tecto
      let tempText = `
         Emisor: ${name}, \n
         Email: ${email},\n
         Mensaje: ${text}`;

      //invocamos a la funcion descargar
      download("email.txt", tempText);
      alert("Formulario enviado con éxito");

      
   });
} 
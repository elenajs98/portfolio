window.onload = () => {
   let form = document.getElementById("form");

   form.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let text = document.getElementById("field").value;

      function download(filename, text) {
         var element = document.createElement('a');
         element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
         element.setAttribute('download', filename);

         element.style.display = 'block';
         document.body.appendChild(element);

         element.click();

         document.body.removeChild(element);
      }


      let tempText = `
         Emisor: ${name}, \n
         Email: ${email},\n
         Mensaje: ${text}`;


      download("email.txt",tempText);

   });
} 
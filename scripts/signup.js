window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   const URL = "https://todo-api.ctd.academy/v1/users"
   const form = document.querySelector("form")
   const nombre = document.getElementById("inputNombre")
   const apellido = document.getElementById("inputApellido")
   const email = document.getElementById("inputEmail")
   const contrasenia  = document.getElementById("inputPassword")
   const contraseniaRepetida = document.getElementById("inputPasswordRepetida")
       

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()
      
        const objeto = {
            "firtsName": nombre.value,
            "lastName": apellido.value,
            "email": email.value,
            "password": contrasenia.value
        }
        const carga = {
            "method" : "POST",
            "headers" : {
                "content-type": "application/json"
            },
            "body" : JSON.stringify(objeto)
        }
        realizarRegister(carga)

    
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        fetch(URL, param)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    };


});
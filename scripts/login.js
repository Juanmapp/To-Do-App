window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    
    const form = document.forms[0]
    const email = document.getElementById("inputEmail")
    const contrasenia = document.getElementById("inputPassword")
    const url = 'https://todo-api.ctd.academy/v1'


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
    
        event.preventDefault()

        const payload = {
            email: email.value,
            password : contrasenia.value
        };

        const settings = {
            method: "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-type' : 'aplication/json'
            }
        };

        realizarLogin(settings)
        form.reset()
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       
        fetch(`${url}/users/login`, settings)
        .then(Response => {
            if(!Response.ok) {
                alert("Alguno de los datos son incorrectos")
            } else {
                return Response.json()
            }
        })
        .then(data => {
            console.log(data)
            if( data.jwt ){
                localStorage.setItem('token', data.jwt)
                location.replace("./mis-tareas.html")
            }})
            .catch(err => {
               console.log("Promesas rechazadas");
               console.log(err);
            })
            



        
    };


});
//
function activeBotonNavbar() {
    document.addEventListener('click', function () {

        if (!event.target.classList.contains('nav-link')) return;
        event.target.classList.add('active');
        var links = document.querySelectorAll('.nav-link');
        for (var i = 0; i < links.length; i++) {
            if (links[i] === event.target) continue;
            links[i].classList.remove('active');
        }

    }, false);
}


function cargaSendMail() {
    $("#c_enviar").attr("disabled", true);
    $(".c_error").remove();
    var filter = /^[A-Za-z][A-Za-z0-9_.-]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_name = $('#c_nombre').val();
    var s_email = $('#c_email').val();
    if (filter.test(s_email)) {
        sendMail = "true";
    } else {
        $('#email-box').after("<span class='c_error' id='c_error_mail'>Ingrese e-mail valido.</span>");
        //aplicamos color de borde si el se encontro algun error en el envio
        $('#contactform').css("border-color", "#e74c3c");
        sendMail = "false";
    }
    if (s_name.length == 0) {
        $('#nombre-box').after("<span class='c_error' id='c_error_name'>Ingrese su nombre.</span>");
        var sendMail = "false";
    }
    if (s_email.length == 0) {
        $('#email-box').after("<span class='c_error' id='c_error_msg'>Ingrese un email. </span>");
        var sendMail = "false";
    }
    if (sendMail == "true") {
        var datos = {
            "nombre": $('#c_nombre').val(),
						"telefono": $('#c_telefono').val(),
            "email": $('#c_email').val(),
            "consulta": $('#c_consulta').val(),
        };
        $.ajax({
            data: datos,
            // hacemos referencia al archivo contacto.php
            url: 'contacto-datos.php',
            type: 'post',
            beforeSend: function() {
                //aplicamos color de borde si el envio es exitoso
                $('#contactform').css("border-color", "#25A25A");
                $("#c_enviar").html("ENVIANDO");
            },
            complete: function() {
                $("#c_enviar").removeAttr("disabled").html("ENVIAR");
            },
            success: function(response) {
                if (response == 1) {
                    $('form')[0].reset();
                    $("#c_information p").html('Gracias por enviarnos tu consulta, nos contactaremos a la brevedad.');
                    $("#c_information").fadeIn('slow');
                } else {
                    $('form')[0].reset();
                    $("#c_information p").html('Gracias por enviarnos tu consulta, nos contactaremos a la brevedad.');
                    $("#c_information").fadeIn('slow');
                }
            },
            error: function() {
                $("#c_information p").html("<span class='c_error'>Ha ocurrido un error al enviar el formulario, por favor reintente a la brevedad. </span>");
            }
        });
    } else {
        $("#c_enviar").removeAttr("disabled");
    }
}

$(document).ready(function() {
    activeBotonNavbar();
});
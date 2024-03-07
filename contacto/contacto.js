function validarContacto() {

    var nombre_ = document.contact_form.nombre.value;
    var apellido_ = document.contact_form.apellido.value;
    var email_ = document.contact_form.email.value;

    var telefono_ = parseInt(document.contact_form.telefono.value);


    //var synth_ = parseInt(document.contact_form.synth.value);
    //var mensaje_ = document.contact_form.mensaje.value;

    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;



    console.log(telefono_.toString().length);


    if (nombre_.lenght == 0 || !isNaN(nombre_)) {
        document.contact_form.nombre.style.backgroundColor = 'rgb(255,166,162)';
        document.getElementById('alerta_nombre').style.display = 'block';
        document.contact_form.nombre.focus();
        return false;
    }


    else if (apellido_.lenght == 0 || !isNaN(apellido_)) {
        document.contact_form.apellido.style.backgroundColor = 'rgb(255,166,162)';
        document.getElementById('alerta_apellido').style.display = 'block';
        document.contact_form.apellido.focus();
        return false;
    }


    else if (!(ck_email.test(email_))) {
        document.contact_form.email.style.backgroundColor = 'rgb(255,166,162)';
        document.getElementById('alerta_email').style.display = 'block';
        document.contact_form.email.focus();
        return false;
    }

    else if (!(telefono_.toString().length == 10) || isNaN(telefono_)) {
        document.contact_form.telefono.style.backgroundColor = 'rgb(255,166,162)';
        document.getElementById('alerta_telefono').style.display = 'block';
        document.contact_form.telefono.focus();
        return false;
    }

     /* else if (isNaN(synth_)) {
        document.contact_form.synth.style.backgroundColor = 'rgb(255,166,162)';
        document.getElementById('alerta_synth').style.display = 'block';
        document.contact_form.synth.focus();
        return false;
    }*/



    else {

        document.getElementById('success-message').style.display = 'block';
        document.getElementById('contact-form').style.display = 'none';
    }
}
<template>
    <h1>Formulario de validación</h1>
    <form action="" class="form" id="form">

        <!-- Group: User-->
        <div class="form-group" id="group-username">
            <label for="username" class="form-label"><i class="fas fa-user"></i> Usuario</label>
            <div class="form-group-input">
                <input type="text" class="form-input" name="username" id="username" placeholder="Nombre de Usuario"/>
                <i class="form-valid-state fas fa-times-circle"></i>
            </div>
            <p class="form-input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener número, letras y guión bajo.</p>
        </div>

        <!-- Group: Name -->
        <div class="form-group" id="group-name">
            <label for="name" class="form-label"><i class="fas fa-file-signature"></i> Nombre</label>
            <div class="form-group-input">
                <input type="text" class="form-input" name="name" id="name" placeholder="Nombre Completo"/>
                <i class="form-valid-state fas fa-times-circle"></i>
            </div>
            <p class="form-input-error">El Nombre tiene que ser de 4 a 16 dígitos y solo puede contener número, letras y guión bajo.</p>
        </div>

        <!-- Group: Password -->
        <div class="form-group" id="group-pass">
            <label for="pass" class="form-label"><i class="fas fa-key"></i> Contraseña</label>
            <div class="form-group-input">
                <input type="password" class="form-input" name="pass" id="pass" placeholder="Contraseña"/>
                <i class="form-valid-state fas fa-times-circle"></i>
            </div>
            <p class="form-input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
        </div>

        <!-- Group: Password2 -->
        <div class="form-group" id="group-pass2">
            <label for="pass2" class="form-label"><i class="fas fa-lock"></i> Repetir Contraseña</label>
            <div class="form-group-input">
                <input type="password" class="form-input" name="pass2" id="pass2" placeholder="Repetir Contraseña"/>
                <i class="form-valid-state fas fa-times-circle"></i>
            </div>
            <p class="form-input-error">Ambas contraseñas tienen que ser iguales</p>
        </div>

        <!-- Group: Email -->
        <div class="form-group" id="group-email">
            <label for="email" class="form-label"><i class="far fa-envelope"></i> Correo Electrónico</label>
            <div class="form-group-input">
                <input type="email" class="form-input" name="email" id="email" placeholder="Correo Electrónico"/>
                <i class="form-valid-state fas fa-times-circle"></i>
            </div>
            <p class="form-input-error">El correo solo puede contener letras, números, puntos, guiones y guión bajo.</p>
        </div>

        <!-- Group: Phone -->
        <div class="form-group" id="group-phone">
            <label for="phone" class="form-label"><i class="fas fa-mobile-alt"></i> Teléfono</label>
            <div class="form-group-input">
                <input type="text" class="form-input" name="phone" id="phone" placeholder="Número Telefónico"/>
                <i class="form-valid-state fas fa-times-circle"></i>
            </div>
            <p class="form-input-error">El teléfono solo puede contener números y el máximo son 14 dígitos.</p>
        </div>

        <!-- Group: Terms and Conditions-->
        <div class="form-group form-group-label-terms" id="group-terms">
            <label class="form-label">
                <input class="form-chk" type="checkbox" name="temrs" id="terms"/>
                Acepto los Términos y Condiciones
            </label>
        </div>

        <div class="Formulario__mensaje" id="Formulario__mensaje">
            <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellene el Formulario correctamente.</p>
        </div>

        <div class="form-group form-group-btn-enviar">
            <button type="submit" class="form-btn"> Enviar</button>
            <p class="Formulario__mensaje-exito" id="Formulario__mensaje-exito">Formulario enviado exitósamente</p>
        </div>
    </form>
</template>
<style>
    main {
        max-width: 800px;
        width: 90%;
        margin: auto;
        padding: 40px;
    }
    h1{
        text-align: center;
        color: #8339aa;
    }
    .form{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:80px;
    }
    .form-label{
        display:block;
        font-weight:733;
        paddin:10px;
        cursor:pointer;
        color:#8339aa;
    }
    .form-group-input{
        position:relative;
    }
    .form-input{
        width:100%;
        background:#E5E5E54F;
        border:3px solid transparent;
        border-radius:20px;
        height:45px;
        line-height:45px;
        padding:0 40px 0 10px;
        transition:.3s ease all;
    }
    .form-input:focus{
        border:3px solid #0075FF;
        outline:none;
        box-shadow:3px 0px 30px rgba(163,163,163,0.4)
    }
    .form-input-error{
        font-size:12px;
        margin-bottom:0;
        display:none;
    }
    .form-input-error-active{
        display:block;
        text-align: center;
        color: #bb2929;
        font-weight: bold;
    }
    .form-valid-state{
        position:absolute;
        right:30px;
        bottom:15px;
        z-index:100;
        font-size:16px;
        opacity:0;
    }
    .form-chk{
        margin-right:10px;

    }
    .form-group-terms,
    .Formulario__mensaje,
    .form-group-btn-enviar{
        grid-column:span 3;
    }
    .form-group-label-terms{
        grid-column: 2
    }
    .Formulario__mensaje{
        height:45px;
        line-height:45px;
        background:#F66060;
        padding:0 15px;
        border-radius:3px;
        display:none;
    }
    .Formulario__mensaje-activo{
        display:block;
    }
    .Formulario__mensaje p{
        margin:0;
    }
    .form-group-btn-enviar{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .form-btn{
        height:45px;
        line-height:45px;
        width:30%;
        background:#00a59d;
        color:#fff;
        font-weight:bold;
        border:none;
        border-radius:20px;
        cursor:pointer;
        transition:.1 ease all;
    }
    .form-btn:hover{
        box-shadow:3px 0px 30px rgba(163,163,163,1)
    }
    .Formulario__mensaje-exito{
        font-size:14px;
        color:#119200;
        display:none;
    }
    .Formulario__mensaje-exito-activo{
        display:block;
    }
    .form-group-correcto .form-valid-state{
        color:#1ed12d;
        opacity:1;
    }
    .form-group-incorrecto .form-label{
        color:#bb2929;
    }
    .form-group-incorrecto .form-valid-state{
        color:#bb2929;
        opacity:1;
    }
    .form-group-incorrecto .form-input{
        border:3px solid #bb2929;
    }

    /* ----------- iPad ----------- */
    /* Portrait */
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: portrait){
        .form {
            grid-template-columns: 1fr 1fr;
        }

        .form-group-terms,
        .Formulario__mensaje,
        .form-group-btn-enviar {
            grid-column: span 2;
            width: 60%;
            margin: auto;
        }

        .form-group-label-terms{
            grid-column: span 2;
        }

        .form-btn {
            width: 100%;
        }

        .form-label{
            text-align:center;
        }
    }

    /* Landscape */
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: landscape) {
        .form {
            grid-template-columns: 1fr 1fr;
        }

        .form-group-terms,
        .Formulario__mensaje,
        .form-group-btn-enviar {
            grid-column: span 2;
            width: 60%;
            margin: auto;
        }

        .form-group-label-terms{
            grid-column: span 2;
        }

        .form-btn {
            width: 100%;
        }

        .form-label{
            text-align:center;
        }
    }

    /* ----------- Galaxy ----------- */
    /* Portrait */
    @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (orientation: portrait) {
        h1{
            font-size:1.5em;
        }
        .form {
            display: block;
            grid-template-columns: 1fr;
            line-height: 2em;
        }

        .form-group-terms,
        .Formulario__mensaje,
        .form-group-btn-enviar {
            grid-column: 1;
            height: auto;
            font-size: .9em;
            line-height: 1.5em;
            text-align: center;
            padding: 10px;
        }

        .form-btn {
            width: 100%;
        }

        .form-label{
            text-align:center;
            font-size:0.9em;
        }
        .form-input-error-active {
            display: block;
            text-align: center;
            color: #bb2929;
            font-weight: bold;
            font-size: .9em;
            line-height: 1.6em;
            margin: 3px;
        }
    }

    /* Landscape */
    @media screen
    and (device-width: 640px)
    and (device-height: 360px)
    and (orientation: landscape) {
        h1{
            font-size:1.5em;
        }
        .form {
            display: block;
            grid-template-columns: 1fr;
            line-height: 2em;
        }

        .form-group-terms,
        .Formulario__mensaje,
        .form-group-btn-enviar {
            grid-column: 1;
            height: auto;
            font-size: .9em;
            line-height: 1.5em;
            text-align: center;
            padding: 10px;
        }

        .form-btn {
            width: 100%;
        }

        .form-label{
            text-align:center;
            font-size:0.9em;
        }
        .form-input-error-active {
            display: block;
            text-align: center;
            color: #bb2929;
            font-weight: bold;
            font-size: .9em;
            line-height: 1.6em;
            margin: 3px;
        }
    }
    @media screen and (max-width: 700px) {
        .form {
            grid-template-columns: 1fr;
            display:block;
        }

        .form-group-terms,
        .Formulario__mensaje,
        .form-group-btn-enviar {
            grid-column: span 2;
            width: 50%;
            margin: auto;
        }

        .form-btn {
            width: 100%;
        }

        .form-label{
            text-align:center;
        }
        .form-group-label-terms {
            grid-column: span 2;
        }
    }
    @media screen and (max-width: 1024px) {
        .form {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }

        .form-group-terms,
        .Formulario__mensaje,
        .form-group-btn-enviar {
            grid-column: span 2;
            width: 50%;
            margin: auto;
        }

        .form-btn {
            width: 100%;
        }

        .form-label{
            text-align:center;
        }
        .form-group-label-terms {
            grid-column: span 2;
        }
    }
</style>
<script>
export default {
    mounted() {
        const form = document.getElementById('form');
        const inputs = document.querySelectorAll('#form input');
        const exp = {
            username: /^[a-zA-Z0-9\\_\\-]{4,16}$/,//Letters, numbers, dash, and underscore
            name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letters and spaces, can have accents.
            pass: /^.{4,12}$/, //4 to 12 digits.
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            phone: /^\d{7,14}$/ //7 to 14 numbers.
        }
        const fields = {
            username: false,
            name: false,
            pass: false,
            email: false,
            phone: false
        }
        const validateForm = (e) => {
            switch (e.target.name) {
                case "username":
                    validateField(exp.username, e.target, 'username');
                break;
                case "name":
                    validateField(exp.name, e.target, 'name');
                break;
                case "pass":
                    validateField(exp.pass, e.target, 'pass');
                    validatePass2();
                break;
                case "pass2":
                    validatePass2();
                break;
                case "email":
                    validateField(exp.email, e.target, 'email');
                break;
                case "phone":
                    validateField(exp.phone, e.target, 'phone');
                break;
            }
        }

        const validateField = (exp, input, field) => {
            if(exp.test(input.value)){
                document.getElementById(`group-${field}`).classList.remove('form-group-incorrecto');
                document.getElementById(`group-${field}`).classList.add('form-group-correcto');
                document.querySelector(`#group-${field} i`).classList.add('fa-check-circle');
                document.querySelector(`#group-${field} i`).classList.remove('fa-times-circle');
                document.querySelector(`#group-${field} .form-input-error`).classList.remove('form-input-error-active');
                fields[field] = true;
            } else {
                document.getElementById(`group-${field}`).classList.add('form-group-incorrecto');
                document.getElementById(`group-${field}`).classList.remove('form-group-correcto');
                document.querySelector(`#group-${field} i`).classList.add('fa-times-circle');
                document.querySelector(`#group-${field} i`).classList.remove('fa-check-circle');
                document.querySelector(`#group-${field} .form-input-error`).classList.add('form-input-error-active');
                fields[field] = false;
            }
        }

        const validatePass2 = () => {
            const inputPassword1 = document.getElementById('pass');
            const inputPassword2 = document.getElementById('pass2');

            if(inputPassword1.value !== inputPassword2.value){
                document.getElementById(`group-pass2`).classList.add('form-group-incorrecto');
                document.getElementById(`group-pass2`).classList.remove('form-group-correcto');
                document.querySelector(`#group-pass2 i`).classList.add('fa-times-circle');
                document.querySelector(`#group-pass2 i`).classList.remove('fa-check-circle');
                document.querySelector(`#group-pass2 .form-input-error`).classList.add('form-input-error-active');
                fields['password'] = false;
            } else {
                document.getElementById(`group-pass2`).classList.remove('form-group-incorrecto');
                document.getElementById(`group-pass2`).classList.add('form-group-correcto');
                document.querySelector(`#group-pass2 i`).classList.remove('fa-times-circle');
                document.querySelector(`#group-pass2 i`).classList.add('fa-check-circle');
                document.querySelector(`#group-pass2 .form-input-error`).classList.remove('form-input-error-active');
                fields['password'] = true;
            }
        }

        inputs.forEach((input) => {
            input.addEventListener('keyup', validateForm);
            input.addEventListener('blur', validateForm);
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const terms = document.getElementById('terms');
            if(fields.username && fields.name && fields.pass && fields.email && fields.phone && terms.checked ){
                form.reset();
                document.getElementById('Formulario__mensaje-exito').classList.add('Formulario__mensaje-exito-activo');
                document.querySelectorAll('.form-group-correcto').forEach((icono) => {
                    icono.classList.remove('form-group-correcto');
                });
                document.getElementById('Formulario__mensaje').classList.remove('Formulario__mensaje-activo');
            } else {
                document.getElementById('Formulario__mensaje').classList.add('Formulario__mensaje-activo');
            }
        });
    }
    };
</script>
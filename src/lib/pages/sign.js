import { createEmailPass } from '../lib/firebaseAuth.js';

export const signUp = () => {
    const registerNewUser = document.createElement('div');
    const viewSignUp = `
 <div id="registerEmail" class="loginForm">
    <aside class="signAside"></aside>
        <form class="userLogin">
        
           <h4>Registro De Usuario</h4>
            <label for="email"></label>
            <input type="email" id="emailRegister" placeholder="Correo electrónico">
            <label for="password"></label>
            <input type="password" id="passwordRegister" autocomplete = "passwordRegister" placeholder="Contraseña">
            <button type="button" id="regNewUser" class="enterBtn">Registrar</button>
            <p class="text">O inicia sesión con Google:</p>
            <button id= "googleBtn"class="google"><img src="img/google.png"></button>

        </form>
</div>`;

    registerNewUser.innerHTML = viewSignUp;

    const createUser = registerNewUser.querySelector('#regNewUser');
    createUser.addEventListener('click', () => {
        // Init with a new user with email and password
        const email = document.getElementById('emailRegister').value;
        const password = document.getElementById('passwordRegister').value;
        createEmailPass(email, password);
    });



    // // Button google
    // const googleBtn = registerNewUser.querySelector('#googleBtn');
    // googleBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     // init sesion with google
    //     googleLogin(provider);
    // });

    return registerNewUser;
};
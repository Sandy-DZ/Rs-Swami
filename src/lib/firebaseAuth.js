
// // import {signUp} from '../lib/index';
// firebase.initializeApp(firebaseConfig);

// function register(){
//     let email = document.getElementById('emailRegister').value;
//     let password = document.getElementById('passwordRegister').value;

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//         // ...
//       });







    // export function createEmailPass (email, password,name){
    //     firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(result => {
    //         result.user.updateProfile({
    //             displayName : name
    //         })
    //         result.user.sendEmailVerfication()
    //         .catch((error) => {
    //             const codeError = error.code;

    //         })
    //     })
    //     .catch(function (error) {
    //         //catch errors heré
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         if (errorCode === 'auth/weak-password') {
    //             document.querySelector('#weak-password').classList.remove('hide');
    //         }
    //         console.log(error);
    //     } )

    // }







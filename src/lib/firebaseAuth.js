


export function createEmailPass(email, password, name) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
            result.user.updateProfile({
                displayName: name
            })
            result.user.sendEmailVerification()
                .catch((error) => {
                    const codeError = error.code;
                    // console.log(error);

                })
        })
        .catch(function (error) {
            //catch errors heré
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (errorCode) {
                case 'auth/invalid-email':
                    alert('Email incorrecto.'); // eslint-disable-line no-alert
                    break;
                case 'auth/user-not-found':
                    alert('Usuario no encontrado.'); // eslint-disable-line no-alert
                    break;
                case 'auth/wrong-password':
                    alert('Contraseña incorrecta.'); // eslint-disable-line no-alert
                    break;
                default:
                    alert(errorMessage); // eslint-disable-line no-alert
            }
        })

}


import {signUp} from '../lib/pages/sign.js';

// Pone todo el contenido html creado en los archivos js en la pagina al contenedor llamado root
const renderedPage = (ruta) => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    switch (ruta) {
        case '#/':
            root.appendChild(signUp());
            break;
        default:
            root.innerHTML = `<h1>Oops! No se encuentra disponible el contenido </h1>`; // eslint-disable-line quotes
    }
};

export const rout = (ruta) => {
    if (ruta === '#/') {
        return renderedPage(ruta);
    }

    return renderedPage(ruta);
};

# AppRegister
aplicacion para registo de clase

pasos a paso --
todo versionado en githud es importante

trabajaremos con la termina Prompt (cmd)
cd.."aqui buscamos donde vamos a trabajar el projecto"
tener instalado node.js 
1° crear el entorno para usaremo (Visual Studio Code) ionic con angular


npm install -g @ionic/cli
npm install -g @angular/cli

2° Creamos nuestra carpeta del projecto

ionic start RegisterAPP

3° en este caso baso a trabajar con una base de dato en la nube que es fire base
para eso hay que crearce una cuenta y crear un projecto hay en la nube: https://console.firebase.google.com/
depues de eso volvemos a VSC.

npm install firebase @angular/fire

4° vamos a configurar la base de datos
vamos en nuestro codigo a la siguiente ruta: src/environments/environment.ts
hay ingresamo los siguientes parametros:

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebase: {
    apiKey: "<tu api key>",
    authDomain: "<tu dominio de autenticación>",
    databaseURL: "<tu URL de base de datos>",
    projectId: "<tu ID de proyecto>",
    storageBucket: "<tu nombre de cubo de almacenamiento>",
    messagingSenderId: "<tu ID de remitente de mensajes>",
  },
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

5° vamos a crear un componente para hacer pruebas a la base de datos

ionic generate component PruebaBaseFirebase


npm install firebase angularfire2 --save


6° vamos a meter datos
creamos un servicio en donde hay vamos a meter datos

ionic g s services/firestore
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Inicialización del proyecto

`npx create-react-app 2022netflix --template redux`

### Proceso de limpieza


### Importar las librerias


-material-ui/core, axios, firebase, react-router-dom, react-uuid, styled components


### App.js - layout inicial


-Creamos las rutas
-Renderizamos Login o el resto del app condicionado a la existencia de un usuario.


## Estilos

-Utilizamos useStyles para crear una infraestructura que nos permita asignar estilos a cada uno de los componentes.


### Crear las carpetas de componentes : Pages

- Creamos la infraestructura básica de los componentes que representan una página: Home, Login, Paypal, Profile, SignUp

### Estilos en los componentes de Pages

- patrón para añadir la infraestructura de estilos a todos los components página : Banner, Header, Plans, Rows.


### Estilos de los componentes de la carpeta components

- Banner, Header, Plans, Rows.

### Crear la carpeta de components, con componentes más secundarios

- Creamos la infraestructura básica del resto de componentes

### Comenzamos a trabajar en el Header


- Importamos el logo
-Añadimos al AppBar una clase transparent condicional. Está clase se activa si la variable show = true.
-La variable show se convierte en true, cuando hacemos un scroll vertical de más de 100 px.
-Para escuchar cuando el usuario hace un scroll vertical añadimos un eventListener al objeto window.
- El eventListener está activo una sola vez cada vez que refrescamos la página (useEffect con []).
- Una vez montado el componente, hay que limpiarlo para que no nos quede colgado el eventListener.
- Añadimos las rutas tanto al logo como al avatar.


### Comenzamos a trabajar en el Banner

- Hemos importado un pedazo de imagen como backgroundImage
- En React, tenemos que acompañar las backgroundImages con estilos como object-fit, background-size y background-position
- Hemos posicionado el titulo de la peli, unos botones, y la descripción
- Como la descripción viene de la API, tenemos que truncarla para asegurarno de que cabe. Para ellom hemos declarado la función truncate.
- Hemos añadido un div vacío, que oscurece la imagen hasta fusionarla con el resto del UI, que es oscuro.


### Comenzamos a trabajar en el Login

- Hemos creado un botón con style components y le hemos llamado NetflixButton. Esté botón está totalmente customizado y podremos variar su longitud, color y otros estilos, pasándole props.
- Styled components para varias los estilos del input o del botón, pero para su posicionamiento, le damos una clase normal.

- Hemos creado un input personalizado en Styled components. Le he llamado NetflixInput. Como InputBase era ya un componente de material ui, pues lo hemos llamado styled(InputBase). Si hubiera sido un input de base, hubieras utilizado styled.input``


### Componente Profile

- Hemos trabajado en la distribución.
- <Plans>Texto</Plans>
- const Plans = ({children}) => {
    return ()
} 
- Pasar props a los styled components.
- En el caso de que el componente no sea binario, p.ej que el tamaño sea pequeño, grande o mediano, entonces, lo solucionamos con una función y un switch.


### Signup

- Renderizado condicional. Hemos creado una variable signIn.
- Si la variable es false, desplegamos el formulario.


### Proceso de Registro / SignIn

- Habilitado una cuenta en Firebase.
- Inicializado el objeto auth.
- Capturado los datos tecleados por el usuario
- Registrado email y password con auth.create...
-SignIng con auth.signInWithEmailAndPassword ...


### Redux

- Habilitamos el slice userSlice para manejar el usuario en el componente que queramos


### Persistencia


- Hemos añadido un "event listener" en App.js
- Este "event listener" lo trae el obj auth, escucha cada vez que cambia el usuario en firebase.
- Cada vez que cambia, vuelve a inyectar el usuario en la capa de datos de userSlice (Redux).
- De esta manera recordamos que ya estemos dentro aunque refresquemos la página.


### Request

- Vamos a construir el componente Row
- Hemos habilitado todos los enpoints para acceder a themovieDB, y extraer los distintos objetos con toda la información clasificada por género.

### Requests al API

- Con useEffect, hacemos llamadas asyncronas mediante una función a la que hemos llamado fetchData.
- Esta función devuelve request.data.results, que es un array con todas las películas.
- Y las desplegamos en el UI.


### Creación del componente Paypal


- Al componente Paypal lo llamamos cuando clickamos uno de los botones de los planes de subscripción a Netflix.
- Estos botones nos redirigen a la route / checkout.
- En checkout vemos el componente Paypal, que contiene el código de React necesario para implementar la integración del app de React con Paypal.
- El código se encuentra en la documentación.
- Paralelamente nos tenemos que abrir una cuenta en Paypal, y obtener las credenciales.
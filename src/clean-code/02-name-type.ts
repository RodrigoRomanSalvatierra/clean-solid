(() => {

    // arreglo de temperaturas celsius
    const temperatureInDegreesCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    const ipAddressOfTheServer = '123.123.123.123';

    // Listado de usuarios
    const userData = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const emailList = userData.map( user => user.email );

    // Variables booleanas de un video juego
    const itCanjump = false;
    const heCanrun = true;
    const hasNoItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const finalTime = new Date().getTime() - initialTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printTheJob() {
        throw new Error('Function not implemented.');
    }
    
})();






(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fileToEvaluate = [
        { id: 1, flaged: false },
        { id: 2, flaged: false },
        { id: 3, flaged: true },
        { id: 4, flaged: false },
        { id: 5, flaged: false },
        { id: 7, flaged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const fileToDeleted = fileToEvaluate.map( file => file.flaged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // día de hoy - today
    const currentDate = new Date();
    
    // días transcurridos - elapsed time in days
    const daysPassed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFiles = 33;
    
    // primer nombre - first name
    const name = 'Rodrigo';
    
    // primer apellido - last name
    const lastName = 'Roman';

    // días desde la última modificación - days since modification
    const daySinceLastChange = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const naximumNumberOfClass = 6;


})();





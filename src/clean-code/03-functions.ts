(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getActorInformationByMovie( movieId: string ) {
        console.log({ movieId });
    }

    function getActorBiographyById( actorId: string ) {
        console.log({ actorId });
    }

    interface Movie {
        cast: string[];
        description : string;
        rating : number;
        title : string;
    }
    
    function createMovie({ title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'rodrigo' ) return false;

        console.log('crear actor');
        return true;        
    }

    // funcion que necesita refactor
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    // funcion refactorizada
    const getPayAmountRefactor = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    }



})();






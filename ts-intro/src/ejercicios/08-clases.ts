/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor( public nombre: string,
                 public direccion: string,) {}
}

class Heroe extends PersonaNormal{
    //public alterEgo: string;
    //public edad: number;
    //public nombreReal: number;

    constructor( public alterEgo: string,
                 public edad: number,
                 public nombreReal: string ){

        super(nombreReal, 'New York');

    }
}

const ironman = new Heroe('IronMan', 45, 'Tony');

console.log(ironman);


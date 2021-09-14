
class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase
    }    
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);

    }
};

const spiderman = new Persona('Peter parker', 'Spiderman', 'amo las aves');
const ironman = new Persona('Tony Stark', 'ironman', 'el genio');
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
ironman.quienSoy();



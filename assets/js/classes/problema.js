

const fher = {
    nombre: 'Fernando',
    edad: 30,
};

const pedro = {
    nombre: 'Pedro',
    edad: 15,
};

function Persona(nombre, edad){
    console.log('se ejecuto esta linea');

    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria   = new Persona('maria', 18);
const melissa = new Persona('Melissa', 35);
maria.imprimir();
melissa.imprimir();
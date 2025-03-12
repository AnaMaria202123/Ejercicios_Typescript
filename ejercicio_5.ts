interface Reptil{
    mostrarInfo():void;
}

interface Volador{
    mostrarInfo():void;
}

interface Animalitos extends Reptil{
    nombre: string;
    mostrarInfo():void;
}
class Animal implements Animalitos, Volador{
    public nombre: string;
    constructor (nombre:string){
        this.nombre = nombre;
    }

    mostrarInfo():void{
        console.log(`El nombre del animal es: ${this.nombre}`)
    }
}
const animal = new Animal("Dragón");
animal.mostrarInfo();
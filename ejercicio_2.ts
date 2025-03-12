interface Empleado{
    nombre: string;
    salario: number;
    info(): void;
    
}

class Gerente implements Empleado{
    nombre: string;
    salario: number;
    departamento: string;

    constructor(nombre: string, salario:number, departamento:string){
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    }
    info(){
        console.log(`La informacion del Gerente es: ${this.nombre}, ${this.salario}, ${this.departamento}`);
    }
    bonificacion(valor:number):number{
        let bonificacion = this.salario * valor;
        return bonificacion;
    }
    }
    class Desarrollador implements Empleado{
        nombre: string;
        salario: number;
        lenguaje: string;
        constructor(nombre:string, salario:number, lenguaje:string){
            this.nombre = nombre;
            this.salario = salario;
            this.lenguaje = lenguaje;
        }
    info() {
         console.log(`La informacion del desarurrador es: ${this.nombre}, ${this.salario}, ${this.lenguaje}`);
    }
    }

    class Diseñador implements Empleado{
        nombre: string;
        salario: number;
        especialidad: string;

        constructor(nombre:string, salario:number, especialidad:string){
            this.nombre = nombre;
            this.salario = salario;
            this.especialidad = especialidad;
        }
        info() {
            console.log(`La informacion del diseñador es: ${this.nombre}, ${this.salario}, ${this.especialidad}`);
        }
    }
const Empleaditos: Empleado[] = [
    new Gerente ("Stiven", 1000000,"Ventas"),
    new Desarrollador ("Ana", 50000, "Typescript"),
    new Diseñador ("Karina", 2000000, "Enfermera")
];

Empleaditos.forEach((emp)=>{
    emp.info();
});

const gerentecito = new Gerente ("Stiven Cj", 1000000,"Ventas");
const desarrolladorcito = new Desarrollador ("Luis", 550000, "Visual");

const empleados2 : Empleado [] = [
    gerentecito,
    desarrolladorcito,
];

empleados2.forEach((emp)=>{
    emp.info();
});

console.log(gerentecito.bonificacion(0.12));



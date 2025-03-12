interface ControlDispositivos{
    encerderDispositivo(nombre:string): void;
    apagarDispositivo(nombre:string): void;
    obtenerDispositivo(nombre:string): string;
}

interface AutomatizacionHogar{
    crearAutomatizacion(nombre:string,acciones:string[]):void;
    eliminarAutomatizacion(nombre:string):void;
    ejecutarAutomatizacion(nombre:string):void;

}

class CasaInteligente implements ControlDispositivos, AutomatizacionHogar{

    dispositivo: string;
    constructor (dispositivo: string){
        this.dispositivo = dispositivo;
    }

    encerderDispositivo(nombre:string): void{
        this.dispositivo = nombre;
        console.log(`El dispositivo a encender es: ${this.dispositivo}`);
    }
    apagarDispositivo(nombre:string): void{
        this.dispositivo = nombre;
        console.log(`El dispositivo a apagar es: ${this.dispositivo}`);
    }
    obtenerDispositivo(nombre:string): string{
        this.dispositivo = this.dispositivo;
        return this.dispositivo;
    }
    crearAutomatizacion(nombre:string, acciones:string[]): void{
        console.log(`La automatizacion creada es: ${nombre} y las acciones son: ${acciones}`);
    }
    eliminarAutomatizacion(nombre:string): void{
        console.log(`La automatizaicon eliminada es: ${nombre}`);
    }
    ejecutarAutomatizacion(nombre:string): void{
        console.log(`La automatizaicon a ejecutar es: ${nombre}`);

    }
    }

const micasa= new CasaInteligente ("Refrigerador");
micasa.encerderDispositivo("BombilloInteligengte");    

const micasita: ControlDispositivos & AutomatizacionHogar = new CasaInteligente("Licuadora");
micasita.encerderDispositivo("Nevecon");
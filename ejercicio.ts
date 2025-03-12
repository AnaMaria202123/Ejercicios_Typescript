interface Person{
    name: string;
    address: string;
    age: number;
    info(): void;
}
class employe implements Person{
    name: string;
    address: string;
    age: number;
    constructor(name: string, address:string, age:number){
        this.name = name;
        this.address = address;
        this.age = age;

    }
    info(){
        console.log(`esta es la informacion del empleado name: ${this.name}`);
    }
    }
    let diego = new employe("Diego","1,2,3",25);
    diego.info();
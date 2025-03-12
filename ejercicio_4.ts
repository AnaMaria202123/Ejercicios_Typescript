interface AutoMovil{
    marca: string;
    modelo?: string;
    precio?: number;
    info(): void;
}

class Moto implements AutoMovil{
    public _marca: string ="";
    public _precio: number = 0;

    get marca(){
        return this._marca;
    }

    set marca(nuevaMarca) {
        this._marca = nuevaMarca;
    }

    get precio(){
        return this._precio;
    }

    set precio(nuevoPrecio){
        this._precio = nuevoPrecio;
    }

    info() {
        console.log(`Marca: ${this._marca}, Precio: ${this._precio}`);
    }
}

const auto: AutoMovil = new Moto ();
auto.marca = "Chevrolet";
console.log(auto);

auto.precio = 500000000
console.log(auto);

interface Recargable {
    recargar(): void;
}

interface Disparable {
    disparar(): void;
}

class PistolaLaser implements Recargable, Disparable {
    recargar() {
        console.log("Pistola recargada");
    }
    disparar() {
        console.log("Disparo realizado.");
    }
}


const miPistola = new PistolaLaser();
miPistola.recargar();


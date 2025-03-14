interface Transporte {
    capacidad: number;
}

interface Avion extends Transporte {
    altitudMaxima: number;
}


const miAvion: Avion = { capacidad: 200, altitudMaxima: 12000 };

console.log(miAvion.capacidad);
console.log(miAvion.altitudMaxima);

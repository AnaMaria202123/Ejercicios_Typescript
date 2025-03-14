interface Dispositivo {
    nombre: string;
}

interface Smartphone extends Dispositivo {
    tienePantallaTactil: boolean;
}

// Instancia de un Smartphone
const miSmartphone: Smartphone = { nombre: "iPhone", tienePantallaTactil: true };


console.log(miSmartphone.nombre);
console.log(miSmartphone.tienePantallaTactil);

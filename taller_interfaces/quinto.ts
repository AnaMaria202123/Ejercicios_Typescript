interface Videojuego {
    titulo: string;
    plataforma: string;
}

class Juego implements Videojuego {
    titulo: string = "God of War";         
    plataforma: string = "PlayStation 5";  
}

const miJuego = new Juego();
console.log(miJuego.titulo);
console.log(miJuego.plataforma);

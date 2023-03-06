//Global variables
let book
let books = []

//global constants
const bookSection = document.getElementById('bookSection')

//Events

//Class constructor
class Book{
    constructor(title, imagen, synopsis){
        this.title = title
        this.imagen = imagen
        this.synopsis = synopsis
    }
}

//Objects
const ElCucoDeCristal = new Book('El cuco de cristal ', '/src/img/ElCucoDeCristal.gif', '¿ESTÁS PREPARADO PARA ARRIESGAR TU CORAZÓN? Vuelve Javier Castillo MAGNÉTICA - SALVAJE - MONUMENTAL - TREPIDANTE El regreso más esperado MÁS DE 1.700.000 EJEMPLARES VENDIDOS Un trasplante de urgencia Un donante lleno de secretos¿Qué esconden los latidos de tu corazón')
const HijosDeLaFabula = new Book('Hijos de la fábula ', '/src/img/HijosDeLaFabula.gif', 'Dos jóvenes exaltados, Asier y Joseba, se marchan en 2011 al sur de Francia con la intención de convertirse en militantes de ETA. Esperan instrucciones en una granja de pollos, acogidos por una pareja francesa con la que apenas se entienden')
const CastillosDeFuego = new Book('Castillos de fuego', '/src/img/CastillosDeFuego.gif', 'Madrid, 1939-1945. Muchos luchan por salir adelante en una ciudad marcada por el hambre, la penuria y el estraperlo. Como Eloy, un joven tullido que trata de salvar de la pena de muerte a su hermano encarcelado')
const HabitosAtomicos = new Book(' Hábitos atómicos Cambios pequeños, resultados extraordinarios', '/src/img/HabitosAtomicos.gif', 'MÁS DE 100.000 EJEMPLARES VENDIDOS EN ESPAÑA. «Sumamente práctico y útil.» MARK MANSON, autor de El sutil arte de que (casi todo) te importe una mi*rda «Paso a paso, cambiará tu rutina.» Financial Times A menudo pensamos que para cambiar de vida tenemos que pensar en hacer cambios grandes. ')
const LaSecta = new Book('La secta', '/src/img/LaSecta.gif', 'Después de El mentalista, vuelven Camilla Läckberg y Henrik Fexeus. Déjate atrapar. Más de 1.000.000 de lectores lo están esperando. La agente Mina Dabiri y sus compañeros del departamento de Homicidios de la policía de Estocolmo se enfrentan a un nuevo reto')

books.push(ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta, ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta, ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta, ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta, ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta, ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta, ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta, ElCucoDeCristal, HijosDeLaFabula, CastillosDeFuego, HabitosAtomicos, LaSecta)

books.forEach((books) => {
    book = `<div class="book">
        <h3>${books.title}</h3>
        <img src="${books.imagen}" alt="">
        </div>`
        bookSection.innerHTML += book
})
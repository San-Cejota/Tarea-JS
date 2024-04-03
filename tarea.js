
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array
let arrayNum = [10, 7, 9, 8, 21]
const sumArray = (array) => {
    return array.reduce((total, numero) => total + numero, 0);
  };
  console.log("Punto 1:");
  console.log(sumArray(arrayNum));
  
  // Función filterEvenNumbers: Filtrar números pares de un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con solo los números pares del array original
  const filterEvenNumbers =(number) => {
    return number.filter(numero => numero % 2 === 0);
  };
  console.log("Punto 2:");
  console.log(filterEvenNumbers(arrayNum));

  // Función findMaxNumber: Encontrar el mayor número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El mayor número en el array
  const findMaxNumber = (array) => {
    return Math.max(...array)
  };
  console.log("Punto 3:");
  console.log(findMaxNumber(arrayNum));
  
  // Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
  // Parámetros: array (Array) - Un array de strings
  // Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
  const arrayStrings = ["bienvenido", "a", "javascript" ]
  const toUpperCaseStrings = (array) => {
    return array.map(String => String.toUpperCase())
  };
  console.log("Punto 4:");
  console.log(toUpperCaseStrings(arrayStrings));

  
  // Función calculateAverage: Calcular el promedio de un array de números
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El promedio de los números en el array
  const calculateAverage = (array) => {
    if (array.length === 0) {
      return undefined;
    }
    const suma = array.reduce((acumulador, num) => acumulador + num, 0);
    return suma / array.length;
  };
  console.log("Punto 5:");
  console.log(calculateAverage(arrayNum));
  
  // Función sortNumbersAscending: Ordenar un array de números de forma ascendente
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
  const sortNumbersAscending = (array) => {
    return array.slice().sort((a, b) => a - b);
  };
  console.log("Punto 6:");
  console.log(sortNumbersAscending(arrayNum));

  // Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
  // Parámetros: 
  // - array (Array) - Un array de elementos
  // - condition (Function) - Una función de condición que devuelve true o false
  // Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
  const findFirstElement = () => {
    
  };
  console.log("Punto 7:");
  // Función countElements: Contar la cantidad de elementos en un array
  // Parámetros: array (Array) - Un array de elementos
  // Devuelve: Number - La cantidad de elementos en el array
  const countElements = (array) => {
    return array.length;
  };
  console.log("Punto 8:");
  console.log(countElements(arrayNum));

  // Función concatenateArrays: Concatenar dos arrays
  // Parámetros: 
  // - array1 (Array) - El primer array a concatenar
  // - array2 (Array) - El segundo array a concatenar
  // Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
  const array1 = ["Este es el primer array"]
  const array2 = [" y" , "este es el segundo"]
  const concatenateArrays = (array1, array2) => {
    return array1.concat(array2)
  };
  console.log("Punto 9:");
  console.log(concatenateArrays(array1,array2));
  
  // Función squareNumbers: Calcular el cuadrado de cada número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
  const squareNumbers = (num) => {
    return num.map(numero => numero ** 2)
  };
  console.log("Punto 10:");
  const numeros = [2, 3, 5,10,9]
  console.log(squareNumbers(numeros));

  // Función flecha para agregar habilidades a un jugador de un juego
const agregarHabilidad = (jugador, nuevaHabilidad) => {
    /*
    Parámetros de entrada:
    - jugador: objeto que representa al jugador del juego.
    - nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.

    Lo que hace la función:
    Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
    Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
    Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe

    Valor de retorno:
    Retorna el objeto jugador modificado con la nueva habilidad agregada.
    */
    
    if (!jugador.habilidades) {
        jugador.habilidades = [];
    }
    
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        jugador.habilidades.push(nuevaHabilidad);
    }
    
    return jugador;
};
const jugador = {
    nombre: "Juan",
    nivel: 5,
    habilidades: ["Ataque", "Defensa"]
};
const nuevoJugador = agregarHabilidad(jugador, "Magia");
console.log("Punto 11: ");
console.log(nuevoJugador);


// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const calcularDuracionTotal = (peliculas) => {
    return peliculas.reduce((totalDuracion, pelicula) => {
        return totalDuracion + pelicula.duracion; }, 0);
};

const peliculas = [
    { titulo: "Interestelar", duracion: 190 },
    { titulo: "Seven", duracion: 150 },
    { titulo: "Oppenheimer", duracion: 180 }
];
console.log("Punto 12:");
console.log(calcularDuracionTotal(peliculas),"Minutos en total");

// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo, genero) => {
    return peliculas.filter(pelicula => {
        return pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()) && pelicula.genero.toLowerCase() === genero.toLowerCase();
    });
};

// Ejemplo de uso:
const peliculass = [
    { titulo: "Toda una vida en un año", genero: "Romance" },
    { titulo: "Oppeheimer", genero: "Terror" },
    { titulo: "Interestelar", genero: "Aventura" },
    { titulo: "Scarface", genero: "Crimen" }
];
console.log("Punto 13:");
console.log(buscarPeliculas(peliculass, "Interestelar", "Aventura"));

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas) => {
    if (peliculas.length === 0) {
        return 0; 
    }

    const sumaPuntajes = peliculas.reduce((total, pelicula) => 
    total + pelicula.puntaje, 0);

    return sumaPuntajes / peliculas.length;
};

const peliculasPoints = [
    { puntaje: 3 },
    { puntaje: 6 },
    { puntaje: 8 }
];
console.log("Punto 14:");
console.log(calcularPromedioPuntajes(peliculasPoints));

// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento.
    return peliculas.filter(pelicula => pelicula.año === año);
};

// Ejemplo de uso:
const peliculasYear = [
    { titulo: "Shrek", año: 2014 },
    { titulo: "Cenicienta", año: 1987 },
    { titulo: "Ratatouille", año: 2004 }
];
console.log("Punto 15:");
console.log(filtrarPorAño(peliculasYear, 2004));

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genero === genero);
    
  // Calcular el promedio de duración de las películas filtradas.
  if (peliculasFiltradas.length === 0) {
      return 0; // Devolver 0 si no hay películas del género especificado
  }

  const duracionTotal = peliculasFiltradas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  return duracionTotal / peliculasFiltradas.length;
};

const peliculasPoint = [
  { titulo: "Pelicula 1", genero: "Aventura", duracion: 120 },
  { titulo: "Pelicula 2", genero: "Drama", duracion: 90 },
  { titulo: "Pelicula 3", genero: "Aventura", duracion: 140 }
];
console.log("Punto 16:");
console.log(calcularPromedioDuracionPorGenero(peliculasPoint, "Aventura"));

// Clase base que representa un vehículo
class Vehiculo {
  /**
   * Constructor de la clase Vehiculo.
   * @param {string} marca - La marca del vehículo.
   * @param {string} modelo - El modelo del vehículo.
   * @param {number} año - El año de fabricación del vehículo.
   */
  constructor(marca, modelo, año) {
      this.marca = FORD;
      this.modelo = Raptor;
      this.año = 2024;
  }

  /**
   * Método para obtener la información del vehículo.
   * @returns {string} - La información del vehículo en formato de cadena de texto.
   */
  obtenerInformacion() {
      return `Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`;
  }
}


// Clase que representa un automóvil
class Automovil extends Vehiculo {
  /**
   * Constructor de la clase Automovil.
   * @param {string} marca - La marca del automóvil.
   * @param {string} modelo - El modelo del automóvil.
   * @param {number} año - El año de fabricación del automóvil.
   * @param {string} color - El color del automóvil.
   * @param {number} cilindrada - La cilindrada del motor del automóvil.
   * @param {number} potencia - La potencia del motor del automóvil.
   * @param {number} numPuertas - El número de puertas del automóvil.
   * @param {number} numAsientos - El número de asientos del automóvil.
   * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
   */
  constructor(marca, modelo, año, color, cilindrada, potencia, numPuertas, numAsientos, tipoTransmision) {
      super(marca, modelo, año);
      this.color = NegroMate;
      this.cilindrada = 5.4;
      this.potencia = 450;
      this.numPuertas = 4;
      this.numAsientos = 5;
      this.tipoTransmision = Automatica;
  }

  /**
   * Método para obtener la información del automóvil.
   * @returns {string} - La información del automóvil en formato de cadena de texto.
   */
  obtenerInformacion() {
      return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Asientos: ${this.numAsientos}, Transmisión: ${this.tipoTransmision}`;
  }
}


// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
  /**
   * Constructor de la clase Motocicleta.
   * @param {string} marca - La marca de la motocicleta.
   * @param {string} modelo - El modelo de la motocicleta.
   * @param {number} año - El año de fabricación de la motocicleta.
   * @param {string} color - El color de la motocicleta.
   * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
   * @param {number} potencia - La potencia del motor de la motocicleta.
   * @param {number} numRuedas - El número de ruedas de la motocicleta.
   * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
   */
  constructor(marca, modelo, año, color, cilindrada, potencia, numRuedas, tipo) {
      this.marca= Yamaha;
      this.modelo= SZR;
      this.color = GrisRaton;
      this.cilindrada = 150;
      this.potencia = 7500;
      this.numRuedas = 2;
      this.tipo = Urbana;
  }

  /**
   * Método para obtener la información de la motocicleta.
   * @returns {string} - La información de la motocicleta en formato de cadena de texto.
   */
  obtenerInformacion() {
      return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
  }
}


// Clase que representa un camión
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año de fabricación del camión.
     * @param {string} color - El color del camión.
     * @param {number} cilindrada - La cilindrada del motor del camión.
     * @param {number} potencia - La potencia del motor del camión.
     * @param {number} numEjes - El número de ejes del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
     */
    constructor(marca,modelo,año,color,cilindrada,potencia, numEjes, capacidadCarga, tipoCarroceria){
      super(marca, modelo, año);
      this.color = Naranja;
      this.cilindrada = 5.4;
      this.potencia = 7000;
      this.numEjes = 4;
      this.capacidadCarga = 10;
      this.tipoCarroceria = Mecanica;
    }

    /**
     * Método para obtener la información del camión.
     * @returns {string} - La información del camión en formato de cadena de texto.
     */
    obtenerInformacion() {
      return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ejes: ${this.numEjes}, Capacidad de Carga: ${this.capacidadCarga}, Tipo de Carrocería: ${this.tipoCarroceria}`;
    }
}

// Clase que representa un autobús
class Autobus extends Vehiculo {
  /**
   * Constructor de la clase Autobus.
   * @param {string} marca - La marca del autobús.
   * @param {string} modelo - El modelo del autobús.
   * @param {number} año - El año de fabricación del autobús.
   * @param {string} color - El color del autobús.
   * @param {number} cilindrada - La cilindrada del motor del autobús.
   * @param {number} potencia - La potencia del motor del autobús.
   * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
   * @param {string} tipoCombustible - El tipo de combustible del autobús.
   * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
   */
  constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
      super(marca, modelo, año);
      this.color = Blanco;
      this.cilindrada = 7,7;
      this.potencia = 220;
      this.capacidadPasajeros = 35;
      this.tipoCombustible = Gasolina;
      this.tipoMotor = Cilindrado;
  }

  /**
   * Método para obtener la información del autobús.
   * @returns {string} - La información del autobús en formato de cadena de texto.
   */
  obtenerInformacion() {
      return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Capacidad de Pasajeros: ${this.capacidadPasajeros}, Tipo de Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
  }
}


// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
  /**
   * Constructor de la clase Bicicleta.
   * @param {string} marca - La marca de la bicicleta.
   * @param {string} modelo - El modelo de la bicicleta.
   * @param {number} año - El año de fabricación de la bicicleta.
   * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
   * @param {number} numMarchas - El número de marchas de la bicicleta.
   * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
   * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
   * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
   * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
   */
  constructor(marca, modelo, año, tipo, numMarchas, material, suspension, frenos, tipoManubrio) {
      super(marca, modelo, año);
      this.tipo = Todoterreno;
      this.numMarchas = 5;
      this.material = acero;
      this.suspension = hidraulica;
      this.frenos = disco;
      this.tipoManubrio = clasico;
  }

  /**
   * Método para obtener la información de la bicicleta.
   * @returns {string} - La información de la bicicleta en formato de cadena de texto.
   */
  obtenerInformacion() {
      return `${super.obtenerInformacion()}, Tipo: ${this.tipo}, Marchas: ${this.numMarchas}, Material: ${this.material}, Suspensión: ${this.suspension}, Frenos: ${this.frenos}, Manubrio: ${this.tipoManubrio}`;
  }
}


/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  
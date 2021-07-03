let formulario = document.querySelector('form');
let evaluacion = (event) => {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let tipo = document.getElementById('tipo').value;
    let nombremascota = document.getElementById('nombremascota').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.getElementById('resultado');
    if (tipo == 'animal') {
        let gato = new Animal(nombre, direccion, telefono, tipo, nombremascota, enfermedad);
        resultado.innerHTML = `${gato.mostrarDatos()}. <br>
    ${gato.datosPropietario()}`
    } else {
        let perro = new Mascota(nombre, direccion, telefono, tipo, nombremascota, enfermedad);
        resultado.innerHTML = `${perro.mostrarDatos()}. <br>
    ${perro.datosPropietario()}`
    }
}
formulario.addEventListener('submit', evaluacion);
class Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipo = tipo;
    }
    mostrarDatos() {
        return (`El nombre del dueño es: ${this.nombre}. El domiciio es: ${this.direccion}, y el número telefónico de contacto es: ${this.telefono} `);
    }
}
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono, nombremascota, tipo);
    }
    get tipo() {
        return this._tipo;
    }
}
class Mascota extends Propietario {
    constructor(nombre, direccion, telefono, tipo, nombremascota, enfermedad) {
        super(nombre, direccion, telefono, tipo), enfermedad;
        this.nombremascota = nombremascota;
        this.enfermedad = enfermedad;
    }
    get nombremascota() {
        return this._nombremascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set nombremascota(nombremascota_nuevo) {
        this._nombremascota = nombremascota_nuevo;
    }
    set enfermedad(enfermedad_detectada) {
        this._enfermedad = enfermedad_detectada;
    }
    datosPropietario() {
        return (`El tipo de animal es un: ${this.tipo}, mientras que el nombre de la mascota es: ${this._nombremascota} y la enfermedad es: ${this._enfermedad}`);
    }
}
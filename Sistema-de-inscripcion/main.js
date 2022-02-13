class Materia{
    constructor({
        nombre,
        maxEstudiantes,
        listaEstudiantes=[],
        profesor = {},
    }){
        this._nombre= nombre;
        this._maxEstudiantes= maxEstudiantes;
        this._listaEstudiantes = listaEstudiantes
        this._profesor=profesor;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        if(nuevoNombre === null || nuevoNombre === undefined){
            console.error("introduzca un nombre valido");
        }else{
            this._nombre=nuevoNombre;
        }
    }

    get maxEstudiantes(){
        return this._maxEstudiantes;   
    }

    set maxEstudiantes(cantidadDeEstudiantes){
        if(cantidadDeEstudiantes<=10){
            console.error("No puede existir menos de 10 estudiantes para que el curso este habilitado");
        }else{
            this._maxEstudiantes=cantidadDeEstudiantes
        }
    }

    inscribirEstudiante(estudiante){
    
        if (this.listaEstudiantes.length<this.maxEstudiantes && this.listaEstudiantes.includes(estudiante)==false){
            this.listaEstudiantes.push(estudiante);
        }else{
            console.log("El estudiante ya esta inscrito");
        }
    }

    retirarEstudiante(nomEstudiante){
        let posicion;
        for (const estudiante in this.listaEstudiantes) {
           if(nomEstudiante==this.listaEstudiantes[estudiante]){
            posicion=parseInt(estudiante);
           }
           
        }

        this.listaEstudiantes.splice(posicion,1);
    }
}

class Persona{
    constructor({
        nombre, 
        apellido, 
        edad, 
        sexo}){
        this.nombre = nombre;
        this.apellido =apellido;
        this.edad = edad;
        this.sexo = sexo;
    }

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre} 
                    Apellido: ${this.apellido}`);
    }
}

class Profesor extends Persona{
    constructor({nombre,
        apellido,
        edad,
        sexo,
        especialidad})
        {
        super({nombre, apellido, edad, sexo});
        this.especialidad = especialidad;
    }

}

class Estudiante extends Persona{
    constructor({nombre,
        apellido,
        edad,
        sexo,
        carrera})
        {
        super({nombre, apellido, edad, sexo});
        this.carrera= carrera;
    }
}
// creando las instacias de Materia
const programacion = new Materia({nombre: "Programacion", maxEstudiantes: 15});
const fisica = new Materia({nombre: "Fisica", maxEstudiantes: 20});
const diseñoWeb = new Materia({nombre: "Diseño Web",maxEstudiantes: 25});
const algebra = new Materia({nombre: "Algebra", maxEstudiantes: 12});
//creamos las instancias de profesor y de estudiante
const profesor = new Profesor({nombre: "Edson", apellido: "Cruz",edad: 26,sexo: "Hombre",especialidad: "Informatica"});
const estudiante = new Estudiante({nombre: "Victor",apellido: "Cruz",edad: 33,sexo: "Hombre",carrera: "Sistemas Informaticos"});

// const estudiante1 = new Estudiante({nombre: "Vanesa",apellido: "Pozo",edad: 34,sexo: "Mujer", carrera: "Contabilidad"});


// const estudiante2 = new Estudiante({nombre: "Pepito",apellido: "Peres",edad: 19, sexo: "Hombre", carrera: "Informatica"});


// const estudiante3 = new Estudiante({nombre: "Mario",apellido: "Paz",edad: 23,sexo: "Hombre", carrera: "Sistemas Informaticos"});


// programacion.inscribirEstudiante(estudiante);
// programacion.inscribirEstudiante(estudiante1);
// programacion.inscribirEstudiante(estudiante2);
// programacion.inscribirEstudiante(estudiante3);
// programacion.profesor = profesor;
// console.log(programacion);
// programacion.retirarEstudiante(estudiante2);
// console.log(programacion);

//funcion para crear un nuevo estudiante

function nuevoEstudiante(){
    
    let name = document.getElementById("InputNombre").value;
    let lastName = document.getElementById("InputApellido").value;
    let age = document.getElementById("InputEdad").value;
    let sex = document.getElementById("InputSexo").value;
    let course = document.getElementById("InputCarrera").value;
    const newStudent = new Estudiante({nombre: name, apellido: lastName, edad: age, sexo: sex, carrera: course});

    console.log(newStudent);
    document.getElementById("usuario").innerHTML='El estudiante se a registrado correctamente'
}


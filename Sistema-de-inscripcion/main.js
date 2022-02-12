class Materia{
    constructor({
        nombre,
        maxEstudiantes,
        listaEstudiantes=[],
        profesor = null,
    }){
        this.nombre= nombre;
        this.maxEstudiantes= maxEstudiantes;
        this.listaEstudiantes = listaEstudiantes
        this.profesor=profesor;
    }

    inscribirEstudiante(estudiante){
    
        if (this.listaEstudiantes.length<this.maxEstudiantes && this.listaEstudiantes.includes(estudiante)==false){
            this.listaEstudiantes.push(estudiante);
        }else{
            console.log("El estudiante ya esta inscrito");
        }
    }

    retirarEstudiante(estudiante){
        let posicion;
       for (const estudiante in this.listaEstudiantes) {
           if(estudiante==this.listaEstudiantes[estudiante]){
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

const profesor = new Profesor({nombre: "Edson", apellido: "Cruz",edad: 26,sexo: "Hombre",especialidad: "Informatica"});
const estudiante = new Estudiante({nombre: "Victor",apellido: "Cruz",edad: 33,sexo: "Hombre",especialidad: "Sistemas Informaticos"});

programacion.inscribirEstudiante(estudiante);
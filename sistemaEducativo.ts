class Alumno {
    public idAlumno: number;
    public nombre: string;
    public apellido: string;
    public nota: number;
    public condicion: string;

    constructor(paramIdAlumno: number,
        paramNombre: string, 
        paramApellido: string,
        paramNota: number,
        paramCondicion: string)
    {
        this.idAlumno = paramIdAlumno;
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.nota = paramNota;
        this.condicion = paramCondicion;
    }

    public setNota(paramNota: number) {
        this.nota = paramNota;
    }

    public getNota() {
        return this.nota;
    }

    public getAprobadoDesaprobado() {
        if (this.nota > 7) {
            return 'APROBADO';
        } else {
            return 'DESPAPROBADO';
        }
    }

    public setCondicion(paramCondicion: string) {
        this.condicion = paramCondicion;
    }

    public getCondicion() {
        return this.condicion;
    }
}

class Profesor {
    public idProfesor: number;
    public nombreProfesor: string;
    public apellidoProfesor: string;
    public listadoAlumnos: Alumno[];
    public condicion: string;

    constructor(paramIdProfesor: number,
        paramNombreProfesor: string,
        paramApellidoProfesor: string,
        paramListadoAlumnos: Alumno[],
        paramCondicion: string)
    {
        this.idProfesor = paramIdProfesor;
        this.nombreProfesor = paramNombreProfesor;
        this.apellidoProfesor = paramApellidoProfesor;
        this.listadoAlumnos = paramListadoAlumnos;
        this.condicion = paramCondicion;
    }

    public setNombreProfesor(paramNombreProfesor: string) {
        this.nombreProfesor = paramNombreProfesor;
    }

    public getNombreProfesor() {
        return this.nombreProfesor;
    }

    public setListadoAlumnos(paramListadoAlumnos: Alumno[]) {
        this.listadoAlumnos = paramListadoAlumnos;
    }

    public getListadoAlumnos() {
        return this.listadoAlumnos;
    }

    public setCondicion(paramCondicion: string) {
        this.condicion = paramCondicion;
    }

    public getCondicion() {
        return this.condicion;
    }
}

class Escuela {
    public nombreEscuela: string;
    public listadoAlumnos: Alumno[];
    public listadoProfesores: Profesor[];

    constructor(paramNombreEscuela: string, paramListadoAlumnos: Alumno[], paramListadoProfesores: Profesor[]) {
        this.nombreEscuela = paramNombreEscuela;
        this.listadoAlumnos = paramListadoAlumnos;
        this.listadoProfesores = paramListadoProfesores;
    }

    public getListadoAlumnos() {
        return this.listadoAlumnos;
    }

    public getListadoProfesores() {
        return this.listadoProfesores;
    }

    public expulsarAlumno(idAlumno: number) {
        var alumno: Alumno = this.listadoAlumnos[idAlumno];
        alumno.setCondicion("EXPULSADO");
    }
    public despedirProfesor(idProfesor: number) {
        var profesor: Profesor = this.listadoProfesores[idProfesor];
        profesor.setCondicion("DESPEDIDO");
    }

    public matricularAlumno(idAlumno: number) {
        var alumno: Alumno = this.listadoAlumnos[idAlumno];
        alumno.setCondicion("MATRICULADO");
    }

    public contratarProfesor(idProfesor: number) {
        var profesor: Profesor = this.listadoProfesores[idProfesor];
        profesor.setCondicion("CONTRATADO");
    }
}

let alumno1 = new Alumno(0, 'Pirulo', 'Perez', 9, 'MATRICULADO');
let alumno2 = new Alumno(1, 'Pepito', 'Lopez', 5, 'EXPULSADO');
let profesor1 = new Profesor(1, "Juan", "Perez", [alumno1, alumno2], "CONTRATADO");
let escuela1 = new Escuela('Escuela Técnica', [alumno1, alumno2], [profesor1]);

console.log("Alumno1 nota ", alumno1.getNota(), ", Aprobado/Desaprobado: ", alumno1.getAprobadoDesaprobado());
console.log("Alumno2 nota ", alumno2.getNota(), ", Aprobado/Desaprobado: ", alumno2.getAprobadoDesaprobado());

console.log("Alumnos del Profesor1: ", profesor1.getListadoAlumnos());

console.log("Profesores de la Escuela1: ", escuela1.getListadoProfesores());
console.log("Alumnos de la Escuela1: ", escuela1.getListadoAlumnos());

//Expulsar alumno1
console.log("Condiciton Alumno1", alumno1.getCondicion());
escuela1.expulsarAlumno(0);
console.log("Condiciton Alumno1", alumno1.getCondicion());
//Despedir profesor1
console.log("Condiciton Profesor1", profesor1.getCondicion());
escuela1.despedirProfesor(0);
console.log("Condiciton Profesor1", profesor1.getCondicion());

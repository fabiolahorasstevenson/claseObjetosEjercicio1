var Alumno = /** @class */ (function () {
    function Alumno(paramIdAlumno, paramNombre, paramApellido, paramNota, paramCondicion) {
        this.idAlumno = paramIdAlumno;
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.nota = paramNota;
        this.condicion = paramCondicion;
    }
    Alumno.prototype.setNota = function (paramNota) {
        this.nota = paramNota;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.getAprobadoDesaprobado = function () {
        if (this.nota > 7) {
            return 'APROBADO';
        }
        else {
            return 'DESPAPROBADO';
        }
    };
    Alumno.prototype.setCondicion = function (paramCondicion) {
        this.condicion = paramCondicion;
    };
    Alumno.prototype.getCondicion = function () {
        return this.condicion;
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(paramIdProfesor, paramNombreProfesor, paramApellidoProfesor, paramListadoAlumnos, paramCondicion) {
        this.idProfesor = paramIdProfesor;
        this.nombreProfesor = paramNombreProfesor;
        this.apellidoProfesor = paramApellidoProfesor;
        this.listadoAlumnos = paramListadoAlumnos;
        this.condicion = paramCondicion;
    }
    Profesor.prototype.setNombreProfesor = function (paramNombreProfesor) {
        this.nombreProfesor = paramNombreProfesor;
    };
    Profesor.prototype.getNombreProfesor = function () {
        return this.nombreProfesor;
    };
    Profesor.prototype.setListadoAlumnos = function (paramListadoAlumnos) {
        this.listadoAlumnos = paramListadoAlumnos;
    };
    Profesor.prototype.getListadoAlumnos = function () {
        return this.listadoAlumnos;
    };
    Profesor.prototype.setCondicion = function (paramCondicion) {
        this.condicion = paramCondicion;
    };
    Profesor.prototype.getCondicion = function () {
        return this.condicion;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(paramNombreEscuela, paramListadoAlumnos, paramListadoProfesores) {
        this.nombreEscuela = paramNombreEscuela;
        this.listadoAlumnos = paramListadoAlumnos;
        this.listadoProfesores = paramListadoProfesores;
    }
    Escuela.prototype.getListadoAlumnos = function () {
        return this.listadoAlumnos;
    };
    Escuela.prototype.getListadoProfesores = function () {
        return this.listadoProfesores;
    };
    Escuela.prototype.expulsarAlumno = function (idAlumno) {
        var alumno = this.listadoAlumnos[idAlumno];
        alumno.setCondicion("EXPULSADO");
    };
    Escuela.prototype.despedirProfesor = function (idProfesor) {
        var profesor = this.listadoProfesores[idProfesor];
        profesor.setCondicion("DESPEDIDO");
    };
    Escuela.prototype.matricularAlumno = function (idAlumno) {
        var alumno = this.listadoAlumnos[idAlumno];
        alumno.setCondicion("MATRICULADO");
    };
    Escuela.prototype.contratarProfesor = function (idProfesor) {
        var profesor = this.listadoProfesores[idProfesor];
        profesor.setCondicion("CONTRATADO");
    };
    return Escuela;
}());
var alumno1 = new Alumno(0, 'Pirulo', 'Perez', 9, 'MATRICULADO');
var alumno2 = new Alumno(1, 'Pepito', 'Lopez', 5, 'EXPULSADO');
var profesor1 = new Profesor(1, "Juan", "Perez", [alumno1, alumno2], "CONTRATADO");
var escuela1 = new Escuela('Escuela Técnica', [alumno1, alumno2], [profesor1]);
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

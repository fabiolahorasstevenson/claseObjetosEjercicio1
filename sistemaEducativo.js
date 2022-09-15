var alumno = /** @class */ (function () {
    function alumno(paramIdAlumno, paramNombre, paramApellido, paramNota, paramCondicion) {
        this.idAlumno = paramIdAlumno;
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.nota = paramNota;
        this.condicion = paramCondicion;
    }
    alumno.prototype.setNotaAlumno = function (paramNota) {
        this.nota = paramNota;
    };
    alumno.prototype.getNotaAlumno = function () {
        return this.nota;
    };
    alumno.prototype.setCondiconAlumno = function (paramNota) {
        if (paramNota >= 6) {
            this.condicion = 'APROBADO';
        }
        else {
            this.condicion = 'DESPAPROBADO';
        }
    };
    alumno.prototype.getCondicionAlumno = function () {
        return this.condicion;
    };
    return alumno;
}());
var profesor = /** @class */ (function () {
    function profesor(paramIdProfesor, paramNombreProfesor, paramApellidoProfesor) {
        this.idProfesor = paramIdProfesor;
        this.nombreProfesor = paramNombreProfesor;
        this.apellidoProfesor = paramApellidoProfesor;
    }
    profesor.prototype.setNombreProfesor = function (paramNombreProfesor) {
        this.nombreProfesor = paramNombreProfesor;
    };
    profesor.prototype.getNombreProfesor = function () {
        return this.nombreProfesor;
    };
    return profesor;
}());
var escuela = /** @class */ (function () {
    function escuela(paramEscuelaNombre, paramIdAlumno, paramIdProfesor, paramEsContratado, paramFechaContratado, paramBajaProfesor, paramAlumnoMatriculado, paramFechaAlumnoMatricula, paramBajaAlumno) {
        this.nombreEscuela = paramEscuelaNombre;
        this.idAlumno = paramIdAlumno;
        this.idProfesor = paramIdProfesor;
        this.profesorContratado = paramEsContratado;
        this.fechaProfesorContratado = paramFechaContratado;
        this.bajaProfesor = paramBajaProfesor;
        this.alumnoMatriculado = paramAlumnoMatriculado;
        this.fechaAlumnoMatricula = paramFechaAlumnoMatricula;
        this.bajaAlumno = paramBajaAlumno;
    }
    escuela.prototype.darDeBajaProfesor = function () {
        this.bajaProfesor = true;
    };
    escuela.prototype.expulsarAlumno = function () {
        this.bajaAlumno = true;
    };
    escuela.prototype.agregarProfesor = function () {
    };
    return escuela;
}());
var alumno1 = new alumno(1, 'Pirulo', 'Perez', 9, 'sin dato');
var alumno2 = new alumno(2, 'Pepito', 'Lopez', 5, 'sin dato');
var profesor1 = new profesor(1, " Juan", "Perez");
var escuela1 = new escuela('Escuela Técnica', 1, 1, true, new Date(), true, false, new Date(), false);
console.log("Listado de alumnos ");
console.log(alumno1);
console.log(alumno2);
alumno1.setCondiconAlumno(9);
alumno2.setCondiconAlumno(4);
console.log(alumno1.getCondicionAlumno());
console.log(alumno2.getCondicionAlumno());
console.log(alumno1);
console.log(alumno2);
console.log(escuela1);

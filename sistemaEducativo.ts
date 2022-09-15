class alumno{
    idAlumno: number;
    nombre: string;
    apellido: string;
    nota: number;
    condicion: string;

    constructor(paramIdAlumno: number, paramNombre: string, paramApellido: string, paramNota: number, paramCondicion: string){
        this.idAlumno= paramIdAlumno;
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.nota = paramNota;
        this.condicion = paramCondicion;
    }

    public setNotaAlumno (paramNota: number){
        this.nota = paramNota;
    }

    public getNotaAlumno (){
        return this.nota;
    }    

    public setCondiconAlumno(paramNota: number){
        if (paramNota>7){
            this.condicion= 'APROBADO';
            
        }
        else {
            this.condicion = 'DESPAPROBADO';
        }
    }

    public getCondicionAlumno(){
        return this.condicion;
    }
}   

class profesor{
    idProfesor: number;
    nombreProfesor: string;
    apellidoProfesor: string;
    
    constructor(paramIdProfesor: number, paramNombreProfesor: string, paramApellidoProfesor: string){
            this.idProfesor = paramIdProfesor;
            this.nombreProfesor= paramNombreProfesor;
            this.apellidoProfesor = paramApellidoProfesor;

    }

    public setNombreProfesor (paramNombreProfesor: string){
        this.nombreProfesor = paramNombreProfesor;
    }

    public getNombreProfesor (){
        return this.nombreProfesor;
    }

}

class escuela{
    idAlumno: number;
    idProfesor: number;
    nombreEscuela: string;
    profesorContratado: boolean;
    fechaProfesorContratado: Date;
    bajaProfesor: boolean;
    alumnoMatriculado: boolean;
    fechaAlumnoMatricula: Date;
    bajaAlumno: boolean;

    constructor(paramEscuelaNombre: string, paramIdAlumno: number, paramIdProfesor: number, paramEsContratado: boolean, 
        paramFechaContratado: Date, paramBajaProfesor: boolean, paramAlumnoMatriculado: boolean, 
        paramFechaAlumnoMatricula: Date, paramBajaAlumno: boolean){
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

   public darDeBajaProfesor(){
        this.bajaProfesor = true;

    }
    public expulsarAlumno(){
        this.bajaAlumno= true;
    }

    public agregarProfesor(){

    }

}

let alumno1 = new alumno(1, 'Pirulo', 'Perez', 9, 'sin dato');
let alumno2 = new alumno(2, 'Pepito', 'Lopez', 5, 'sin dato');
let profesor1 = new profesor(1," Juan","Perez");
let escuela1 = new escuela('Escuela Técnica',1,1,true,new Date(), true,false,new Date(),false);
console.log ("Listado de alumnos ");
console.log(alumno1);
console.log(alumno2);
alumno1.setCondiconAlumno(9);
alumno2.setCondiconAlumno(4);
console.log(alumno1.getCondicionAlumno());
console.log(alumno2.getCondicionAlumno());
console.log(alumno1);
console.log(alumno2);
console.log(escuela1);

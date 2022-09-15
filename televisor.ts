class Decodificador {
    public modelo: string;
    public marca: string;

    constructor(paramModelo: string, paramMarca: string) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
}

class Televisor {
    public tamaño: number;
    public esSmart: boolean;
    private estaPrendido: boolean;
    public volumen: number;
    public decodificador: Decodificador;

    constructor(paramTamaño: number, paramEsSmart: boolean, paramEstaPrendido: boolean, paramVolumen: number, paramDecodificador: Decodificador) {
        this.tamaño = paramTamaño;
        this.esSmart = paramEsSmart;
        this.estaPrendido = paramEstaPrendido;
        this.volumen = paramVolumen;
        this.decodificador = paramDecodificador;
    }

    getTamaño() {
        return this.tamaño;
    }

    setTamaño(paramTamaño: number) {
        this.tamaño = paramTamaño;
    }

    getEsSmart() {
        return this.esSmart;
    }

    setEsSmart(paramEsSmart: boolean) {
        this.esSmart = paramEsSmart;
    }

    apagar() {
        this.estaPrendido = false;
    }

    encender() {
        this.estaPrendido = true;
    }
}

let deco1 = new Decodificador("Deco", "Deco");
let televisor1 = new Televisor(100, true, true, 20, deco1);

console.log(televisor1);
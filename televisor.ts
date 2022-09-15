class decodificador{
    modelo : string;
    marca : string;


    constructor(paramModelo: string, paramMarca: string){
        this.marca= paramMarca;
        this.modelo= paramModelo;

    }

}
class televisor{
    public tamaño: number;
    public esSmart: boolean;
    private estaPrendido: boolean;
    public volumen: number;
    public decodificador: decodificador;

    constructor(paramTamaño: number, paramEsSmart: boolean, paramEstaPrendido: boolean, paramVolumen: number, paramDecodificador: decodificador){

        this.tamaño = paramTamaño;
        this.esSmart = paramEsSmart;
        this.estaPrendido = paramEstaPrendido;
        this.volumen= paramVolumen;
        this.decodificador = paramDecodificador;
    }

    getTamaño (){
        return this.tamaño;
    }
    setTamaño(paramTamaño: number){
        this.tamaño = paramTamaño;
    }
    getEsSmart(){
        return this.esSmart;
    }
    setEsSmart(paramEsSmart: boolean){
        this.esSmart = paramEsSmart;
    }

    apagar(){
        this.estaPrendido = false;
    }

    encender(){
        this.estaPrendido = true;
    }


}

let deco1 = new decodificador("Deco","Deco");
let televisor1 = new televisor(100,true,true,20,deco1);

console.log(televisor1);
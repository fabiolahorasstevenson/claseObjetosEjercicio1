var Decodificador = /** @class */ (function () {
    function Decodificador(paramModelo, paramMarca) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
    return Decodificador;
}());
var Televisor = /** @class */ (function () {
    function Televisor(paramTamaño, paramEsSmart, paramEstaPrendido, paramVolumen, paramDecodificador) {
        this.tamaño = paramTamaño;
        this.esSmart = paramEsSmart;
        this.estaPrendido = paramEstaPrendido;
        this.volumen = paramVolumen;
        this.decodificador = paramDecodificador;
    }
    Televisor.prototype.getTamaño = function () {
        return this.tamaño;
    };
    Televisor.prototype.setTamaño = function (paramTamaño) {
        this.tamaño = paramTamaño;
    };
    Televisor.prototype.getEsSmart = function () {
        return this.esSmart;
    };
    Televisor.prototype.setEsSmart = function (paramEsSmart) {
        this.esSmart = paramEsSmart;
    };
    Televisor.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Televisor.prototype.encender = function () {
        this.estaPrendido = true;
    };
    return Televisor;
}());
var deco1 = new Decodificador("Deco", "Deco");
var televisor1 = new Televisor(100, true, true, 20, deco1);
console.log(televisor1);

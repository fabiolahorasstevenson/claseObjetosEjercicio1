var decodificador = /** @class */ (function () {
    function decodificador(paramModelo, paramMarca) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
    return decodificador;
}());
var televisor = /** @class */ (function () {
    function televisor(paramTamaño, paramEsSmart, paramEstaPrendido, paramVolumen, paramDecodificador) {
        this.tamaño = paramTamaño;
        this.esSmart = paramEsSmart;
        this.estaPrendido = paramEstaPrendido;
        this.volumen = paramVolumen;
        this.decodificador = paramDecodificador;
    }
    televisor.prototype.getTamaño = function () {
        return this.tamaño;
    };
    televisor.prototype.setTamaño = function (paramTamaño) {
        this.tamaño = paramTamaño;
    };
    televisor.prototype.getEsSmart = function () {
        return this.esSmart;
    };
    televisor.prototype.setEsSmart = function (paramEsSmart) {
        this.esSmart = paramEsSmart;
    };
    televisor.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    televisor.prototype.encender = function () {
        this.estaPrendido = true;
    };
    return televisor;
}());
var deco1 = new decodificador("Deco", "Deco");
var televisor1 = new televisor(100, true, true, 20, deco1);
console.log(televisor1);

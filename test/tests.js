var Secuencia = require("../lib/Secuencia.js");
var should = require("should")

describe("Función comparar", function(){
  it("No existen secuencias declaradas", function() {
    var mySecuencia = new Secuencia(5, "Primos");
    var result = mySecuencia.getSecuencia();
    result.should.be.equal("Secuencia no definida");
  })
  it("No existen operaciones declaradas", function() {
    var mySecuencia = new Secuencia(5, "Primos");
    var prueba = {};
    prueba.getVals = function() {return [1, 2, 3]};
    var result = mySecuencia.operar(prueba, "Igual")
    result.should.be.equal("Operación no definida");
  })

})

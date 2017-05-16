"use strict"

class Secuencia {
  constructor(num, type)
  {
    Object.assign(this, num);
    this.type = type || this.constructor;
    this.num = num;
    this.sec = [];
    this.text = "";
    this.len = 0;
  }

  getSecuencia()
  {
    try
    {
      var tipo = new Secuencia.type[this.constructor.name](this.num)
      return tipo.secuencia();
    }
    catch(e)
    {
      return "Secuencia no definida";
    }
  }

  operar(secuencia, operacion)
  {
    try
    {
      return Secuencia.operaciones[operacion](this.getVals(), secuencia.getVals());
    }
    catch (e)
    {
      return "Figura no definida";
    }
  }



}
Secuencia.type = Secuencia.type || {};
Secuencia.operaciones = Secuencia.operaciones || {};
module.exports = Secuencia;

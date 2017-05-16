"use strict"
/**
 * Proyecto: Comparador de secuencias.
 *
 * Esta clase es la clase de la que heredarán todas los tipos de secuencia.
 * Las secuencias han de tener como mínimo un método secuencia() que devuelva la secuencia como un string.
 * Cada nueva secuencia se guardará en la variable global Secuencia.type (Secuencia.type.ejemplo) añadiendo el nombre siempre en minuscula.
 * Cada operación nueva se guardará en la variable global Secuencia.operaciones siguiendo el mismo patron que para la secuencia.
 * @param {number} num
 * @param {String} type
 */
class Secuencia {
  /**
   * Se le pasa num con el número de elementos de la secuencia que se desea, y type con el tipo de secuencia.
   * @constructs [Secuencia]
   * @param {number} num
   * @param {String} type
   *
   */
  constructor(num, type)
  {
    Object.assign(this, num);
    this.type = type || this.constructor;
    this.num = num;
    this.sec = [];
    this.text = "";
    this.len = 0;
  }
  /**
   * Es la función utilizada para mostrar la secuencia deseada.
   * @return {String} retorna la secuencia.
   */
  getSecuencia()
  {
    try
    {
      var tipo = new Secuencia.type[this.constructor.name.toLowerCase()](this.num)
      return tipo.secuencia();
    }
    catch(e)
    {
      return "Secuencia no definida";
    }
  }
  /**
   * Función utilizada para realizar operaciones o comparaciones entre secuencias.
   * @param {Secuencia} secuencia
   * @param {String} operacion
   * @return {String} Retorna la secuencia resultante de la operación.
   */
  operar(secuencia, operacion)
  {
    try
    {
      return Secuencia.operaciones[operacion.toLowerCase()](this.getVals(), secuencia.getVals());
    }
    catch (e)
    {
      return "Operación no definida";
    }
  }



}
Secuencia.type = Secuencia.type || {};
Secuencia.operaciones = Secuencia.operaciones || {};
module.exports = Secuencia;

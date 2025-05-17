const Empleado = require('./Empleado');

class Gerente extends Empleado {
  constructor(nombre, salario, departamento) {
    super(nombre, salario);
    this.departamento = departamento;
  }
  
  calcularSalarioAnual() {
    // Incluye un bono del 20% para gerentes
    return super.calcularSalarioAnual() * 1.2;
  }
  
  mostrarDetalles() {
    return `${super.mostrarDetalles()}, Departamento: ${this.departamento}, Es gerente`;
  }
}

module.exports = Gerente;
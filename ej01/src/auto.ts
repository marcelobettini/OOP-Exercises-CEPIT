export class Auto {
  id: string;
  marca: string;
  modelo: string;
  anio: number;
  idMotor: string;
  idChasis: string;
  patente: string;
  dniTitular: string;
  constructor(id: string, marca: string, modelo: string, anio: number, idMotor: string, idChasis: string, patente: string, dniTitular: string) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.idMotor = idMotor;
    this.idChasis = idChasis;
    this.patente = patente;
    this.dniTitular = dniTitular;
  }
}

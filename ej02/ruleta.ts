import { JuegoDeCasino } from "./juegoDeCasino";

export class Ruleta extends JuegoDeCasino {

  private cantNumeros: number;

  constructor(apuesta: number, tipo: string, cantNumeros: number) {
    super(apuesta, tipo);
    this.cantNumeros = cantNumeros;
  }

  public setCantNumeros(cantidad: number): void {
    this.cantNumeros = cantidad;
  }
  public getCantNumeros(): number {
    return this.cantNumeros;
  }

}
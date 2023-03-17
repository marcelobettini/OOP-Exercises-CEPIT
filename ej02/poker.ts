import { JuegoDeCasino } from "./juegoDeCasino";

export class Poker extends JuegoDeCasino {

  private cantCartas: number;

  constructor(apuesta: number, tipo: string, cantCartas: number) {
    super(apuesta, tipo);
    this.cantCartas = cantCartas;
  }

  public setCantCartas(cantidad: number): void {
    this.cantCartas = cantidad;
  }
  public getCantCartas(): number {
    return this.cantCartas;
  }


}
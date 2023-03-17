export class JuegoDeCasino {

  protected apuestaMinima: number;
  protected tipoDeJuego: string;

  constructor(apuesta: number, tipoDeJuego: string) {
    this.apuestaMinima = apuesta;
    this.tipoDeJuego = tipoDeJuego;
  }

  public setApuestaMinima(apuesta: number): void {
    this.apuestaMinima = apuesta;
  }
  public getApuesta(): number {
    return this.apuestaMinima;
  }
  public setTipoDeJuego(tipoDeJuego: string): void {
    this.tipoDeJuego = tipoDeJuego;
  }
  public getTipoDeJuego(): string {
    return this.tipoDeJuego;
  }

}
import { Poker } from "./poker";
import { Ruleta } from "./ruleta";

export class Casino {

  private localidad: string;
  private domicilio: string;
  private ruletaRoja: Ruleta;
  private ruletaNegra: Ruleta;
  private pokerMaster: Poker;

  constructor(localidad: string, domicilio: string, ruletaRoja: Ruleta, ruletaNegra: Ruleta, poker: Poker) {
    this.domicilio = domicilio;
    this.localidad = localidad;
    this.ruletaRoja = ruletaRoja;
    this.ruletaNegra = ruletaNegra;
    this.pokerMaster = poker;
  }


}
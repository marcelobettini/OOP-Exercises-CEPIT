import { Casino } from "./casino";
import { Poker } from "./poker";
import { Ruleta } from "./ruleta";

const poker1: Poker = new Poker(100, "Cartas", 54);
const ruleta1: Ruleta = new Ruleta(500, "De azar", 37);
const ruleta2: Ruleta = new Ruleta(1000, "De Azar", 56);
const domicilio: string = "Calle 1 902";
const localidad: string = "Benito Juárez";


const CasinoJuarez: Casino = new Casino(localidad, domicilio, ruleta1, ruleta2, poker1);

console.log(CasinoJuarez);
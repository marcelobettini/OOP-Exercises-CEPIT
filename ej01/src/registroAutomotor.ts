import { Auto } from "./auto";
import * as fs from "fs"; /* si dice que le faltan los tipos, agreguen "types": [
  "node"], a "compilerOptions" en el tsconfig.json... yes I know, I'm the fucking boss 😎😂
*/

export class RegistroAutomotor {
  public setNewItem(listado: Auto[], auto: Auto) {
    listado.push(auto);
  };
  public setItemsFromFile(archivo: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(archivo, ({ encoding: 'utf-8' }), (err, data) =>
        err ? reject(err.message) : resolve(data));
    });
  };


  public getAllItems(listado: Auto[]): void {
    console.log("Listado total de vehículos");
    console.log(listado);
  };
  public getItemsByOwnerId(listado: Auto[], dni: string): void {
    const result = listado.filter(item => item.dniTitular === dni);
    console.log("Listado de vehículos por DNI");
    console.log(result.length ? result : `El DNI ${dni} no tiene autos registrados`);
  };
  public removeItemById(listado: Auto[], id: string): void {
    const idx = listado.findIndex(item => item.id === id);

    idx !== -1 ? listado.splice(idx, 1) : null;
  }
}
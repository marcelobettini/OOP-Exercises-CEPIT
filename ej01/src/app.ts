import { Auto } from "./auto";
import { RegistroAutomotor } from "./registroAutomotor";
let db: Auto[] = [];
const miRegistro = new RegistroAutomotor();
const auto_1 = new Auto(
  "a1b2c3xyz",
  "Ford",
  "Mustang",
  2019,
  "zz987aa123jhs",
  "as998sdfs-asg",
  "aa998hh",
  "33456789"
);
const auto_2 = new Auto(
  "a2b3c4xyz",
  "Fiat",
  "Strada",
  2020,
  "aa120bg247kop",
  "sa887uywl-gas",
  "ag120ca",
  "13141516"
);
const auto_3 = new Auto(
  "a3b5c5xyz",
  "VolksWagen",
  "Helmut",
  2010,
  "lo887dd221oos",
  "qa009qxxc-ksu",
  "JPF990",
  "19200201"
);

miRegistro.setNewItem(db, auto_1);
miRegistro.setNewItem(db, auto_2);
miRegistro.setNewItem(db, auto_3);
// miRegistro.getAllItems(db);
// miRegistro.getItemsByOwnerId(db, '13141516');
// miRegistro.getItemsByOwnerId(db, '13141336');
miRegistro.getAllItems(db);
// miRegistro.getAllItems(db);
// miRegistro.removeItemById(db, 'aa');//it does nothing
// miRegistro.removeItemById(db, 'a1b2c3xyz');//Remove Ford
// miRegistro.getAllItems(db);
miRegistro.setItemsFromFile('./cars.json').then(res => {
  db.push(...JSON.parse(res));
  miRegistro.getAllItems(db);
}).catch(err => console.error(err));



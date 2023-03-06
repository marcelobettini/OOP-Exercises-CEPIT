class Matrix {
  private matrix: number[][];
  private x: number;
  private y: number;
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.matrix = new Array(x);
    for (let i: number = 0; i < this.matrix.length; i++) {
      this.matrix[i] = new Array(y);
    }
  };
  public getAllItems(): void {
    console.table(this.matrix);
  };
  public getItemByCoord(x: number, y: number): void {
    if (!this.matrix[x][y]) {
      console.log(`Fuera de rango (fil ${x}/col ${y})`);
      return;
    };
    console.log(`Valor de coordenadas (fil ${x}/col ${y}): ${this.matrix[x][y]}`);
  }
  public setItems(): void {
    for (let i: number = 0; i < this.matrix.length; i++) {
      for (let j: number = 0; j < this.matrix[i].length; j++) {
        this.matrix[i][j] = Math.ceil(Math.random() * 100);
      }
    }
  };

}
const arrBi = new Matrix(3, 4);
arrBi.setItems();
arrBi.getAllItems();
arrBi.getItemByCoord(0, 2);
arrBi.getItemByCoord(2, 4);
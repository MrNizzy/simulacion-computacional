export class Dados {
  //TODO:  1  2  3  4  5  6  7  8  9 10 11 12
  count = [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
    [11, 0],
    [12, 0],
  ];
  dado1 = 0;
  dado2 = 0;
  total = 0;

  getProb(veces: number): any {
    try {
      console.log("PROBABILIDAD DE LA SUMA DE DOS DADOS, 1 DE ELLOS CARGADO");
      for (let i = 0; i < veces; i++) {
        // Random between 1 or 2 int
        let random = Math.floor(Math.random() * 2) + 1;
        this.dado2 = Math.floor(Math.random() * 6) + 1;

        if (random == 1) {
          // Random between 1-5 int
          random = Math.floor(Math.random() * 5) + 1;
          this.dado1 = random;
          this.total = this.dado1 + this.dado2;
          // Add 1 to count position of random
          this.count[this.total - 1][1]++;
          continue;
        }
        this.total = 6 + this.dado2;
        this.count[this.total - 1][1]++;
      }
      // Remove first position of array
      this.count.shift();
      const formattedData = this.count.map((item) => ({
        "Suma de los dados": item[0],
        "Veces que salió": item[1],
        Probabilidad: item[1] / veces,
        Porcentaje: ((item[1] / veces) * 100).toFixed(3) + " %",
      }));
      return formattedData;
    } catch (e) {
      console.log("ERROR");
      const errorInfo = {
        Error: e,
      };
      return errorInfo;
    }
  }
}

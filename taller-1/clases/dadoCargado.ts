export class DadoCargado {
  //TODO:  1  2  3  4  5  6
  count = [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
  ];

  getProb(veces: number): any {
    try {
      for (let i = 0; i < veces; i++) {
        // Random between 1 or 2 int
        let random = Math.floor(Math.random() * 2) + 1;
        if (random == 1) {
          // Random between 1-5 int
          random = Math.floor(Math.random() * 5) + 1;
          // Add 1 to count position of random
          this.count[random - 1][1]++;
          continue;
        }

        this.count[5][1]++;
      }

      const formattedData = this.count.map((item) => ({
        "Lado del dado": item[0],
        "Veces que salió": item[1],
      }));
      return formattedData;
    } catch {
      console.log("Ha ocurrido un error");
    }
  }
}

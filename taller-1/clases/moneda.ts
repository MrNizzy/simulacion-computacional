export class juegoDeLaMoneda {
  cara = 0;
  sello = 0;
  diferencia = 0;
  lanzamientos = 0;
  estado = 0;
  dinero = 8;

  jugar(): number {
    // ! console.log("JUGANDO SIN LIMITE");
    this.cara = 0;
    this.sello = 0;
    this.diferencia = 0;
    this.lanzamientos = 0;
    while (this.diferencia < 3) {
      this.estado = Math.floor(Math.random() * 2) + 1;
      this.estado == 1 ? this.cara++ : this.sello++;
      this.diferencia = Math.abs(this.cara - this.sello);
      this.lanzamientos++;
      /*console.log(
        `${this.lanzamientos}: La diferencia es de ${this.diferencia} la cara tiene ${this.cara} y el sello ${this.sello}`
      );*/
    }
    return this.dinero - this.lanzamientos;
  }

  jugarConLimite(): number {
    this.cara = 0;
    this.sello = 0;
    this.diferencia = 0;
    this.lanzamientos = 0;
    // ! console.log("JUGANDO CON LIMITE 15");
    while (this.diferencia < 3 && this.lanzamientos < 15) {
      this.estado = Math.floor(Math.random() * 2) + 1;
      this.estado == 1 ? this.cara++ : this.sello++;
      this.diferencia = Math.abs(this.cara - this.sello);
      this.lanzamientos++;
      /*console.log(
        `${this.lanzamientos}: La diferencia es de ${this.diferencia} la cara tiene ${this.cara} y el sello ${this.sello}`
      );*/
    }
    return this.dinero - this.lanzamientos;
  }

  multiplesJuegosConLimite(veces: number): number {
    let dinero = 0;
    for (let i = 0; i < veces; i++) {
      dinero += this.jugarConLimite();
    }
    return dinero;
  }

  multiplesJuegos(veces: number): number {
    let dinero = 0;
    for (let i = 0; i < veces; i++) {
      dinero += this.jugar();
    }
    return dinero;
  }
}

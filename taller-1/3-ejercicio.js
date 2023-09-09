// ? Simule el problema del agente viajero, usando dos estrategias de cambio:
// TODO: Seleccionar dos puntos al azar e invertir el camino entre estos dos puntos
// TODO: Seleccionar 2 pares puntos al azar, intercambiar el camino entre el primer par con elcamino entre el segundo
// ! ► Qué es la bondad de estas estrategias?
// ! ► Qué se puede decir sobre la convergencia? y qué pasa con mínimos locales?

class AgenteViajero {
  matriz = [
    [0, 7.0, 5.1, 4.5, 7.3, 5.1, 8.5, 7.6],
    [7.0, 0, 2.2, 6.4, 11.4, 9.4, 3.2, 3.0],
    [5.1, 2.2, 0, 4.2, 9.2, 7.2, 3.6, 2.8],
    [4.5, 6.4, 4.2, 0, 5.0, 3.2, 6.1, 5.1],
    [7.3, 11.4, 9.2, 5.0, 0, 2.2, 10.8, 9.8],
    [5.1, 9.4, 7.2, 3.2, 2.2, 0, 9.2, 8.2],
    [8.5, 3.2, 3.6, 6.1, 10.8, 9.2, 0, 1.0],
    [7.6, 3.0, 2.8, 5.1, 9.8, 8.2, 1.0, 0],
  ];

  // random number 0 to matriz length
  a = Math.floor(Math.random() * this.matriz.length);
  b = Math.floor(Math.random() * this.matriz.length);

  coor = [];
  elementos = [];
  ruta = [];

  intercambio() {
    console.table(this.matriz);
    for (let i = 0; i < this.matriz.length; i++) {
      this.matriz[this.a] = this.matriz[this.b];
      this.matriz[this.b] = this.matriz[this.a];
    }
    console.table(this.matriz);
  }
}

const agente = new AgenteViajero();

agente.intercambio();

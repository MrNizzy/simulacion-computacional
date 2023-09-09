// TODO: En un estadio de fútbol se controlan las entrados de una puerta. La gente llega (el tiempo entre llegadas es entre 0 y 120 segundos) y hace cola para poder entrar. El control de la boleta requiere 70 +/- 30 segundos.

//! Simule el sistema hasta que 100 personas han entrado.

class Persona {
  private llegada: number;
  private controlBoleta: number;

  constructor() {
    this.llegada = Math.floor(Math.random() * 120); // Tiempo de llegada aleatorio entre 0 y 120 segundos
    this.controlBoleta = Math.floor(Math.random() * 41) + 30; // Tiempo de control de boleta entre 30 y 70 segundos
    //TODO: this.controlBoleta = Math.floor(Math.random() * 21) + 30; // Tiempo de control de boleta entre 30 y 50 segundos
  }

  get TiempoLlegada() {
    return this.llegada;
  }

  get TiempoControlBoleta() {
    return this.controlBoleta;
  }
}

class Estadio {
  private personas: Persona[] = [];
  private tiempoTotal: number = 0;
  private primerPersona: boolean = true;
  private anteriorPersona: Persona = new Persona();
  private tiempoEsperaPorPersona: number[] = [0];

  constructor(numPersonas: number) {
    for (let i = 0; i < numPersonas; i++) {
      const persona = new Persona();
      this.personas.push(persona);
    }
  }

  calcularPromedioTiempoEspera(): number {
    if (this.tiempoEsperaPorPersona.length === 0) {
      return 0; // Evita dividir por cero si el array está vacío.
    }

    const suma = this.tiempoEsperaPorPersona.reduce(
      (acumulador, tiempo) => acumulador + tiempo,
      0
    );
    const promedio = suma / this.tiempoEsperaPorPersona.length;

    return promedio;
  }

  simular() {
    for (const persona of this.personas) {
      console.log(`Tiempo total: ${this.tiempoTotal} segundos`);
      if (this.primerPersona) {
        this.tiempoTotal = persona.TiempoLlegada + persona.TiempoControlBoleta;
        this.anteriorPersona = persona;
        this.primerPersona = false;
        console.log(
          `Tiempo de llegada de la persona: ${persona.TiempoLlegada} segundos y el control de la boleta es de ${persona.TiempoControlBoleta} segundos`
        );
        continue;
      }
      if (
        this.anteriorPersona.TiempoControlBoleta - persona.TiempoLlegada <=
        0
      ) {
        this.tiempoTotal +=
          Math.abs(
            this.anteriorPersona.TiempoControlBoleta - persona.TiempoLlegada
          ) + persona.TiempoControlBoleta;
        this.anteriorPersona = persona;
        this.tiempoEsperaPorPersona.push(0);
        console.log(
          `Tiempo de llegada de la persona: ${persona.TiempoLlegada} segundos y el control de la boleta es de ${persona.TiempoControlBoleta} segundos`
        );
        continue;
      } else {
        let intervalo =
          persona.TiempoControlBoleta +
          (this.anteriorPersona.TiempoControlBoleta - persona.TiempoLlegada);
        this.tiempoTotal += intervalo;
        this.anteriorPersona = persona;
        this.tiempoEsperaPorPersona.push(intervalo);
        console.log(
          `Tiempo de llegada de la persona: ${persona.TiempoLlegada} segundos y el control de la boleta es de ${persona.TiempoControlBoleta} segundos`
        );
        continue;
      }
    }
    console.log(
      `Tiempo total: ${this.tiempoTotal} segundos, ${
        this.tiempoTotal / 60
      } minutos, ${this.tiempoTotal / 3600} horas`
    );
    console.log(
      `Promedio de tiempo de espera: ${this.calcularPromedioTiempoEspera()} segundos`
    );
  }
}

// Número de personas para la simulación
const numPersonas = 100;
const estadio = new Estadio(numPersonas);
estadio.simular();

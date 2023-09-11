function simularCrecimientoPoblacionSinMortalidad() {
  const poblacionInicial = 1000;
  const tasaCrecimiento = 2; // La población se duplica cada hora

  let poblacion = poblacionInicial;
  const horasSimulacion = 24; // Simularemos el crecimiento durante 24 horas

  const resultados: number[] = [];

  for (let hora = 1; hora <= horasSimulacion; hora++) {
    poblacion *= tasaCrecimiento;
    resultados.push(poblacion);
  }

  return resultados;
}

function simularCrecimientoPoblacionConMortalidad() {
  const poblacionInicial = 1000;
  const tasaCrecimiento = 2; // La población se duplica cada hora
  const tasaMortalidad = 0.2; // Tasa de mortalidad del 20%

  let poblacion = poblacionInicial;
  const horasSimulacion = 24; // Simularemos el crecimiento durante 24 horas

  const resultados: number[] = [];

  for (let hora = 1; hora <= horasSimulacion; hora++) {
    poblacion *= tasaCrecimiento;
    poblacion *= 1 - tasaMortalidad; // Aplicar la tasa de mortalidad
    resultados.push(poblacion);
  }

  return resultados;
}

// Simulación sin mortalidad
console.log("Simulación sin mortalidad:");
const resultadosSinMortalidad = simularCrecimientoPoblacionSinMortalidad();
console.log(resultadosSinMortalidad);

// Simulación con mortalidad
console.log("Simulación con mortalidad:");
const resultadosConMortalidad = simularCrecimientoPoblacionConMortalidad();
console.log(resultadosConMortalidad);

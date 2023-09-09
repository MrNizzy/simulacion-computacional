// ? Considerando el juego de dados:
// TODO: Asume que se juega con dos dados, uno de ellos es justo, el otro es cargado, es decirla probabilidad de obtener un 6 es 0.5, los demás números tienen igual probabilidad.decide cual es la suma que se obtiene con más alta frecuencia:
//! A partir de un análisis de conteo
//! Usando simulación.

import { DadoCargado } from "./clases/dadoCargado";
import { Dados } from "./clases/dados";

const dados = new Dados();
const dadoCargado = new DadoCargado();

// TODO: Probabilidad de la suma del dado normal + el dado cargado
console.table(dados.getProb(50000));

// TODO: Probabilidad de las caras del dado cargado
//console.table(dadoCargado.getProb(50000));

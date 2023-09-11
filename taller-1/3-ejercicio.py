import random
import math
import matplotlib.pyplot as plt

# Definir la cantidad de ciudades y su rango de coordenadas
num_cities = 10
x_range = (0, 100)
y_range = (0, 100)

# Función para calcular la distancia euclidiana entre dos puntos
def distancia_euclidiana(ciudad1, ciudad2):
    x1, y1 = ciudad1
    x2, y2 = ciudad2
    return math.sqrt((x1 - x2)**2 + (y1 - y2)**2)

# Generar ciudades aleatorias
ciudades = [(random.uniform(*x_range), random.uniform(*y_range)) for _ in range(num_cities)]

# Función para calcular la longitud total del recorrido
def longitud_recorrido(recorrido):
    longitud = 0
    for i in range(len(recorrido) - 1):
        longitud += distancia_euclidiana(ciudades[recorrido[i]], ciudades[recorrido[i+1]])
    longitud += distancia_euclidiana(ciudades[recorrido[-1]], ciudades[recorrido[0]])  # Regresar a la primera ciudad
    return longitud

# Generar un recorrido inicial aleatorio
recorrido_actual = list(range(num_cities))
random.shuffle(recorrido_actual)

# Función para visualizar el recorrido actual
def visualizar_recorrido(recorrido):
    x = [ciudades[i][0] for i in recorrido]
    y = [ciudades[i][1] for i in recorrido]
    plt.figure()
    plt.plot(x, y, marker='o', linestyle='-')
    plt.title(f'Longitud del recorrido: {longitud_recorrido(recorrido):.2f}')
    plt.show()

# Visualizar el recorrido inicial
visualizar_recorrido(recorrido_actual)

# Estrategia 1: Invertir el camino entre dos puntos aleatorios
def estrategia_inversion(recorrido):
    i, j = random.sample(range(num_cities), 2)
    recorrido[i:j+1] = reversed(recorrido[i:j+1])
    return recorrido

# Estrategia 2: Intercambiar el camino entre dos pares de puntos aleatorios
def estrategia_intercambio(recorrido):
    i, j, k, l = random.sample(range(num_cities), 4)
    recorrido[i:j+1], recorrido[k:l+1] = recorrido[k:l+1], recorrido[i:j+1]
    return recorrido

# Función para mejorar el recorrido utilizando una estrategia de cambio
def mejorar_recorrido(recorrido, estrategia, num_iteraciones):
    for _ in range(num_iteraciones):
        nuevo_recorrido = estrategia(list(recorrido))
        if longitud_recorrido(nuevo_recorrido) < longitud_recorrido(recorrido):
            recorrido = nuevo_recorrido
    return recorrido

# Mejorar el recorrido utilizando las estrategias de cambio
recorrido_optimo = mejorar_recorrido(list(recorrido_actual), estrategia_inversion, num_iteraciones=1000)
recorrido_optimo = mejorar_recorrido(list(recorrido_optimo), estrategia_intercambio, num_iteraciones=1000)

# Visualizar el recorrido optimizado
visualizar_recorrido(recorrido_optimo)

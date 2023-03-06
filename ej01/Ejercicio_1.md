# Ejercicio 1

Usando la clase Auto: Implementar la clase RegistroAutomotor con métodos para consultar por un auto en un listado, borrar, actualizar y dar de alta.
Partir de la función ya implementada para leer archivos. En este caso, se implementa una solución con readLine, pero como
es async, se construyó utilizando una promise. Los alumnos, en esta instancia, puede utilizar readlineSync, aunque sabemos
que en la vida real esto es malo pues bloquea el thread de ejecución.

---

## Ejercicio opcional

Implementar la clase Matriz. En vez de consultar los valores con los corchetes , se debe hacer
(desde afuera) a través de un método → get(x,y). En nuestra solución, la clase tiene un método para llenar 
la matriz con valores aleatorios.
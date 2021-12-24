# PREGUNTAS
### 1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
  - Sprint Planning: Se presenta el Product Backlog y el equipo escoge en que items va a trabajar.
  - Daily Scrum: Reuniones cortas y diarias, donde se inspecciona el avance o problemas que pueda tener el equipo de desarrolladores.
  - Sprint Review: Reunion al final del Sprint, donde se presentan los pendientes terminados para su inspección y adaptación.
  - Sprint Retrospective: Se realiza luego del Sprint Review. Aquí se realiza una reflexión sobre el último Sprint y se identifican posibles mejoras para el próximo.
  - Sprint Grooming: Consiste en refinar el Product Backlog para asegurar que siempre esté preparado.

### 2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar
Los Wireframes son representaciones gráficas del proyecto, pero de baja fidelidad de un diseño, es decir, carece de detalles o estilos. Sirve para comunicar la estructura que se está pensando para el proyecto. Estas pueden ser hechas incluso a mano en un papel, pero también existen algunas aplicaciones como Mockflow o Balsamiq Mockups.

### 3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
- var: Es una variable que puede cambiar su valor. Tiene un scope global. Se pueden utilizar al inicio del codigo para inicializar una variable y posteriormente cambiar su valor.
- let: Es similar a var, sin embargo su scope es local, es decir solo funciona dentro del bloque en que se encuentra. Se suelen usar para iteraciones y situaciones donde queremos que dicho valor solo funcione dentro de cierto bloque de código.
- const: Es una variable inmutable, es decir, su valor no puede ser cambiado. Se suele usar para declarar valores fijos, como valores referenciales o constantes matemáticas.

### 4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

```git branch rama-1```
```git checkout -b rama-1```

### 5. Explicar la diferencia entre git merge y git rebase.
``` git merge``` fusiona 2 ramas, en cambio ```git rebase``` sobre escribe una rama sobre otra, lo cual ocasiona que esta ultima se pierda.

### 6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
Pull Reques consiste en solicitar permisos al propietario original de un repositorio, por parte de un usuario que hizo fork a dicho repositorio y quiere incorporar sus commits al repositorio original.
Por otro lado, ```git pull``` es un comando de Git para traer los posibles cambios del repositorio remoto al repositorio local en el que se está trabajando.

### 7. ¿Qué es el Virtual DOM?
Es una representación del DOM que se guarda en memoria y sirve para calcular la manera mas eficiente de actualizar el DOM cuando hayan cambios que realizar, es decir para renderizar la menor cantidad de cambios posibles.

### 8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

```
.c-section {
  padding: 1rem 3rem;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.c-section__title {
  width: 100%-2rem;
  background-color: rgb(34, 34, 34);
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0px -10px 0px rgb(173, 173, 173);
}
.c-services {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  gap: 1rem;
}
.c-services__item {
  width: 45%;
  list-style: none;
  background-color: rgb(250, 250, 250);
  padding: 1rem;
}
.c-services__item:hover {
  box-shadow: 0px 5px 3px rgb(0, 0, 0, 0.1);
}
.c-services__item > h3 {
  margin-left: 2rem;
}
```

# Analizador Sintáctico

Este proyecto consiste en la implementación de un analizador sintáctico utilizando ANTLR4 y JavaScript, como parte de una actividad evaluativa de la materia Sintaxis y Semántica de Los Lenguajes de la carrera de Ingeniería en Sistemas de Información.

El propósito de este trabajo práctico es aplicar los conocimientos adquiridos sobre gramáticas, analizadores léxicos y sintácticos, construcción de árboles de derivación, y traducción a otro lenguaje (JavaScript).

## ¿Qué hace este analizador?

- Realiza el análisis léxico del archivo `input.txt`, identificando los tokens del lenguaje.
- Realiza el análisis sintáctico validando que la entrada cumpla con la gramática definida.
- Construye e imprime el árbol de derivación (en formato texto).
- Traduce el código fuente a JavaScript.
- Ejecuta automáticamente el código traducido y muestra su salida o errores.

## Requisitos

- Tener instalado **Node.js** (versión 16 o superior)  
  👉 [https://nodejs.org/es](https://nodejs.org/es)
- Tener instalado **VS Code**  
  👉 [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Tener instalado **Java 11 o superior**  
  👉 [https://www.oracle.com/java/technologies/downloads/#java11](https://www.oracle.com/java/technologies/downloads/#java11) (seleccionar según sistema operativo)
- Tener instalada la **extensión ANTLR4 para VS Code**

![image](https://github.com/user-attachments/assets/37fbdf15-0d7c-496b-bb39-0d96711db2c9)

> **Importante**: Luego de instalar la extensión, reiniciar VS Code para que tome los cambios.

### Configurar ANTLR en VS Code

1. Ir al menú `Archivo > Preferencias > Configuración` (o `Ctrl + ,`)
2. Buscar "ANTLR" y dirigirse a la sección **Antlr4: Generation**
3. Editar el archivo `settings.json` y reemplazar todo su contenido por:

```json
{
  "antlr4.generation": {
    "alternativeJar": "antlr-4.13.2-complete.jar",
    "mode": "external",
    "listeners": true,
    "visitors": true,
    "language": "JavaScript",
    "outputDir": "./generated"
  }
}
```

> **Guardar el archivo** antes de continuar (`Ctrl + S`)

## Cómo usar el analizador sintáctico

### 1. Clonar el proyecto

Abrir una terminal (Cmd, PowerShell o terminal en Linux) y ejecutar:

```bash
git clone https://github.com/csalinas9/51079.git
```

### 2. Abrir el proyecto

```bash
cd proyecto Node JS
code .
```

![image](https://github.com/user-attachments/assets/9734fb9d-7675-4da5-8cc4-02730309c838)

Si todo está bien instalado, deberías ver el proyecto en VS Code.

## Funcionamiento del Analizador

1. Abrí el archivo `Programa.g4` para ver la gramática propuesta.
2. Dentro del repositorio hay varios archivos de ejemplo con entradas válidas o inválidas.

![image](https://github.com/user-attachments/assets/acaeafb4-1842-486c-a5fc-3435caaafbaa)

3. Para probarlos:

   - Copiá el contenido de uno de esos archivos.
   - Pegalo en el archivo `input.txt`.
   - Guardá los cambios (`Ctrl + S`).
   - Abrí una terminal en el directorio raíz del proyecto.
   - Ejecutá el analizador con:

     ```bash
     npm start
     ```

### ¿Qué hace `npm start`?

> Por ejemplo, si se usa el archivo `Input_correcto1`

- Analiza el archivo `input.txt`}

![image](https://github.com/user-attachments/assets/eccfdce5-59a2-4e32-94c2-7e60e2d00c07)

- Muestra los **tokens encontrados**

![image](https://github.com/user-attachments/assets/b5d7b131-71b6-4626-b904-1d232d46a72f)

- Informa **errores sintácticos** (si los hay)

![image](https://github.com/user-attachments/assets/f8cdb81e-1be0-4305-a660-0b8b60c0b14e)


// En este caso no hay errores, ya que el input ingresado es correcto
- Imprime el **árbol de derivación**

![image](https://github.com/user-attachments/assets/7a0d3bee-8876-4644-8c38-1775791ebf95)

- Traduce el código fuente a **JavaScript**

![image](https://github.com/user-attachments/assets/863826e5-a284-46d0-8532-cb1cacc125e5)

- Ejecuta automáticamente el código traducido

![image](https://github.com/user-attachments/assets/9951c24c-2f8f-4419-8e6f-4233cb713e66)

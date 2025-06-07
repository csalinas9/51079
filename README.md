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

![image](https://github.com/user-attachments/assets/ea8669fa-dc4a-4729-8b00-d91206c77add)


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

Ejecutar:
```bash
cd 51079
cd proyecto Node JS
code .
```

![image](https://github.com/user-attachments/assets/e6032378-20ce-46ff-bbe7-c2b90b0b4cdc)



Si todo está bien instalado, deberías ver el proyecto en VS Code.
> La carpeta "proyecto Node JS" contiene el proyecto de código del analizador.

## Funcionamiento del Analizador

1. Abrí el archivo `Programa.g4` para ver la gramática propuesta.
2. Dentro del repositorio hay 4 archivos de texto, con ejemplos de entradas válidas e inválidas.

![image](https://github.com/user-attachments/assets/ee7bad35-3609-47b3-a472-ab04e83bcc62)



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

![image](https://github.com/user-attachments/assets/b1a172d8-5267-42db-b9bb-b847d3ff6867)


- Muestra los **tokens encontrados**

![image](https://github.com/user-attachments/assets/4018ea48-9b83-466b-b3b5-0274826cce74)


- Informa **errores sintácticos** (si los hay)

![image](https://github.com/user-attachments/assets/83557ce0-669c-448d-b083-430ed1466477)



> En este caso no hay errores, ya que el input ingresado es correcto
- Imprime el **árbol de derivación**

![image](https://github.com/user-attachments/assets/e905ee49-0225-49ef-8f59-24c97a4ee42f)


- Traduce el código fuente a **JavaScript**

![image](https://github.com/user-attachments/assets/a888443e-ea18-4628-b7c3-bc33bc7e9c9e)


- Ejecuta automáticamente el código traducido

![image](https://github.com/user-attachments/assets/85345583-0bca-4e0c-bcfe-4afcda3d25d3)

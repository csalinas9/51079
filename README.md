
# Proyecto Analizador Sintáctico - Legajo 51079

Este proyecto implementa un analizador sintáctico con ANTLR4 y JavaScript que procesa metadatos de archivos en formato específico.

## Requisitos

- Node.js
- Java (JRE)
- ANTLR4
- Visual Studio Code con extensión ANTLR4

## Cómo ejecutar desde la terminal:

1. Instalar dependencias: `npm install`
2. Generar analizadores: `antlr4 -Dlanguage=JavaScript -o generated Metadata.g4`
3. Ejecutar: `node index.js`

## Ejemplos válido

Archivos: `input_correcto1.txt` , `input_correcto2.txt`

## Ejemplos inválidos

Archivos: `input_incorrecto1.txt`, `input_incorrecto2.txt`

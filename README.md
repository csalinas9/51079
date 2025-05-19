
# Proyecto Analizador Sintáctico - Legajo 51079

Este proyecto implementa un analizador sintáctico con ANTLR4 y JavaScript que procesa metadatos de archivos en formato específico.

## Requisitos

- Node.js
- Java (JRE)
- ANTLR4
- Visual Studio Code con extensión ANTLR4

## Cómo ejecutar

1. Instalar dependencias: `npm install`
2. Generar analizadores: `antlr4 -Dlanguage=JavaScript -o generated Metadata.g4`
3. Ejecutar: `node index.js`

## Ejemplo válido

Archivo: `input/valido.txt`

## Ejemplos inválidos

Archivos: `input/invalido1.txt`, `input/invalido2.txt`


import fs from 'fs';
import antlr4 from 'antlr4';
import MetadataLexer from './generated/MetadataLexer.js';
import MetadataParser from './generated/MetadataParser.js';
import CustomMetadataVisitor from './CustomMetadataVisitor.js';

let input;
try {
  input = fs.readFileSync('input/valido.txt', 'utf8');
} catch (err) {
  console.error("No se pudo leer el archivo de entrada.");
  process.exit(1);
}

const chars = new antlr4.InputStream(input);
const lexer = new MetadataLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MetadataParser(tokens);
parser.buildParseTrees = true;
const tree = parser.metadata();

if (parser._syntaxErrors > 0) {
  console.error("Se encontraron errores de sintaxis.");
} else {
  console.log("Entrada válida.");
  const visitor = new CustomMetadataVisitor();
  const result = visitor.visit(tree);
  console.log("Resultado:", result);
}

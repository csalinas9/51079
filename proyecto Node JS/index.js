// index.js
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import { exec } from "child_process";
import ProgramaLexer from "./generated/ProgramaLexer.js";
import ProgramaParser from "./generated/ProgramaParser.js";
import { CustomProgramaVisitor } from "./CustomProgramaVisitor.js";

async function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    console.error("❌ No se pudo leer el archivo input.txt");
    return;
  }

  const inputStream = CharStreams.fromString(input);
  const lexer = new ProgramaLexer(inputStream);
  const tokens = new CommonTokenStream(lexer);
  tokens.fill();

  const symbolicNames = ProgramaLexer.symbolicNames;

  const tokenData = tokens.tokens
    .filter(token => token.type > 0 && token.type < symbolicNames.length)
    .map(token => ({
      Token: symbolicNames[token.type],
      Lexema: token.text
    }));

  console.log("📌 TOKENS ENCONTRADOS:\n");
  console.table(tokenData);

  console.log("\n------------------------\n");

  const tokenStream = new CommonTokenStream(new ProgramaLexer(CharStreams.fromString(input)));
  const parser = new ProgramaParser(tokenStream);
  parser.buildParseTrees = true;

  const tree = parser.programa();

  if (parser._syntaxErrors > 0) {
    console.error("❌ Se encontraron errores de sintaxis.");
  } else {
    console.log("✅ Entrada válida.");
    console.log("\n🌲 Árbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    const visitor = new CustomProgramaVisitor();
    const jsCode = visitor.visit(tree);

    console.log("\n💻 Código traducido a JavaScript:\n");
    console.log(jsCode);

    // Guardar código traducido en un archivo
    fs.writeFileSync("output.js", jsCode);

    // Ejecutar el código traducido
    exec("node output.js", (error, stdout, stderr) => {
      console.log("\n🧪 Resultado de ejecutar output.js:");
      if (error) {
        console.error(`❌ Error al ejecutar: ${error.message}`);
      } else if (stderr) {
        console.error(`stderr: ${stderr}`);
      } else {
        console.log(stdout);
      }
    });
  }
}

main();

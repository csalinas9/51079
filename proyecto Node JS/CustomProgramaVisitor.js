// CustomProgramaVisitor.js
import ProgramaVisitor from "./generated/ProgramaVisitor.js";

export class CustomProgramaVisitor extends ProgramaVisitor {
  constructor() {
    super();
    this.output = ""; // Acumulador del código JS traducido
  }

  visitPrograma(ctx) {
    this.output += "// Programa principal\n";
    this.visitChildren(ctx);
    return this.output;
  }

  visitImprimir(ctx) {
    const expr = ctx.expresion().getText();
    this.output += `console.log(${expr});\n`;
    return null;
  }

  visitAsignacion(ctx) {
    const id = ctx.IDENTIFICADOR().getText();
    const expr = ctx.expresion().getText();
    this.output += `let ${id} = ${expr};\n`;
    return null;
  }

  visitExcepcion(ctx) {
    const errorVar = ctx.IDENTIFICADOR().getText();
    this.output += "try {\n";
    this.visit(ctx.bloque(0));
    this.output += `} catch (${errorVar}) {\n`;
    this.visit(ctx.bloque(1));
    this.output += "}\n";
    return null;
  }

  visitBloque(ctx) {
    ctx.instruccion().forEach(instr => this.visit(instr));
    return null;
  }

  visitExpresion(ctx) {
    if (ctx.termino().length > 1) {
      let result = this.visit(ctx.termino(0));
      for (let i = 1; i < ctx.termino().length; i++) {
        const operador = ctx.children[2 * i - 1].getText();
        const siguienteTermino = this.visit(ctx.termino(i));
        result += ` ${operador} ${siguienteTermino}`;
      }
      return result;
    } else {
      return this.visit(ctx.termino(0));
    }
  }

  visitTermino(ctx) {
    if (ctx.NUMERO()) return ctx.NUMERO().getText();
    if (ctx.CADENA()) return ctx.CADENA().getText();
    if (ctx.IDENTIFICADOR()) return ctx.IDENTIFICADOR().getText();
    if (ctx.expresion()) return `(${this.visit(ctx.expresion())})`;
    return null;
  }
}

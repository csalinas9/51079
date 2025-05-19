
import MetadataVisitor from './generated/MetadataVisitor.js';

export default class CustomMetadataVisitor extends MetadataVisitor {
  visitMetadata(ctx) {
    let atributos = {};
    const atributosCtx = ctx.atributo();

    atributosCtx.forEach(attr => {
      const key = attr.getChild(0).getText();
      const value = attr.getText().split(':')[1].trim();
      atributos[key] = value.replace(/^[ \[]+|[ \];]+$/g, '');
    });

    return atributos;
  }
}

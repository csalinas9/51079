
grammar Metadata;

metadata: 'const' 'archivoMetadata' '=' atributo ( ';' atributo )* ';' ;

atributo
    : 'nombre' ':' VALOR
    | 'tipo' ':' VALOR
    | 'tamaño' ':' NUMERO
    | 'creado' ':' FECHA
    | 'modificado' ':' FECHA
    | 'autor' ':' VALOR
    | 'descripcion' ':' VALOR
    | 'etiquetas' ':' '[' VALOR (',' VALOR)* ']'
    ;

VALOR: [a-zA-Z0-9_.áéíóúÁÉÍÓÚüÜñÑ ]+ ;
NUMERO: [0-9]+ ;
FECHA: [0-9]{4} '-' [0-9]{2} '-' [0-9]{2} ' ' [0-9]{2} ':' [0-9]{2} ;
WS: [ 	
]+ -> skip ;

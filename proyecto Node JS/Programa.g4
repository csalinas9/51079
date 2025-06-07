grammar Programa;

programa: PROGRAMA IDENTIFICADOR LLAVE_IZQ instruccion* LLAVE_DER;

instruccion : asignacion | excepcion | bloque | imprimir;

asignacion : IDENTIFICADOR ASIGNACION expresion PUNTOYCOMA;

excepcion : PROCESAR bloque MANEJARERROR PAREN_IZQ  IDENTIFICADOR PAREN_DER bloque PUNTOYCOMA ;

bloque : LLAVE_IZQ  instruccion* LLAVE_DER;

imprimir : IMPRIMIR PAREN_IZQ  expresion PAREN_DER PUNTOYCOMA ;

expresion : termino ((SUMA | RESTA | MULTIPLICA | DIVIDE) termino)* ;

termino : NUMERO | IDENTIFICADOR | CADENA | PAREN_IZQ expresion PAREN_DER ;


//Tokens

PROGRAMA : 'programa';
PROCESAR : 'procesar';
MANEJARERROR : 'manejarError';
IMPRIMIR : 'imprimir';

ASIGNACION   : '=' ;
PUNTOYCOMA   : ';' ;
LLAVE_IZQ    : '{' ;
LLAVE_DER    : '}' ;
PAREN_IZQ    : '(' ;
PAREN_DER    : ')' ;
PUNTO        : '.' ;

SUMA       : '+' ;
RESTA      : '-' ;
MULTIPLICA : '*' ;
DIVIDE     : '/' ;

CADENA : '"' (~["\\] | '\\' .)* '"' ;
IDENTIFICADOR : LETRA ( LETRA | DIGITO | '_' )* ;
NUMERO : DIGITO+ (PUNTO DIGITO+ )? ;

fragment LETRA : [a-zA-Z] ;
fragment DIGITO : [0-9] ;


ESPACIOS : [ \t\r\n]+ -> skip ;

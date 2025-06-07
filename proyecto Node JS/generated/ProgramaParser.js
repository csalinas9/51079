// Generated from Programa.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ProgramaListener from './ProgramaListener.js';
import ProgramaVisitor from './ProgramaVisitor.js';

const serializedATN = [4,1,19,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,5,0,21,8,0,10,0,12,0,24,9,0,1,0,
1,0,1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,4,1,4,5,4,50,8,4,10,4,12,4,53,9,4,1,4,1,4,1,5,1,5,1,5,1,
5,1,5,1,5,1,6,1,6,1,6,5,6,66,8,6,10,6,12,6,69,9,6,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,3,7,78,8,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,12,15,80,0,16,1,0,
0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,38,1,0,0,0,8,47,1,0,0,0,10,56,1,0,0,0,12,
62,1,0,0,0,14,77,1,0,0,0,16,17,5,1,0,0,17,18,5,17,0,0,18,22,5,7,0,0,19,21,
3,2,1,0,20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,1,
0,0,0,24,22,1,0,0,0,25,26,5,8,0,0,26,1,1,0,0,0,27,32,3,4,2,0,28,32,3,6,3,
0,29,32,3,8,4,0,30,32,3,10,5,0,31,27,1,0,0,0,31,28,1,0,0,0,31,29,1,0,0,0,
31,30,1,0,0,0,32,3,1,0,0,0,33,34,5,17,0,0,34,35,5,5,0,0,35,36,3,12,6,0,36,
37,5,6,0,0,37,5,1,0,0,0,38,39,5,2,0,0,39,40,3,8,4,0,40,41,5,3,0,0,41,42,
5,9,0,0,42,43,5,17,0,0,43,44,5,10,0,0,44,45,3,8,4,0,45,46,5,6,0,0,46,7,1,
0,0,0,47,51,5,7,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,0,
0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,8,0,0,55,9,1,0,0,0,
56,57,5,4,0,0,57,58,5,9,0,0,58,59,3,12,6,0,59,60,5,10,0,0,60,61,5,6,0,0,
61,11,1,0,0,0,62,67,3,14,7,0,63,64,7,0,0,0,64,66,3,14,7,0,65,63,1,0,0,0,
66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,13,1,0,0,0,69,67,1,0,0,0,70,
78,5,18,0,0,71,78,5,17,0,0,72,78,5,16,0,0,73,74,5,9,0,0,74,75,3,12,6,0,75,
76,5,10,0,0,76,78,1,0,0,0,77,70,1,0,0,0,77,71,1,0,0,0,77,72,1,0,0,0,77,73,
1,0,0,0,78,15,1,0,0,0,5,22,31,51,67,77];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ProgramaParser extends antlr4.Parser {

    static grammarFileName = "Programa.g4";
    static literalNames = [ null, "'programa'", "'procesar'", "'manejarError'", 
                            "'imprimir'", "'='", "';'", "'{'", "'}'", "'('", 
                            "')'", "'.'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "PROGRAMA", "PROCESAR", "MANEJARERROR", 
                             "IMPRIMIR", "ASIGNACION", "PUNTOYCOMA", "LLAVE_IZQ", 
                             "LLAVE_DER", "PAREN_IZQ", "PAREN_DER", "PUNTO", 
                             "SUMA", "RESTA", "MULTIPLICA", "DIVIDE", "CADENA", 
                             "IDENTIFICADOR", "NUMERO", "ESPACIOS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "excepcion", 
                         "bloque", "imprimir", "expresion", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ProgramaParser.ruleNames;
        this.literalNames = ProgramaParser.literalNames;
        this.symbolicNames = ProgramaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ProgramaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(ProgramaParser.PROGRAMA);
	        this.state = 17;
	        this.match(ProgramaParser.IDENTIFICADOR);
	        this.state = 18;
	        this.match(ProgramaParser.LLAVE_IZQ);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131220) !== 0)) {
	            this.state = 19;
	            this.instruccion();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(ProgramaParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ProgramaParser.RULE_instruccion);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.asignacion();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.excepcion();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.bloque();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ProgramaParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(ProgramaParser.IDENTIFICADOR);
	        this.state = 34;
	        this.match(ProgramaParser.ASIGNACION);
	        this.state = 35;
	        this.expresion();
	        this.state = 36;
	        this.match(ProgramaParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ProgramaParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(ProgramaParser.PROCESAR);
	        this.state = 39;
	        this.bloque();
	        this.state = 40;
	        this.match(ProgramaParser.MANEJARERROR);
	        this.state = 41;
	        this.match(ProgramaParser.PAREN_IZQ);
	        this.state = 42;
	        this.match(ProgramaParser.IDENTIFICADOR);
	        this.state = 43;
	        this.match(ProgramaParser.PAREN_DER);
	        this.state = 44;
	        this.bloque();
	        this.state = 45;
	        this.match(ProgramaParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ProgramaParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(ProgramaParser.LLAVE_IZQ);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131220) !== 0)) {
	            this.state = 48;
	            this.instruccion();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(ProgramaParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ProgramaParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(ProgramaParser.IMPRIMIR);
	        this.state = 57;
	        this.match(ProgramaParser.PAREN_IZQ);
	        this.state = 58;
	        this.expresion();
	        this.state = 59;
	        this.match(ProgramaParser.PAREN_DER);
	        this.state = 60;
	        this.match(ProgramaParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ProgramaParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.termino();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0)) {
	            this.state = 63;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 64;
	            this.termino();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ProgramaParser.RULE_termino);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.match(ProgramaParser.NUMERO);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(ProgramaParser.IDENTIFICADOR);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.match(ProgramaParser.CADENA);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.match(ProgramaParser.PAREN_IZQ);
	            this.state = 74;
	            this.expresion();
	            this.state = 75;
	            this.match(ProgramaParser.PAREN_DER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ProgramaParser.EOF = antlr4.Token.EOF;
ProgramaParser.PROGRAMA = 1;
ProgramaParser.PROCESAR = 2;
ProgramaParser.MANEJARERROR = 3;
ProgramaParser.IMPRIMIR = 4;
ProgramaParser.ASIGNACION = 5;
ProgramaParser.PUNTOYCOMA = 6;
ProgramaParser.LLAVE_IZQ = 7;
ProgramaParser.LLAVE_DER = 8;
ProgramaParser.PAREN_IZQ = 9;
ProgramaParser.PAREN_DER = 10;
ProgramaParser.PUNTO = 11;
ProgramaParser.SUMA = 12;
ProgramaParser.RESTA = 13;
ProgramaParser.MULTIPLICA = 14;
ProgramaParser.DIVIDE = 15;
ProgramaParser.CADENA = 16;
ProgramaParser.IDENTIFICADOR = 17;
ProgramaParser.NUMERO = 18;
ProgramaParser.ESPACIOS = 19;

ProgramaParser.RULE_programa = 0;
ProgramaParser.RULE_instruccion = 1;
ProgramaParser.RULE_asignacion = 2;
ProgramaParser.RULE_excepcion = 3;
ProgramaParser.RULE_bloque = 4;
ProgramaParser.RULE_imprimir = 5;
ProgramaParser.RULE_expresion = 6;
ProgramaParser.RULE_termino = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_programa;
    }

	PROGRAMA() {
	    return this.getToken(ProgramaParser.PROGRAMA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(ProgramaParser.IDENTIFICADOR, 0);
	};

	LLAVE_IZQ() {
	    return this.getToken(ProgramaParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(ProgramaParser.LLAVE_DER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_asignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(ProgramaParser.IDENTIFICADOR, 0);
	};

	ASIGNACION() {
	    return this.getToken(ProgramaParser.ASIGNACION, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ProgramaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_excepcion;
    }

	PROCESAR() {
	    return this.getToken(ProgramaParser.PROCESAR, 0);
	};

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	MANEJARERROR() {
	    return this.getToken(ProgramaParser.MANEJARERROR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(ProgramaParser.PAREN_IZQ, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(ProgramaParser.IDENTIFICADOR, 0);
	};

	PAREN_DER() {
	    return this.getToken(ProgramaParser.PAREN_DER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ProgramaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_bloque;
    }

	LLAVE_IZQ() {
	    return this.getToken(ProgramaParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(ProgramaParser.LLAVE_DER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(ProgramaParser.IMPRIMIR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(ProgramaParser.PAREN_IZQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PAREN_DER() {
	    return this.getToken(ProgramaParser.PAREN_DER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ProgramaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	SUMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ProgramaParser.SUMA);
	    } else {
	        return this.getToken(ProgramaParser.SUMA, i);
	    }
	};


	RESTA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ProgramaParser.RESTA);
	    } else {
	        return this.getToken(ProgramaParser.RESTA, i);
	    }
	};


	MULTIPLICA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ProgramaParser.MULTIPLICA);
	    } else {
	        return this.getToken(ProgramaParser.MULTIPLICA, i);
	    }
	};


	DIVIDE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ProgramaParser.DIVIDE);
	    } else {
	        return this.getToken(ProgramaParser.DIVIDE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(ProgramaParser.NUMERO, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(ProgramaParser.IDENTIFICADOR, 0);
	};

	CADENA() {
	    return this.getToken(ProgramaParser.CADENA, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(ProgramaParser.PAREN_IZQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PAREN_DER() {
	    return this.getToken(ProgramaParser.PAREN_DER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ProgramaParser.ProgramaContext = ProgramaContext; 
ProgramaParser.InstruccionContext = InstruccionContext; 
ProgramaParser.AsignacionContext = AsignacionContext; 
ProgramaParser.ExcepcionContext = ExcepcionContext; 
ProgramaParser.BloqueContext = BloqueContext; 
ProgramaParser.ImprimirContext = ImprimirContext; 
ProgramaParser.ExpresionContext = ExpresionContext; 
ProgramaParser.TerminoContext = TerminoContext; 

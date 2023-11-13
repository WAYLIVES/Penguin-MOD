// Name: More Conditions
// Id: WAYLIVES
// Description: Here you can find a free server for your projects. And also check whether it is working now or not.
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)



(function (Scratch) {
  "use strict";

  class lmsmcutils {
    getInfo() {
      return {              
        id: "MoreConditions",
        name: "More Conditions",
        color1: "#FFAB19",
        color2: "#CC8914",
        color3: "#CC8914",
        
        blocks: [
          
          {
            blockType: "label",
            text: "Is cloud data server up?",
          },
          {
            opcode: "commentC",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "if [IF] then [THEN] else [ELSE]",
            arguments: {
              IF: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              THEN: {
                type: Scratch.ArgumentType.STRING,
              },
              ELSE: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'A',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'if [IFA] then [THENA]',
            arguments: {
              IFA: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              THENA: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'B',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'if [IFB] then [THENB] else [ELSEB]',
            arguments: {
              IFB: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              THENB: {
                type: Scratch.ArgumentType.STRING,
              },
              ELSEB: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'C',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [IFC] then [THENC]',
            arguments: {
              IFC: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              THENC: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'D',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [IFD] then [THEND] else [ELSED]',
            arguments: {
              IFD: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              THEND: {
                type: Scratch.ArgumentType.STRING,
              },
              ELSED: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'Infinity',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Infinity'
          },
          {
            opcode: 'true',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true'
          },
          {
            opcode: 'false',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false'
          },
          
                    
          "---",
        ],
      };
    }
    
    Infinity() {
      return 'Infinity';
    }
    true() {
      return 'true';
    }
    false() {
      return 'false';
    }

    A({IFA,THENA,ELSEA}){
      return IFA?THENA:ELSEA;
    }

    B({IFB,THENB,ELSEB}){
      return IFB?THENB:ELSEB;
    }

    D({IFD,THEND,ELSED}){
      return IFD?THEND:ELSED;
    }
    
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);

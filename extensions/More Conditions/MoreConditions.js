// Name: More Conditions
// Id: WAYLIVES
// Description: Here you can find a free server for your projects. And also check whether it is working now or not.
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)



(function (Scratch) {
  "use strict";

  const menuIconURI =
    "data:image/svg+xml;base64PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgcng9IjQ4IiBmaWxsPSIjRkZBQjE5Ii8+CjxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgcng9IjQ4IiBzdHJva2U9IiNDQzg5MTQiIHN0cm9rZS13aWR0aD0iNCIvPgo8cmVjdCB4PSIyMCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgcng9IjUiIGZpbGw9IiM0NzJFMDMiLz4KPHJlY3QgeD0iMjAiIHk9IjYwIiB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjNDcyRTAzIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iMzUiIHI9IjkiIGZpbGw9IiNGRkFCMTkiIHN0cm9rZT0iIzQ3MkUwMyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjUiIHI9IjkiIGZpbGw9IiNGRkFCMTkiIHN0cm9rZT0iIzQ3MkUwMyIgc3Ryb2tlLXdpZHRoPSI4Ii8+Cjwvc3ZnPgo=";

  class lmsmcutils {
    getInfo() {
      return {              
        id: "MoreConditions",
        name: "More Conditions",
        color1: "#FFAB19",
        color2: "#CC8914",
        color3: "#CC8914",
        menuIconURI: menuIconURI,
        
        blocks: [
          
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

          "---",
          
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
          {
            opcode: "isUserMobile",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is this a phone?",
          },

          "---",
          
          {
            opcode: "Boolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[STRING]",
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
              },
            },
          },
          {
            opcode: "FreeBoolean",
            blockType: Scratch.BlockType.REPORTER,
            text: "[STRING]",
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },

          "---",
          
          {
            opcode: 'NumPi',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝜋 (Number pi)'
          },
          {
            opcode: 'NumE',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝘦 (Euler number)'
          },

          "---",
          
          {
            opcode: "NewLine",
            blockType: Scratch.BlockType.REPORTER,
            text: "new line",
            disableMonitor: true,
            arguments: {},
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

    A(args) {
      if (args.IFA) return args.THENA;
      return "";
    }

    B({IFB,THENB,ELSEB}) {
      return IFB?THENB:ELSEB;
    }

    C(args) {
      if (args.IFC) return args.THENC;
      return "";
    }

    D({IFD,THEND,ELSED}) {
      return IFD?THEND:ELSED;
    }
    
    Boolean({STRING}) {
      return STRING;
    }
    
    FreeBoolean({STRING}) {
      return STRING;
    }

    isUserMobile(args, util) {
      return (
        navigator.userAgent.includes("Mobile") ||
        navigator.userAgent.includes("Android")
      );
    }

    NumPi() {
      return '3.1415926535897932';
    }

    NumE() {
      return '2,7182818284590452';
    }

    NewLine() {
      return "\n";
    }
    
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);

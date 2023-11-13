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
            opcode: 'Infinity',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Infinity'
          },
          
                    
          "---",
        ],
      };
    }
    
    Infinity() {
      return 'Infinity';
    }
    
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);

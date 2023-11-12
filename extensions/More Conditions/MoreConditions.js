// Name: Free Servers
// Id: WAYLIVES
// Description: Here you can find a free server for your projects. And also check whether it is working now or not.
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)



(function (Scratch) {
  "use strict";

  class lmsmcutils {
    getInfo() {
      return {              
        id: "FreeServers",
        name: "FREE Servers",
        color1: "#DFB521",
        color2: "#9B8122",
        color3: "#9B8122",
        
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
            opcode: 'convert',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[FORMAT]',
            arguments: {
              FORMAT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'FORMAT_MENU'
              },
            },
          },
          
                    
          "---",
        ],
        menus: {
          FORMAT_MENU: {
            acceptReporters: true,
            items: [
              {
                text: 'True',
                value: 'True'
              },
              {
                text: 'False',
                value: 'False'
              },
              {
                text: 'Infinity',
                value: 'Infinity'
              },
            ]
          }
        }
      };
    }
    
    convert (args) {
      if (args.FORMAT === 'True') {
        return args.TEXT.toString().toUpperCase();
      } else {
        return args.TEXT.toString().toLowerCase();
      }
    }
    
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);

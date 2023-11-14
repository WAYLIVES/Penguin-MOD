// Name: Main Program Blocks
// Id: WAYLIVES
// Description: Here you can find more conditional blocks for your projects.
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)



(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Error");
  }

  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMjIiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzMCIgeT0iNDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyOCIgcng9IjMiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMzYiIHk9IjUwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI1OCIgeT0iNTAiIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNjUiIGN5PSIzMiIgcj0iNSIgZmlsbD0iI0JGNkU4QiIvPgo8L3N2Zz4K";

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  class lmsmcutils {
    getInfo() {
      return {              
        id: "MainProgramBlocks",
        name: "MPB",
        color1: "#BF6E8B",
        color2: "#9A4E69",
        color3: "#9A4E69",
        menuIconURI: menuIconURI,
        
        blocks: [          
          {
            blockType: "label",
            text: "May not work in normal browser tabs",
          },
          {
            opcode: "resizeTo",
            blockType: Scratch.BlockType.COMMAND,
            text: "resize window to width: [W] height: [H]",
            arguments: {
              W: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
              H: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },
          {
            opcode: "setW",
            blockType: Scratch.BlockType.COMMAND,
            text: "set window width to [W]",
            arguments: {
              W: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
            },
          },
          {
            opcode: "setH",
            blockType: Scratch.BlockType.COMMAND,
            text: "set window height to [H]",
            arguments: {
              H: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },

          "---",
          
          {
            opcode: "moveToPresets",
            blockType: Scratch.BlockType.COMMAND,
            text: "move window to the [PRESETS]",
            arguments: {
              PRESETS: {
                type: Scratch.ArgumentType.STRING,
                menu: "MOVE",
              },
            },
          },
          {
            opcode: "moveTo",
            blockType: Scratch.BlockType.COMMAND,
            text: "move window to x: [X] y: [Y]",
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
            },
          },

          "---",
          
          {
            opcode: "changeTitleTo",
            blockType: Scratch.BlockType.COMMAND,
            text: "set window title to [TITLE]",
            arguments: {
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Title",
              },
            },
          },

          "---",

          {
            opcode: "enterFullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: "enter fullscreen",
          },
          {
            opcode: "exitFullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: "exit fullscreen",
          },          
          {
            opcode: "closeWindow",
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: "close window",
          },

          "---",
          {
            opcode: 'Window',
            blockType: Scratch.BlockType.REPORTER,
            text: 'window [FORMAT]',
            arguments: {
              FORMAT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'FORMAT_MENU'
              },
            },
          },
          {
            opcode: 'Screen',
            blockType: Scratch.BlockType.REPORTER,
            text: 'screen [FORMATS]',
            arguments: {
              FORMATS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'FORMATS_MENU'
              },
            },
          },          
          {
            opcode: "isQuestion",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is window [QUESTION]?",
            arguments: {
              QUESTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'QUESTION_MENU'
              },
            },
          },
          
          "---",
        ],
        menus: {
          MOVE: {
            acceptReporters: true,
            items: [
              "center",
              "right",
              "left",
              "top",
              "bottom",
              "top right",
              "top left",
              "bottom right",
              "bottom left",
              "random position",
            ],
          },
            FORMAT_MENU: {
            acceptReporters: true,
            items: ['width', 'height', 'title', 'x', 'y']
          },
            FORMATS_MENU: {
            acceptReporters: true,
            items: ['width', 'height']
          },
            QUESTION_MENU: {
            acceptReporters: true,
            items: ['focused', 'fullscreen']
          },
        },
      };
    }
    moveTo(args) {
      window.moveTo(args.X, args.Y);
      Scratch.vm.runtime.requestRedraw();
    }
    moveToPresets(args) {
      if (args.PRESETS == "center") {
        const left = (screen.width - window.outerWidth) / 2;
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(left, top);
      } else if (args.PRESETS == "right") {
        const right = screen.width - window.outerWidth;
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(right, top);
      } else if (args.PRESETS == "left") {
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(0, top);
      } else if (args.PRESETS == "top") {
        const left = (screen.width - window.outerWidth) / 2;
        window.moveTo(left, 0);
      } else if (args.PRESETS == "bottom") {
        const left = (screen.width - window.outerWidth) / 2;
        const bottom = screen.height - window.outerHeight;
        window.moveTo(left, bottom);
      } else if (args.PRESETS == "top right") {
        const right = screen.width - window.outerWidth;
        window.moveTo(right, 0);
      } else if (args.PRESETS == "top left") {
        window.moveTo(0, 0);
      } else if (args.PRESETS == "bottom right") {
        const right = screen.width - window.outerWidth;
        const bottom = screen.height - window.outerHeight;
        window.moveTo(right, bottom);
      } else if (args.PRESETS == "bottom left") {
        const bottom = screen.height - window.outerHeight;
        window.moveTo(0, bottom);
      } else if (args.PRESETS == "random position") {
        const randomX = getRandomInt(0, screen.width);
        const randomY = getRandomInt(0, screen.height);
        window.moveTo(randomX, randomY);
      }
      Scratch.vm.runtime.requestRedraw();
    }
    Window(args) {
      if (args.FORMAT == "x") {
        return window.screenLeft;
      } else if (args.FORMAT == "y") {
        return window.screenTop;
      } else if (args.FORMAT == "width") {
        return window.outerWidth;
      } else if (args.FORMAT == "height") {
        return window.outerHeight;
      } else if (args.FORMAT == "title") {
        return document.title;
      }
    }
    Screen(args) {
      if (args.FORMATS == "width") {
        return screen.width;
      } else if (args.FORMATS == "height") {
        return screen.height;
      }
    }
    isQuestion(args) {
      if (args.QUESTION == "focused") {
        return document.hasFocus();
      } else if (args.QUESTION == "fullscreen") {
        return document.fullscreenElement !== null;
      }
    }
    
    resizeTo(args) {
      window.resizeTo(args.W, args.H);
      Scratch.vm.runtime.requestRedraw();
    }
    setW(args) {
      const currentH = window.outerHeight;
      window.resizeTo(args.W, currentH);
      Scratch.vm.runtime.requestRedraw();
    }
    setH(args) {
      const currentW = window.outerWidth;
      window.resizeTo(currentW, args.H);
      Scratch.vm.runtime.requestRedraw();
    }    
    changeTitleTo(args) {
      document.title = args.TITLE;
    }
    enterFullscreen() {
      if (document.fullscreenElement == null) {
        document.documentElement.requestFullscreen();
      }
    }
    exitFullscreen() {
      if (document.fullscreenElement !== null) {
        document.exitFullscreen();
      }
    }
    closeWindow() {
      const editorConfirmation = [
        "Are you sure you want to close this window?",
        "",
        "(This message will not appear when the project is packaged)",
      ].join("\n");
      if (typeof ScratchBlocks === "undefined" || confirm(editorConfirmation)) {
        window.close();
      }
    }
  }    
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);

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
            opcode: "windowX",
            blockType: Scratch.BlockType.REPORTER,
            text: "window x",
          },
          {
            opcode: "windowY",
            blockType: Scratch.BlockType.REPORTER,
            text: "window y",
          },

          "---",

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
                defaultValue: "1000",
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
                defaultValue: "1000",
              },
            },
          },
          {
            opcode: "windowW",
            blockType: Scratch.BlockType.REPORTER,
            text: "window width",
          },
          {
            opcode: "windowH",
            blockType: Scratch.BlockType.REPORTER,
            text: "window height",
          },

          "---",
          
          {
            opcode: "screenW",
            blockType: Scratch.BlockType.REPORTER,
            text: "screen width",
          },
          {
            opcode: "screenH",
            blockType: Scratch.BlockType.REPORTER,
            text: "screen height",
          },

          "---",

          {
            opcode: "isFocused",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is window focused?",
          },

          "---",

          {
            opcode: "changeTitleTo",
            blockType: Scratch.BlockType.COMMAND,
            text: "set window title to [TITLE]",
            arguments: {
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello World!",
              },
            },
          },
          {
            opcode: "windowTitle",
            blockType: Scratch.BlockType.REPORTER,
            text: "window title",
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
            opcode: "isFullscreen",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is window fullscreen?",
          },

          "---",

          {
            opcode: "closeWindow",
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: "close window",
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
    windowX() {
      return window.screenLeft;
    }
    windowY() {
      return window.screenTop;
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
    windowW() {
      return window.outerWidth;
    }
    windowH() {
      return window.outerHeight;
    }
    screenW() {
      return screen.width;
    }
    screenH() {
      return screen.height;
    }
    isFocused() {
      return document.hasFocus();
    }
    changeTitleTo(args) {
      document.title = args.TITLE;
    }
    windowTitle() {
      return document.title;
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
    isFullscreen() {
      return document.fullscreenElement !== null;
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

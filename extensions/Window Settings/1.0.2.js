// ________________________________________________________________________________________

// Name: Window Settings
// Id: WAYLIVES
// Description: Thanks to this extension, you can customize the project window (this works if you package the project in the ".exe" format).
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)
// V-1.0.2

// ________________________________________________________________________________________






/* ________________________________________________________________________________________ */
(function (Scratch) {
  "use strict";
/* ________________________________________________________________________________________ */



  
  

/* ________________________________________________________________________________________ */
  Scratch.translate.setup({
    
    ru /*_РусскийЯзык_*/: {
      ExtensionName: "Настройки Окна",
      LabelA: "Window Settings:",
    },
  }); 
/* ________________________________________________________________________________________ */



  

  
/* ________________________________________________________________________________________ */
  if (!Scratch.extensions.unsandboxed) {throw new Error("Error");}  
/* ________________________________________________________________________________________ */



  
  

/* ________________________________________________________________________________________ */  
  // иконка меню:
  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNEMTM0MkEiLz4KPHJlY3QgeD0iMjIiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzMCIgeT0iNDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyOCIgcng9IjMiIGZpbGw9IiNEMTM0MkEiLz4KPGNpcmNsZSBjeD0iNjUiIGN5PSIzMiIgcj0iNSIgZmlsbD0iI0QxMzQyQSIvPgo8L3N2Zz4K";
  
  // иконки блоков:
/* ________________________________________________________________________________________ */



  


/* ________________________________________________________________________________________ */  

/* ________________________________________________________________________________________ */



  


/* ________________________________________________________________________________________ */  
  class lmsmcutils {
    getInfo() {
      return {              
        id: "WindowSettings",
        name: Scratch.translate({ id: "ExtensionName", default: "Window Settings" }),
        color1: "#D1342A",
        color2: "#A92B22",
        color3: "#7D1F18",
        menuIconURI: menuIconURI,
        
        blocks: [ 
          {
            opcode: "moveTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("move window to x: [X] y: [Y]"),
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
            text: Scratch.translate("move window to the [PRESETS]"),
            arguments: {
              PRESETS: {
                type: Scratch.ArgumentType.STRING,
                menu: "MOVE",
              },
            },
          },
          {
            opcode: "changeX",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change window x by [X]"),
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
          {
            opcode: "setX",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set window x to [X]"),
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },
            },
          },
          {
            opcode: "changeY",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change window y by [Y]"),
            arguments: {
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
          {
            opcode: "setY",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set window y to [Y]"),
            arguments: {
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },
            },
          },
          {
            opcode: "windowX",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("window x"),
          },
          {
            opcode: "windowY",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("window y"),
          },

          "---",

          {
            opcode: "resizeTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("resize window to width: [W] height: [H]"),
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
            opcode: "resizeToPresets",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("resize window to [PRESETS]"),
            arguments: {
              PRESETS: {
                type: Scratch.ArgumentType.STRING,
                menu: "RESIZE",
              },
            },
          },
          {
            opcode: "changeW",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change window width by [W]"),
            arguments: {
              W: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
          {
            opcode: "setW",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set window width to [W]"),
            arguments: {
              W: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1000",
              },
            },
          },
          {
            opcode: "changeH",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change window height by [H]"),
            arguments: {
              H: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
          {
            opcode: "setH",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set window height to [H]"),
            arguments: {
              H: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1000",
              },
            },
          },
          {
            opcode: "matchStageSize",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("match stage size"),
          },
          {
            opcode: "windowW",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("window width"),
          },
          {
            opcode: "windowH",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("window height"),
          },

          "---",

          {
            opcode: "isTouchingEdge",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is window touching screen edge?"),
          },
          {
            opcode: "screenW",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("screen width"),
          },
          {
            opcode: "screenH",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("screen height"),
          },

          "---",

          {
            opcode: "isFocused",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is window focused?"),
          },

          "---",

          {
            opcode: "changeTitleTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set window title to [TITLE]"),
            arguments: {
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Hello World!"),
              },
            },
          },
          {
            opcode: "windowTitle",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("window title"),
          },

          "---",

          {
            opcode: "enterFullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("enter fullscreen"),
          },
          {
            opcode: "exitFullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("exit fullscreen"),
          },
          {
            opcode: "isFullscreen",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is window fullscreen?"),
          },

          "---",

          {
            opcode: "closeWindow",
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: Scratch.translate("close window"),
          },
        ],
/* ________________________________________________________________________________________ */



        


/* ________________________________________________________________________________________ */
        menus: {
          MOVE: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("center"),
                value: "center",
              },
              {
                text: Scratch.translate("right"),
                value: "right",
              },
              {
                text: Scratch.translate("left"),
                value: "left",
              },
              {
                text: Scratch.translate("top"),
                value: "top",
              },
              {
                text: Scratch.translate("bottom"),
                value: "bottom",
              },
              {
                text: Scratch.translate("top right"),
                value: "top right",
              },
              {
                text: Scratch.translate("top left"),
                value: "top left",
              },
              {
                text: Scratch.translate("bottom right"),
                value: "bottom right",
              },
              {
                text: Scratch.translate("bottom left"),
                value: "bottom left",
              },
              {
                text: Scratch.translate("random position"),
                value: "random position",
              },
            ],
          },
          RESIZE: {
            acceptReporters: true,
            items: [
              "480x360",
              "640x480",
              "1280x720",
              "1920x1080",
              "2560x1440",
              "2048x1080",
              "3840x2160",
              "7680x4320",
            ],
          },
        },
      };
    }
/* ________________________________________________________________________________________ */



      


/* ________________________________________________________________________________________ */
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
    changeX(args) {
      window.moveBy(args.X, 0);
      Scratch.vm.runtime.requestRedraw();
    }
    setX(args) {
      const currentY = window.screenY;
      window.moveTo(args.X, currentY);
      Scratch.vm.runtime.requestRedraw();
    }
    changeY(args) {
      window.moveBy(0, args.Y);
      Scratch.vm.runtime.requestRedraw();
    }
    setY(args) {
      const currentX = window.screenX;
      window.moveTo(currentX, args.Y);
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
    resizeToPresets(args) {
      if (args.PRESETS == "480x360") {
        window.resizeTo(
          480 + (window.outerWidth - window.innerWidth),
          360 + (window.outerHeight - window.innerHeight)
        );
      } else if (args.PRESETS == "640x480") {
        window.resizeTo(
          640 + (window.outerWidth - window.innerWidth),
          480 + (window.outerHeight - window.innerHeight)
        );
      } else if (args.PRESETS == "1280x720") {
        window.resizeTo(
          1280 + (window.outerWidth - window.innerWidth),
          720 + (window.outerHeight - window.innerHeight)
        );
      } else if (args.PRESETS == "1920x1080") {
        window.resizeTo(
          1920 + (window.outerWidth - window.innerWidth),
          1080 + (window.outerHeight - window.innerHeight)
        );
      } else if (args.PRESETS == "2560x1440") {
        window.resizeTo(
          2560 + (window.outerWidth - window.innerWidth),
          1440 + (window.outerHeight - window.innerHeight)
        );
      } else if (args.PRESETS == "2048x1080") {
        window.resizeTo(
          2048 + (window.outerWidth - window.innerWidth),
          1080 + (window.outerHeight - window.innerHeight)
        );
      } else if (args.PRESETS == "3840x2160") {
        window.resizeTo(
          3840 + (window.outerWidth - window.innerWidth),
          2160 + (window.outerHeight - window.innerHeight)
        );
      } else if (args.PRESETS == "7680x4320") {
        window.resizeTo(
          7680 + (window.outerWidth - window.innerWidth),
          4320 + (window.outerHeight - window.innerHeight)
        );
      }
      Scratch.vm.runtime.requestRedraw();
    }
    changeW(args) {
      window.resizeBy(args.W, 0);
      Scratch.vm.runtime.requestRedraw();
    }
    setW(args) {
      const currentH = window.outerHeight;
      window.resizeTo(args.W, currentH);
      Scratch.vm.runtime.requestRedraw();
    }
    changeH(args) {
      window.resizeBy(0, args.H);
      Scratch.vm.runtime.requestRedraw();
    }
    setH(args) {
      const currentW = window.outerWidth;
      window.resizeTo(currentW, args.H);
      Scratch.vm.runtime.requestRedraw();
    }
    matchStageSize() {
      window.resizeTo(
        Scratch.vm.runtime.stageWidth + (window.outerWidth - window.innerWidth),
        Scratch.vm.runtime.stageHeight +
          (window.outerHeight - window.innerHeight)
      );
      Scratch.vm.runtime.requestRedraw();
    }
    windowW() {
      return window.outerWidth;
    }
    windowH() {
      return window.outerHeight;
    }
    isTouchingEdge() {
      const edgeX = screen.width - window.outerWidth;
      const edgeY = screen.height - window.outerHeight;
      return (
        window.screenLeft <= 0 ||
        window.screenTop <= 0 ||
        window.screenLeft >= edgeX ||
        window.screenTop >= edgeY
      );
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
      const editorConfirmation = Scratch.translate({
        id: "editorConfirmation",
        default:
          "Are you sure you want to close this window?\n\n(This message will not appear when the project is packaged)",
      });
      // @ts-expect-error
      if (typeof ScratchBlocks === "undefined" || confirm(editorConfirmation)) {
        window.close();
      }
    }
/* ________________________________________________________________________________________ */


    



/* ________________________________________________________________________________________ */
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);
/* ________________________________________________________________________________________ */

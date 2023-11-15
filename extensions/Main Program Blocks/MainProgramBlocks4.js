// Name: Main Program Blocks
// Id: WAYLIVES
// Description: Here you can find more conditional blocks for your projects.
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)
// V-1.3.2


(function (Scratch) {
  "use strict";

  Scratch.translate.setup({
    // Русский язык
    ru: {
      LabelA: "Элементы управления:",
      resizeTo: "[IMG] задать размер окна по ширине: [W] по высоте: [H]",
      setW: "[IMG] задать ширину окна [W]",
      setH: "[IMG] задать высоту окна [H]",
      moveToPresets: "[IMG] переместить окно [PRESETS]",
          // menu moveToPresets:
          moveToPresetsCenter: "по центру",
          moveToPresetsRight: "вправо",
          moveToPresetsLeft: "влево",
          moveToPresetsTop: "вверх",
          moveToPresetsBottom: "вниз",
          moveToPresetsTopRight: "в верхний правый угол",
          moveToPresetsTopLeft: "в верхний левый угол",
          moveToPresetsBottomRight: "в нижний правый угол",
          moveToPresetsBottomLeft: "в нижний левый угол",
      moveTo: "[IMG] переместить окно в x: [X] y: [Y]",
      changeTitleTo: "[IMG] задать заголовок окна [TITLE]",
      enterFullscreen: "[IMG] войти в полноэкранный режим",
      exitFullscreen: "[IMG] выйти из полноэкранного режима",
      closeWindow: "[IMG] закрыть окно",
      Window: "окно [FORMAT]",
          // menu Window:
          WindowMenuWidth: "ширина",
          WindowMenuHeight: "высота",
          WindowMenuTitle: "заголовок",
      Screen: "экран [FORMATS]",
          // menu Screen:
          ScreenMenuWidth: "ширина",
          ScreenMenuHeight: "высота",
      isQuestion: "[QUESTION] окно?",
          // menu isQuestion:
          isQuestionMenuFocused: "фокусированное",
          isQuestionMenuFullscreen: "в полноэкранном режиме",
    },
  });  

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Error");
  }

  
  // иконка меню:
  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMjIiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzMCIgeT0iNDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyOCIgcng9IjMiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMzYiIHk9IjUwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI1OCIgeT0iNTAiIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNjUiIGN5PSIzMiIgcj0iNSIgZmlsbD0iI0JGNkU4QiIvPgo8L3N2Zz4K";

  
  // иконки блоков:
  
      // Элементы управления:
      const resizeTo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTAiIHk9IjciIHdpZHRoPSI2IiBoZWlnaHQ9IjQ3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjBMMTMgN0wyMyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNTciIHk9IjQ4IiB3aWR0aD0iNiIgaGVpZ2h0PSI0NyIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDU3IDQ4KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ0IDQxTDU3IDUxTDQ0IDYxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
      const setW = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCAzNCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTAiIHk9IjciIHdpZHRoPSI2IiBoZWlnaHQ9IjU3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjBMMTMgN0wyMyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
      const setH = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2NV8zMikiPgo8cmVjdCB4PSI1NyIgeT0iMzEiIHdpZHRoPSI2IiBoZWlnaHQ9IjU3IiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTcgMzEpIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDQgMjRMNTcgMzRMNDQgNDQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY1XzMyIj4KPHJlY3Qgd2lkdGg9IjY4IiBoZWlnaHQ9IjY4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const moveToPresets = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2Nl81MykiPgo8cmVjdCB4PSIyNyIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iNjAiIHJ4PSIzIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI2MCIgeT0iMzUiIHdpZHRoPSI2IiBoZWlnaHQ9IjYwIiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNjAgMzUpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiByeD0iNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY2XzUzIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const moveTo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2Nl81MykiPgo8cmVjdCB4PSIyNyIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iNjAiIHJ4PSIzIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI2MCIgeT0iMzUiIHdpZHRoPSI2IiBoZWlnaHQ9IjYwIiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNjAgMzUpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiByeD0iNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY2XzUzIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const changeTitleTo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTAiIHk9IjciIHdpZHRoPSI2IiBoZWlnaHQ9IjQ3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjBMMTMgN0wyMyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNTciIHk9IjQ4IiB3aWR0aD0iNiIgaGVpZ2h0PSI0NyIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDU3IDQ4KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ0IDQxTDU3IDUxTDQ0IDYxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
      const enterFullscreen = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTAiIHk9IjciIHdpZHRoPSI2IiBoZWlnaHQ9IjQ3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjBMMTMgN0wyMyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNTciIHk9IjQ4IiB3aWR0aD0iNiIgaGVpZ2h0PSI0NyIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDU3IDQ4KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ0IDQxTDU3IDUxTDQ0IDYxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
      const exitFullscreen = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTAiIHk9IjciIHdpZHRoPSI2IiBoZWlnaHQ9IjQ3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjBMMTMgN0wyMyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNTciIHk9IjQ4IiB3aWR0aD0iNiIgaGVpZ2h0PSI0NyIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDU3IDQ4KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ0IDQxTDU3IDUxTDQ0IDYxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
      const closeWindow = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTAiIHk9IjciIHdpZHRoPSI2IiBoZWlnaHQ9IjQ3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjBMMTMgN0wyMyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNTciIHk9IjQ4IiB3aWR0aD0iNiIgaGVpZ2h0PSI0NyIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDU3IDQ4KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ0IDQxTDU3IDUxTDQ0IDYxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
  
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
        color2: "#A0536F",
        color3: "#A0536F",
        menuIconURI: menuIconURI,
        
        blocks: [          
          {
            blockType: "label",
            text: Scratch.translate({ id: "LabelA", default: "Controls:" }),
          },
          {
            opcode: "resizeTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "resizeTo", default: "[IMG] resize window to width: [W] height: [H]" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: resizeTo,
              },
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
            text: Scratch.translate({ id: "setW", default: "[IMG] set window width to [W]" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: setW,
              },
              W: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
            },
          },
          {
            opcode: "setH",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "setH", default: "[IMG] set window height to [H]" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: setH,
              },
              H: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },          
          {
            opcode: "moveToPresets",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "moveToPresets", default: "[IMG] move window to the [PRESETS]" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: moveToPresets,
              },
              PRESETS: {
                type: Scratch.ArgumentType.STRING,
                menu: "MOVE",
              },
            },
          },
          {
            opcode: "moveTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "moveTo", default: "[IMG] move window to x: [X] y: [Y]" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: moveTo,
              },
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
            opcode: "changeTitleTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "changeTitleTo", default: "[IMG] set window title to [TITLE]" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: changeTitleTo,
              },
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "title",
              },
            },
          },
          {
            opcode: "enterFullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "enterFullscreen", default: "[IMG] enter fullscreen" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: enterFullscreen,
              },
            },
          },
          {
            opcode: "exitFullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "exitFullscreen", default: "[IMG] exit fullscreen" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: exitFullscreen,
              },
            },
          },          
          {
            opcode: "closeWindow",
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: Scratch.translate({ id: "closeWindow", default: "[IMG] close window" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: closeWindow,
              },
            },
          },          
          {
            opcode: 'Window',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "Window", default: "window [FORMAT]" }),
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
            text: Scratch.translate({ id: "Screen", default: "screen [FORMATS]" }),
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
            text: Scratch.translate({ id: "isQuestion", default: "is window [QUESTION]?" }),
            arguments: {
              QUESTION: {
                type: Scratch.ArgumentType.STRING,
                menu: "QUESTION_MENU"
              },
            },
          },          
        ],
        menus: {
          MOVE: {
            acceptReporters: true,
            items: [
              Scratch.translate({ id: "moveToPresetsCenter", default: "center" }),
              Scratch.translate({ id: "moveToPresetsRight", default: "right" }),
              Scratch.translate({ id: "moveToPresetsLeft", default: "left" }),
              Scratch.translate({ id: "moveToPresetsTop", default: "top" }),
              Scratch.translate({ id: "moveToPresetsBottom", default: "bottom" }),
              Scratch.translate({ id: "moveToPresetsTopRight", default: "top right" }),
              Scratch.translate({ id: "moveToPresetsTopLeft", default: "top left" }),
              Scratch.translate({ id: "moveToPresetsBottomRight", default: "bottom right" }),
              Scratch.translate({ id: "moveToPresetsBottomLeft", default: "bottom left" }),
            ],
          },
          FORMAT_MENU: {
            acceptReporters: true,
            items: [
              Scratch.translate({ id: "WindowMenuWidth", default: "width" }),
              Scratch.translate({ id: "WindowMenuHeight", default: "height" }), 
              Scratch.translate({ id: "WindowMenuTitle", default: "title" }), 
              'x', 
              'y'
            ],
          },
          FORMATS_MENU: {
            acceptReporters: true,
            items: [
              Scratch.translate({ id: "ScreenMenuWidth", default: "width" }),
              Scratch.translate({ id: "ScreenMenuHeight", default: "height" }), 
            ]
          },
          QUESTION_MENU: {
            acceptReporters: true,
            items: [
              Scratch.translate({ id: "isQuestionMenuFocused", default: "focused" }),
              Scratch.translate({ id: "isQuestionMenuFullscreen", default: "fullscreen" }),
            ]
          },
        },
      };
    }
    moveTo(args) {
      window.moveTo(args.X, args.Y);
      Scratch.vm.runtime.requestRedraw();
    }
    moveToPresets(args) {
      if (args.PRESETS == Scratch.translate({ id: "moveToPresetsCenter", default: "center" })) {
        const left = (screen.width - window.outerWidth) / 2;
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(left, top);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsRight", default: "right" })) {
        const right = screen.width - window.outerWidth;
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(right, top);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsLeft", default: "left" })) {
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(0, top);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsTop", default: "top" })) {
        const left = (screen.width - window.outerWidth) / 2;
        window.moveTo(left, 0);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsBottom", default: "bottom" })) {
        const left = (screen.width - window.outerWidth) / 2;
        const bottom = screen.height - window.outerHeight;
        window.moveTo(left, bottom);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsTopRight", default: "top right" })) {
        const right = screen.width - window.outerWidth;
        window.moveTo(right, 0);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsTopLeft", default: "top left" })) {
        window.moveTo(0, 0);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsBottomRight", default: "bottom right" })) {
        const right = screen.width - window.outerWidth;
        const bottom = screen.height - window.outerHeight;
        window.moveTo(right, bottom);
      } else if (args.PRESETS == Scratch.translate({ id: "moveToPresetsBottomLeft", default: "bottom left" })) {
        const bottom = screen.height - window.outerHeight;
        window.moveTo(0, bottom);
      }
      Scratch.vm.runtime.requestRedraw();
    }
    Window(args) {
      if (args.FORMAT == Scratch.translate({ id: "WindowMenuWidth", default: "width" })) {
        return window.outerWidth;
      } else if (args.FORMAT == Scratch.translate({ id: "WindowMenuHeight", default: "height" })) {
        return window.outerHeight;
      } else if (args.FORMAT == Scratch.translate({ id: "WindowMenuTitle", default: "title" })) {
        return document.title;
      } else if (args.FORMAT == "x") {
        return window.screenLeft; 
      } else if (args.FORMAT == "y") {
        return window.screenTop; 
      }
    }    
    Screen(args) {
      if (args.FORMATS == Scratch.translate({ id: "ScreenMenuWidth", default: "width" })) {
        return screen.width;
      } else if (args.FORMATS == Scratch.translate({ id: "ScreenMenuHeight", default: "height" })) {
        return screen.height;
      }
    }
    isQuestion(args) {
      if (args.QUESTION == Scratch.translate({ id: "isQuestionMenuFocused", default: "focused" })) {
        return document.hasFocus();
      } else if (args.QUESTION == Scratch.translate({ id: "isQuestionMenuFullscreen", default: "fullscreen" })) {
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

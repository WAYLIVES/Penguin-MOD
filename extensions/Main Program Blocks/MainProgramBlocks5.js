// Name: Main Program Blocks
// Id: WAYLIVES
// Description: Here you can find more conditional blocks for your projects.
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)
// V-1.4.5


(function (Scratch) {
  "use strict";

  
// ____________________________________________________________________________________________ 
  
  Scratch.translate.setup({
    // Русский язык
    ru: {      
      // ЭЛЕМЕНТЫ УПРАВЛЕНИЯ:
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
          setFramerate: "[IMG] задать частоту кадров: [FPS]",
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
          getDimension: "сцена [DIM]",
              // menu isQuestion:
              getDimensionMenuWidth: "ширина",
              getDimensionMenuHeight: "высота",
          isQuestion: "[QUESTION] окно?",
              // menu isQuestion:
              isQuestionMenuFocused: "фокусированное",
              isQuestionMenuFullscreen: "в полноэкранном режиме",

      // ВСЁ ДЛЯ АДАПТАЦИИ:
          LabelB: "Всё для адаптации:",
          setStretch: "[IMG] задать растяжку по x: [X] y: [Y]",
    },
  });  

  
// ____________________________________________________________________________________________ 
  
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Error");
  }
  

// ____________________________________________________________________________________________ 
  
  // иконка меню:
  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMjIiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzMCIgeT0iNDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyOCIgcng9IjMiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMzYiIHk9IjUwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI1OCIgeT0iNTAiIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNjUiIGN5PSIzMiIgcj0iNSIgZmlsbD0iI0JGNkU4QiIvPgo8L3N2Zz4K";
  
  // иконки блоков:
  
      // Элементы управления:
      const resizeTo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2N182MikiPgo8cmVjdCB4PSIxMCIgeT0iMTEiIHdpZHRoPSI2IiBoZWlnaHQ9IjQ3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjRMMTMgMTFMMjMgMjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxyZWN0IHg9IjU3IiB5PSI1MiIgd2lkdGg9IjYiIGhlaWdodD0iNDciIHJ4PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1NyA1MikiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NCA0NUw1NyA1NUw0NCA2NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjdfNjIiPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDgpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
      const setW = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2OF84NikiPgo8cmVjdCB4PSI1NyIgeT0iMzUiIHdpZHRoPSI2IiBoZWlnaHQ9IjU3IiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTcgMzUpIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDQgMjhMNTcgMzhMNDQgNDgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY4Xzg2Ij4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const setH = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCAzNCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2OF83NikiPgo8cmVjdCB4PSIxMCIgeT0iMTEiIHdpZHRoPSI2IiBoZWlnaHQ9IjU3IiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMgMjRMMTMgMTFMMjMgMjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY4Xzc2Ij4KPHJlY3Qgd2lkdGg9IjI2IiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const moveToPresets = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2Nl81MykiPgo8cmVjdCB4PSIyNyIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iNjAiIHJ4PSIzIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI2MCIgeT0iMzUiIHdpZHRoPSI2IiBoZWlnaHQ9IjYwIiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNjAgMzUpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiByeD0iNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY2XzUzIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const moveTo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2Nl81MykiPgo8cmVjdCB4PSIyNyIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iNjAiIHJ4PSIzIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI2MCIgeT0iMzUiIHdpZHRoPSI2IiBoZWlnaHQ9IjYwIiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNjAgMzUpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiByeD0iNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY2XzUzIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const changeTitleTo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2OF85NikiPgo8cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiByeD0iNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjAgMThDNjAgMTIuNDc3MiA1NS41MjI4IDggNTAgOEgxMEM0LjQ3NzE1IDggMCAxMi40NzcyIDAgMThWMzBMNjAgMzBWMThaTTEwIDE1QzcuNzkwODYgMTUgNiAxNi43OTA5IDYgMTlDNiAyMS4yMDkxIDcuNzkwODYgMjMgMTAgMjNIMzJDMzQuMjA5MSAyMyAzNiAyMS4yMDkxIDM2IDE5QzM2IDE2Ljc5MDkgMzQuMjA5MSAxNSAzMiAxNUgxMFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY4Xzk2Ij4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const setFramerate = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSI1MiIgcj0iNiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMzIuNDM1MyIgeT0iMzEiIHdpZHRoPSI2IiBoZWlnaHQ9IjIxIiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTUgMzIuNDM1MyAzMSkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS45OTQ0OCA1NS4yNjI5QzcuNDcwNDcgNTEuNDYzMyA2IDQ2LjkwMzQgNiA0MkM2IDM5Ljg2OTcgNi4yNzc1NiAzNy44MDQyIDYuNzk4NDggMzUuODM3N0wxMy4xMDI3IDM3LjUyNjlDMTQuNzAzMSAzNy45NTU4IDE2LjM0ODEgMzcuMDA2IDE2Ljc3NjkgMzUuNDA1NkMxNy4yMDU4IDMzLjgwNTIgMTYuMjU2IDMyLjE2MDIgMTQuNjU1NiAzMS43MzE0TDkuMDc1ODcgMzAuMjM2M0MxMi43MjU0IDIzLjc1ODggMTkuMjk1NyAxOS4xNDY0IDI3IDE4LjE4NTdWMjQuMTkyNEMyNyAyNS44NDkyIDI4LjM0MzEgMjcuMTkyNCAzMCAyNy4xOTI0QzMxLjY1NjkgMjcuMTkyNCAzMyAyNS44NDkyIDMzIDI0LjE5MjRWMTguMTg1N0M0MC42OTMyIDE5LjE0NSA0Ny4yNTU2IDIzLjc0NTUgNTAuOTA4MyAzMC4yMDgyTDQ1LjIyMzUgMzEuNzMxNEM0My42MjMxIDMyLjE2MDIgNDIuNjczNCAzMy44MDUyIDQzLjEwMjIgMzUuNDA1NkM0My41MzEgMzcuMDA2IDQ1LjE3NiAzNy45NTU4IDQ2Ljc3NjQgMzcuNTI2OUw1My4xOTM1IDM1LjgwNzVDNTMuNzE5NiAzNy43ODMgNTQgMzkuODU4OCA1NCA0MkM1NCA0Ni45MDM0IDUyLjUyOTUgNTEuNDYzMyA1MC4wMDU1IDU1LjI2MjlMNDYuMTIxMyA1MS4zNzg3QzQ0Ljk0OTcgNTAuMjA3MSA0My4wNTAzIDUwLjIwNzEgNDEuODc4NyA1MS4zNzg3QzQwLjcwNzEgNTIuNTUwMyA0MC43MDcxIDU0LjQ0OTcgNDEuODc4NyA1NS42MjEzTDQ3LjM5NjkgNjEuMTM5Nkw1MC4yMTkgNjQuMTYzMkM1Ni4yMjkyIDU4LjY3NyA2MCA1MC43Nzg5IDYwIDQyQzYwIDI1LjQzMTUgNDYuNTY4NSAxMiAzMCAxMkMxMy40MzE1IDEyIDAgMjUuNDMxNSAwIDQyQzAgNTAuNzc4OSAzLjc3MDc5IDU4LjY3NyA5Ljc4MTA1IDY0LjE2MzJMMTIuNjAzIDYxLjEzOTZMMTguMTIxMyA1NS42MjEzQzE5LjI5MjkgNTQuNDQ5NyAxOS4yOTI5IDUyLjU1MDMgMTguMTIxMyA1MS4zNzg3QzE2Ljk0OTcgNTAuMjA3MSAxNS4wNTAzIDUwLjIwNzEgMTMuODc4NyA1MS4zNzg3TDkuOTk0NDggNTUuMjYyOVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
      const enterFullscreen = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2OF8xMTApIj4KPHJlY3QgeD0iMjciIHk9IjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjYwIiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIwIDIwTDMwIDExTDQwIDIwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDAgNTZMMzAgNjVMMjAgNTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxyZWN0IHk9IjQxIiB3aWR0aD0iNiIgaGVpZ2h0PSI2MCIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDQxKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDQ4TDMgMzhMMTIgMjgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00OCAyOEw1NyAzOEw0OCA0OCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjhfMTEwIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
      const exitFullscreen = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2OV83KSI+CjxyZWN0IHg9IjI3IiB5PSIxNiIgd2lkdGg9IjYiIGhlaWdodD0iNDQiIHJ4PSIzIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgMTFMMzAgMjBMMjAgMTEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMCA2NUwzMCA1Nkw0MCA2NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iOCIgeT0iNDEiIHdpZHRoPSI2IiBoZWlnaHQ9IjQ0IiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDggNDEpIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMyAyOEwxMiAzOEwzIDQ4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNTcgNDhMNDggMzhMNTcgMjgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY5XzciPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDgpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
      const closeWindow = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2OV8zMikiPgo8cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiByeD0iNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjAgMThDNjAgMTIuNDc3MiA1NS41MjI4IDggNTAgOEgxMEM0LjQ3NzE1IDggMCAxMi40NzcyIDAgMThWNDhMNjAgNDhWMThaTTMyLjEyMTMgMTUuODc4N0MzMC45NDk3IDE0LjcwNzEgMjkuMDUwMyAxNC43MDcxIDI3Ljg3ODcgMTUuODc4N0MyNi43MDcxIDE3LjA1MDMgMjYuNzA3MSAxOC45NDk3IDI3Ljg3ODcgMjAuMTIxM0wzNS43NTc0IDI4TDI3Ljg3ODcgMzUuODc4N0MyNi43MDcxIDM3LjA1MDMgMjYuNzA3MSAzOC45NDk3IDI3Ljg3ODcgNDAuMTIxM0MyOS4wNTAzIDQxLjI5MjkgMzAuOTQ5NyA0MS4yOTI5IDMyLjEyMTMgNDAuMTIxM0w0MCAzMi4yNDI2TDQ3Ljg3ODcgNDAuMTIxM0M0OS4wNTAzIDQxLjI5MjkgNTAuOTQ5NyA0MS4yOTI5IDUyLjEyMTMgNDAuMTIxM0M1My4yOTI5IDM4Ljk0OTcgNTMuMjkyOSAzNy4wNTAzIDUyLjEyMTMgMzUuODc4N0w0NC4yNDI2IDI4TDUyLjEyMTMgMjAuMTIxM0M1My4yOTI5IDE4Ljk0OTcgNTMuMjkyOSAxNy4wNTAzIDUyLjEyMTMgMTUuODc4N0M1MC45NDk3IDE0LjcwNzEgNDkuMDUwMyAxNC43MDcxIDQ3Ljg3ODcgMTUuODc4N0w0MCAyMy43NTc0TDMyLjEyMTMgMTUuODc4N1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY5XzMyIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

      // Всё для адаптации:
      const setStretch = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE3OV8zMykiPgo8bWFzayBpZD0icGF0aC0xLWluc2lkZS0xXzE3OV8zMyIgZmlsbD0id2hpdGUiPgo8cmVjdCB4PSIxOSIgeT0iMjciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgcng9IjIiLz4KPC9tYXNrPgo8cmVjdCB4PSIxOSIgeT0iMjciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgcng9IjIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMTIiIG1hc2s9InVybCgjcGF0aC0xLWluc2lkZS0xXzE3OV8zMykiLz4KPHJlY3QgeD0iMjciIHk9IjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyIDE3TDMwIDExTDM4IDE3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSIzMyIgeT0iNjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjIzIiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAzMyA2OCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zOCA1OUwzMCA2NUwyMiA1OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNjAiIHk9IjM1IiB3aWR0aD0iNiIgaGVpZ2h0PSIyMyIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDYwIDM1KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUxIDMwTDU3IDM4TDUxIDQ2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB5PSI0MSIgd2lkdGg9IjYiIGhlaWdodD0iMjMiIHJ4PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCA0MSkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05IDQ2TDMgMzhMOSAzMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNzlfMzMiPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDgpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

  
  // ____________________________________________________________________________________________ 
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const TURBO_MODE = "turbo mode";
  const INTERPOLATION = "interpolation";
  const REMOVE_FENCING = "remove fencing";
  const REMOVE_MISC_LIMITS = "remove misc limits";
  const HIGH_QUALITY_PEN = "high quality pen";

  const STRETCH_X = Symbol("stretch.x");
  const STRETCH_Y = Symbol("stretch.y");

  const vm = Scratch.vm;

  /**
   * @param {VM.RenderedTarget} target
   * @param {VM.RenderedTarget} [originalTarget] If target is a clone, the original to copy from.
   */
  const implementStretchForTarget = (target, originalTarget) => {
    if (STRETCH_X in target) {
      // Target already has stretch. Don't implement again.
      return;
    }

    target[STRETCH_X] = originalTarget ? originalTarget[STRETCH_X] : 100;
    target[STRETCH_Y] = originalTarget ? originalTarget[STRETCH_Y] : 100;

    const original = target._getRenderedDirectionAndScale;
    target._getRenderedDirectionAndScale = function () {
      const result = original.call(this);

      result.scale[0] *= this[STRETCH_X] / 100;
      result.scale[1] *= this[STRETCH_Y] / 100;

      return result;
    };
  };
  vm.runtime.targets.forEach((target) => implementStretchForTarget(target));
  vm.runtime.on("targetWasCreated", (target, originalTarget) =>
    implementStretchForTarget(target, originalTarget)
  );
  vm.runtime.on("PROJECT_LOADED", () => {
    vm.runtime.targets.forEach((target) => implementStretchForTarget(target));
  });

  /**
   * @param {VM.RenderedTarget} target
   */
  const forceUpdateDirectionAndScale = (target) => {
    target.setDirection(target.direction);
  };

  const requireNonPackagedRuntime = (blockName) => {
    if (Scratch.vm.runtime.isPackaged) {
      alert(
        `To use the Looks+ ${blockName} block, the creator of the packaged project must uncheck "Remove raw asset data after loading to save RAM" under advanced settings in the packager.`
      );
      return false;
    }
    return true;
  };

  /**
   * @param {VM.BlockUtility} util
   * @param {unknown} targetName
   */
  const getSpriteTargetByName = (util, targetName) => {
    const nameString = Scratch.Cast.toString(targetName);
    const target = util.target;
    if (target.getName() === nameString) {
      return target;
    }
    return util.runtime.getSpriteTargetByName(nameString);
  };




  // ____________________________________________________________________________________________ 
  
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
        // ЭЛЕМЕНТЫ УПРАВЛЕНИЯ:
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
            opcode: "setFramerate",
            text: Scratch.translate({ id: "setFramerate", default: "[IMG] set framerate limit to [FPS]" }),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: setFramerate,
              },
              FPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "60",
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
            opcode: "getDimension",
            text: Scratch.translate({ id: "getDimension", default: "stage [DIM]" }),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              DIM: {
                type: Scratch.ArgumentType.STRING,
                menu: "DIM",
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
          "---",
          

          // ВСЁ ДЛЯ АДАПТАЦИИ:
          {
            blockType: "label",
            text: Scratch.translate({ id: "LabelB", default: "Everything for adaptation:" }),
          },
          {
            opcode: "setStretch",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "setStretch", default: "[IMG] set stretch to x: [X] y: [Y]" }),
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: setStretch,
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },
          {
            opcode: "setStretchX",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set stretch x to [X]"),
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },
          {
            opcode: "setStretchY",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set stretch y to [Y]"),
            arguments: {
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },
          {
            opcode: "getX",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("x stretch"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
          },
          {
            opcode: "getY",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("y stretch"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
          },



          
          {
            opcode: "showSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: "show [TARGET]",
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
          },
          {
            opcode: "hideSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: "hide [TARGET]",
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
          },
          {
            opcode: "spriteVisible",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[TARGET] visible?",
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
          },

          "---",

          {
            opcode: "setLayerTo",
            blockType: Scratch.BlockType.COMMAND,
            text: "set layer # of [TARGET] to [LAYER]",
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
              LAYER: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
            },
          },
          {
            opcode: "spriteLayerNumber",
            blockType: Scratch.BlockType.REPORTER,
            text: "layer # of [TARGET]",
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
          },
          {
            opcode: "effectValue",
            blockType: Scratch.BlockType.REPORTER,
            text: "[EFFECT] effect of [TARGET]",
            arguments: {
              EFFECT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "color",
                menu: "effectMenu",
              },
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
          },

          "---",

          {
            opcode: "targetCostumeNumber",
            blockType: Scratch.BlockType.REPORTER,
            text: "# of costumes in [TARGET]",
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
          },
          {
            opcode: "costumeAttribute",
            blockType: Scratch.BlockType.REPORTER,
            text: "[ATTRIBUTE] of [COSTUME]",
            arguments: {
              ATTRIBUTE: {
                type: Scratch.ArgumentType.STRING,
                menu: "costumeAttribute",
              },
              COSTUME: {
                type: Scratch.ArgumentType.COSTUME,
              },
            },
          },

          "---",

          {
            opcode: "snapshotStage",
            blockType: Scratch.BlockType.REPORTER,
            text: "snapshot stage",
            disableMonitor: true,
          },

          "---",

          {
            opcode: "replaceCostumeContent",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [TYPE] for [COSTUME] to [CONTENT]",
            arguments: {
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: "SVGPNG",
                defaultValue: "SVG",
              },
              COSTUME: {
                type: Scratch.ArgumentType.COSTUME,
              },
              CONTENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<svg />",
              },
            },
          },
          {
            opcode: "restoreCostumeContent",
            blockType: Scratch.BlockType.COMMAND,
            text: "restore content for [COSTUME]",
            arguments: {
              COSTUME: {
                type: Scratch.ArgumentType.COSTUME,
              },
            },
          },
          {
            opcode: "costumeContent",
            blockType: Scratch.BlockType.REPORTER,
            text: "[CONTENT] of costume # [COSTUME] of [TARGET]",
            arguments: {
              CONTENT: {
                type: Scratch.ArgumentType.STRING,
                menu: "contentType",
                defaultValue: "content",
              },
              COSTUME: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
          },

          "---",

          {
            opcode: "replaceColors",
            blockType: Scratch.BlockType.REPORTER,
            text: "replace [COLOR1] with [COLOR2] in [SVG]",
            arguments: {
              COLOR1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#FCB1E3",
              },
              COLOR2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#8ECAFF",
              },
              SVG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<svg />",
              },
            },
          },
          {
            opcode: "colorHex",
            blockType: Scratch.BlockType.REPORTER,
            text: "hex of [COLOR]",
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#FFD983",
              },
            },
          },
          
        ],
        
        
// ____________________________________________________________________________________________ 
        
        menus: {
        // ЭЛЕМЕНТЫ УПРАВЛЕНИЯ:
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
            ],
          },
          DIM: {
            acceptReporters: true,
            items: [
              Scratch.translate({ id: "getDimensionMenuWidth", default: "width" }),
              Scratch.translate({ id: "getDimensionMenuHeight", default: "height" }),
            ],
          },
          QUESTION_MENU: {
            acceptReporters: true,
            items: [
              Scratch.translate({ id: "isQuestionMenuFocused", default: "focused" }),
              Scratch.translate({ id: "isQuestionMenuFullscreen", default: "fullscreen" }),
            ],
          },

          
        // ВСЁ ДЛЯ АДАПТАЦИИ:
          costumeAttribute: {
            acceptReporters: false,
            items: [
              "width", "height", "format", "rotation center x", "rotation center y",
            ],
          },
          contentType: {
            acceptReporters: false,
            items: [
              {
                text: "content",
                value: "content",
              },
              {
                text: "dataURI",
                value: "dataURI",
              },
            ],
          },
          SVGPNG: {
            acceptReporters: false,
            items: [
              {
                text: "SVG",
                value: "SVG",
              },
            ],
          },
          spriteMenu: {
            acceptReporters: true,
            items: "getSprites",
          },
        },
      };
    }
    
    
// ____________________________________________________________________________________________ 
    
  // ЭЛЕМЕНТЫ УПРАВЛЕНИЯ:
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
    getDimension(args) {
      if (args.DIM == Scratch.translate({ id: "getDimensionMenuWidth", default: "width" })) {
        return Scratch.vm.runtime.stageWidth;
      } else if (args.DIM == Scratch.translate({ id: "getDimensionMenuHeight", default: "height" })) {
        return Scratch.vm.runtime.stageHeight;
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
    setFramerate({ FPS }) {
      FPS = Scratch.Cast.toNumber(FPS);
      Scratch.vm.setFramerate(FPS);
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


  // ВСЁ ДЛЯ АДАПТАЦИИ:
    setStretch(args, util) {
      util.target[STRETCH_X] = Scratch.Cast.toNumber(args.X);
      util.target[STRETCH_Y] = Scratch.Cast.toNumber(args.Y);
      forceUpdateDirectionAndScale(util.target);
    }
    setStretchX(args, util) {
      util.target[STRETCH_X] = Scratch.Cast.toNumber(args.X);
      forceUpdateDirectionAndScale(util.target);
    }
    setStretchY(args, util) {
      util.target[STRETCH_Y] = Scratch.Cast.toNumber(args.Y);
      forceUpdateDirectionAndScale(util.target);
    }
    getX(args, util) {
      return util.target[STRETCH_X];
    }
    getY(args, util) {
      return util.target[STRETCH_Y];
    }
    




    showSprite(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (target) {
        target.setVisible(true);
      }
    }

    hideSprite(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (target) {
        target.setVisible(false);
      }
    }

    spriteVisible(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (!target) {
        return false;
      }
      return Scratch.Cast.toBoolean(target.visible);
    }

    setLayerTo(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (!target) {
        return;
      }
      const drawableID = target.drawableID;
      const layerOrder = target.getLayerOrder();
      const newLayer = args.LAYER - layerOrder;
      target.renderer.setDrawableOrder(drawableID, newLayer, "sprite", true);
    }

    spriteLayerNumber(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (!target) {
        return 0;
      }
      return target.getLayerOrder();
    }

    effectValue(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (!target) {
        return 0;
      }
      const effects = target.effects;
      const name = Scratch.Cast.toString(args.EFFECT);
      if (Object.prototype.hasOwnProperty.call(effects, name)) {
        return effects[name];
      }
      // should never happen
      return 0;
    }

    costumeAttribute(args, util) {
      const costumeIndex = this.getCostumeInput(args.COSTUME, util.target);
      const costume = util.target.sprite.costumes[costumeIndex];
      if (!costume) {
        console.error("Costume doesn't exist");
        return 0;
      }

      const attribute = args.ATTRIBUTE;
      if (attribute === "width") {
        return Math.ceil(Scratch.Cast.toNumber(costume.size[0]));
      } else if (attribute === "height") {
        return Math.ceil(Scratch.Cast.toNumber(costume.size[1]));
      } else if (attribute === "format") {
        if (!requireNonPackagedRuntime("costume format")) {
          return "unknown";
        }
        return costume.asset.assetType.runtimeFormat;
      } else if (attribute === "rotationCenterX") {
        return costume.rotationCenterX;
      } else if (attribute === "rotationCenterY") {
        return costume.rotationCenterY;
      } else {
        return "";
      }
    }

    targetCostumeNumber(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (!target) {
        return 0;
      }
      return Scratch.Cast.toNumber(target.sprite.costumes.length);
    }

    snapshotStage(args, util) {
      return new Promise((resolve) => {
        Scratch.vm.runtime.renderer.requestSnapshot((uri) => {
          resolve(uri);
        });
      });
    }

    replaceCostumeContent(args, util) {
      const costumeIndex = this.getCostumeInput(args.COSTUME, util.target);
      const costume = util.target.sprite.costumes[costumeIndex];
      if (!costume) {
        console.error("Costume doesn't exist");
        return;
      }

      //This is here to ensure no changes are made to bitmap costumes, as changes are irreversible
      //Check will be removed when it's possible to edit bitmap skins
      const format = costume.asset.assetType.runtimeFormat;
      if (format !== "svg") {
        console.error("Costume is not vector");
        return;
      }

      const contentType = args.TYPE;
      const content = args.CONTENT;
      if (contentType === "SVG") {
        Scratch.vm.runtime.renderer.updateSVGSkin(
          costume.skinId,
          Scratch.Cast.toString(content)
        );
      } else {
        console.error("Options other than SVG are currently unavailable");
        return;
      }
      Scratch.vm.emitTargetsUpdate();
    }

    restoreCostumeContent(args, util) {
      const costumeIndex = this.getCostumeInput(args.COSTUME, util.target);
      const costume = util.target.sprite.costumes[costumeIndex];
      if (!costume) {
        console.error("Costume doesn't exist");
        return;
      }

      if (!requireNonPackagedRuntime("restore costume content")) {
        return;
      }

      //This is here to ensure no changes are made to bitmap costumes, as changes are irreversible
      //Check will be removed when it's possible to edit bitmap skins
      const format = costume.asset.assetType.runtimeFormat;
      if (format !== "svg") {
        console.error("Costume is not vector");
        return;
      }

      const content = costume.asset.decodeText();
      const rotationCenterX = costume.rotationCenterX;
      const rotationCenterY = costume.rotationCenterY;
      util.target.renderer.updateSVGSkin(costume.skinId, content, [
        rotationCenterX,
        rotationCenterY,
      ]);
    }

    costumeContent(args, util) {
      const target = getSpriteTargetByName(util, args.TARGET);
      if (!target) {
        console.error("Target does not exist");
        return "";
      }

      if (!requireNonPackagedRuntime("costume content")) {
        return "";
      }

      const costume = target.sprite.costumes[args.COSTUME - 1];
      if (!costume) {
        console.error("Target costume does not exist");
        return "";
      }

      const format = args.CONTENT;
      if (format === "content") {
        return costume.asset.decodeText();
      } else {
        return costume.asset.encodeDataURI();
      }
    }

    replaceColors(args, util) {
      const svg = Scratch.Cast.toString(args.SVG);
      const color1 = args.COLOR1;
      const color2 = args.COLOR2;
      try {
        return svg.replace(new RegExp(color1, "gi"), color2);
      } catch (e) {
        // regex was invalid, don't replace anything
        return svg;
      }
    }

    colorHex(args, util) {
      return args.COLOR;
    }

    getCostumeInput(costume, target) {
      if (typeof costume === "number") {
        costume = Math.round(costume - 1);
        if (costume === Infinity || costume === -Infinity || !costume) {
          costume = 0;
        }
        costume = this.wrapClamp(costume, 0, target.sprite.costumes.length - 1);
        return costume;
      } else {
        return target.getCostumeIndexByName(Scratch.Cast.toString(costume));
      }
    }

    wrapClamp(n, min, max) {
      const range = max - min + 1;
      return n - Math.floor((n - min) / range) * range;
    }

    getSprites() {
      const spriteNames = [];
      const targets = Scratch.vm.runtime.targets;
      const myself = Scratch.vm.runtime.getEditingTarget().getName();
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) {
          const targetName = target.getName();
          if (targetName === myself) {
            spriteNames.unshift({
              text: "this sprite",
              value: targetName,
            });
          } else {
            spriteNames.push({
              text: targetName,
              value: targetName,
            });
          }
        }
      }
      if (spriteNames.length > 0) {
        return spriteNames;
      } else {
        return [{ text: "", value: 0 }]; //this should never happen but it's a failsafe
      }
    }
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);

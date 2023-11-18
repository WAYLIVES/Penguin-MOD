// ________________________________________________________________________________________

// Name: Window Settings
// Id: WAYLIVES
// Description: Here you can find more conditional blocks for your projects.
// Created by: WAYLIVES (https://scratch.mit.edu/users/WAYLIVES/)
// V-1.0.1

// ________________________________________________________________________________________






/* ________________________________________________________________________________________ */
(function (Scratch) {
  "use strict";
/* ________________________________________________________________________________________ */



  
  

/* ________________________________________________________________________________________ */
  Scratch.translate.setup({
    
    ru /*_РусскийЯзык_*/: {
      LabelA: "Window Settings:",
    },
  }); 
/* ________________________________________________________________________________________ */



  

  
/* ________________________________________________________________________________________ */
  if (!Scratch.extensions.unsandboxed) {throw new Error("Error");}  
/* ________________________________________________________________________________________ */



  
  

/* ________________________________________________________________________________________ */  
  // иконка меню:
  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMjIiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzMCIgeT0iNDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyOCIgcng9IjMiIGZpbGw9IiNCRjZFOEIiLz4KPHJlY3QgeD0iMzYiIHk9IjUwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI1OCIgeT0iNTAiIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNjUiIGN5PSIzMiIgcj0iNSIgZmlsbD0iI0JGNkU4QiIvPgo8L3N2Zz4K";
  
  // иконки блоков:
/* ________________________________________________________________________________________ */



  


/* ________________________________________________________________________________________ */  

/* ________________________________________________________________________________________ */



  


/* ________________________________________________________________________________________ */  
  class lmsmcutils {
    getInfo() {
      return {              
        id: "WindowSettings",
        name: "Window Settings",
        color1: "#D34B2D",
        color2: "#B73E23",
        color3: "#000000",
        menuIconURI: menuIconURI,
        
        blocks: [ 
        ],
/* ________________________________________________________________________________________ */



        


/* ________________________________________________________________________________________ */
        menus: {
        },
      };
    }
/* ________________________________________________________________________________________ */



      


/* ________________________________________________________________________________________ */

/* ________________________________________________________________________________________ */


    



/* ________________________________________________________________________________________ */
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);
/* ________________________________________________________________________________________ */

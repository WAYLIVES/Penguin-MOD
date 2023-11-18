// ________________________________________________________________________________________

// Name: Window Settings
// Id: WAYLIVES
// Description: Thanks to this extension, you can customize the project window (this works if you package the project in the ".exe" format).
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

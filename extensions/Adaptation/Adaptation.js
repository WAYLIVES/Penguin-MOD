// Name: Looks Plus
// ID: lmsLooksPlus
// Description: Expands upon the looks category, allowing you to show/hide, get costume data and edit SVG skins on sprites.
// By: LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Error");
  }

  const menuIconURI =
    "data:image/png;base64,";
  
  class LooksPlus {
    getInfo() {
      return {
        id: "lmsLooksPlus",
        name: "Looks+",
        color1: "#9966FF",
        color2: "#855CD6",
        color3: "#774DCB",
        menuIconURI: menuIconURI,
        blocks: [
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
        ],
        menus: {
          costumeAttribute: {
            acceptReporters: false,
            items: [
              {
                text: "width",
                value: "width",
              },
              {
                text: "height",
                value: "height",
              },
              {
                text: "format",
                value: "format",
              },
              {
                text: "rotation center x",
                value: "rotationCenterX",
              },
              {
                text: "rotation center y",
                value: "rotationCenterY",
              },
            ],
          },
        },
      };
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
  }
  Scratch.extensions.register(new LooksPlus());
})(Scratch);

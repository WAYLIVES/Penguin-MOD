// Name: More Motion
// ID: nkmoremotion
// Description: More motion-related blocks.
// By: NamelessCat <https://scratch.mit.edu/users/NamelessCat/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("More Motion must run unsandboxed");
  }

  // @ts-expect-error - not typed yet
  const Rectangle = Scratch.vm.renderer.exports.Rectangle;

  const requireNonPackagedRuntime = (blockName) => {
    if (Scratch.vm.runtime.isPackaged) {
      alert(
        `To use the Looks+ ${blockName} block, the creator of the packaged project must uncheck "Remove raw asset data after loading to save RAM" under advanced settings in the packager.`
      );
      return false;
    }
    return true;
  };

  class nkmoremotion {
    getInfo() {
      return {
        id: "nkmoremotion",
        name: "More Motion",
        color1: "#4c97ff",
        color2: "#3373cc",
        blocks: [
          {
            filter: [Scratch.TargetType.STAGE],
            blockType: Scratch.BlockType.LABEL,
            text: "Stage selected: no motion blocks",
          },
          {
            filter: [Scratch.TargetType.SPRITE],
            opcode: "setXY",
            blockType: Scratch.BlockType.COMMAND,
            text: "выравнить костюм [ALIGN] отступить по x: [AX] y: [AY]",
            arguments: {
              ALIGN: {
                type: Scratch.ArgumentType.STRING,
                menu: "AlignMenu",
              },
              AX: {
                type: Scratch.ArgumentType.NUMBER,
              },
              AY: {
                type: Scratch.ArgumentType.NUMBER,
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
          
        ],
        menus: {
          costumeAttribute: {
            acceptReporters: false,
            items: [ 
              "width", 
              "height", 
              "format", 
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

          AlignMenu: {
            acceptReporters: false,
            items: [ 
              {
                text: "по центру",
                value: "center",
              },
              {
                text: "по правому краю",
                value: "right",
              },
              {
                text: "по левому краю",
                value: "left",
              },
              {
                text: "по верхнему краю",
                value: "top",
              },
              {
                text: "по нижнему краю",
                value: "bottom",
              },
              {
                text: "в правом верхнем углу",
                value: "rightTop",
              },
              {
                text: "в правом нижнем углу",
                value: "rightBottom",
              },
              {
                text: "в левом верхнем углу",
                value: "leftTop",
              },
              {
                text: "в верхнем нижнем углу",
                value: "leftBottom",
              },
            ],
          },
        },
      };
    }    
    
    setXY(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        util.target.setXY(x, (Scratch.vm.runtime.stageHeight / 2) );
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
  

  Scratch.extensions.register(new nkmoremotion());
})(Scratch);

// Name: Looks Plus
// ID: lmsLooksPlus
// Description: Expands upon the looks category, allowing you to show/hide, get costume data and edit SVG skins on sprites.
// By: LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/>

(function (Scratch) {
  "use strict";

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
          effectMenu: {
            // false for Scratch parity
            acceptReporters: false,
            items: [
              {
                text: "color",
                value: "color",
              },
              {
                text: "fisheye",
                value: "fisheye",
              },
              {
                text: "whirl",
                value: "whirl",
              },
              {
                text: "pixelate",
                value: "pixelate",
              },
              {
                text: "mosaic",
                value: "mosaic",
              },
              {
                text: "brightness",
                value: "brightness",
              },
              {
                text: "ghost",
                value: "ghost",
              },
            ],
          },
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
  Scratch.extensions.register(new LooksPlus());
})(Scratch);

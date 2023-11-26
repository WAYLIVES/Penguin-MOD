// Name: GUI Positioning
// ID: leaf36devgui
// Description: Position sprites in an interface-like manner.
// By: OrangeLeaf36



(function(Scratch) {
    "use strict";

    let zoom = 1;
    let frames = {
        "frame1":{"x":0, "y":0, "width":100, "height":100}
    };

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("GUI Positioning must run unsandboxed");
    }

    function setFrame(name, x, y, width, height) {
            frames[name] = {"x":x, "y":y, "width":width, "height":height}
        }

    const imga = "data:image/gif;base64,R0lGODlhoACgAPcAAAAAAA8QFh4fKx4fKx4fKx4fKx4fKx4fKx4fKx4fKx8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLCAhLSMkMigpOCorOSssOywtPS4vPzI0RDY3SDo7Tjw+UDw+UT5AUz9BVUFEV0JFWURHW0hKYEtNY0xPZU5RZ1BTalJVbVZZcVdac1hbdFpddlteeF1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV5heWBiemNlemdpem5we3Z3fXx9foCAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQAMgAAACwAAAAAoACgAAAI/gCzCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gzD6UBw4Xnz6BDix5NmjQMGm1vqAAxobXr17Bjy55N2zUIFTfStvBQu7fv37E9tDh7Arjx471PlE2BvLnz1ynGvnhO3fkLsSGqazceIuz07eB9/l//WiK8edolwLI+z/41CLAd2suf0AHs/Pn277fPr/88//7h/QfgdgIOWF2BBj6HYILNLcjgcQ4+CFyEEvpGYYW1XYjhbBpuGFuHHr4GYoitjUiiiSGi6KGKG7KIoYsVwiihjA/SyKCNCeJooI4D8gigj/0BqZ+Q9xGJ31ckQohkkhMuyaSFTj6ZYZRSckhllR9eiaWIWm5ZYpdeGikffF7GVt9XH5QJ2wdgkaDmaySAxcKbrrEA1g28velBbmCpQKcKY42g5ghk2SCClyLYUNYNblZJAp9muXBokiK4wJYMK5hAwqacdurpp6CGGqoJK8ig2amopqrqqqy26uqrEbDGKuustNZq66245qrrRAEBACH5BAAyAAAALAAAAACgAKAAh/cAAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAPMBAt0EBsIIC5IPFG8UG1oXIE8YIkMaJDgcJiseKSMfKx8fKx8fKx8fKx8fKx8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLCEiLiQlMykqOC0uPTAxQTM0RTY3SDg6TDs9UD5AUz9BVEFDV0JFWUZIXUlLYUpMYktNY0xOZU5QZ1RXb1dacldac1hbdFpddlxfeV1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV5heWBiemNlemdpem5we3Z3fXx9foCAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQ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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";






    

    class guiPositioning {
        getInfo() {
            return {
                id: "guipositioning",
                color1: "#5D607A",
                color2: "#536E8E",
                color3: "#1F202C",
                name: "Adaptation",
                docsURI: "https://orangeleaf36.is-a.dev/docs/gui-positioning/",
                blocks: [                    
                    {
                        opcode: "createFrame",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | create frame: [frame] | | | ",
                        arguments: {
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "frame1"
                            }
                        }
                    },
                    {
                        opcode: "deleteFrame",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | delete frame: [frame] | | | ",
                        arguments: {
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES_NOSTAGE",
                                defaultValue: " "
                            }
                        }
                    },
                    {
                        opcode: "setPosFrame",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | set pos of frame [frame] x: [x] y: [y] | | | ",
                        arguments: {
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES_NOSTAGE",
                                defaultValue: "frame1"
                            },
                            x: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "0"
                            },
                            y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "0"
                            }
                        }
                    },
                    {
                        opcode: "setSizeFrame",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | set size of frame [frame] width: [width] height: [height] | | | [imga]",
                        arguments: {
                            imga: {
                                type: Scratch.ArgumentType.IMAGE,
                                dataURI: imga,
                            },
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES_NOSTAGE",
                                defaultValue: "frame1"
                            },
                            width: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "100"
                            },
                            height: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "100"
                            }
                        }
                    },
                    {
                        opcode: "setPosAncXFrame",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | set x of frame [frame] at [anchor] with offset x [margin] | | | [imga]",
                        arguments: {
                            imga: {
                                type: Scratch.ArgumentType.IMAGE,
                                dataURI: imga,
                            },
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES_NOSTAGE",
                                defaultValue: "frame1"
                            },
                            anchor: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "ANCHOR_X",
                                defaultValue: "center"
                            },
                            margin: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: "setPosAncYFrame",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | set y of frame [frame] at [anchor] with offset y [margin] | | | [imga]",
                        arguments: {
                            imga: {
                                type: Scratch.ArgumentType.IMAGE,
                                dataURI: imga,
                            },
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES_NOSTAGE",
                                defaultValue: "frame1"
                            },
                            anchor: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "ANCHOR_Y",
                                defaultValue: "center"
                            },
                            margin: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: "keyOfFrame",
                        text: " | | | [key] of [frame] | | | [imga]",
                        blockType: Scratch.BlockType.REPORTER,
                        arguments: {
                            imga: {
                                type: Scratch.ArgumentType.IMAGE,
                                dataURI: imga,
                            },
                            key: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAME_PROPERTIES",
                                defaultValue: "x"
                            },
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES_NOSTAGE",
                                defaultValue: "frame1"
                            }
                        }
                    },
                    {
                        opcode: "listFrames",
                        text: " | | | список frames | | | [imga]",
                        blockType: Scratch.BlockType.REPORTER,
                        arguments: {
                            imga: {
                                type: Scratch.ArgumentType.IMAGE,
                                dataURI: imga,
                            },
                        },
                        disableMontor: true,
                    },
                    "---",                    
                    {
                        opcode: "setPosAncXSprite",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | задать положение спрайта по x в: [frame] выравнить по: [anchor] [inCenterOut], если zoom: [zoom], дополнительно изменить x: [margin] | | | [imga]",
                        arguments: {
                            imga: {
                                type: Scratch.ArgumentType.IMAGE,
                                dataURI: imga,
                            },
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES",
                                defaultValue: "stage"
                            },
                            anchor: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "ANCHOR_X",
                                defaultValue: "center"
                            },
                            margin: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            inCenterOut: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "inCenterOut",
                                defaultValue: "in"
                            },
                            zoom: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "100"
                            },
                        }
                    },
                    {
                        opcode: "setPosAncYSprite",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | задать положение спрайта по y в: [frame] выравнить по: [anchor] [inCenterOut], если zoom: [zoom], дополнительно изменить y: [margin] | | | [imga]",
                        arguments: {
                            imga: {
                                type: Scratch.ArgumentType.IMAGE,
                                dataURI: imga,
                            },
                            frame: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "FRAMES",
                                defaultValue: "stage"
                            },
                            anchor: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "ANCHOR_Y",
                                defaultValue: "center"
                            },
                            inCenterOut: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "inCenterOut",
                                defaultValue: "in"
                            },
                            zoom: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "100"
                            },
                            margin: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },

                    "---",

                    {
                      opcode: "setStretch",
                      blockType: Scratch.BlockType.COMMAND,
                      text: Scratch.translate("растянуть спрайт x: [X] y: [Y]"),
                      arguments: {
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
                    
                ],
                menus: {
                    RES_MENU: {
                        acceptReporters: true,
                        items: [
                            "width", "height"
                        ]
                    },
                    ANCHOR_X: {
                        acceptReporters: false,
                        items: [
                            "left", "right", "center"
                        ]
                    },
                    ANCHOR_Y: {
                        acceptReporters: false,
                        items: [
                            "top", "bottom", "center"
                        ]
                    },
                    inCenterOut: {
                        acceptReporters: false,
                        items: [
                            "in", "center", "out"
                        ]
                    },
                    FRAMES: {
                        acceptReporters: true,
                        items: "_getFramesAndStage" //This basically makes it run a function every time
                    },
                    FRAMES_NOSTAGE: {
                        acceptReporters: true,
                        items: "_getFrames" //This basically makes it run a function every time
                    },
                    FRAME_PROPERTIES: {
                        acceptReporters: false,
                        items:[
                        "x",
                        "y",
                        "width",
                        "height"
                        ]
                    },
                    ADJ_ZOOM: {
                        acceptReporters: false,
                        items: [
                        "fit",
                        "decrease"
                        ]
                    }
                }
            };
        }
      
      setStretch(args, util) {
            const STRETCH_X = Symbol("stretch.x");
            const STRETCH_Y = Symbol("stretch.y");
        
            const vm = Scratch.vm;
        
            const implementStretchForTarget = (target, originalTarget) => {
                if (STRETCH_X in target) {
                  return;
                }

            target[STRETCH_X] = originalTarget ? originalTarget[STRETCH_X] : 100;
            target[STRETCH_Y] = originalTarget ? originalTarget[STRETCH_Y] : 100;

            const original = target._getRenderedDirectionAndScale;
            target._getRenderedDirectionAndScale = function () {
                const result = original.call(this);
                const costume = util.target.sprite.costumes[util.target.currentCostume];
                const attribute = args.anchor;
                const costumewidth = Math.ceil(Scratch.Cast.toNumber(costume.size[0]));

                result.scale[0] *= this[STRETCH_X] / 100 * (Scratch.vm.runtime.stageWidth / costume / 100));
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

        const forceUpdateDirectionAndScale = (target) => {
            target.setDirection(target.direction);
        };
          
        util.target[STRETCH_X] = Scratch.Cast.toNumber(args.X);
        util.target[STRETCH_Y] = Scratch.Cast.toNumber(args.Y);
        forceUpdateDirectionAndScale(util.target);
      }

        //Sprite
        setPosAncXSprite(args, util) {
            const costume = util.target.sprite.costumes[util.target.currentCostume];
            const attribute = args.anchor;
            const costumewidth = Math.ceil(Scratch.Cast.toNumber(costume.size[0]));
            let newX = 0;
            zoom = args.zoom / 100;
            if (args.frame === "stage"){
                const stagewidth = Scratch.vm.runtime.stageWidth;
                if (args.anchor === "left") {
                    if (args.inCenterOut === "in") {
                        newX = -stagewidth / 2 / zoom + costumewidth / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newX = -stagewidth / 2 / zoom + (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newX = -stagewidth / 2 / zoom - costumewidth / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "right") {
                    if (args.inCenterOut === "in") {
                        newX = stagewidth / 2 / zoom - costumewidth / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newX = stagewidth / 2 / zoom - (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newX = stagewidth / 2 / zoom + costumewidth / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "center") {
                    if (args.inCenterOut === "in") {
                        newX = args.margin;
                    } else if (args.inCenterOut === "center") {
                        newX = args.margin;
                    } else if (args.inCenterOut === "out") {
                        newX = args.margin;
                    }
                }
            } else {
                const frame = frames[args.frame];
                if (attribute === "left") {
                    newX = frame["x"] + (costumewidth / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "right") {
                    newX = frame["x"] + frame["width"] - (costumewidth / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "center") {
                    newX = frame["x"] + (frame["width"] / 2) + args.margin;
                } else {
                    newX = 0;
                }
            }
            util.target.setXY(newX, util.target.y);
        }

        setPosAncYSprite(args, util) {
            const costume = util.target.sprite.costumes[util.target.currentCostume];

            const attribute = args.anchor;
            const costumeheight = Math.ceil(Scratch.Cast.toNumber(costume.size[1]));
            let newY = 0;
            if (args.frame === "stage"){
                const stageheight = Scratch.vm.runtime.stageHeight;
                if (args.anchor === "bottom") {
                    if (args.inCenterOut === "in") {
                        newY = -stageheight / 2 / zoom + costumeheight / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newY = -stageheight / 2 / zoom + (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newY = -stageheight / 2 / zoom - costumeheight / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "top") {
                    if (args.inCenterOut === "in") {
                        newY = stageheight / 2 / zoom - costumeheight / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newY = stageheight / 2 / zoom - (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newY = stageheight / 2 / zoom + costumeheight / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "center") {
                    if (args.inCenterOut === "in") {
                        newY = args.margin;
                    } else if (args.inCenterOut === "center") {
                        newY = args.margin;
                    } else if (args.inCenterOut === "out") {
                        newY = args.margin;
                    }
                }
            } else {
                const frame = frames[args.frame];
                if (attribute === "bottom") {
                    newY = frame["y"] + (costumeheight / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "top") {
                    newY = frame["y"] + frame["height"] - (costumeheight / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "center") {
                    newY = frame["y"] + (frame["height"] / 2) + args.margin;
                } else {
                    newY = 0;
                }
            }
            util.target.setXY(util.target.x, newY);
        }

        //Frame
        createFrame(args, util) {
            setFrame(args.frame, 0, 0, 100, 100);
        }

        deleteFrame(args, util) {
            delete(frames[args.frame]);
        }

        listFrames(args, util) {
            return Object.keys(frames);
        }

        keyOfFrame(args, util) {
            return frames[args.frame][args.key];
        }

        setPosFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                frame["x"] = args.x;
                frame["y"] = args.y;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        setSizeFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                frame["width"] = args.width;
                frame["height"] = args.height;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        setPosAncXFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                const attribute = args.anchor;
                const stagewidth = Scratch.vm.runtime.stageWidth;
                const framewidth = frame["width"];
                let newX = 0;
                if (attribute === "left") {
                    newX = -stagewidth / 2 / zoom + args.margin;
                } else if (attribute === "right") {
                    newX = stagewidth / 2 / zoom - framewidth + args.margin;
                } else if (attribute === "center") {
                    newX = -framewidth/2 + args.margin;
                } else {
                    newX = 0;
                }
                frame["x"] = newX;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        setPosAncYFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                const attribute = args.anchor;
                const stageheight = Scratch.vm.runtime.stageHeight;
                const frameheight = frame["height"];
                let newY = 0;
                if (attribute === "bottom") {
                    newY = -stageheight / 2 / zoom + args.margin;
                } else if (attribute === "top") {
                    newY = stageheight / 2 / zoom - frameheight + args.margin;
                } else if (attribute === "center") {
                    newY = -frameheight/2 + args.margin;
                } else {
                    newY = 0;
                }
                frame["y"] = newY;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        _getFramesAndStage() { // The menu function
            return ["stage", ...Object.keys(frames)];
        }

        _getFrames() { // The menu function
            return Object.keys(frames);
        }

    }
    Scratch.extensions.register(new guiPositioning());
})(Scratch);
DirectionAndScale(util.target);
      }

        //Sprite
        setPosAncXSprite(args, util) {
            const costume = util.target.sprite.costumes[util.target.currentCostume];
            const attribute = args.anchor;
            const costumewidth = Math.ceil(Scratch.Cast.toNumber(costume.size[0]));
            let newX = 0;
            zoom = args.zoom / 100;
            if (args.frame === "stage"){
                const stagewidth = Scratch.vm.runtime.stageWidth;
                if (args.anchor === "left") {
                    if (args.inCenterOut === "in") {
                        newX = -stagewidth / 2 / zoom + costumewidth / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newX = -stagewidth / 2 / zoom + (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newX = -stagewidth / 2 / zoom - costumewidth / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "right") {
                    if (args.inCenterOut === "in") {
                        newX = stagewidth / 2 / zoom - costumewidth / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newX = stagewidth / 2 / zoom - (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newX = stagewidth / 2 / zoom + costumewidth / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "center") {
                    if (args.inCenterOut === "in") {
                        newX = args.margin;
                    } else if (args.inCenterOut === "center") {
                        newX = args.margin;
                    } else if (args.inCenterOut === "out") {
                        newX = args.margin;
                    }
                }
            } else {
                const frame = frames[args.frame];
                if (attribute === "left") {
                    newX = frame["x"] + (costumewidth / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "right") {
                    newX = frame["x"] + frame["width"] - (costumewidth / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "center") {
                    newX = frame["x"] + (frame["width"] / 2) + args.margin;
                } else {
                    newX = 0;
                }
            }
            util.target.setXY(newX, util.target.y);
        }

        setPosAncYSprite(args, util) {
            const costume = util.target.sprite.costumes[util.target.currentCostume];

            const attribute = args.anchor;
            const costumeheight = Math.ceil(Scratch.Cast.toNumber(costume.size[1]));
            let newY = 0;
            if (args.frame === "stage"){
                const stageheight = Scratch.vm.runtime.stageHeight;
                if (args.anchor === "bottom") {
                    if (args.inCenterOut === "in") {
                        newY = -stageheight / 2 / zoom + costumeheight / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newY = -stageheight / 2 / zoom + (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newY = -stageheight / 2 / zoom - costumeheight / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "top") {
                    if (args.inCenterOut === "in") {
                        newY = stageheight / 2 / zoom - costumeheight / 2 * (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "center") {
                        newY = stageheight / 2 / zoom - (util.target.size/100) + args.margin;
                    } else if (args.inCenterOut === "out") {
                        newY = stageheight / 2 / zoom + costumeheight / 2 * (util.target.size/100) + args.margin;
                    }
                } else if (args.anchor === "center") {
                    if (args.inCenterOut === "in") {
                        newY = args.margin;
                    } else if (args.inCenterOut === "center") {
                        newY = args.margin;
                    } else if (args.inCenterOut === "out") {
                        newY = args.margin;
                    }
                }
            } else {
                const frame = frames[args.frame];
                if (attribute === "bottom") {
                    newY = frame["y"] + (costumeheight / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "top") {
                    newY = frame["y"] + frame["height"] - (costumeheight / 2 * (util.target.size/100)) + args.margin;
                } else if (attribute === "center") {
                    newY = frame["y"] + (frame["height"] / 2) + args.margin;
                } else {
                    newY = 0;
                }
            }
            util.target.setXY(util.target.x, newY);
        }

        //Frame
        createFrame(args, util) {
            setFrame(args.frame, 0, 0, 100, 100);
        }

        deleteFrame(args, util) {
            delete(frames[args.frame]);
        }

        listFrames(args, util) {
            return Object.keys(frames);
        }

        keyOfFrame(args, util) {
            return frames[args.frame][args.key];
        }

        setPosFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                frame["x"] = args.x;
                frame["y"] = args.y;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        setSizeFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                frame["width"] = args.width;
                frame["height"] = args.height;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        setPosAncXFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                const attribute = args.anchor;
                const stagewidth = Scratch.vm.runtime.stageWidth;
                const framewidth = frame["width"];
                let newX = 0;
                if (attribute === "left") {
                    newX = -stagewidth / 2 / zoom + args.margin;
                } else if (attribute === "right") {
                    newX = stagewidth / 2 / zoom - framewidth + args.margin;
                } else if (attribute === "center") {
                    newX = -framewidth/2 + args.margin;
                } else {
                    newX = 0;
                }
                frame["x"] = newX;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        setPosAncYFrame(args, util) {
            if (Object.keys(frames).includes(args.frame)) {
                const frame = frames[args.frame];
                const attribute = args.anchor;
                const stageheight = Scratch.vm.runtime.stageHeight;
                const frameheight = frame["height"];
                let newY = 0;
                if (attribute === "bottom") {
                    newY = -stageheight / 2 / zoom + args.margin;
                } else if (attribute === "top") {
                    newY = stageheight / 2 / zoom - frameheight + args.margin;
                } else if (attribute === "center") {
                    newY = -frameheight/2 + args.margin;
                } else {
                    newY = 0;
                }
                frame["y"] = newY;
            } else {
                console.error("Frame doesn't exist!");
                return 0
            }
        }

        _getFramesAndStage() { // The menu function
            return ["stage", ...Object.keys(frames)];
        }

        _getFrames() { // The menu function
            return Object.keys(frames);
        }

    }
    Scratch.extensions.register(new guiPositioning());
})(Scratch);

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

    const imga = "data:image/gif;base64,R0lGODlhyADIAPcAAPcAAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAP4AAO4CA8AIDJwOE2sVHB8fKx8fKx8fKx8fKx8fKx8fKx8fKx8fKx8fKx8fKx8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLB8gLSEiLyQlMycoNyorOi8wQDEyQjIzRDQ1RjU2RzY4STg6TDs8Tz0/UT9BVEBCVkJEWENFWUVHXEZJXkdKX0hLYEpNYkxPZU1QZk5RZ1FUbFZZclhbdFlcdVlcdVxfeVxfeVxfeVxfeVxfeVxfeV1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1gel1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV1geV5heWBiemNlemdpem5we3Z3fXx9foCAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQAPAAAACwAAAAAyADIAAAI/gDBCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvPlXIT1y4JhOvbr169izW9fR47KQGSg+/ogfT768+fPo038owSLHZBkl1MufT788Ch2PfaSoz7+/ehiN9WCCfwQWOF4LiwVxgoEMEuiCYiw0KGF/NSCGw4QY0leCEIeFl+GH6cVgGA8glnieCYbBYOKK5HVHmIcsrjhDYfHFuOKDhI1g44osFEafAUAGKeSQRBZppJAPzLeCj/Md6eSTTiYp35KE/QjllVhKqR6Vg1mJ5ZdHapkel4J5CeaZSCrJpHxothmkmOiRGZiZboIJ53lyAkZnnVmqWWWTfJ55p3l5/rVnoE8OWl6hfh2KaJh+dgnoo1cqSh6jfTlKKZGWjocpX5pumuaUa6onKpSdivfpXqGeakCq/h+sqlerp8Iqa160imprqem5GmWkZU7qK6fAzinssKNuySt6yBa5659sNjvks5JGK+2bxep5rLTUBmvtta9ma+i2zXZr7LfXmqstutyK2yi5yKo7LrvlupspvMPK+y698doLKr6+6nsvv/n6yyrArgr8L8EBGzwrwrU6jCvEukqMV66bKryXjjuW2CNhNXb8IY6DwSgyhjMSpuLJGbo4GIksT4iiYSbHXKCIhl1os4EbIhbhzgRWiJiCQPdHMmICFk0fgozpp/R/kMH3tH34RfZdzTaz555l0Emn3ddgf82dc2SXbfbZaKet9tpst+3223DHLffcdNdt99145603A18BAQAh+QQAPAAAACwAAAAAyADIAIcAAAAGBwgfICsfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwfICwiIzAmJzQoKTgrLDsuLz8xMkIzNEQ0NUc2N0g3OUs5O008PlE+QFNAQlZBRFdDRVlER1tGSV1HSl9IS2BJTGJLTmRMT2VQU2pVWHBWWXFXWnJYW3RcX3lcX3lcX3lcX3lcX3lcX3ldYHpdYHpdYHpdYHpdYHpdYHpdYHpdYHpd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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";


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
                        text: " | | | set size of frame [frame] width: [width] height: [height] | | | ",
                        arguments: {
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
                        text: " | | | set x of frame [frame] at [anchor] with offset x [margin] | | | ",
                        arguments: {
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
                        text: " | | | set y of frame [frame] at [anchor] with offset y [margin] | | | ",
                        arguments: {
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
                        text: " | | | [key] of [frame] | | | ",
                        blockType: Scratch.BlockType.REPORTER,
                        arguments: {
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
                        text: " | | | список frames | | | ",
                        blockType: Scratch.BlockType.REPORTER,
                        disableMontor: true
                    },
                    "---",
                    {
                        opcode: "setPosAncXSprite",
                        blockType: Scratch.BlockType.COMMAND,
                        text: " | | | [imga]( положение-x )    | | |    задать положение спрайта по x в: [frame] выравнить по: [anchor] [inCenterOut], если zoom: [zoom] with offset x: [margin] | | | ",
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
                        text: " | | | set y on [frame] at [anchor] with offset y [margin] | | | ",
                        arguments: {
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
                            margin: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
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
                        newX = stagewidth / 2 / zoom - costumewidth / 2 * (util.target.size/100) + args.margin;
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
                if (attribute === "bottom") {
                    newY = -stageheight / 2 / zoom + costumeheight / 2 * (util.target.size/100) + args.margin;
                } else if (attribute === "top") {
                    newY = stageheight / 2 / zoom - costumeheight / 2 * (util.target.size/100) + args.margin;
                } else if (attribute === "center") {
                    newY = args.margin;
                } else {
                    newY = 0;
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

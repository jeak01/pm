﻿$axure.loadCurrentPage({
  "url":"2_4支付失败.html",
  "generationDate":new Date(1505976854706.04),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"status",
"package",
"payFrom"],
  "page":{
    "packageId":"6376099b81a34e39b123c9d3e06c8689",
    "type":"Axure:Page",
    "name":"2.4支付失败",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
      "onLoad":{
        "description":"OnLoad",
        "cases":[{
            "description":"用例 1<br> (If 值于 payFrom 等于 &quot;newPackage&quot;)",
            "isNewIfGroup":false,
            "condition":{
              "exprType":"binaryOp",
              "op":"==",
              "leftExpr":{
                "exprType":"fcall",
                "functionName":"GetGlobalVariableValue",
                "arguments":[{
                    "exprType":"globalVariableLiteral",
                    "variableName":"payFrom"}]},
              "rightExpr":{
                "exprType":"stringLiteral",
                "value":"newPackage",
                "stos":[]}},
            "actions":[{
                "action":"setPanelState",
                "description":"设置 (动态面板) to 状态2",
                "panelsToStates":[{
                    "panelPath":["2e926c064b5f4ce389b1f0d0c54c343e"],
                    "stateInfo":{
                      "setStateType":"diagram",
                      "stateNumber":2,
                      "stateValue":{
                        "exprType":"stringLiteral",
                        "value":"1",
                        "stos":[]},
                      "loop":false,
                      "showWhenSet":false,
                      "options":{
                        "compress":false}}}]}]}]}},
    "diagram":{
      "objects":[{
          "id":"51c8fa84a4664c7dab516ee1a5ba4ce6",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFFDDDDDD},
            "location":{
              "x":0,
              "y":-17},
            "size":{
              "width":360,
              "height":667}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"02f78ca961e44c21a74bb491998af120",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFDDDDDD},
                "location":{
                  "x":0,
                  "y":-17},
                "size":{
                  "width":360,
                  "height":667}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_2订单支付页/u0.png"}},
{
          "id":"7cd79df75a1a40d0be2f5e9fd844911f",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "size":{
              "width":360,
              "height":40}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"22e9cc9557a0418d8bfdd6edff9777a6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":360,
                  "height":40}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/0_0主页/top_u53.png"}},
{
          "id":"c66da8410f0b40a1a25da9e299c2adb7",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":39,
              "height":41},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF000000}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0a6503992e17402c9cd7575aa2dc1bdf",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":39,
                  "height":41},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFF000000}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 返回",
                      "target":{
                        "targetType":"backUrl",
                        "includeVariables":false},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/0_0主页/u201.png"}},
{
          "id":"85ffd25ae39541e4bf3f1dcd44a6454f",
          "label":"",
          "type":"buttonShape",
          "styleType":"h1",
          "visible":true,
          "style":{
            "fontName":"'Arial Normal', 'Arial'",
            "fontSize":"18px",
            "fontWeight":"400",
            "location":{
              "x":145,
              "y":9},
            "size":{
              "width":73,
              "height":22}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f0033f8d31bd458ab113e6ac9d9bf168",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Arial Normal', 'Arial'",
                "fontSize":"18px",
                "fontWeight":"400",
                "location":{
                  "x":145,
                  "y":9},
                "size":{
                  "width":73,
                  "height":22}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"9b92839e36784071aa35c3eb78ae87a5",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":60},
            "size":{
              "width":360,
              "height":270}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d0cd1d1eb32945749d5e4aa289538581",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":60},
                "size":{
                  "width":360,
                  "height":270}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/2_4支付失败/u8.png"}},
{
          "id":"21163552684e464a923121757a0d1de4",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":139,
              "y":140},
            "size":{
              "width":79,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"74ea836ace594e7f8266b376b214c455",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":139,
                  "y":140},
                "size":{
                  "width":79,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"2ddd15c445c548298a3876d21f53282d",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":56,
              "y":210},
            "size":{
              "width":117,
              "height":40},
            "cornerRadiusTopLeft":"5"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"324249df972247b2ac1c3f14b218acb2",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":56,
                  "y":210},
                "size":{
                  "width":117,
                  "height":40},
                "cornerRadiusTopLeft":"5"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 0.0主页",
                      "target":{
                        "targetType":"page",
                        "url":"0_0主页.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/1_3支付成功/u14.png"}},
{
          "id":"2e926c064b5f4ce389b1f0d0c54c343e",
          "label":"",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":182,
              "y":210},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 5.4待支付订单",
                      "target":{
                        "targetType":"page",
                        "url":"5_4待支付订单.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"05369500dfc74a2b88036e4497403aa1",
              "label":"状态1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"289aab97651f4349a5ed7c0adb8488b1",
                  "label":"",
                  "parentDynamicPanel":"2e926c064b5f4ce389b1f0d0c54c343e",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFDDDDDD},
                    "size":{
                      "width":117,
                      "height":40},
                    "cornerRadiusTopLeft":"5"},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"4d46d80498124e46925b84e20ce00b81",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"2e926c064b5f4ce389b1f0d0c54c343e",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fill":{
                          "fillType":"solid",
                          "color":0xFFDDDDDD},
                        "size":{
                          "width":117,
                          "height":40},
                        "cornerRadiusTopLeft":"5"},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"linkWindow",
                              "description":"在 当前窗口 打开 链接",
                              "target":{
                                "targetType":"page",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/1_3支付成功/u17.png"}}]},
{
              "id":"0a0ec34e5b374c648cb24d0345a2032f",
              "label":"状态2",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"3c0c70fb9a424a1bb4f04ede0d901c66",
                  "label":"",
                  "parentDynamicPanel":"2e926c064b5f4ce389b1f0d0c54c343e",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFDDDDDD},
                    "size":{
                      "width":117,
                      "height":40},
                    "cornerRadiusTopLeft":"5"},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"a096680bbe55419a91e6a12da7c31010",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"2e926c064b5f4ce389b1f0d0c54c343e",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fill":{
                          "fillType":"solid",
                          "color":0xFFDDDDDD},
                        "size":{
                          "width":117,
                          "height":40},
                        "cornerRadiusTopLeft":"5"},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setFunction",
                              "description":"设置 值于 payFrom = &quot;none&quot;",
                              "expr":{
                                "exprType":"block",
                                "subExprs":[{
                                    "exprType":"fcall",
                                    "functionName":"SetGlobalVariableValue",
                                    "arguments":[{
                                        "exprType":"globalVariableLiteral",
                                        "variableName":"payFrom"},
{
                                        "exprType":"stringLiteral",
                                        "value":"none",
                                        "stos":[]}]}]}},
{
                              "action":"linkWindow",
                              "description":"在 当前窗口 打开 链接",
                              "target":{
                                "targetType":"page",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/1_3支付成功/u17.png"}}]}]},
{
          "id":"b3843dd921554728829e90dd303ea5c6",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":146.5,
              "y":76},
            "size":{
              "width":64,
              "height":64},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF000000}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8b9a778a29ec4e379a9804405c976ae6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":146.5,
                  "y":76},
                "size":{
                  "width":64,
                  "height":64},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFF000000}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/0_0主页/u5.png"}},
{
          "id":"ac9734797b9d42eb86b3c13617264312",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"11px",
            "location":{
              "x":50,
              "y":166},
            "size":{
              "width":249,
              "height":28}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"eb522e29d68a4bd580856806f6918686",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "location":{
                  "x":50,
                  "y":166},
                "size":{
                  "width":249,
                  "height":28}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"2e05077e64324e359e71ad22e1372fae",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFFFFFF,
              "opacity":1},
            "fill":{
              "fillType":"solid",
              "color":0xFF0099FF},
            "location":{
              "x":56,
              "y":260},
            "size":{
              "width":243,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"5"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"db280057443d44d487a3ba47c98e87f6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFFFFFF,
                  "opacity":1},
                "fill":{
                  "fillType":"solid",
                  "color":0xFF0099FF},
                "location":{
                  "x":56,
                  "y":260},
                "size":{
                  "width":243,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "cornerRadiusTopLeft":"5"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 2.2订单支付页",
                      "target":{
                        "targetType":"page",
                        "url":"2_2订单支付页.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/2_4支付失败/u23.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "51c8fa84a4664c7dab516ee1a5ba4ce6":{
      "scriptId":"u0"},
    "02f78ca961e44c21a74bb491998af120":{
      "scriptId":"u1"},
    "7cd79df75a1a40d0be2f5e9fd844911f":{
      "scriptId":"u2"},
    "22e9cc9557a0418d8bfdd6edff9777a6":{
      "scriptId":"u3"},
    "c66da8410f0b40a1a25da9e299c2adb7":{
      "scriptId":"u4"},
    "0a6503992e17402c9cd7575aa2dc1bdf":{
      "scriptId":"u5"},
    "85ffd25ae39541e4bf3f1dcd44a6454f":{
      "scriptId":"u6"},
    "f0033f8d31bd458ab113e6ac9d9bf168":{
      "scriptId":"u7"},
    "9b92839e36784071aa35c3eb78ae87a5":{
      "scriptId":"u8"},
    "d0cd1d1eb32945749d5e4aa289538581":{
      "scriptId":"u9"},
    "21163552684e464a923121757a0d1de4":{
      "scriptId":"u10"},
    "74ea836ace594e7f8266b376b214c455":{
      "scriptId":"u11"},
    "2ddd15c445c548298a3876d21f53282d":{
      "scriptId":"u12"},
    "324249df972247b2ac1c3f14b218acb2":{
      "scriptId":"u13"},
    "2e926c064b5f4ce389b1f0d0c54c343e":{
      "scriptId":"u14"},
    "289aab97651f4349a5ed7c0adb8488b1":{
      "scriptId":"u15"},
    "4d46d80498124e46925b84e20ce00b81":{
      "scriptId":"u16"},
    "3c0c70fb9a424a1bb4f04ede0d901c66":{
      "scriptId":"u17"},
    "a096680bbe55419a91e6a12da7c31010":{
      "scriptId":"u18"},
    "b3843dd921554728829e90dd303ea5c6":{
      "scriptId":"u19"},
    "8b9a778a29ec4e379a9804405c976ae6":{
      "scriptId":"u20"},
    "ac9734797b9d42eb86b3c13617264312":{
      "scriptId":"u21"},
    "eb522e29d68a4bd580856806f6918686":{
      "scriptId":"u22"},
    "2e05077e64324e359e71ad22e1372fae":{
      "scriptId":"u23"},
    "db280057443d44d487a3ba47c98e87f6":{
      "scriptId":"u24"}}});
﻿$axure.loadCurrentPage({
  "url":"支付成功_5.html",
  "generationDate":new Date(1504251729595.35),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"status",
"package",
"payFrom"],
  "page":{
    "packageId":"358c356213bc4c339a1a920ad5357a96",
    "type":"Axure:Page",
    "name":"支付成功",
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
            "normal~":"images/购买配送次数/u0.png"}},
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
            "normal~":"images/主页/top_u46.png"}},
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
            "normal~":"images/选择城市/u4.png"}},
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
              "height":180}},
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
                  "height":180}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/支付成功/u8.png"}},
{
          "id":"b2425a5e5af44b13a60a3a86443519a1",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":150,
              "y":76},
            "size":{
              "width":61,
              "height":64},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF000000}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8da746b2d0844338be615ae8dcb96bde",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":150,
                  "y":76},
                "size":{
                  "width":61,
                  "height":64},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFF000000}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/支付成功/u10.png"}},
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
              "y":180},
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
                  "y":180},
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
                      "description":"在 当前窗口 打开 会员主页(安卓)",
                      "target":{
                        "targetType":"page",
                        "url":"会员主页_安卓_.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/支付成功/u14.png"}},
{
          "id":"2e926c064b5f4ce389b1f0d0c54c343e",
          "label":"",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":182,
              "y":180},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
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
                              "description":"在 当前窗口 打开 农旅订单详情",
                              "target":{
                                "targetType":"page",
                                "url":"农旅订单详情_1.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/支付成功/u17.png"}}]},
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
                              "description":"在 当前窗口 打开 全部订单",
                              "target":{
                                "targetType":"page",
                                "url":"全部订单_1.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/支付成功/u17.png"}}]}]},
{
          "id":"aab03beaa5e94c2ea9bbd64dadc2d86d",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":2,
              "y":270},
            "size":{
              "width":358,
              "height":117}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c5d9afd47cd341ccb1de06798764e4a7",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":2,
                  "y":270},
                "size":{
                  "width":358,
                  "height":117}},
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
                      "description":"在 当前窗口 打开 会员特权",
                      "target":{
                        "targetType":"page",
                        "url":"会员特权.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/主页_安卓_/u197.jpg"}},
{
          "id":"556980998a7c426b9df11f575da3a352",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":430},
            "size":{
              "width":359,
              "height":70},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"89f1a05c8d4e41e0b66f8560c8899ec5",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":430},
                "size":{
                  "width":359,
                  "height":70},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/线路详情/u216.png"}},
{
          "id":"e2ce1ca14b324f7d868ff5538b758bcf",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"11px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF666666,
              "opacity":1},
            "location":{
              "x":10,
              "y":412},
            "size":{
              "width":45,
              "height":14}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"85494578491e444493034a1f4d705b30",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFF666666,
                  "opacity":1},
                "location":{
                  "x":10,
                  "y":412},
                "size":{
                  "width":45,
                  "height":14}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"49d7e34511cd4573865d75743785671d",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":440},
            "size":{
              "width":60,
              "height":50}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"80deec4f5a0f4df4a5e9eeb236b8cab0",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":10,
                  "y":440},
                "size":{
                  "width":60,
                  "height":50}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/线路详情/u230.jpg"}},
{
          "id":"1736bf5fb4cb4799af718c1ded901dd3",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":440},
            "size":{
              "width":252,
              "height":42}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"10871347c7d149bc99d0f604f982c027",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":80,
                  "y":440},
                "size":{
                  "width":252,
                  "height":42}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"82da7de5f6f5457d8029155658bd0db1",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":332,
              "y":450},
            "size":{
              "width":27,
              "height":27},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF000000}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5316e4f90c1949bbb0943826ab093268",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":332,
                  "y":450},
                "size":{
                  "width":27,
                  "height":27},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFF000000}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/主页/u302.png"}},
{
          "id":"e4fcedbfcfe64ddabb570c5dc924f40f",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":500},
            "size":{
              "width":359,
              "height":70},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"695b669082a243f181edf8919ac6cfbd",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":500},
                "size":{
                  "width":359,
                  "height":70},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/线路详情/u216.png"}},
{
          "id":"842c4501924748a5944ed1d21796bebc",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":510},
            "size":{
              "width":60,
              "height":50}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"92a38a3a154944c38f746a5c244de8cb",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":10,
                  "y":510},
                "size":{
                  "width":60,
                  "height":50}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/线路详情/u238.jpg"}},
{
          "id":"7a86f844fa594a108389d0ed8b0f7256",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":510},
            "size":{
              "width":252,
              "height":42}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5067f333d0854d46808cc42402bec01a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":80,
                  "y":510},
                "size":{
                  "width":252,
                  "height":42}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"3905b26c9934470a9fd8fe1fff7e7b34",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":332,
              "y":520},
            "size":{
              "width":27,
              "height":27},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF000000}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b1ed207623614de2bb90ca6026e5f1fe",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":332,
                  "y":520},
                "size":{
                  "width":27,
                  "height":27},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFF000000}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/主页/u302.png"}},
{
          "id":"0981b3f0ea504c86b71332925f96f202",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":570},
            "size":{
              "width":359,
              "height":70},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f37efc1d74684847ae5407a865317bd0",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":570},
                "size":{
                  "width":359,
                  "height":70},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/线路详情/u216.png"}},
{
          "id":"e47c89d1d5524a969d73057ed41c5074",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":580},
            "size":{
              "width":60,
              "height":50}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"61afe1734a0a48e9a499304c26c91819",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":10,
                  "y":580},
                "size":{
                  "width":60,
                  "height":50}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/主页/u9.jpg"}},
{
          "id":"f19b3d2f71fb4d3597688f813c9143c6",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":580},
            "size":{
              "width":252,
              "height":42}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"60cf08b269d540f9be566102ef37d686",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":80,
                  "y":580},
                "size":{
                  "width":252,
                  "height":42}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"3e242e6410834a03a8ce31b3f87ee2c3",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":332,
              "y":590},
            "size":{
              "width":27,
              "height":27},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF000000}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"085d7b95579d4c1a9b658a59c519d4d5",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":332,
                  "y":590},
                "size":{
                  "width":27,
                  "height":27},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFF000000}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/主页/u302.png"}},
{
          "id":"7ce9194dd85a48b79ca7afd953c2a6c8",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":430},
            "size":{
              "width":359,
              "height":70}},
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
                      "description":"在 当前窗口 打开 线路详情",
                      "target":{
                        "targetType":"page",
                        "url":"线路详情_7.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"70655b805b094744a2900c3bea09a7cc",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":500},
            "size":{
              "width":359,
              "height":70}},
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
                      "description":"在 当前窗口 打开 线路详情",
                      "target":{
                        "targetType":"page",
                        "url":"线路详情_8.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"27e7a9d463af4d73a9e5085a8f95f1f1",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":570},
            "size":{
              "width":359,
              "height":70}},
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
                      "description":"在 当前窗口 打开 线路详情",
                      "target":{
                        "targetType":"page",
                        "url":"线路详情_9.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true}]}},
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
    "b2425a5e5af44b13a60a3a86443519a1":{
      "scriptId":"u10"},
    "8da746b2d0844338be615ae8dcb96bde":{
      "scriptId":"u11"},
    "21163552684e464a923121757a0d1de4":{
      "scriptId":"u12"},
    "74ea836ace594e7f8266b376b214c455":{
      "scriptId":"u13"},
    "2ddd15c445c548298a3876d21f53282d":{
      "scriptId":"u14"},
    "324249df972247b2ac1c3f14b218acb2":{
      "scriptId":"u15"},
    "2e926c064b5f4ce389b1f0d0c54c343e":{
      "scriptId":"u16"},
    "289aab97651f4349a5ed7c0adb8488b1":{
      "scriptId":"u17"},
    "4d46d80498124e46925b84e20ce00b81":{
      "scriptId":"u18"},
    "3c0c70fb9a424a1bb4f04ede0d901c66":{
      "scriptId":"u19"},
    "a096680bbe55419a91e6a12da7c31010":{
      "scriptId":"u20"},
    "aab03beaa5e94c2ea9bbd64dadc2d86d":{
      "scriptId":"u21"},
    "c5d9afd47cd341ccb1de06798764e4a7":{
      "scriptId":"u22"},
    "556980998a7c426b9df11f575da3a352":{
      "scriptId":"u23"},
    "89f1a05c8d4e41e0b66f8560c8899ec5":{
      "scriptId":"u24"},
    "e2ce1ca14b324f7d868ff5538b758bcf":{
      "scriptId":"u25"},
    "85494578491e444493034a1f4d705b30":{
      "scriptId":"u26"},
    "49d7e34511cd4573865d75743785671d":{
      "scriptId":"u27"},
    "80deec4f5a0f4df4a5e9eeb236b8cab0":{
      "scriptId":"u28"},
    "1736bf5fb4cb4799af718c1ded901dd3":{
      "scriptId":"u29"},
    "10871347c7d149bc99d0f604f982c027":{
      "scriptId":"u30"},
    "82da7de5f6f5457d8029155658bd0db1":{
      "scriptId":"u31"},
    "5316e4f90c1949bbb0943826ab093268":{
      "scriptId":"u32"},
    "e4fcedbfcfe64ddabb570c5dc924f40f":{
      "scriptId":"u33"},
    "695b669082a243f181edf8919ac6cfbd":{
      "scriptId":"u34"},
    "842c4501924748a5944ed1d21796bebc":{
      "scriptId":"u35"},
    "92a38a3a154944c38f746a5c244de8cb":{
      "scriptId":"u36"},
    "7a86f844fa594a108389d0ed8b0f7256":{
      "scriptId":"u37"},
    "5067f333d0854d46808cc42402bec01a":{
      "scriptId":"u38"},
    "3905b26c9934470a9fd8fe1fff7e7b34":{
      "scriptId":"u39"},
    "b1ed207623614de2bb90ca6026e5f1fe":{
      "scriptId":"u40"},
    "0981b3f0ea504c86b71332925f96f202":{
      "scriptId":"u41"},
    "f37efc1d74684847ae5407a865317bd0":{
      "scriptId":"u42"},
    "e47c89d1d5524a969d73057ed41c5074":{
      "scriptId":"u43"},
    "61afe1734a0a48e9a499304c26c91819":{
      "scriptId":"u44"},
    "f19b3d2f71fb4d3597688f813c9143c6":{
      "scriptId":"u45"},
    "60cf08b269d540f9be566102ef37d686":{
      "scriptId":"u46"},
    "3e242e6410834a03a8ce31b3f87ee2c3":{
      "scriptId":"u47"},
    "085d7b95579d4c1a9b658a59c519d4d5":{
      "scriptId":"u48"},
    "7ce9194dd85a48b79ca7afd953c2a6c8":{
      "scriptId":"u49"},
    "70655b805b094744a2900c3bea09a7cc":{
      "scriptId":"u50"},
    "27e7a9d463af4d73a9e5085a8f95f1f1":{
      "scriptId":"u51"}}});
﻿$axure.loadCurrentPage({
  "url":"2_1_1激活农旅卡.html",
  "generationDate":new Date(1508740429766.22),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"status",
"package",
"payFrom",
"nc"],
  "page":{
    "packageId":"2531748e939d4b48b7fce744237ad26f",
    "type":"Axure:Page",
    "name":"2.1.1激活农旅卡",
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
            "description":"用例 1<br> (If 值于 nc 等于 &quot;gh&quot;)",
            "isNewIfGroup":false,
            "condition":{
              "exprType":"binaryOp",
              "op":"==",
              "leftExpr":{
                "exprType":"fcall",
                "functionName":"GetGlobalVariableValue",
                "arguments":[{
                    "exprType":"globalVariableLiteral",
                    "variableName":"nc"}]},
              "rightExpr":{
                "exprType":"stringLiteral",
                "value":"gh",
                "stos":[]}},
            "actions":[{
                "action":"setFunction",
                "description":"设置 选中项于 (下拉列表框) = &quot;国汇农场&quot;",
                "expr":{
                  "exprType":"block",
                  "subExprs":[{
                      "exprType":"fcall",
                      "functionName":"SetSelectedOption",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["6e79d8498fba49b194fb39bdf201748f"]},
{
                          "exprType":"stringLiteral",
                          "value":"国汇农场",
                          "stos":[]}]}]}}]},
{
            "description":"用例 2<br> (Else If 值于 nc 等于 &quot;hy&quot;)",
            "isNewIfGroup":false,
            "condition":{
              "exprType":"binaryOp",
              "op":"==",
              "leftExpr":{
                "exprType":"fcall",
                "functionName":"GetGlobalVariableValue",
                "arguments":[{
                    "exprType":"globalVariableLiteral",
                    "variableName":"nc"}]},
              "rightExpr":{
                "exprType":"stringLiteral",
                "value":"hy",
                "stos":[]}},
            "actions":[{
                "action":"setFunction",
                "description":"设置 选中项于 (下拉列表框) = &quot;慧扬农场&quot;",
                "expr":{
                  "exprType":"block",
                  "subExprs":[{
                      "exprType":"fcall",
                      "functionName":"SetSelectedOption",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["6e79d8498fba49b194fb39bdf201748f"]},
{
                          "exprType":"stringLiteral",
                          "value":"慧扬农场",
                          "stos":[]}]}]}}]},
{
            "description":"用例 3<br> (Else If 值于 nc 等于 &quot;hj&quot;)",
            "isNewIfGroup":false,
            "condition":{
              "exprType":"binaryOp",
              "op":"==",
              "leftExpr":{
                "exprType":"fcall",
                "functionName":"GetGlobalVariableValue",
                "arguments":[{
                    "exprType":"globalVariableLiteral",
                    "variableName":"nc"}]},
              "rightExpr":{
                "exprType":"stringLiteral",
                "value":"hj",
                "stos":[]}},
            "actions":[{
                "action":"setFunction",
                "description":"设置 选中项于 (下拉列表框) = &quot;和记农庄&quot;",
                "expr":{
                  "exprType":"block",
                  "subExprs":[{
                      "exprType":"fcall",
                      "functionName":"SetSelectedOption",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["6e79d8498fba49b194fb39bdf201748f"]},
{
                          "exprType":"stringLiteral",
                          "value":"和记农庄",
                          "stos":[]}]}]}}]}]}},
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
              "height":684}},
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
                  "height":684}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/2_1我的农旅卡（待激活）/u0.png"}},
{
          "id":"7cd79df75a1a40d0be2f5e9fd844911f",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
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
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_0农旅卡主题页（极简）/u2.png"}},
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
            "normal~":"images/1_0农旅卡主题页（极简）/u4.png"}},
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
              "x":134,
              "y":9},
            "size":{
              "width":91,
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
                  "x":134,
                  "y":9},
                "size":{
                  "width":91,
                  "height":22}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"7c0672eba8604eaca8df1758e1a4b00b",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFFFFFF,
              "opacity":1},
            "fill":{
              "fillType":"solid",
              "color":0xFF0099FF},
            "location":{
              "x":20,
              "y":410},
            "size":{
              "width":320,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"5"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c10e8659456d4b7ebab248f024aab5f4",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFFFFFF,
                  "opacity":1},
                "fill":{
                  "fillType":"solid",
                  "color":0xFF0099FF},
                "location":{
                  "x":20,
                  "y":410},
                "size":{
                  "width":320,
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
                      "description":"在 当前窗口 打开 2.2我的农旅卡",
                      "target":{
                        "targetType":"page",
                        "url":"2_2我的农旅卡.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/1_5完善信息/u20.png"}},
{
          "id":"2d68d933b9ac48f391625b996409b9fd",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":50},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"31d8fab042c943fe935001d23edef93e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":50},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_1_2农场体验游详情/u2.png"}},
{
          "id":"ee466ecb2bd742238102295788b856bc",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":43,
              "y":61},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"859fe37d81f540d4b2ef79567d3143ef",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":43,
                  "y":61},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"a7c53fceb0a24f6ab8852bbedf9871cd",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":58},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"f1bac447175445c593315ab7446f230e",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":89},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"55369b3fad8f4df2b10ba556f49d450a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":89},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_1_2农场体验游详情/u2.png"}},
{
          "id":"2061561ab5c24ab8afc248cfddf9e438",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":43,
              "y":100},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"52009fa9f3cd483cadd75685160d9eb6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":43,
                  "y":100},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"68740a9190fa490e8be1a83e948d7c80",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":97},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"f80de6e2ee024db890fcb68443fe2f9a",
          "label":"",
          "type":"checkbox",
          "styleType":"checkbox",
          "visible":true,
          "style":{
            "fontSize":"11px",
            "verticalAlignment":"middle",
            "location":{
              "x":66,
              "y":386},
            "size":{
              "width":228,
              "height":14}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"e14890e11e18441482a1fbfdb369eadd",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "verticalAlignment":"middle",
                "location":{
                  "x":66,
                  "y":386},
                "size":{
                  "width":228,
                  "height":14}},
              "adaptiveStyles":{
}}]},
{
          "id":"4c955aa8f4694e20812778e6f68408b3",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":168},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"43211c08575849ab8442c42776ea0470",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":168},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_1_2农场体验游详情/u2.png"}},
{
          "id":"22c4f13a9a814370a46cc60626bd3ab6",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":30,
              "y":180},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d6b9ddff6b994e93987a2914f504782c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":30,
                  "y":180},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"cb523993554a4b849f2cfd6eedd1737a",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":176},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"eda0e6d718e74cae9b0e396a79f44db0",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":207},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"56448dc64df043a29c6b7f74777107f2",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":207},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_1_2农场体验游详情/u2.png"}},
{
          "id":"b7538796cbd0495d905299f3ff6f27a6",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":30,
              "y":219},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"71eb1544582b4bfc8562f0b72e56f7bb",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":30,
                  "y":219},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"234fb56f698f4fd29e5323180767db34",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":215},
            "size":{
              "width":152,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"0a37c16677b14f48bb2a8823b26cde43",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":247},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"13215642f3c244288ec66e0e5bfcb7ae",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":247},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_1_2农场体验游详情/u2.png"}},
{
          "id":"00bb9d2122344640a76edec38d9c1283",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":255},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"2a8b4ccadcf34873b84a19364012cf09",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":285},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"9182b8d30b824ab896c877e35cb0e296",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":285},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_1_2农场体验游详情/u2.png"}},
{
          "id":"4efc368b50bc4b48acbcb18beb2f8aec",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":293},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"4fb30ef5fcc843a5bd26cc5e1aeedd7a",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":17,
              "y":261},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"dd5742346aea451486ef475b45df0506",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":17,
                  "y":261},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"e201d0e11baa4a69a213706cc9fae9a5",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":17,
              "y":297},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5a1c12a9eb97443aacd8748ffccd53ae",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":17,
                  "y":297},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"8d1b4f31ec224f0a819e5bc60852adb9",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"11px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFFFFFF,
              "opacity":1},
            "fill":{
              "fillType":"solid",
              "color":0xFF0099FF},
            "location":{
              "x":242,
              "y":214},
            "size":{
              "width":108,
              "height":26},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b7ec6875bce64685bd1c5fd92132aa7e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFFFFFF,
                  "opacity":1},
                "fill":{
                  "fillType":"solid",
                  "color":0xFF0099FF},
                "location":{
                  "x":242,
                  "y":214},
                "size":{
                  "width":108,
                  "height":26},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/2_1_1激活农旅卡/u42.png"}},
{
          "id":"0ff8640c64b84a03852da094746fa1cf",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":129},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"4bb3eb7c72f7436c84dfd63f168e2b93",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":129},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_1_2农场体验游详情/u2.png"}},
{
          "id":"0e416bd3b50345a2b77152efd7350202",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":17,
              "y":139},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d3b33360142d4d0496f6f6db88051306",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":17,
                  "y":139},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"6e79d8498fba49b194fb39bdf201748f",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":137},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"278a06b60aed405583388b7b2e7aa4c6",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":75,
              "y":132.5},
            "size":{
              "width":280,
              "height":34}},
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
                      "description":"在 当前窗口 打开 2.1.1.1选择指定农场",
                      "target":{
                        "targetType":"page",
                        "url":"2_1_1_1选择指定农场.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"1752785d183d4fabbd312db9829a35f9",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":160,
              "y":381},
            "size":{
              "width":129,
              "height":24}},
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
                      "description":"在 当前窗口 打开 1.8服务条款",
                      "target":{
                        "targetType":"page",
                        "url":"1_8服务条款.html",
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
    "7c0672eba8604eaca8df1758e1a4b00b":{
      "scriptId":"u8"},
    "c10e8659456d4b7ebab248f024aab5f4":{
      "scriptId":"u9"},
    "2d68d933b9ac48f391625b996409b9fd":{
      "scriptId":"u10"},
    "31d8fab042c943fe935001d23edef93e":{
      "scriptId":"u11"},
    "ee466ecb2bd742238102295788b856bc":{
      "scriptId":"u12"},
    "859fe37d81f540d4b2ef79567d3143ef":{
      "scriptId":"u13"},
    "a7c53fceb0a24f6ab8852bbedf9871cd":{
      "scriptId":"u14"},
    "f1bac447175445c593315ab7446f230e":{
      "scriptId":"u15"},
    "55369b3fad8f4df2b10ba556f49d450a":{
      "scriptId":"u16"},
    "2061561ab5c24ab8afc248cfddf9e438":{
      "scriptId":"u17"},
    "52009fa9f3cd483cadd75685160d9eb6":{
      "scriptId":"u18"},
    "68740a9190fa490e8be1a83e948d7c80":{
      "scriptId":"u19"},
    "f80de6e2ee024db890fcb68443fe2f9a":{
      "scriptId":"u20"},
    "e14890e11e18441482a1fbfdb369eadd":{
      "scriptId":"u21"},
    "4c955aa8f4694e20812778e6f68408b3":{
      "scriptId":"u22"},
    "43211c08575849ab8442c42776ea0470":{
      "scriptId":"u23"},
    "22c4f13a9a814370a46cc60626bd3ab6":{
      "scriptId":"u24"},
    "d6b9ddff6b994e93987a2914f504782c":{
      "scriptId":"u25"},
    "cb523993554a4b849f2cfd6eedd1737a":{
      "scriptId":"u26"},
    "eda0e6d718e74cae9b0e396a79f44db0":{
      "scriptId":"u27"},
    "56448dc64df043a29c6b7f74777107f2":{
      "scriptId":"u28"},
    "b7538796cbd0495d905299f3ff6f27a6":{
      "scriptId":"u29"},
    "71eb1544582b4bfc8562f0b72e56f7bb":{
      "scriptId":"u30"},
    "234fb56f698f4fd29e5323180767db34":{
      "scriptId":"u31"},
    "0a37c16677b14f48bb2a8823b26cde43":{
      "scriptId":"u32"},
    "13215642f3c244288ec66e0e5bfcb7ae":{
      "scriptId":"u33"},
    "00bb9d2122344640a76edec38d9c1283":{
      "scriptId":"u34"},
    "2a8b4ccadcf34873b84a19364012cf09":{
      "scriptId":"u35"},
    "9182b8d30b824ab896c877e35cb0e296":{
      "scriptId":"u36"},
    "4efc368b50bc4b48acbcb18beb2f8aec":{
      "scriptId":"u37"},
    "4fb30ef5fcc843a5bd26cc5e1aeedd7a":{
      "scriptId":"u38"},
    "dd5742346aea451486ef475b45df0506":{
      "scriptId":"u39"},
    "e201d0e11baa4a69a213706cc9fae9a5":{
      "scriptId":"u40"},
    "5a1c12a9eb97443aacd8748ffccd53ae":{
      "scriptId":"u41"},
    "8d1b4f31ec224f0a819e5bc60852adb9":{
      "scriptId":"u42"},
    "b7ec6875bce64685bd1c5fd92132aa7e":{
      "scriptId":"u43"},
    "0ff8640c64b84a03852da094746fa1cf":{
      "scriptId":"u44"},
    "4bb3eb7c72f7436c84dfd63f168e2b93":{
      "scriptId":"u45"},
    "0e416bd3b50345a2b77152efd7350202":{
      "scriptId":"u46"},
    "d3b33360142d4d0496f6f6db88051306":{
      "scriptId":"u47"},
    "6e79d8498fba49b194fb39bdf201748f":{
      "scriptId":"u48"},
    "278a06b60aed405583388b7b2e7aa4c6":{
      "scriptId":"u49"},
    "1752785d183d4fabbd312db9829a35f9":{
      "scriptId":"u50"}}});
﻿$axure.loadCurrentPage({
  "url":"5_5_2提交成功.html",
  "generationDate":new Date(1510019216803.2),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"status",
"package",
"payFrom",
"nc"],
  "page":{
    "packageId":"437595060eec46f8927f9d29adec186f",
    "type":"Axure:Page",
    "name":"5.5.2提交成功",
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
                "description":"Set Panel to State",
                "panelsToStates":[]}]}]}},
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
            "normal~":"images/1_0农旅卡主题页（极简）/u91.png"}},
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
            "normal~":"images/1_3支付成功/u8.png"}},
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
            "normal~":"images/1_3支付成功/u10.png"}},
{
          "id":"21163552684e464a923121757a0d1de4",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":128,
              "y":140},
            "size":{
              "width":105,
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
                  "x":128,
                  "y":140},
                "size":{
                  "width":105,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"e3a9997240d643db81e863cf116b4e43",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":260},
            "size":{
              "width":360,
              "height":70}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"35e834842ab649aeac82f5f63c02eba0",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":260},
                "size":{
                  "width":360,
                  "height":70}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_3支付成功/u17.png"}},
{
          "id":"e8f797c249104cd7818426e3811ae5c7",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFFDDDDDD},
            "location":{
              "x":183,
              "y":180},
            "size":{
              "width":117,
              "height":40},
            "cornerRadiusTopLeft":"5"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"e7fc34ae7d81485f9b16923d1dfe0992",
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
                  "x":183,
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
                      "description":"在 当前窗口 打开 5.5.3宅配信息",
                      "target":{
                        "targetType":"page",
                        "url":"5_5_3宅配信息.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/1_3支付成功/u15.png"}},
{
          "id":"29cc34c407774b33a862c7c526afdf5a",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":40,
              "y":180},
            "size":{
              "width":117,
              "height":40},
            "cornerRadiusTopLeft":"5"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f95b1386421140e8843f72b64996973c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":40,
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
                      "description":"在 当前窗口 打开 0.0主页",
                      "target":{
                        "targetType":"page",
                        "url":"0_0主页.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/6_1_2支付成功/u14.png"}}]}},
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
    "e3a9997240d643db81e863cf116b4e43":{
      "scriptId":"u14"},
    "35e834842ab649aeac82f5f63c02eba0":{
      "scriptId":"u15"},
    "e8f797c249104cd7818426e3811ae5c7":{
      "scriptId":"u16"},
    "e7fc34ae7d81485f9b16923d1dfe0992":{
      "scriptId":"u17"},
    "29cc34c407774b33a862c7c526afdf5a":{
      "scriptId":"u18"},
    "f95b1386421140e8843f72b64996973c":{
      "scriptId":"u19"}}});
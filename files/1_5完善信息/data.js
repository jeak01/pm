﻿$axure.loadCurrentPage({
  "url":"1_5完善信息.html",
  "generationDate":new Date(1514252957281.49),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"status",
"package",
"payFrom",
"nc",
"carNum",
"recharge"],
  "page":{
    "packageId":"9d36dbf5a5464a46bb695b4d10820eed",
    "type":"Axure:Page",
    "name":"1.5完善信息",
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
                "description":"设置 选中项于 下拉列表框 = &quot;国汇农场&quot;",
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
                          "value":["960792adfa1a4577bbe7428b8d0bffe4"]},
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
                "description":"设置 选中项于 下拉列表框 = &quot;慧扬农场&quot;",
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
                          "value":["960792adfa1a4577bbe7428b8d0bffe4"]},
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
                "description":"设置 选中项于 下拉列表框 = &quot;和记农庄&quot;",
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
                          "value":["960792adfa1a4577bbe7428b8d0bffe4"]},
{
                          "exprType":"stringLiteral",
                          "value":"和记农庄",
                          "stos":[]}]}]}}]}]}},
    "diagram":{
      "objects":[{
          "id":"01066d9dcd014aba9dab61dc48d4309f",
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
              "id":"d675f3445d9e4fd7a2ecd1855710a87e",
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
          "id":"43e98b44b59c4e86bee9af4c520c052a",
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
              "id":"a8e7c3a1dbc2408cb971a933c7b073d5",
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
            "normal~":"images/1_0农旅卡主题页/u2.png"}},
{
          "id":"6be807e30780489aaedb715efeccca58",
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
              "id":"1ce6198efaad421785e97e13c793bfdd",
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
            "normal~":"images/0_0主页/u226.png"}},
{
          "id":"9caeea11103b4a71ad1d2b6b3af5d573",
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
              "width":73,
              "height":22}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c7b7a4690f0845e1a4b869a1c34979ca",
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
                  "width":73,
                  "height":22}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"c42bd293706e4c10a6c0dda0e038676f",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"11px",
            "location":{
              "x":34,
              "y":360},
            "size":{
              "width":292,
              "height":28}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"532d726a3b184d50b8b73222b40c2c38",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "location":{
                  "x":34,
                  "y":360},
                "size":{
                  "width":292,
                  "height":28}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"a06ffd0eb6964c2c969c607ed4125186",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":93},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0ffa776228ff4895beb83916a7d31644",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":93},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/0_0主页/u167.png"}},
{
          "id":"48cb4998cd644d4d8f9bb6c0e3efd317",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":101},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"77c7b404a58c495c98a71bddfb74a967",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":132},
            "size":{
              "width":360,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cf7d753a9508454683f9ff56d4c61571",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":132},
                "size":{
                  "width":360,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/0_0主页/u167.png"}},
{
          "id":"d28b7085a3a04f1797ad4b6ae930e242",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":80,
              "y":140},
            "size":{
              "width":270,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"368ae6803f454960920e24e53fb8509a",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":17,
              "y":107},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b9224d9013ee421697a72d57b5fcd822",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":17,
                  "y":107},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"bb0e66f95b9943469ae6bdc72d8b634b",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":17,
              "y":143},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"2bd14c7b8c2c433798ebfa2020d46add",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":17,
                  "y":143},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"931920e3ec4a428ba7de1aa83eef765d",
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
              "y":310},
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
              "id":"d3dab87ebd434406b9f23a8d8b00a6db",
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
                  "y":310},
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
                      "description":"在 当前窗口 打开 1.6提交成功",
                      "target":{
                        "targetType":"page",
                        "url":"1_6提交成功.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/1_5完善信息/u20.png"}},
{
          "id":"6aa6a0264ed54d9a80f251e159f7cc27",
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
              "id":"66d46f201ede4141a136404d7d2dc405",
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
            "normal~":"images/0_0主页/u167.png"}},
{
          "id":"c235b8a71e0c4246b7315f2a181e64d1",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":17,
              "y":60},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"35c595052ec742fba5161805beb9e43d",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":17,
                  "y":60},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"960792adfa1a4577bbe7428b8d0bffe4",
          "label":"下拉列表框",
          "type":"comboBox",
          "styleType":"comboBox",
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
          "id":"a9eb0c9939c04cfe9978a98878367439",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":75,
              "y":54},
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
                      "description":"在 当前窗口 打开 1.1选择指定农场",
                      "target":{
                        "targetType":"page",
                        "url":"1_1选择指定农场.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"c5de3fcd4862446f91b98ba71d54fb75",
          "label":"",
          "type":"checkbox",
          "styleType":"checkbox",
          "visible":true,
          "style":{
            "fontSize":"11px",
            "verticalAlignment":"middle",
            "location":{
              "x":56.5,
              "y":276},
            "size":{
              "width":228,
              "height":14}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"bdd92f95cae1409abe7d297c00b32476",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "verticalAlignment":"middle",
                "location":{
                  "x":56.5,
                  "y":276},
                "size":{
                  "width":228,
                  "height":14}},
              "adaptiveStyles":{
}}]},
{
          "id":"d5eb1ae10f36426aa9a5e258b7f22d15",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":155,
              "y":271},
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
    "01066d9dcd014aba9dab61dc48d4309f":{
      "scriptId":"u0"},
    "d675f3445d9e4fd7a2ecd1855710a87e":{
      "scriptId":"u1"},
    "43e98b44b59c4e86bee9af4c520c052a":{
      "scriptId":"u2"},
    "a8e7c3a1dbc2408cb971a933c7b073d5":{
      "scriptId":"u3"},
    "6be807e30780489aaedb715efeccca58":{
      "scriptId":"u4"},
    "1ce6198efaad421785e97e13c793bfdd":{
      "scriptId":"u5"},
    "9caeea11103b4a71ad1d2b6b3af5d573":{
      "scriptId":"u6"},
    "c7b7a4690f0845e1a4b869a1c34979ca":{
      "scriptId":"u7"},
    "c42bd293706e4c10a6c0dda0e038676f":{
      "scriptId":"u8"},
    "532d726a3b184d50b8b73222b40c2c38":{
      "scriptId":"u9"},
    "a06ffd0eb6964c2c969c607ed4125186":{
      "scriptId":"u10"},
    "0ffa776228ff4895beb83916a7d31644":{
      "scriptId":"u11"},
    "48cb4998cd644d4d8f9bb6c0e3efd317":{
      "scriptId":"u12"},
    "77c7b404a58c495c98a71bddfb74a967":{
      "scriptId":"u13"},
    "cf7d753a9508454683f9ff56d4c61571":{
      "scriptId":"u14"},
    "d28b7085a3a04f1797ad4b6ae930e242":{
      "scriptId":"u15"},
    "368ae6803f454960920e24e53fb8509a":{
      "scriptId":"u16"},
    "b9224d9013ee421697a72d57b5fcd822":{
      "scriptId":"u17"},
    "bb0e66f95b9943469ae6bdc72d8b634b":{
      "scriptId":"u18"},
    "2bd14c7b8c2c433798ebfa2020d46add":{
      "scriptId":"u19"},
    "931920e3ec4a428ba7de1aa83eef765d":{
      "scriptId":"u20"},
    "d3dab87ebd434406b9f23a8d8b00a6db":{
      "scriptId":"u21"},
    "6aa6a0264ed54d9a80f251e159f7cc27":{
      "scriptId":"u22"},
    "66d46f201ede4141a136404d7d2dc405":{
      "scriptId":"u23"},
    "c235b8a71e0c4246b7315f2a181e64d1":{
      "scriptId":"u24"},
    "35c595052ec742fba5161805beb9e43d":{
      "scriptId":"u25"},
    "960792adfa1a4577bbe7428b8d0bffe4":{
      "scriptId":"u26"},
    "a9eb0c9939c04cfe9978a98878367439":{
      "scriptId":"u27"},
    "c5de3fcd4862446f91b98ba71d54fb75":{
      "scriptId":"u28"},
    "bdd92f95cae1409abe7d297c00b32476":{
      "scriptId":"u29"},
    "d5eb1ae10f36426aa9a5e258b7f22d15":{
      "scriptId":"u30"}}});
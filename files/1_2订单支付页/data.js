﻿$axure.loadCurrentPage({
  "url":"1_2订单支付页.html",
  "generationDate":new Date(1520912054835.21),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"status",
"package",
"payFrom",
"nc",
"carNum",
"recharge"],
  "page":{
    "packageId":"be372b7a31ed4f218533b26dbe12507e",
    "type":"Axure:Page",
    "name":"1.2订单支付页",
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
},
    "diagram":{
      "objects":[{
          "id":"5e1e26d01dfb43dfa5d8ac79c30854e6",
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
              "id":"c4ab48bdb03f4e42bac2621cece1f496",
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
          "id":"3d730967bb3547f6b4438449fe3e6f95",
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
              "id":"756ae8fba5744981af8f1e36ac1fbd0a",
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
            "normal~":"images/0_0主页/top_u44.png"}},
{
          "id":"f5e914bb11894625a2c816a92a7852c9",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":41,
              "height":41},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF000000}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"1c4787ab4add428b91aea4c62688524e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":41,
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
            "normal~":"images/0_0主页/u180.png"}},
{
          "id":"274b1989398e4cbf9e0b80ffb1e65608",
          "label":"",
          "type":"buttonShape",
          "styleType":"h1",
          "visible":true,
          "style":{
            "fontName":"'Arial Normal', 'Arial'",
            "fontSize":"18px",
            "fontWeight":"400",
            "location":{
              "x":151,
              "y":9},
            "size":{
              "width":73,
              "height":22}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d509b145bf2b4672a7184c45316f3837",
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
                  "x":151,
                  "y":9},
                "size":{
                  "width":73,
                  "height":22}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"cd167d8da94d492b80f4f908ea476dbc",
          "label":"订单信息板",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":-1,
              "y":39},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"58e457b8183a4a2f896991ad04b78f79",
              "label":"国汇农旅卡",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"2271dbbb5c4d4d86b808ce480f67f56b",
                  "label":"",
                  "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":2,
                      "y":0},
                    "size":{
                      "width":358,
                      "height":81},
                    "borderFill":{
                      "fillType":"solid",
                      "color":0xFFAAAAAA}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"b342710c1fa740c79c6f1557f2905cf4",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":2,
                          "y":0},
                        "size":{
                          "width":358,
                          "height":81},
                        "borderFill":{
                          "fillType":"solid",
                          "color":0xFFAAAAAA}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/1_2订单支付页/u9.png"}},
{
                  "id":"54d9fb4592a441a896f93b17f8386175",
                  "label":"",
                  "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                  "type":"horizontalLine",
                  "styleType":"horizontalLine",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":1,
                      "y":20},
                    "size":{
                      "width":360,
                      "height":10},
                    "borderFill":{
                      "fillType":"solid",
                      "color":0xFFAAAAAA}},
                  "adaptiveStyles":{
},
                  "images":{
                    "start~":"resources/images/transparent.gif",
                    "end~":"resources/images/transparent.gif",
                    "line~":"images/1_2订单支付页/u11_line.png"}},
{
                  "id":"693544bfc1c2430d95bdb8a3b3c9ed09",
                  "label":"",
                  "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                  "type":"horizontalLine",
                  "styleType":"horizontalLine",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":0,
                      "y":47},
                    "size":{
                      "width":360,
                      "height":10},
                    "borderFill":{
                      "fillType":"solid",
                      "color":0xFFAAAAAA}},
                  "adaptiveStyles":{
},
                  "images":{
                    "start~":"resources/images/transparent.gif",
                    "end~":"resources/images/transparent.gif",
                    "line~":"images/1_2订单支付页/u11_line.png"}},
{
                  "id":"e54020b7567e41dcb17b8ad92a7ec2ec",
                  "label":"",
                  "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontSize":"11px",
                    "location":{
                      "x":295,
                      "y":5},
                    "size":{
                      "width":56,
                      "height":16}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"f13e6689746544a3bd34631420bca3b1",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fontSize":"11px",
                        "location":{
                          "x":295,
                          "y":5},
                        "size":{
                          "width":56,
                          "height":16}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}},
{
                  "id":"cba2258eda7841c1b6666427ba5c4ca8",
                  "label":"",
                  "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontSize":"11px",
                    "location":{
                      "x":272,
                      "y":33},
                    "size":{
                      "width":79,
                      "height":14}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"6012386a493a4e3fb278db686ff53be8",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fontSize":"11px",
                        "location":{
                          "x":272,
                          "y":33},
                        "size":{
                          "width":79,
                          "height":14}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}},
{
                  "id":"45289407b12448328c85477bd912fe0e",
                  "label":"",
                  "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFF0000,
                      "opacity":1},
                    "location":{
                      "x":299,
                      "y":58},
                    "size":{
                      "width":51,
                      "height":16}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"5e985dcc60204d878e529563edba9b4c",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"cd167d8da94d492b80f4f908ea476dbc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFFFF0000,
                          "opacity":1},
                        "location":{
                          "x":299,
                          "y":58},
                        "size":{
                          "width":51,
                          "height":16}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}]}]},
{
          "id":"8193c642abe44ced99265b5d135f8874",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":14,
              "y":44},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"83a70de19ce642589d3f79d110dc106c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":14,
                  "y":44},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"83d14489f468442992c212f6aeab4bf7",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":14,
              "y":70},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5c3d192cfe75478f9f64812ebcd191a9",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":14,
                  "y":70},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"69aa5017cec04afb8d7cfeb1f4eac63e",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":14,
              "y":96},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"9b873efb856b4209afbb6cba9327ff01",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":14,
                  "y":96},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"a1cf3b9035d7435196ec909af4d8ac90",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":130},
            "size":{
              "width":360,
              "height":40}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"118556308575470780855442261b00c5",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":130},
                "size":{
                  "width":360,
                  "height":40}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/0_0主页/top_u44.png"}},
{
          "id":"28e10a054860476b87baf08ec34d4791",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":85,
              "y":142},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c228f9743642424cbc805c170da19d5d",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":85,
                  "y":142},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"9a7232a9764c4b81a91818b8c5531e75",
          "label":"",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":600},
            "size":{
              "width":360,
              "height":50}},
          "adaptiveStyles":{
},
          "fixedHorizontal":"left",
          "fixedMarginHorizontal":0,
          "fixedVertical":"bottom",
          "fixedMarginVertical":0,
          "fixedKeepInFront":true,
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"ea634d16edaf4b15bbc4d85ff358744c",
              "label":"国汇农旅卡",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"f3f6693211754998b27eb8285860030a",
                  "label":"",
                  "parentDynamicPanel":"9a7232a9764c4b81a91818b8c5531e75",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":360,
                      "height":50}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"db55f0e465e743a09184c68c5f230a1a",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"9a7232a9764c4b81a91818b8c5531e75",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":360,
                          "height":50}},
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
                              "description":"在 当前窗口 打开 1.3支付成功",
                              "target":{
                                "targetType":"page",
                                "url":"1_3支付成功.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"images/1_2订单支付页/u30.png"}}]}]},
{
          "id":"319696ae64af44628fb3478a274e41cd",
          "label":"",
          "type":"checkbox",
          "styleType":"checkbox",
          "visible":true,
          "style":{
            "location":{
              "x":15,
              "y":142},
            "size":{
              "width":20,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"ce918922b5f0463d9b7033e30e96dfd5",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":15,
                  "y":142},
                "size":{
                  "width":20,
                  "height":16}},
              "adaptiveStyles":{
}}]},
{
          "id":"39098f7089364b669a346008893620fd",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":49,
              "y":136},
            "size":{
              "width":25,
              "height":25}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"30e79aac00a64c5c83311206e6d8eda1",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":49,
                  "y":136},
                "size":{
                  "width":25,
                  "height":25}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/1_2订单支付页/u34.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "5e1e26d01dfb43dfa5d8ac79c30854e6":{
      "scriptId":"u0"},
    "c4ab48bdb03f4e42bac2621cece1f496":{
      "scriptId":"u1"},
    "3d730967bb3547f6b4438449fe3e6f95":{
      "scriptId":"u2"},
    "756ae8fba5744981af8f1e36ac1fbd0a":{
      "scriptId":"u3"},
    "f5e914bb11894625a2c816a92a7852c9":{
      "scriptId":"u4"},
    "1c4787ab4add428b91aea4c62688524e":{
      "scriptId":"u5"},
    "274b1989398e4cbf9e0b80ffb1e65608":{
      "scriptId":"u6"},
    "d509b145bf2b4672a7184c45316f3837":{
      "scriptId":"u7"},
    "cd167d8da94d492b80f4f908ea476dbc":{
      "scriptId":"u8"},
    "2271dbbb5c4d4d86b808ce480f67f56b":{
      "scriptId":"u9"},
    "b342710c1fa740c79c6f1557f2905cf4":{
      "scriptId":"u10"},
    "54d9fb4592a441a896f93b17f8386175":{
      "scriptId":"u11"},
    "693544bfc1c2430d95bdb8a3b3c9ed09":{
      "scriptId":"u12"},
    "e54020b7567e41dcb17b8ad92a7ec2ec":{
      "scriptId":"u13"},
    "f13e6689746544a3bd34631420bca3b1":{
      "scriptId":"u14"},
    "cba2258eda7841c1b6666427ba5c4ca8":{
      "scriptId":"u15"},
    "6012386a493a4e3fb278db686ff53be8":{
      "scriptId":"u16"},
    "45289407b12448328c85477bd912fe0e":{
      "scriptId":"u17"},
    "5e985dcc60204d878e529563edba9b4c":{
      "scriptId":"u18"},
    "8193c642abe44ced99265b5d135f8874":{
      "scriptId":"u19"},
    "83a70de19ce642589d3f79d110dc106c":{
      "scriptId":"u20"},
    "83d14489f468442992c212f6aeab4bf7":{
      "scriptId":"u21"},
    "5c3d192cfe75478f9f64812ebcd191a9":{
      "scriptId":"u22"},
    "69aa5017cec04afb8d7cfeb1f4eac63e":{
      "scriptId":"u23"},
    "9b873efb856b4209afbb6cba9327ff01":{
      "scriptId":"u24"},
    "a1cf3b9035d7435196ec909af4d8ac90":{
      "scriptId":"u25"},
    "118556308575470780855442261b00c5":{
      "scriptId":"u26"},
    "28e10a054860476b87baf08ec34d4791":{
      "scriptId":"u27"},
    "c228f9743642424cbc805c170da19d5d":{
      "scriptId":"u28"},
    "9a7232a9764c4b81a91818b8c5531e75":{
      "scriptId":"u29"},
    "f3f6693211754998b27eb8285860030a":{
      "scriptId":"u30"},
    "db55f0e465e743a09184c68c5f230a1a":{
      "scriptId":"u31"},
    "319696ae64af44628fb3478a274e41cd":{
      "scriptId":"u32"},
    "ce918922b5f0463d9b7033e30e96dfd5":{
      "scriptId":"u33"},
    "39098f7089364b669a346008893620fd":{
      "scriptId":"u34"},
    "30e79aac00a64c5c83311206e6d8eda1":{
      "scriptId":"u35"}}});
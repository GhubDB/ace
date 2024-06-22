/* eslint-disable linebreak-style */
"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var VitrisHighlightRules = function () {
    this.$rules = {
        "start": [
            {
                "token": "keyword",
                "regex": "(COMMENT OUT THIS LINE|ADD SEMICOLON->|REVERSE CAPITALIZATION ON ALL|->)"
            },
            {
                "token": "invalid.deprecated",
                "regex": "(SWAP|WITH)"
            },
            {
                "token": "comment",
                "regex": "(/\\*)",
                "push": "multi_line_comment__1"
            },
            {
                "token": "comment",
                "regex": "(//.*)"
            },
            {
                "token": "constant.numeric",
                "regex": "(DELETE->|<-DELETE|DELETE INSIDE(.+)->)"
            },
            {
                "token": "storage.type",
                "regex": "(COPY->|<-COPY)"
            },
            {
                "token": "storage.modifier",
                "regex": "(PASTE->|<-PASTE)"
            },
            {
                "token": "string.single",
                "regex": "(<-ADD \\[ ] BRACES->|<-ADD \\( \\) BRACES->)"
            },
            {
                "token": "string.double",
                "regex": "(<-ADD { } BRACES->)"
            },
            {
                "token": "variable",
                "regex": "(CHANGE ALL|TO|INCREMENT NUMBERS BY 1 ->|DECREMENT NUMBERS BY 1 ->)"
            },
            {
                defaultToken: "text"
            }
        ],
        "multi_line_comment__1": [
            {
                "token": "comment",
                "regex": "(\\*/)",
                "next": "pop"
            },
            {
                defaultToken: "comment"
            }
        ]
    };
    this.normalizeRules();
};
oop.inherits(VitrisHighlightRules, TextHighlightRules);
exports.VitrisHighlightRules = VitrisHighlightRules;
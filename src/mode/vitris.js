/* eslint-disable linebreak-style */
"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var HighlightRules = require("./vitris_highlight_rules").VitrisHighlightRules;

var Mode = function () {
    this.HighlightRules = HighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};

oop.inherits(Mode, TextMode);

(function () {
    this.$id = "ace/mode/vitris";
}).call(Mode.prototype);

exports.Mode = Mode;

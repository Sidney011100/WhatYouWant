"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-serve-static-core");
var test = function (req) {
    var _a;
    /// <reference path="./types/express/index.d.ts" />
    (_a = req.user) === null || _a === void 0 ? void 0 : _a.uid; // This should compile without error
};

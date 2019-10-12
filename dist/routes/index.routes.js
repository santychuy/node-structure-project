"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/easter/fuckin/egg', function (req, res) {
  res.send('Node project structure');
});
var _default = router;
exports["default"] = _default;
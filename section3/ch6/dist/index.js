"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _index = _interopRequireDefault(require("./controllers/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// 미들웨어를 먼저 작성합니다.
app.use(_express["default"].json({
  limit: "700mb"
}));
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use((0, _helmet["default"])());
_index["default"].forEach(function (controller) {
  app.use(controller.path, controller.router);
});
app.listen(8000);
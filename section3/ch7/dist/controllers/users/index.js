"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;
var _express = require("express");
var _users = require("./users.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _init = /*#__PURE__*/new WeakSet();
var _getUsers = /*#__PURE__*/new WeakSet();
var UserController = /*#__PURE__*/_createClass(function UserController() {
  _classCallCheck(this, UserController);
  _classPrivateMethodInitSpec(this, _getUsers);
  _classPrivateMethodInitSpec(this, _init);
  _defineProperty(this, "router", (0, _express.Router)());
  _defineProperty(this, "path", "/users");
  _classPrivateMethodGet(this, _init, _init2).call(this);
});
function _init2() {
  this.router.get("/", _classPrivateMethodGet(this, _getUsers, _getUsers2));
}
function _getUsers2(req, res) {
  res.status(200).json({
    users: _users.users
  });
}
var userController = new UserController();
exports.userController = userController;
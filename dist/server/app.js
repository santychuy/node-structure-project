"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _config = _interopRequireDefault(require("./config"));

var _index = _interopRequireDefault(require("../routes/index.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV === 'development') {
  _dotenv["default"].config();
}

//Inits
var app = (0, _express["default"])();
var port = _config["default"].appSetting.port; //Settings

app.set('port', port || 3000);
app.set('views', _path["default"].join(__dirname, '../views'));
app.engine('.hbs', (0, _expressHandlebars["default"])({
  defaultLayout: 'main',
  partialsDir: _path["default"].join(__dirname, '../views/partials'),
  layoutsDir: _path["default"].join(__dirname, '../views/layouts'),
  extname: '.hbs' //helpers: require('.')

}));
app.set('view engine', '.hbs'); //Middlewares

if (process.env.NODE_ENV === 'development') {
  app.use((0, _morgan["default"])('dev'));
}

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //Init Routes

app.use(_index["default"]); //Static Files

app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
var _default = app;
exports["default"] = _default;
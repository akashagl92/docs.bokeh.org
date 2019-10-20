"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var document_1 = require("../../document");
var receiver_1 = require("../../protocol/receiver");
var object_1 = require("../../core/util/object");
var version_1 = require("../../version");
var standalone_1 = require("../standalone");
// TODO: use unique name to allow different bokeh version in different jlab tabs
var module_name = "bokehjs";
var module_version = version_1.version;
function register_wrappers() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, DOMWidgetModel, DOMWidgetView, BokehModel, BokehView, global;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("@jupyter-widgets/base"); })];
                case 1:
                    _a = _b.sent(), DOMWidgetModel = _a.DOMWidgetModel, DOMWidgetView = _a.DOMWidgetView;
                    BokehModel = /** @class */ (function (_super) {
                        tslib_1.__extends(BokehModel, _super);
                        function BokehModel() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        BokehModel.prototype.defaults = function () {
                            return tslib_1.__assign({}, _super.prototype.defaults.call(this), { _model_name: "BokehModel", _model_module: module_name, _model_module_version: module_version, _view_name: "BokehView", _view_module: module_name, _view_module_version: module_version, render_bundle: {} });
                        };
                        BokehModel.__name__ = "BokehModel";
                        BokehModel.serializers = tslib_1.__assign({}, DOMWidgetModel.serializers);
                        return BokehModel;
                    }(DOMWidgetModel));
                    BokehView = /** @class */ (function (_super) {
                        tslib_1.__extends(BokehView, _super);
                        function BokehView(options) {
                            var _this = _super.call(this, options) || this;
                            _this._document = null;
                            _this._blocked = false;
                            _this._receiver = new receiver_1.Receiver();
                            _this.model.on("change:render_bundle", function () { return _this.render(); });
                            _this.listenTo(_this.model, "msg:custom", function (msg) { return _this._consume_patch(msg); });
                            return _this;
                        }
                        BokehView.prototype.render = function () {
                            var _this = this;
                            var bundle = JSON.parse(this.model.get("render_bundle"));
                            var _a = bundle, docs_json = _a.docs_json, render_items = _a.render_items, div = _a.div;
                            this.el.innerHTML = div;
                            var element = this.el.children[0];
                            var json = object_1.values(docs_json)[0];
                            this._document = document_1.Document.from_json(json);
                            for (var _i = 0, render_items_1 = render_items; _i < render_items_1.length; _i++) {
                                var item = render_items_1[_i];
                                var roots = {};
                                for (var root_id in item.roots)
                                    roots[root_id] = element;
                                standalone_1.add_document_standalone(this._document, element, roots);
                            }
                            this._document.on_change(function (event) { return _this._change_event(event); });
                        };
                        BokehView.prototype._change_event = function (event) {
                            if (!this._blocked && event instanceof document_1.ModelChangedEvent)
                                this.send({ event: "jsevent", id: event.model.id, new: event.new_, attr: event.attr, old: event.old });
                        };
                        BokehView.prototype._consume_patch = function (content) {
                            if (this._document == null)
                                return;
                            if (content.msg == "patch") {
                                this._receiver.consume(content.payload);
                                var comm_msg = this._receiver.message;
                                if (comm_msg != null && object_1.keys(comm_msg.content).length > 0) {
                                    this._blocked = true;
                                    try {
                                        this._document.apply_json_patch(comm_msg.content, comm_msg.buffers);
                                    }
                                    finally {
                                        this._blocked = false;
                                    }
                                }
                            }
                        };
                        BokehView.__name__ = "BokehView";
                        return BokehView;
                    }(DOMWidgetView));
                    global = window;
                    global.require.undef(module_name);
                    global.define(module_name, [], function () {
                        return { BokehModel: BokehModel, BokehView: BokehView };
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.register_wrappers = register_wrappers;

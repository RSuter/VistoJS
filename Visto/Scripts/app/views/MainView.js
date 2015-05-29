var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "libs/visto", "module"], function (require, exports, visto, package) {
    var MainView = (function (_super) {
        __extends(MainView, _super);
        function MainView() {
            _super.apply(this, arguments);
        }
        MainView.prototype.onLoaded = function () {
            var frame = this.getViewElement("frame");
            visto.initializeDefaultFrame(frame, package, "HomePage");
        };
        return MainView;
    })(visto.ViewBase);
    exports.MainView = MainView;
});
//# sourceMappingURL=MainView.js.map
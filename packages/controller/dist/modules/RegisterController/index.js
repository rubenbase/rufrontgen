var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
var RegisterController = /** @class */ (function (_super) {
    __extends(RegisterController, _super);
    function RegisterController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterController.prototype.render = function () {
        return React.createElement("div", null, "Hello from Controllers");
    };
    return RegisterController;
}(React.PureComponent));
export { RegisterController };
//# sourceMappingURL=index.js.map
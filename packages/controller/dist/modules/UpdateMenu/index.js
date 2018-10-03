var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
export var updateMenuMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation UpdateMenuMutation(\n    $menuId: String!\n    $input: UpdateMenuInput!\n  ) {\n    updateMenu(menuId: $menuId, input: $input)\n  }\n"], ["\n  mutation UpdateMenuMutation(\n    $menuId: String!\n    $input: UpdateMenuInput!\n  ) {\n    updateMenu(menuId: $menuId, input: $input)\n  }\n"])));
var UpdateMenu = /** @class */ (function (_super) {
    __extends(UpdateMenu, _super);
    function UpdateMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateMenu.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(Mutation, { mutation: updateMenuMutation }, function (mutate) {
            return children({
                updateMenu: mutate
            });
        }));
    };
    return UpdateMenu;
}(React.PureComponent));
export { UpdateMenu };
var templateObject_1;
//# sourceMappingURL=index.js.map
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
import { Query } from "react-apollo";
export var viewMenuQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ViewMenuQuery($id: String!) {\n    viewMenu(id: $id) {\n      id\n      name\n    }\n  }\n"], ["\n  query ViewMenuQuery($id: String!) {\n    viewMenu(id: $id) {\n      id\n      name\n    }\n  }\n"])));
var ViewMenu = /** @class */ (function (_super) {
    __extends(ViewMenu, _super);
    function ViewMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewMenu.prototype.render = function () {
        var _a = this.props, children = _a.children, menuId = _a.menuId;
        return (React.createElement(Query, { query: viewMenuQuery, variables: { id: menuId } }, function (_a) {
            var data = _a.data, loading = _a.loading;
            var menu = null;
            if (data && data.viewMenu) {
                menu = data.viewMenu;
            }
            return children({
                menu: menu,
                loading: loading
            });
        }));
    };
    return ViewMenu;
}(React.PureComponent));
export { ViewMenu };
var templateObject_1;
//# sourceMappingURL=index.js.map
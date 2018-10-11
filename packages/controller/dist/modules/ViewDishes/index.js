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
export var viewDishesQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ViewDishesQuery($menuId: String!) {\n    dishes(menuId: $menuId) {\n      id,\n      name,\n      description,\n      price,\n      menuId\n    }\n  }\n"], ["\n  query ViewDishesQuery($menuId: String!) {\n    dishes(menuId: $menuId) {\n      id,\n      name,\n      description,\n      price,\n      menuId\n    }\n  }\n"])));
var ViewDishes = /** @class */ (function (_super) {
    __extends(ViewDishes, _super);
    function ViewDishes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewDishes.prototype.render = function () {
        var _a = this.props, children = _a.children, menuId = _a.menuId;
        return (React.createElement(Query, { query: viewDishesQuery, variables: { menuId: menuId } }, function (_a) {
            var data = _a.data, loading = _a.loading, subscribeToMore = _a.subscribeToMore;
            var dishes = [];
            if (data && data.dishes) {
                dishes = data.dishes;
            }
            return children({
                dishes: dishes,
                loading: loading
            });
        }));
    };
    return ViewDishes;
}(React.PureComponent));
export { ViewDishes };
var templateObject_1;
//# sourceMappingURL=index.js.map
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
export var viewDishQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ViewDishQuery($id: String!) {\n    viewDish(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"], ["\n  query ViewDishQuery($id: String!) {\n    viewDish(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"])));
var ViewDish = /** @class */ (function (_super) {
    __extends(ViewDish, _super);
    function ViewDish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewDish.prototype.render = function () {
        var _a = this.props, children = _a.children, dishId = _a.dishId;
        console.log('dishId', dishId);
        return (React.createElement(Query, { query: viewDishQuery, variables: { id: dishId } }, function (_a) {
            var data = _a.data, loading = _a.loading;
            var dish = null;
            console.log(JSON.stringify(data));
            if (data && data.viewDish) {
                console.log(JSON.stringify(data));
                dish = data.viewDish;
            }
            return children({
                dish: dish,
                loading: loading
            });
        }));
    };
    return ViewDish;
}(React.PureComponent));
export { ViewDish };
var templateObject_1;
//# sourceMappingURL=index.js.map
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
export var viewCategoryQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ViewCategoryQuery($id: String!) {\n    viewCategory(id: $id) {\n      id\n      name\n    }\n  }\n"], ["\n  query ViewCategoryQuery($id: String!) {\n    viewCategory(id: $id) {\n      id\n      name\n    }\n  }\n"])));
var ViewCategory = /** @class */ (function (_super) {
    __extends(ViewCategory, _super);
    function ViewCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewCategory.prototype.render = function () {
        var _a = this.props, children = _a.children, categoryId = _a.categoryId;
        return (React.createElement(Query, { query: viewCategoryQuery, variables: { id: categoryId } }, function (_a) {
            var data = _a.data, loading = _a.loading;
            var category = null;
            return children({
                category: category,
                loading: loading
            });
        }));
    };
    return ViewCategory;
}(React.PureComponent));
export { ViewCategory };
var templateObject_1;
//# sourceMappingURL=index.js.map
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
export var viewListingQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ViewListingQuery($id: String!) {\n    viewListing(id: $id) {\n      id\n      name\n      category\n      pictureUrl\n      owner {\n        id\n        email\n      }\n    }\n  }\n"], ["\n  query ViewListingQuery($id: String!) {\n    viewListing(id: $id) {\n      id\n      name\n      category\n      pictureUrl\n      owner {\n        id\n        email\n      }\n    }\n  }\n"])));
var ViewListing = /** @class */ (function (_super) {
    __extends(ViewListing, _super);
    function ViewListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewListing.prototype.render = function () {
        var _a = this.props, children = _a.children, listingId = _a.listingId;
        return (React.createElement(Query, { query: viewListingQuery, variables: { id: listingId } }, function (_a) {
            var data = _a.data, loading = _a.loading;
            var listing = null;
            if (data && data.viewListing) {
                listing = data.viewListing;
            }
            return children({
                listing: listing,
                loading: loading
            });
        }));
    };
    return ViewListing;
}(React.PureComponent));
export { ViewListing };
var templateObject_1;
//# sourceMappingURL=index.js.map
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
export var updateListingMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation UpdateListingMutation(\n    $listingId: String!\n    $input: UpdateListingInput!\n  ) {\n    updateListing(listingId: $listingId, input: $input)\n  }\n"], ["\n  mutation UpdateListingMutation(\n    $listingId: String!\n    $input: UpdateListingInput!\n  ) {\n    updateListing(listingId: $listingId, input: $input)\n  }\n"])));
var UpdateListing = /** @class */ (function (_super) {
    __extends(UpdateListing, _super);
    function UpdateListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateListing.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(Mutation, { mutation: updateListingMutation }, function (mutate) {
            return children({
                updateListing: mutate
            });
        }));
    };
    return UpdateListing;
}(React.PureComponent));
export { UpdateListing };
var templateObject_1;
//# sourceMappingURL=index.js.map
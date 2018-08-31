var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
import { graphql } from "react-apollo";
export var viewListingQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ViewListingQuery($id: String!) {\n    viewListing(id: $id) {\n      id\n      name\n      category\n      pictureUrl\n      owner {\n        id\n        email\n      }\n    }\n  }\n"], ["\n  query ViewListingQuery($id: String!) {\n    viewListing(id: $id) {\n      id\n      name\n      category\n      pictureUrl\n      owner {\n        id\n        email\n      }\n    }\n  }\n"])));
export var withViewListing = graphql(viewListingQuery, {
    props: function (_a) {
        var data = _a.data;
        var listing = null;
        if (data && !data.loading && data.viewListing) {
            listing = data.viewListing;
        }
        return {
            listing: listing,
            loading: data ? data.loading : false
        };
    },
    options: function (props) { return ({ variables: { id: props.listingId } }); }
});
var templateObject_1;
//# sourceMappingURL=index.js.map
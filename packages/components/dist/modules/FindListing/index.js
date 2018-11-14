var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
import { graphql } from "react-apollo";
export var findListingsQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query FindListingsQuery {\n    findListings {\n      id\n      name\n      pictureUrl\n      owner {\n        id\n        email\n      }\n    }\n  }\n"], ["\n  query FindListingsQuery {\n    findListings {\n      id\n      name\n      pictureUrl\n      owner {\n        id\n        email\n      }\n    }\n  }\n"])));
export var withFindListings = graphql(findListingsQuery, {
    props: function (_a) {
        var data = _a.data;
        var listings = [];
        if (data && !data.loading && data.findListings) {
            listings = data.findListings;
        }
        return {
            listings: listings,
            loading: data ? data.loading : false
        };
    }
});
var templateObject_1;
//# sourceMappingURL=index.js.map
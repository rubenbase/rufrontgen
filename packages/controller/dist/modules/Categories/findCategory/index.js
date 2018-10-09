var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
import { graphql } from "react-apollo";
export var findCategoriesQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query FindCategoriesQuery {\n    findCategories {\n      id\n      name\n    }\n  }\n"], ["\n  query FindCategoriesQuery {\n    findCategories {\n      id\n      name\n    }\n  }\n"])));
export var withFindCategories = graphql(findCategoriesQuery, {
    props: function (_a) {
        var data = _a.data;
        var categories = [];
        if (data && !data.loading && data.findCategories) {
            categories = data.findCategories;
        }
        return {
            categories: categories,
            loading: data ? data.loading : false
        };
    }
});
var templateObject_1;
//# sourceMappingURL=index.js.map
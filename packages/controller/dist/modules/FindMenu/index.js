var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
import { graphql } from "react-apollo";
export var findMenusQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query FindMenusQuery {\n    findMenus {\n      id\n      name\n    }\n  }\n"], ["\n  query FindMenusQuery {\n    findMenus {\n      id\n      name\n    }\n  }\n"])));
export var withFindMenus = graphql(findMenusQuery, {
    props: function (_a) {
        var data = _a.data;
        var menus = [];
        if (data && !data.loading && data.findMenus) {
            menus = data.findMenus;
        }
        return {
            menus: menus,
            loading: data ? data.loading : false
        };
    }
});
var templateObject_1;
//# sourceMappingURL=index.js.map
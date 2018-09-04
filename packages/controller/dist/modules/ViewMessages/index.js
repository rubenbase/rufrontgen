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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
export var viewMessagesQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ViewMessagesQuery($listingId: String!) {\n    messages(listingId: $listingId) {\n      text\n      user {\n        id\n        email\n      }\n      listingId\n    }\n  }\n"], ["\n  query ViewMessagesQuery($listingId: String!) {\n    messages(listingId: $listingId) {\n      text\n      user {\n        id\n        email\n      }\n      listingId\n    }\n  }\n"])));
export var newMessageSubscription = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  subscription($listingId: String!) {\n    newMessage(listingId: $listingId) {\n      text\n      user {\n        id\n        email\n      }\n      listingId\n    }\n  }\n"], ["\n  subscription($listingId: String!) {\n    newMessage(listingId: $listingId) {\n      text\n      user {\n        id\n        email\n      }\n      listingId\n    }\n  }\n"])));
var ViewMessages = /** @class */ (function (_super) {
    __extends(ViewMessages, _super);
    function ViewMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewMessages.prototype.render = function () {
        var _a = this.props, children = _a.children, listingId = _a.listingId;
        return (React.createElement(Query, { query: viewMessagesQuery, variables: { listingId: listingId } }, function (_a) {
            var data = _a.data, loading = _a.loading, subscribeToMore = _a.subscribeToMore;
            var messages = [];
            if (data && data.messages) {
                messages = data.messages;
            }
            return children({
                messages: messages,
                loading: loading,
                subscribe: function () {
                    return subscribeToMore({
                        document: newMessageSubscription,
                        variables: { listingId: listingId },
                        updateQuery: function (prev, _a) {
                            var subscriptionData = _a.subscriptionData;
                            if (!subscriptionData.data) {
                                return prev;
                            }
                            return __assign({}, prev, { messages: prev.messages.concat([
                                    subscriptionData.data.newMessage
                                ]) });
                        }
                    });
                }
            });
        }));
    };
    return ViewMessages;
}(React.PureComponent));
export { ViewMessages };
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map
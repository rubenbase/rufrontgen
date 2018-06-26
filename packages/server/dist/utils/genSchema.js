"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const graphql_tools_1 = require("graphql-tools");
const glob = require("glob");
exports.genSchema = () => {
    const pathToModules = path.join(__dirname, "../graphql");
    const graphqlTypes = glob
        .sync(`${pathToModules}/**/*.graphql`)
        .map(x => fs.readFileSync(x, { encoding: "utf8" }));
    const resolvers = glob
        .sync(`${pathToModules}/**/resolvers.?s`)
        .map(resolver => require(resolver).resolvers);
    return graphql_tools_1.makeExecutableSchema({
        typeDefs: merge_graphql_schemas_1.mergeTypes(graphqlTypes),
        resolvers: merge_graphql_schemas_1.mergeResolvers(resolvers)
    });
};
//# sourceMappingURL=genSchema.js.map
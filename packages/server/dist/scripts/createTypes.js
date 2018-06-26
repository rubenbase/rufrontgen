"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const from_schema_1 = require("@gql2ts/from-schema");
const path = require("path");
const fs = require("fs");
const genSchema_1 = require("../utils/genSchema");
const typescriptTypes = from_schema_1.generateNamespace("GQL", genSchema_1.genSchema());
fs.writeFile(path.join(__dirname, "../types/schema.d.ts"), typescriptTypes, err => {
    console.log(err);
});
//# sourceMappingURL=createTypes.js.map
1.  Duplicate ormconfig into server package.
2.  cd packages/server
3.  npx ts-node ./node_modules/.bin/typeorm migration:generate -n listingTable -c development

Examples:

-n ListingTable
-c development (or any of the name options fields inside the ormconfig.json)

// import { ResolverMap } from "../../../types/graphql-utils";
// import { Listing } from "../../../models/Listing";
// import { processUpload } from "../shared/processUpload";

// export const resolvers: ResolverMap = {
//   Mutation: {
//     updateListing: async (_, { listingId, input: { picture, ...data } }) => {
//       // const pictureUrl = picture ? await processUpload(picture) : null;
//       if (picture) {
//         data.pictureUrl = await processUpload(picture);
//       }

//       await Listing.update(
//         {
//           id: listingId
//         },
//         {
//           ...data
//         }
//       );

//       return true;
//     }
//   }
// };

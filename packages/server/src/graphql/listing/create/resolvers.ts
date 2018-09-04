import * as shortid from "shortid";
import { createWriteStream } from "fs";

import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../models/Listing";

// Route where images will be saved
const uploadDir = "images";

const storeUpload = async (stream: any, filename: string): Promise<any> => {
  const id = `${shortid.generate()}${filename}`;
  const path = `${uploadDir}/${id}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path }))
      .on("error", reject)
  );
};

const processUpload = async (upload: any) => {
  const { stream, filename } = await upload;
  const { id } = await storeUpload(stream, filename);
  return id;
};

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input: { picture, ...data } }, { session }) => {
      const pictureUrl = picture ? await processUpload(picture) : null;

      await Listing.create({
        ...data,
        pictureUrl,
        userId: session.userId
      }).save();

      return true;
    }
  }
};

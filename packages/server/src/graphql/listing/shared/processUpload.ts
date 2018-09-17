import * as shortid from "shortid";
import { createWriteStream } from "fs";

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

export const processUpload = async (upload: any) => {
  const { stream, filename } = await upload;
  const { id } = await storeUpload(stream, filename);
  return id;
};

import { existsSync } from "node:fs";
import { unlink } from "node:fs/promises";
import { resolve } from "node:path";

import {
  PROCESSING_FILENAME,
  RECOMMENDED_BLOCKLIST_URLS,
  USER_DEFINED_BLOCKLIST_URLS,
} from "./lib/constants.js";
import { downloadFiles } from "./lib/utils.js";

const blocklistUrls = USER_DEFINED_BLOCKLIST_URLS || RECOMMENDED_BLOCKLIST_URLS;

const downloadLists = async (filename, urls) => {
  const filePath = resolve(`./${filename}`);

  if (existsSync(filePath)) {
    await unlink(filePath);
  }

  try {
    await downloadFiles(filePath, urls);

    console.log(
      `Done. The ${filename} file contains merged data from the following list(s):`
    );
    console.log(
      urls.reduce(
        (previous, current, index) => previous + `${index + 1}. ${current}\n`,
        ""
      )
    );
  } catch (err) {
    console.error(`An error occurred while processing ${filename}:\n`, err);
    console.error("URLs:\n", urls);
    throw err;
  }
};

await downloadLists(PROCESSING_FILENAME.BLOCKLIST, blocklistUrls);

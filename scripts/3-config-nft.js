import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2AbbbA3973362a505FfFa16cE454FDD00507548E"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Own sushi",
        description: "This NFT will give you access to SushiDAO!",
        image: readFileSync("scripts/assets/su1.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

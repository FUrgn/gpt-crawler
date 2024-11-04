import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.builder.io/c/docs/developers",
  match: "https://www.builder.io/c/docs/**",
  selector: `.docs-builder-container`
  maxPagesToCrawl:1000 ,
  outputFileName: "output.json",
  maxTokens: 2000000,
};

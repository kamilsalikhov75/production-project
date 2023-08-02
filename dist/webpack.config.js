import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
var paths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
};
var mode = "development";
var isDev = mode === "development";
var PORT = 3000;
var config = buildWebpackConfig({
    mode: "development",
    paths: paths,
    isDev: isDev,
    port: PORT,
});
export default config;

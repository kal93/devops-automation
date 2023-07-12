"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var yargs_1 = require("yargs");
var nunjucks_1 = require("nunjucks");
function main() {
    var argv = (0, yargs_1.default)(process.argv.slice(2)).argv;
    console.log(argv);
    // @ts-ignore
    var buildFilePath = argv["config"];
    var config = (0, fs_1.readFileSync)(buildFilePath, {
        encoding: "utf-8",
    });
    var configData = JSON.parse(config);
    console.log(configData);
    (0, nunjucks_1.configure)("templates", { autoescape: true });
    var file = (0, nunjucks_1.render)("Dockerfile", {
        ServiceName: configData.ServiceName,
        ServiceType: configData.ServiceType,
    });
    console.log(file);
}
main();

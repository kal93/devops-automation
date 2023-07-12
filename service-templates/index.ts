import { readFileSync, writeFileSync } from "fs";
import yargs from "yargs";
import { configure, render } from "nunjucks";

type BuildJson = {
  ServiceName: string;
  ServiceType: string;
  Dockerfile: BuildJsonDockerfile;
};

type BuildJsonDockerfile = {
  PreInstalledCommands: string[];
  PostInstalledCommands: string[];
  InstallCommand: string;
};

function main() {
  let argv = yargs(process.argv.slice(2)).argv;
  console.log(argv);

  // @ts-ignore
  const buildFilePath = argv["config"];

  const config = readFileSync(buildFilePath, {
    encoding: "utf-8",
  });

  const configData = JSON.parse(config) as BuildJson;

  console.log(configData);

  configure("templates", { autoescape: true });

  const dockerFile = render("Dockerfile", configData);

  writeFileSync("Dockerfile", dockerFile);
}

main();

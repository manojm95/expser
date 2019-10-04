const path = require("path");
const sh = require("shelljs");

const baseDir = path.resolve(process.cwd());

const zipPath = path.resolve(baseDir, 'arch.zip');


console.log(`Packaging ${zipPath}`);
let child = sh.exec(
  `npx claudia pack --no-optional-dependencies --force --output ${zipPath}`
);
if (child.code !== 0) {
  sh.exit(child.code);
}
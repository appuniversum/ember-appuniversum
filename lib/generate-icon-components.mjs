import { pascalCase } from "change-case";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ICON_FOLDER = join(__dirname, "..", "public", "icons");
const COMPONENT_ICON_FOLDER = join(
  __dirname,
  "..",
  "addon",
  "components",
  "icons",
);

const files = await readdir(ICON_FOLDER);
const icons = files
  .filter((file) => extname(file) === ".svg")
  .map((svg) => basename(svg, ".svg"));

await prepareOutputDir();

const promises = icons.map((svg) => {
  return generateComponent(svg);
});
await Promise.all(promises);

async function generateComponent(iconName) {
  const componentName = pascalCase(iconName, {
    mergeAmbiguousCharacters: true,
  });

  const iconContent = (await readFile(join(ICON_FOLDER, iconName + ".svg")))
    .toString()
    .replace(">", " ...attributes>"); // We assume the first closing bracket belongs to the svg element

  const componentContent = `// THIS FILE IS GENERATED. ANY CHANGES TO THIS FILE WILL BE LOST.
import type { TOC } from '@ember/component/template-only';

export interface ${componentName}IconSignature {
  Element: SVGSVGElement;
}

export const ${componentName}Icon: TOC<${componentName}IconSignature> = <template>${iconContent}</template>;`;

  await writeFile(
    join(COMPONENT_ICON_FOLDER, iconName + ".gts"),
    componentContent,
  );
}

async function prepareOutputDir() {
  if (existsSync(COMPONENT_ICON_FOLDER)) {
    await rm(COMPONENT_ICON_FOLDER, { recursive: true });
  }
  await mkdir(COMPONENT_ICON_FOLDER);
}

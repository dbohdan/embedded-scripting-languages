#! /usr/bin/env -S deno run --allow-read --check

import nunjucks from "npm:nunjucks@3";
import TOML from "npm:@iarna/toml@3";

if (Deno.args.length !== 2) {
  console.error("usage: render-template.ts template.njk data.toml");
  Deno.exit(1);
}
const [templatePath, dataPath] = Deno.args;

interface INamedProject {
  name: string;
  sort_key: string;
  [key: string]: string;
}

interface IProjects {
  [key: string]: {
    [key: string]: string;
  };
}

const sortKey = (s: string): string => (s.match(/[A-Za-z0-9]/g) || []).join("");

const projList = (projects: IProjects): INamedProject[] =>
  Object.entries(projects)
    .map(([name, info]) =>
      Object.assign({
        name,
        sort_key: sortKey(name),
      }, info)
    );

try {
  const template = (await Deno.readTextFile(templatePath)).trim();
  const data = TOML.parse(await Deno.readTextFile(dataPath));

  const env = new nunjucks.configure({
    lstripBlocks: true,
    trimBlocks: true,
  });
  const doc = env.renderString(template, {
    projects: projList(<IProjects> data),
  });

  console.log(doc);
} catch (err) {
  console.error(err);
}

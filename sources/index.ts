import { Plugin, Project } from "@berry/core";

const afterAllInstalled = (project: Project) => {
  console.log("Everything is installed 🎉");
};

const plugin: Plugin = {
  hooks: {
    afterAllInstalled
  }
};

export default plugin;

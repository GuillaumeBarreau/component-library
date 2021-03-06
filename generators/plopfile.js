module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your COMPONENT name?",
      },
      {
        type: "list",
        name: "type",
        message: "What is your COMPONENT type?",
        choices: ["Atoms", "Molecules", "Organisms"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase type}}/{{name}}/index.tsx",
        templateFile: "templates/component.index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase type}}/{{name}}/{{name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase type}}/{{name}}/{{name}}.css",
        templateFile: "templates/component.css.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase type}}/{{name}}/{{name}}.stories.mdx",
        templateFile: "templates/component-stories.mdx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase type}}/{{name}}/{{name}}.d.tsx",
        templateFile: "templates/component.d.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase type}}/{{name}}/__tests__/{{name}}.test.tsx",
        templateFile: "templates/component.test.tsx.hbs",
      },
      {
        type: "modify",
        path: "../src/components/{{pascalCase type}}/index.tsx",
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template: "import { {{pascalCase name}} } from './{{name}}';\n$1",
      },
      {
        type: "modify",
        path: "../src/components/{{pascalCase type}}/index.tsx",
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: "\t{{pascalCase name}},\n$1",
      },
    ],
  });
};

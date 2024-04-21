const path = require("path");

module.exports = function (plop) {
  const basePath = path.join(
    process.cwd(),
    process.env.USE_ONE_BASE_PATH || "src/states/"
  );

  plop.setGenerator("useOne", {
    description: "create one share state",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "please type name(e.g: userInfo)",
      },
      {
        type: "confirm",
        name: "single",
        message: "generate single file?",
      },
      {
        type: "confirm",
        name: "storage",
        message: "enable persist store?",
      },
    ],
    actions: (data) => {
      if (!data.name) throw new Error("`name` required");
      if (data.storage) {
        return data.single
          ? [
              {
                type: "add",
                path: `${basePath}/{{name}}.ts`,
                templateFile: "templates/storage/single.hbs",
              },
            ]
          : [
              {
                type: "add",
                path: `${basePath}/{{name}}/index.ts`,
                templateFile: "templates/storage/many.hbs",
              },
              {
                type: "add",
                path: `${basePath}/{{name}}/types.ts`,
                templateFile: "templates/types.hbs",
              },
              {
                type: "add",
                path: `${basePath}/{{name}}/utils.ts`,
                templateFile: "templates/utils.hbs",
              },
              {
                type: "add",
                path: `${basePath}/{{name}}/actions.ts`,
                templateFile: "templates/actions.hbs",
              },
              {
                type: "add",
                path: `${basePath}/{{name}}/selectors.ts`,
                templateFile: "templates/selectors.hbs",
              },
            ];
      }
      const actions = data.single
        ? [
            {
              type: "add",
              path: `${basePath}/{{name}}.ts`,
              templateFile: "templates/single.hbs",
            },
          ]
        : [
            {
              type: "add",
              path: `${basePath}/{{name}}/index.ts`,
              templateFile: "templates/index.hbs",
            },
            {
              type: "add",
              path: `${basePath}/{{name}}/types.ts`,
              templateFile: "templates/types.hbs",
            },
            {
              type: "add",
              path: `${basePath}/{{name}}/utils.ts`,
              templateFile: "templates/utils.hbs",
            },
            {
              type: "add",
              path: `${basePath}/{{name}}/actions.ts`,
              templateFile: "templates/actions.hbs",
            },
            {
              type: "add",
              path: `${basePath}/{{name}}/selectors.ts`,
              templateFile: "templates/selectors.hbs",
            },
          ];

      return actions;
    },
  });
};

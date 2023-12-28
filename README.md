# useOne templates

This is templates generator for [use-one](https://github.com/suhaotian/use-one)

## Install

**yarn**

```bash
yarn add plop use-one-templates -D
```

**npm**

```bash
npm install plop use-one-templates --save-dev
```

### Add command to `scripts`

```json
"scripts": {
  "use-one": "USE_ONE_BASE_PATH=src/states/ plop --plopfile node_modules/use-one-templates/plopfile.js",
}
```

`USE_ONE_BASE_PATH` default is `src/states/`, default will generator files at the `src/states/` directory.

### Useage

Let's create one `count`/`userInfo`/`authInfo` state

**yarn**

```base
yarn use-one count true     # generate single file
yarn use-one userInfo false # generate a folder
yarn use-one authInfo false # generate a folder
```

**npm**

```base
npm run use-one count true     # generate single file
npm run use-one userInfo false # generate a folder
npm run use-one authInfo false # generate a folder
```

**generator output:**

```
src
└── states
    ├── authInfo
    │   ├── actions.ts
    │   ├── index.ts
    │   ├── selectors.ts
    │   ├── types.ts
    │   ├── useAuthInfo.ts
    │   └── utils.ts
    ├── count.ts
    └── userInfo
        ├── actions.ts
        ├── index.ts
        ├── selectors.ts
        ├── types.ts
        ├── useUserInfo.ts
        └── utils.ts

3 directories, 13 files
```

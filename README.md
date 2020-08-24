# useOne templates

This is useOne templates generator for [use-one](https://use-one.com)

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

`USE_ONE_BASE_PATH` default is `src/states/`, will generator files at the `src/states/` directory.


### Useage

Let's create one `count`/`useInfo`/`authInfo` state

**yarn**
```
yarn use-one count
yarn use-one useInfo
yarn use-one authInfo
```

**npm**
```
npm run use-one count
npm run use-one useInfo
npm run use-one authInfo
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
    │   └── useAuthInfo.ts
    ├── count
    │   ├── actions.ts
    │   ├── index.ts
    │   ├── selectors.ts
    │   ├── types.ts
    │   └── useCount.ts
    └── useInfo
        ├── actions.ts
        ├── index.ts
        ├── selectors.ts
        ├── types.ts
        └── useUseInfo.ts

4 directories, 15 files
```
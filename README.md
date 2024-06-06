# NewsLand

A simple news app that displays news from three different sources: `News.org, The Guardian, and NY Times`

## Technologies

-  Core: `next`, `react`, `react-dom`, `Typescript`, `redux`, `axios`
-  UI: `antd`, `tailwind`

## Scripts

### `npm ... [packages]`

-  **`install`** Install all dependencies
-  **`uninstall`** Remove dependencies

### `npm run ...`

-  **`dev`** Starts app in development mode.
-  **`build`** Creates an optimized production build.
-  **`test:e2e`** Starts cypress test IDE (Note: Before this step, please run project using `npm run dev`).

## Docker Setup

### Prerequisites

-  [Docker](https://www.docker.com/get-started) installed on your machine
-  Basic knowledge of Docker commands

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/itsmohammadbahrami/news-land.git
```

Then go to the project directory

```bash
cd news-land
```

### 2. Build the Docker image

```bash
docker build -t news-land .

```

### 3. Run the Docker Container

```bash
docker run -p 3000:3000 news-land
```

### 4. Open browser and navigate to [localhost](http://localhost:3000)

## Naming Conventions

> Files with different types named this way: [fle_name].[type].[extension], e.g. `foo.test.js`, `foo.container.js`, `foo.reducer.js`, `foo.ac.js` (action creators), `foo.module.scss`.

-  Folders, css file and routes are **kebab-case**.
-  JS files and variables that are not component are **camelCase**.
-  Components and class names are **PascalCase**.

## Imports

> Try to use absolute paths, e.g. `'@redux/actions'` instead of `'../../actions'`.

**Note**: Most paths should refrence to directories and not files. So all folders should have an `index.ts` file which re-exports everything needed from there.

Order of imports:

```js
// node_modules
import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

// other: components, utils, actions, ...
import { fetchHumanResources } from 'src/redux/actions';

import Calendar from './calendar';

// assets
import { ReactComponent as Icon } from 'src/assets/icons/icon.svg';

// css
import css from './styles.module.scss';
```

## CSS

With help of babel-plugin for react-css-modules we can use stylesheets and classes in a better way.

```js
import css from './app.module.scss';

const App = () => {
   return (
      <>
         <div className={css.Container}></div>
      </>
   );
};
```

Also we can use [Tailwind](https://tailwindcss.com/) for CSS in JS purpose.

```js
const App = () => {
   return (
      <>
         <div className='bg-red-500'></div>
      </>
   );
};
```

## Functional Components Structure

> Any variable that is not depend on component state or props should be outside of on it!

Following is the order of logics inside component:

1. Expressions and Computations
2. useRefs, useContexts and useDispatch
3. Local State: useState and useReducer
4. Global State: useSelector
5. Side Effects: useEffect
6. Functions and Handlers
7. return (`<Element />`)

#### `Component.tsx`

```ts
const obj = {
    title: 'foo'
}

interface Props {
   foo: string;
   arr: any[];
};

const Component:React.FC<Props> = ({foo, arr}) => {
    const x = ()=> { };

    const ref = useRef(null);
    const { value } = useContext(context);
    const dispatch = useDispatch();

    const [state, state] = useState(false);
    const [state2, dispatchLocal] = useReducer(reducer, initialState);

    const { ... } = useSelector(selector);

    const y = useMemo(() => /* computations */, [])

    const clickHandler = e => {}

    useEffect(() => /* side effects */, []);

    return (
        <div onClick={clickHandler} foo={foo}>
            Hello World!
        </div>
    )
}

export default Component;
```

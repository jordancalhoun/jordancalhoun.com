---
title: Functional Components Part 2
date: "2021-12-14"
categories:
  - "javascript"
  - "programing"
---

> In the latest versions of React, **function components can do everything that class components can do**. In most cases, however, **function components offer a more elegant, concise way of creating React components.**

## Stateless Functional Components

----

```javascript
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
```

## Function Components & `props`

----

- Function components, like class based ones, can receive information via `props`
- To access these `props`, give your function component a parameter named `props`
- access the props using this pattern: `props.propertyName`. You don’t need to use the `this` keyword.

```javascript
export function YesNoQuestion (props) {
  return (
    <div>
      <p>{props.prompt}</p>
      <input value="Yes" />
      <input value="No" />
    </div>
  );
}
 
ReactDOM.render(
  <YesNoQuestion prompt="Have you eaten an apple today?" />,
  document.getElementById('app');
);
```

- Notice the function in this call is not a variable assigned to an annonous function, rather a function itself.  I am guessing only stateless components are written like the first example.
- *Function components* are React components defined as JavaScript functions
- Function components must return JSX
- Function components may accept a `props` parameter. Expect it to be a JavaScript object

# React Hooks

> Functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components

> *Note: If you’re familiar with* [*lifecycle methods*](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)* of class components, you could say that Hooks let us “hook into” state and lifecycle features directly from our function components.*

- Hooks allow functional components to have the same features as class based components.
- **React Hooks** are functions that **let us manage the internal state of components** and handle post-rendering side effects directly from our function components.
- Hooks do not work in classes
- React offers a number of built-in Hooks. A few of these include
   - `useState()`
   - `useEffect()`
   - `useContext()`
   - `useReducer()`
   - `useRef()`
   - See [the full list in the docs](https://reactjs.org/docs/hooks-reference.html)

## `state` hooks

----

- The state hook is the most common hook used.  The State Hook is a named export, its imported like this:

```javascript
import React, { useState } from 'react';
```

- `useState()` is a JavaScript function defined in the React library. When we call this function, it **returns an array with two values**:
   - *current state* - the current value of this state
   - *state setter* - a function that we can use to update the value of this state
- React returns these two values in an array, we can assign them to local variables, naming them whatever we like. For example:

```javascript
const [toggle, setToggle] = useState();
```

- The magic of `useState()` is that it allows React to keep track of the current value of state from one render to the next!
- With the State Hook, updating state is as simple as calling a state setter function.

### Initialize State

----

- To initialize our state,  pass the initial value as an argument to the `useState()` function call.

```javascript
const [isLoading, setIsLoading] = useState(true);
```

- There are three ways in which this code affects our component:
   1. During the first render, the *initial state argument* is used.
   2. When the state setter is called, React ignores the initial state argument and uses the new value.
   3. When the component re-renders for any other reason, React continues to use the same value from the previous render.

### Using State Setter Outside of JSX

----

```javascript
import React, { useState } from 'react';
 
export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }
 
  return (
    <input value={email} onChange={handleChange} />
  );
}
```

This is so common in React code, that we can comfortably simplify this:

```javascript
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
```

to:

```javascript
const handleChange = (event) => setEmail(event.target.value);
```

or with [object destructuring](https://www.codecademy.com/content-items/92a5f93c6dbc6794d83e00383fc3af68?), to this:

```javascript
const handleChange = ({target}) => setEmail(target.value);
```

### Set from previous state

----

```javascript
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
	// this is just annonomouse arrow function below
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
```

- For reasons, you should not set state from in this example the count variable.  For some reason this could give you bad data.  You always want to comepare to the previous state.

### Separate Hooks for Separate States

----

- With React, we feed static and dynamic data models to JSX to render a view to the screen
- Use Hooks to “hook into” internal component state for managing dynamic data in function components
- We employ the State Hook by using the code below:
   - `currentState` to reference the current value of state
   - `stateSetter` to reference a function used to update the value of this state
   - the `initialState` argument to initialize the value of state for the component’s first render

```javascript
const [currentState, stateSetter] = useState( initialState );
```

- Call state setters in event handlers
- Define simple event handlers in line with our JSX event listeners and define complex event handlers outside of our JSX
- Use a state setter callback function when our next value depends on our previous value
- Use arrays and objects to organize and manage related data that tend to change together
- Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: `setArrayState((prev) => [ ...prev ])` and `setObjectState((prev) => ({ ...prev }))`
- Split state into multiple, simpler variables instead of throwing it all into one state object

# The Effect Hook

----

- Import the same way you would `React` or `{ useState }`:

```javascript
import { useEffect } from 'react';
```

- The Effect Hook is used to call another function that does something for us so there is nothing returned when we call the `useEffect()` function.
- The first argument passed to the `useEffect()` function is the callback function that we want React to call after each time this component renders. We will refer to this callback function as our *effect*.

```javascript
import React, { useState, useEffect } from 'react';
 
function PageTitle() {
  const [name, setName] = useState('');
 
  useEffect(() => {
    document.title = `Hi, ${name}`;
  });
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}
```

- Some effects require cleanup. For example, we might want to add event listeners to some element in the DOM, beyond the JSX in our component. When we [add event listeners to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), it is important to remove those event listeners when we are done with them to avoid [memory leaks](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)!

```javascript
useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})
```

- The `useEffect()` function calls its first argument (the effect) **after each time a component renders**.
- It is common, when defining function components, to run an effect only when the component mounts (renders the first time), but not when the component re-renders.
- The Effect Hook makes this very easy for us to do! If we want to only call our effect after the first render, we pass an empty array to `useEffect()` as the second argument. This second argument is called the *dependency array*.

```javascript
useEffect(() => {
  alert("component rendered for the first time");
  return () => {
    alert("component is being removed from the DOM");
  };
}, []);
```

### Fetching Data

- use the dependency array to further configure exactly when we want our effect to be called
- Using the State Hook and the Effect Hook together in this way is a powerful pattern that saves our components from unnecessarily fetching new data after every render!
- An empty dependency array signals to the Effect Hook that our effect never needs to be re-run, that it doesn’t depend on anything
- Specifying zero dependencies means that the result of running that effect won’t change and calling our effect once is enough.
- A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect after re-renders unless the value of one of the variables in our dependency array has changed
```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes
```

## Rules of Hooks

1. Only call hooks at the top level
2. Only call hooks from Reach functions

Instead of confusing React with code like this:

```javascript
if (userName !== '') {
  useEffect(() => {
    localStorage.setItem('savedUserName', userName);
  });
}
```

We can accomplish the same goal, while consistently calling our Hook every time:

```javascript
useEffect(() => {
  if (userName !== '') {
    localStorage.setItem('savedUserName', userName);
  }
});
```

**The Effect Hook is all about scheduling when our effect’s code gets executed. We can use the dependency array to configure when our effect is called in the following ways:**

| **Dependency Array** | **Effect called after first render & …**       |
| -------------------- | ---------------------------------------------- |
| undefined            | every re-render                                |
| Empty array          | no re-renders                                  |
| Non-empty array      | when any value in the dependency array changes |


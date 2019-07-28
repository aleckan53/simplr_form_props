## Simplr form

<a href='https://form-ehhlo2y3h.now.sh'>LIVE DEMO</a>

<img src='./readme/screen.png'/>

### Data flow
<img src='./readme/data_flow.jpeg'/>
React Context is used for global state management.

<div style='font-size: 2rem'>...</div>
To create a new Input we need to pass a set of props: 

`label:String` - Label for input
`type:String` - Input type (text || email || password || checkbox)
`hint:String` - Hint inside `<label/>`
`optional:Boolean` - If passed, validation skipped
`id:String` - Identifier for `<input id={id}/>`, `<label htmlFor={id}/>`, validation function `validate[id]()`
<div style='font-size: 2rem'>...</div>

`Input` instantiates `useInput` hook, which handles value updates and validation.

`id, type, optional` passed as arguments to `useInput` hook that calls validation function `id === validation[id]()`. `useInput` hook returns `onChange, valid, invalidMsg`. 

• `valid:Boolean` - current input's value validation status<br/>
• `inValidMsg` - conditionally renders red message below the input if `valid === false`.<br/>
• `onChange:Function` - updates `Input` state with `e.target.value`. If `type==='checkbox'` toggles state `true <---> false`
<div style='font-size: 2rem'>...</div>


`useEffect` inside `useInput` observes `value` and `valid` changes and updates corresponding valiues in `FormContext`. When `value` is empty, resets `value` and `valid` to `null`. This prevents displaying validation message render when input has no value.

<div style='font-size: 2rem'>...</div>

When all inputs (values) are valid, `useEffect` in `FormContext` sets `allValid` state property to true, which enables Submit button. On `Form` submit all values are logged to the console.

### Validation
RegEx.test() used to validate following values `businessName, email, password, username`.
For `password` value, function returns custom validation message according to requirements.
aaaaaa => Password should have one uppercase
aaaaaA => Password should have one digit
AAAAA1 => Password should have on lowercase
aaa => Password should have six characters

Validation functions names correspond to input's `id`.

### Folders structure
```
src /
|
|_____components /
|    |___Component.js
|
|_____context /
|    |___ContextFile.js
|
|_____css /
|    |___index.scss
|    |___index.css
|    |___index.css.map
|    |___components /
|    |  |___Component.scss
|    |___partials / 
|       |___mixins.scss
|       |___variables.scss
|       |___base.scss
|
|_____hooks /
|    |___useHook.js
|
|_____utils
     |___util.js
```

### Styles

This project styled using SASS. 
Every component has its own `.scss` file. 
`@mixin`s used for styles reuse, reduce repeating properties. 
`$variables` used for colors.
All files then imported to index.scss which compiles to index.css. 

##### Responsive layout | Mobile-first approach

`@media` queries used to achieve responsive layout. 

For hi-res screens compatibility `@media` reassigns font-size value at root `html` element at `2400px and 3800px`


### P.S.


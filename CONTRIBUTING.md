# Contribute to Pot UI
✨🎉 Thanks for taking your time to contribute 🎉✨

The following tutorial will guide you through the co ntribution.

## Contents
- [For questions](#for-questions)
- [How to contribute](#how-to-contribute)
  - [Report a bug](#report-a-bug)
  - [Pull request](#pull-request)
- [Style guides](#styles-guides)
  - [Git commit message](#commit-messages)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
  - [JSX](#react-jsx) 

## For questions         
If this is your personal issue, please use discussion instead of issue,
but if this is a question about the entire package,
please raise it in the issue directly.

## How to contribute
There are two kinds of contributions, Issue and Pull Request.
The following will teach you how to use these two contribution methods.

### Report a bug
To report a bug, please select the template "Bug Report" in the Issue. Please fill in more complete information as possible so that we can reproduce and fix the problem. Before that, you **must** write this information:
- Environment
- Expected result
- Actual results 

We will actively review the Issue.

### Pull request
If you want to make changes to the code,
then you must start a Pull request.

Please follow these steps to have your contribution considered by the maintainers:
1. Follow the template
2. Follow the [styles guide](#styles-guides)
3. Please make sure that all the check status are succeed
   - What if the status checks are failing?\
     If you are sure that you can pass the check, please leave a comment
     to let us know. Please write down the reason clear

## Styles guides
### Commit messages
All commit message should follow the angular specification, which is:
```text
subject(scope): short description

long description

footer
```
- *short description* should be up to 50 characters.
- *long description* is optional. introducing the update details.
  - each line should be up to 72 characters. You can use soft warp
- *scope* is optional, it's the update scope. It should be `*` if multiple scopes.
- *subject* should be one of them:
  - **feat**: add features.
  - **fix**: fix bug.
    In case of fix bug, you should write clear the bug fixed
  - **docs**: documentation update. e.g., `README.md`.
  - **style**: changed code style only.
  - **refactor**: refactor the code, but does not affect the effect.
  - **pref**: performance update.
  - **chore**: update not related to code and documents, include package dependencies update.
- Use written and neutral vocabulary

### JavaScript
*If you are using IntelliJ IDEA series IDE, `.editorconfig` will automatically configure these parts*

- Add space before import brackets
- Use single quote string or back quote template string
- Use ES import instead of `require`
- Use inline export default
  ```jsx
  // Correct
  export default function Component() {
      return <div></div>
  }
  
  // Wrong
  function Component() {
      return <div></div>
  }
  
  export default Component;
  ```
- There should be spaces before and after any operator
  ```js
  // Correct
  const a = 1 + 2 * 3,
        b = 4 / 2
        c = true ? 1 : 0
        d = true || 3
        e = false ?? 5
  let x = 1;
  y = x ++
  (param = 1) => param
  
  // Wrong
  const a=1+2*3, b=4/2
        c=true?1 :0
        d =true|| 3
        e=false??5
  let x=1;
  y=x++
  (param=1)=>param
  ```
- Most aaming should be camelCase
  - `thatIsFunctionName` instead `that_is_function_name`
- Class and react component should be PascalCase
  - `ComponentOne` instead `componentOne`
- Other ESLint rules...

### TypeScript
- ALL rules in JavaScript
- There should be one space after the type qualifier
- No namespace
- No classic import/export
  ```ts
  // Correct
  import React from 'react';
  export default React;
  
  // Wrong
  // Never use this. Babel doesn't supported.
  import React = require('react');
  export = React
  ```

### React (JSX)
- Use react hooks is better than a ES6 class component
  ```jsx
  // Correct
  function Foo(props) {
    return <div>{props.children}</div>
  }
  
  // Wrong
  class Foo {
    render () {
      return <div>{this.props.children}</div>
    }
  }
  ```
- It is recommended to add parentheses before and after JSX elements
  ```jsx
  // Better
  return (
    <div>
      foo
    </div>
  )
  
  // Bad
  return <div>foo</div>
  ```

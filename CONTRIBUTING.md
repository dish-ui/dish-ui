# Contribute to Pot UI
✨🎉 Thanks for taking your time to contribute 🎉✨

The following tutorial will guide you through the contribution.

## Contents
- [For questions](#for-questions)
- [How to contribute](#how-to-contribute)
  - [Report a bug](#report-a-bug)
  - [Pull request](#pull-request)
- [Style guides](#styles-guides)
  - [Git commit message](#commit-messages)
  - [JS, JSX, TS, TSX](#javascript-and-typescript-with-react)

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
- *footer* is a optional item for commit footer.
  - *footer* should be start with `BREAKING CHANGE` and continue with breaking update details if this is a breaking update.
  - if the commit is making for an issue, close issue should add to *footer*
  - if skip CI, the footer of *footer* should be `[SKIP CI]`.
  - all of those is optional.
- Use written and neutral vocabulary.
- Use emoji directly instead of github emoji

An example for all above options
```text
feat(jsx): add a component

The component can use for full page container frame

BREAKING CHANGE: Now <Modal.FullScreen> is removed and moved into 
<FullScreenModal>

Closes #1, Closes #2

[skip ci]
```

### JavaScript and TypeScript (with React)
*All code style checks with ESLint and Prettier*

When you finished your changed, type these in terminal
```shell
# Run ESLint
npm run lint

# Use prettier to check code style
# fix code style if it is invalid
npm run format:check || npm run format
```

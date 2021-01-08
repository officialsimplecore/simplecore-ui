# Official SimpleCoreUI
The SimpleCore team maintains and builds this library of common UI components, primarly for use in internal SimpleCore web applications.

## Docs server

Run `npm start` for a development server that runs the documentation project. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Please note that the API is not documented yet as this project is in alpha stages.

## Build library changes
Run `npm lib:build` to build the library

## Import library
Import as a normal node module: `import { SimpleCoreUIModule } from 'simplecore-ui';`
- It is recommended to import each component module separately as best practice

## Git Commit Messages
- Use the topic prefix that corresponds with the change you have made (list below)
- If necessary, add a class prefix (Ex. View/ExploreCourses; Ex. Controller/Static)
- Capitalize the first letter of the prefix and the message that follows
- Use imperative verbs in subject line word (Create project; Modify readme)
- Concise subject line (it is OK to break the 50 character rule because we have prefixes)
- One line break between subject line and body
- No full stops in subject line
- Use full stops in body
- Write body in plain English; do not worry about the imperative verb tense; be as descriptive as possible and necessary
- Wrap the body text as 72 characters

Topic Prefixes
- Chore:
- Docs:
- Style:
- Feature:
- Update:
- Fix:
- Refactor:
- Test:
- Package:

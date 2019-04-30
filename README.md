# Jeff Ward - 5/1/2019

## Installation
```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Run Mocha tests
```bash
npm run test
# or
yarn test
```

## Run Cypress tests
```bash
npx cypress open
# and go to integration folder
# or
npx cypress run --spec "cypress/integration/userInteractions.spec.js"
# or
npx cypress run
# to run everything
```

## Security
### Addressed
- XSS ( built-in w/ react - also - no backend in this project)
- Specific Filetypes uploading with React-DropZone
- General unit and E2E testing
- No data persisted client side - no auth or session tracking
- File size limit
- File amount per upload limit
- npm audit - shows 0 vulns!
### *Not* been addressed
- Ensure on the backend the file is ok ( malicious, correct type, size, etc)
- TypeScript for safety
- SSL certs ( only dev local here )
- Tokens w/ expiry for logins ( no backend or auth here )
- CORS Policies ( no backend here )
- Cross Site Request Forgery ( haven't looked into this with React SPA's )
- Everything covered here (massive list) that React wouldn't have solved under the hood
  - https://github.com/OWASP/CheatSheetSeries#cheat-sheets-index
  - NOTE: (I would be particularly interested in building a test suite with Mocha & Cypress for all of these)

## Improvements
 - An actual backend with endpoints - not simply loading a JSON file
 - 100% test coverage on both Unit and E2E

## Libraries
- Next.js
  - Fork on top of Create React App - optional SSR!
  - Very active community - and used by Fortune 50's
  - Lots of examples for each use case
  - Very simple directory structure
  - Auto routing of pages
  - Just all around awesome ( https://nextjs.org/learn/basics/getting-started )
- Fuse.js
  - Magical fuzzy search
  - Excellent documentation
  - Straight forward implementation
- Immer.js
  - Action dispatching and immutabilty (state handled by React Context & Hooks)
  - Was included in a tutoial about useContext, looked neat
  - Seems like a strong up and comer
  - Less complex in implementation than Redux (I think)
  - https://github.com/immerjs/immer#benefits
- React-Dropzone
  - Lots of options to make life easy
  - Well accepted by community
  - Filters out file types for you
  - Gives you callbacks to work with
  - Testing tool plugins available for it
- Mocha.js + Chai w/Enzyme / Cypress.io
  - Well accepted by community
  - Very easy to use!! BDD <3
  - Very flexible with plugins
  - Cypress is by far the best E2E tool - so much power *flexs guns*
- Normalize.css
  - Because browsers are still hot garbage and need to be wrangled
- Babel-dev stuff
  - To use ES6 jazz in testing

## API
Any general observation about the API?
  - Simple, too simple for a real world use case
  - Other than an IPFS driven app, can't recall any app with file uploads than weren't scoped to a user

### GET /docs
#### Description of the endpoint:
- what would the endpoint do?
  - send back existing documents already uploaded
- what would it return?
  - a JSON blob of attributes of all the docs
  - actual file data only needed if *viewing* the files in the ui
- would it accept specific parameters?
  - no

### GET /doc/:id
#### Description of the endpoint:
- what would the endpoint do?
  - send back the specific document
- what would it return?
  - a JSON blob of attributes of the doc requested
  - actual file data only needed if *viewing* the files in the ui
- would it accept specific parameters? ```
  - the :id of the requested document

### POST /upload
- what does the endpoint do?
  - allow a user to upload a doc (image files only)
- what does it return?
  - Success 200 or some sort of Error response
- does it accept specific parameters? ```
  - no - for the sake of the demo, its one file only per upload

## Other Notes
  - API development is generally out of scope of UI Engineer, I can dabble but 48 hours is tight for the total ask
  - Most of Day 1 was spent learning a whole new state managment methodolgy -> React Context X React Hooks
  - Mocked an API in `ExampleServer.js` but did not use it, felt it was out of scope of UI/UX
  - The brief was labeled UI/UX - yet there was very little CSS effort.
  - What role is actually in consideration? This is mostly a full stack excercise.
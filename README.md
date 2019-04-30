# Jeff Ward - 5/1/2019

## Installation
npm install
npm run dev
# or
yarn
yarn dev

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
// List security concerns:
### Addressed
- XSS ( built-in w/ react - also - no backend in this project)
- Specific Filetype upload with React-DropZone
- General Unit Testing for bugs
- No data persisted client side - no auth or session tracking
- File size limit
- File amount per upload limit
- npm audit - shows 0 vulns!
### *Not* been addressed
- SSL certs ( only dev local here )
- Tokens w/ expiry for logins ( no backend & auth here )
- Cross Site Request Forgery ( haven't looked into this with React SPA's )
- CORS Policies ( no backend here )
- Everything covered here that React wouldn't have solved under the hood
- https://github.com/OWASP/CheatSheetSeries#cheat-sheets-index
- NOTE (I would be particularly interested in building a test suite with Mocha & Cypress for all of these)

## Improvements
// What could be added to the app / API?
 - An actual backend with endpoints - not simply loading a JSON file

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
  - Was included in a tutoial about useContext
  - Seems like a strong up and comer for immutable state
  - Less complex in implementation than Redux
  - https://github.com/immerjs/immer#benefits
- React-Dropzone
  - Lots of options to make life easy
  - Well accepted by community
  - Filters out file types for you
  - Gives you callback to work with
- Mocha.js + Chai w/Enzyme / Cypress.io
  - Well accepted by community
  - Very easy to use!! BDD <3
  - Very flexible with plugins
  - Cypress is by far the best E2E tool of all time - so much power
- Normalize.css
  - Because browsers are still hot garbage and need to be wrangled
- Babel-dev stuff
  - To use ES6

## API
Any general observation about the API?
  -- Didn't have time 
    - had to learn an enitre new state managment system
    - had to bail out of a Next.js boilerplate that broke testing
  -- This is backend API design & dev - not frontend

### GET /user-docs/:id
#### Description of the endpoint:
- what would the endpoint do?
  - send back existing documents already uploaded by a user
- what would it return?
  - a JSON blob of attributes of each doc 
  - actual file data only needed if viewing the files
- would it accept specific parameters? ```
  - the :userId of the requester

### GET /doc/:id
#### Description of the endpoint:
- what would the endpoint do?
  - send back the specific document
- what would it return?
  - a JSON blob of attributes of the doc requested
  - actual file data only needed if viewing the file
- would it accept specific parameters? ```
  - the :id of the requested document
- NOTE: should be mindful of a user requesting a doc that isn't theirs

### POST /upload
- what does the endpoint do?
  - allow a user to upload a doc (image file only)
- what does it return?
  - Success 200 or some sort of Error response
- does it accept specific parameters? ```
  - no - for the sake of the demo, its one file only per upload
# Star Wars World Dictionary

This is a list of Star Wars characters list with information about each character

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Future Concerns

The project has 3 main areas of focus.

* components, where all reusable components exist
* modules, where all components with business logic will exist 
* services, where all API requests exist
You will also see a constants.styles.js file that for now hosts all theme related data. Obviously, for the project to scale, this would have to be refactored to follow a more traditional themes structure with media and colours being their own files.

If we want to consider how this project will scale structure wise, most of the current styled components would be extracted in a toolkit/ui library to promote reusability even further under an atomic design.

I'm currently passing the state for the character page through the react router state, which is not something I would recommend on a production app. It was only done because of the time constraints and I'd expect to have set up better state management in a scalable app (like redux, redux toolkit or even context). For deep-linking into the page, I would like the id of the character to be part of the url so we can make a request upon landing to the page for all the character's data.

Some of the tests aren't as extensive as I'd like but given the time limit I thought, better have something than nothing at all.
I would also like to have some cypress tests set up for e2e testing if I was looking to make it scale better.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Development Instructions
### First time instructions
1. Clone this repo to your machine
2. Install node.js: https://nodejs.org/en/download/. Node.js is the development server we'll use to run the React app locally, and it comes with npm (Node Package Manager), which we use to download/install packages and run our development environment.

### Every time instructions
3. Via your command prompt/terminal, navigate into the repository and run `npm install`. This command looks at the package.json file and installs all the dependencies into the environment. Note that you only really need to do this when package.json updates with new packages, but it doesn't hurt to do it every time.
4. Run `npm start`. This starts up the development server, usually on localhost:3000. Once this loads, you should see the application on your browser
5. If you don't also have the local Flask server running, do that now, as described here: https://github.com/w210-accessibility/app-back-end. You can also sub in the production URL for the apiUrl variable if you want to hit the production URL instead of your development server (DO NOT push this change, though, if you do this!)
6. To make changes to the React application, open the project code (under 'src' directory) in your favorite text editor. When you save changes, the site will "hot reload" automatically in your browser and you should see your changes right away.
7. Not strictly necessary but highly recommended: download React extension to Chrome Developer Tools for a better in-browser debugging experience. https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
8. Commit and push all new code to a feature branch:
⋅⋅* `git checkout -b <your-branch-name>` the first time you want to create it
⋅⋅* `git checkout <your-branch-name>` if it's already created and you want to check it out later
⋅⋅* `git status` to see what you have edited
⋅⋅* `git add <file name>` for every file you want to commit
⋅⋅* `git commit -m <your-message>` to commit a set of files along with a descriptive message of what you did
⋅⋅* `git push origin <your-branch-name>` to push that feature branch
9. Open a new pull request on github when you want to merge it in.

## Deployment Instructions
For now, only Emily should manage deployments (as a quality control on our production environment).
1. Developer commits all new changes and pushes feature branch
2. Emily tests locally and merges feature branch in Github
3. Emily checks out master locally
4. From project folder, run
  npm build
5. Run
  npm deploy

## Available Scripts (excerpts from Create React App default ReadMe)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Note - commands below here we probably won't use
### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

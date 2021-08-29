# Project details 
  - A summary table showing up the city wise AQI data with live updates made from web socket
  - Displays city wise AQI details along with last updated time, stored the history of the AQIs as per the city for displaying the trend over time
      - Used npm package 'Sparklines' for showing up the trend of the AQI data across various timestamp
  - Used 'Material UI' for designing the table interfaces and Tags from 'antd' for showing the AQI with color codes as per the severity of the index
  - On clicking the city, a magnified view of the clicked city with open up displaying the trend of the AQI with time
      - Have used the charting library 'ReCharts' for displaying the information with the help of Line Chart
  - The application is hosted on the Heroku dashboard with automatic deployment with this branch
 
 Component Details : 
 1. Home : Base Component for establishing the connection with the web socket and handling the responses accordingly (utilityFunction described below)
 2. AQITable : A component for rendering the latest data inside a table as per the updates from the web sockets
 3. DetailedComponent : A magnified view showing up the trend of a particular city inside a line Chart
 
 UtilityFunctions : A constructor function containing the functions for handling multiple types of responses from the server
    - colorMap : An object containing the color hexcodes with the bands, for attaching it the aqi index as per the value
    - addNewAQI - A function which creates and returns a new objects of cities coming up for the first time in the response
    - addToExisitingAQI - A function which adds new AQI information to the AQI of already existing cities 
    - updateExistingAQI - A function which updates the details of existing data (Like updating the last updated)
    - updateTimeDisplay - A function which calculates the last updated dynamically with a proper time message 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

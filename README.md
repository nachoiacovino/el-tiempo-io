# El-tiempo-io

You can see a live version of this project [here](https://el-tiempo-io.vercel.app/).

In this app, you can search for Spanish municipalities and see their current temperature and chance of rain. You can then pin these municipalities so everytime you visit the website, you get the latest updated data on these municipalities.

You can also register, either by email or with Google, and save your pinned municipalities on the cloud, so you can access them anywhere.

If you had some municipalities pinned before signing up or logging in, these will be transferred to your account once you sign up/login.

The app was built with React 17 with hooks, Redux (also with hooks), Redux Saga and uses Firebase for database and authentication.

For styles it uses Elastic UI with some small custom styles done with SCSS.

For the API requests, it uses Axios.

The app is fully tested with jest and enzyme.

## Available Scripts

In your console, first you need to clone the repository

### `git clone https://github.com/naknekv/el-tiempo-io.git`

After that, you need install the dependencies with:

### `npm install`

Then, you can launch the server with:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

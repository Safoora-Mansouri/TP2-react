
Description:
In this React project, you have three pages: "Accueil," "Product,"
and "Detail." The "Accueil" page serves as the homepage of
your application. The "Product" page displays a list of all the
products available. Each product is shown with its title, description, price,
and category. On this page, you have the option to perform different actions on
each product, such as editing, creating, or deleting. In the first scenario,
when you update the page, the data reverts back to its original format. This
means that any changes made to the product information, such as title,
description, price, or category, will not be saved when you refresh the page.
The data returns to its original state as if no changes were made. However, in
the second scenario, the data remains with the changes you have made. This
implies that any modifications you perform on the product information, such as
updating the title, description, price, or category, will persist even if you
refresh the page or navigate away. The data retains the altered state. On the
"Product" page, if you click on the title of a specific product, it
will take you to the "Detail" page. Here, you can view more detailed
information about the product, including a picture and additional details. For
newly added products, since you mentioned that you consider a random picture,
it means that when creating a new product, the application automatically
generates or assigns a random picture for that product. This ensures that even
if you haven't provided a specific picture, the newly added product still has an
image associated with it. The project also includes a routing system, which
allows you to navigate between different pages seamlessly. You can move from
the "Accueil" page to the "Product" page and then to the
"Detail" page by following the appropriate links or using the
navigation provided. Additionally, there is a "Go Back" button
implemented in the project. This button allows you to return to the previous
page or step in your navigation history. It helps provide a smooth user
experience by allowing users to easily backtrack or navigate to their previous
location within the application.

Commandes:
Create a React.js project using the React CLI
1.npx create-react-app TP2-react
Change into the project directory:
 2.cd TP2-react
 For handling routing, you can use react-router-dom:
3. npm install react-router-dom
4. npm install bootstrap
//second senario
Create a products.json file in the root directory of my project.
Populate the products.json file with some initial product data. 
Install json-server globally:
6.npm i -g server
Start the JSON server
using the products.json file:
7. json-server --watch products.json --port 5000
8.npm start
9.npm run server
10.npm run build
11.npx serve -s build -p 8080(for example)
10.npm run build
11.npm i json-server
add in package.json
"homepage" : "https://e2296145.webdev.cmaisonneuve.qc.ca/build"
12.npm run build
 

GitHub: https://github.com/Safoora-Mansouri/TP2-react.git
(in main branch i have senario1 and in branch senario2 , I have senario2)

WebDev: https://e2296145.webdev.cmaisonneuve.qc.ca/build/
(maybee it does not work so i send a video)
refrence:https://fakestoreapi.com/products


--------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

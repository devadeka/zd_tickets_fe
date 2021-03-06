# Zendesk FAQs

## Task
Create an application that will list all available articles for the user to select and view in detail. The [frontend](https://github.com/devadeka/zd_tickets_fe) application will need to talk to a [proxy API](https://github.com/devadeka/zd_tickets_be) that caches data from Zendesk's FAQs API for an hour.

Ensure the backend is running before the frontend.

The finished product can be viewed on [Zendesk FAQs](https://agitated-varahamihira-3662cf.netlify.com/) and can also be installed from npm as a [react component](https://www.npmjs.com/package/zd_faqs). This skips the proxy API and connects directly to Zendesk's FAQs API.

## Technology Used
The application was developed on `Ubuntu 18.04`

Modules and Libraries used:
- NPM v6.4.1
- Node v10.15.1
- React v16.8.x (using [create-react-app](https://github.com/facebook/create-react-app))
- [Axios](https://github.com/axios/axios) - HTTP client
- [Enzyme](https://github.com/airbnb/enzyme)/Jest - testing
- [Zendesk Garden React Components](https://github.com/zendeskgarden/react-components) - component library
- [Babel](https://github.com/babel) - Transpiler
- [Webpack](https://github.com/webpack) - Bundler

## Installation
First clone repository.

`git clone https://github.com/devadeka/zd_tickets_fe.git`

Install dependencies.

`npm install`

## Testing
After cloning and installing dependencies.

`npm test src/`

## Running
After cloning and installing dependencies.
Ensure backend application is running.

`npm start`

## Building Static Files
Building static files/output of the front end application was done on a separate branch.

Checkout the branch

`git checkout publish_main`

Clean install node modules

`rm -rf node_modules`

`npm install`

Build static file

`npm run build`

To view the built frontend application, ensure proxyAPI/backend application is running, and then open `dist/index.html`.

## Frontend Only Application
To run only the frontend application - talking directly to the Zendesk's FAQs API, without the proxyAPI/backend application.

Checkout the branch

`git checkout fe_only`

Clean install node modules

`rm -rf node_modules`

`npm install`

Run application

`npm start`

## Design Decisions
The main design decision came in the form of what content to request from the proxy API. The current implentation requests for the articles/FAQs for the page with `id`, `title` and `body`, and when one is select the whole payload for the item is set to be displayed. A different solution would be to return the `id` and `title` only when requesting for the page, and then making another request when an article/FAQ is selected. The first method was used because, though it may be a longer request, the number of requests to the backend would be fewer.

## Improvements
Currently the application manages state by passing props from base component down to children components. A better practice may be to use ReactHooks version of Redux. Though for a small application like this it may not be necessary.
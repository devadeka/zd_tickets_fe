# Zendesk FAQs

## Task
Create a front end application that will consume Zendesks FAQs API. The application is to list all available articles for the user to select and view in detail.

The finished product can be viewed on [Zendesk FAQs](https://agitated-varahamihira-3662cf.netlify.com/).

## Technology Used
The application was developed on `Ubuntu 18.04`

Modules and Libraries used:
- NPM v6.4.1
- Node v10.15.1
- React v16.8.x (using [create-react-app](https://github.com/facebook/create-react-app))
- [Axios](https://github.com/axios/axios) - HTTP client
- [Enzyme](https://github.com/airbnb/enzyme)/Jest - testing
- [Zendesk Garden React Components](https://github.com/zendeskgarden/react-components) - component library

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
Ensure internet connection is available as the application makes calls to external APIs.

`npm start`

## Improvements
Currently the application manages state by passing props from base component down to children components. A better practice may be to use ReactHooks version of Redux.

Visually the application works on a desktop but is not responsive. Further design work needs to be done to make it more mobile friendly.

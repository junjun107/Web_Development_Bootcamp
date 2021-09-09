# The-Complete-2020-Web-Development-Bootcamp

## Main Topics Covered

## HTML:

<details>
  <summary>Front-End Web Development</summary>

###

- Hyper Text Markup Language.
- HTML is the foundation of all websites.
</details>

## CSS:

<details>
   <summary>Cascading Styles Sheet</summary>

### Internal CSS

- Broswers have default styling added on top of out own css styles

### External CSS

- Styles stored in external file.css and linked to HTML file in head tag.

### Favicons

- A small icon that appears next to the title of website. (16×16 pixel )

### Box Model

![](https://www.kasandbox.org/programming-images/misc/boxmodel.png)

### Display Properties

- block elements take the whole width of the document.
- inline elements take the width of the content only.
- inline-block, that allows to change width and set elements at the same line.
- images are inline-block

### Static and Relative Positioning

### Absolute Positioning

### Sizing

</details>

## Bootstrap:

<details>
  <summary>Front-end open-source CSS framework. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</summary>

###

- Hyper Text Markup Language.
- HTML is the foundation of all websites.
</details>

## JavaScript:

<details>
  <summary>Front-end open-source CSS framework. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</summary>

###

- Data Types: String, Numbers, Boolean and typeof(variable)
- Randomisation and logical operators
- Loops, collections and Conditionals
- Functions
- Expressions, Operators, Statements and
  Declarations
- Object-Oriented Programming
- Objects and Prototypes
- `This`

</details>

## Document Object Model (DOM):

<details>
  <summary>Turns websites into tree structure objects</summary>

![](https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/08/JavaScript-Dom-Tree.png)

###

</details>

## jQuery

<details>
  <summary> Javascript library that someone wrote it to simplify js code and make it easy to use.</summary>

</details>

## Unix Command Line

- Bash Shell - a command line interpretter for the UNIX system.
- cmd provides full control and more flexibility

## Node.js

<details>
  <summary> An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. </summary>

###

- Apply concepts like data types, objects, methods, objectoriented
  programming, and classes in the context of backend
  development.
- use command line with Node.js

### Native Node Modules

- such as File modules, HTTP modules

### NPM

- Node Package Manager for External modules.
- `$ npm init -y` intailize NPM package.json file into the project.

</details>

## Express.js with Node.js

<details>
  <summary>Express is a minimalist web framework for Node.js </summary>

###

- Creating Node and Express based servers
- RESTful Routing with Express
- use middleware for Node applications
</details>

## APIs

<details>
  <summary>Application Programming Interfaces</summary>

###

- HTTP
- Calling APIs
  - Endpoints, Paths and Parameters
  - Making GET Requests with the Node HTTPS Module
  - `app.get('/', function(req, res){ //url parts const query = 'london'; const apiKey = '3b712ebc109bc87b541a0abaa0f64b85'; const unit = 'metric'; //request from our Server to external server 'API' const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
    https.get(url, function(response){
    console.log((response));
    })
    })`
- Basic API Authentication
- JSON
</details>

## EJS

<details>
  <summary> Embedded JavaScript templates</summary>

</details>

## Databases

<details>
  <summary>Data Relationships SQL vs. NOSQL </summary>

###

- Stands for Structured Query language vs non-relational Structured Query language

### NoSQL Database with MongoDB and Mongoose

- mongodb is the native driver for interacting with a mongoDB
- mongoose is an Object modeling tool for MongoDB.

### Mongoose: an alternative to the native MongoDB driver

</details>

## Building RESTful APIs

<details>
  <summary>Representational State Transfer</summary>

###

- MongoDB GUI Robo 3T and MongoDB Compass
- Implementing GET, POST, PUT, PATCH and DELETE
- Use Express to handle routes

</details>

## Authentication & Security

<details>
 
###

- Level 1 - Register Users with Username and Password
- Level 2 - Database Encryption
- Level 3 - Hashing Passwords
- Level 4 - Salting and Hashing Passwords with bcrypt
  Cookies and Sessions
- level 5 - Using Passport.js to Add Cookies and Sessions
- Level 6 - OAuth 2.0 & How to Implement Sign In with Google
</details>

## React

<details>
  <summary>JavaScript library for building user interfaces or UI components.</summary>

### JSX

- JSX stands for JavaScript XML. It allows us to directly write HTML in React
  - `React.createElement(component, props, ...children) `
  - JSX Expressions `<MyComponent foo={1 + 2 + 3 + 4} />`
  - Attributes `function App1() { return <Greeting firstName="Ben" lastName="Hector" />; }`

### Components

- Components are functions that are independent, reusable pieces of the UI
- Coponent can have properties
  - `function Welcome(props) { return <h1>Hello {props.name}!</h1>; } ReactDOM.render(<Welcome name="John Doe"/>, document.getElementById('root')); `
- Local Environment Setup for React Development
  - `npx create-react-app react-tutorial `
  - `npm start`

### Props

- Props are Read-Only
-

</details>

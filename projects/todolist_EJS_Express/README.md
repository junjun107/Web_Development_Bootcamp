Using EJS with Express

Use EJS to create templates for about, header, footer and list page.

Inside app.js, a basic sever is setup.

- app.get() renders list page and current date
- app.post() new entered items into items array, then it gets passed into the list.ejs under this varible name NewListItems. A for loop will loops through the entire array and render a new <li> for each item.

Setup a route for work page

setup a route for about page

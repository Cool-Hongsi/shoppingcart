# Shopping Cart

<div>As the standard of MVC design, stored product list information into MongoDB and send the data from one of the routers in NodeJS. After then, set up the proxy server as the same server of NodeJS, and receive the data by using fetch method in ReactJS. Also, represent data through ES6 (spread, includes).
Distinguished administrator version and user version in order to manage products and show products respectively with the standard of REST API.
As long as the user add items in their shopping cart, then record would be kept until program ends by using session.</div>

<h2>INSTALLATION</h2>
<ul>
    <li>git clone https://github.com/Cool-Hongsi/shoppingcart.git</li>
    <li>./shoppingcart -> npm install (To install necessary backend modules)</li>
    <li>./shoppingcart/frontend -> npm install (To install necessary frontend modules)</li>
    <li>./shoppingcart -> npm run dev (To execute the program)</li>
</ul>
<h2>SET UP</h2>
<ul>
    <li>Development Program : Visual Studio Code</li>
    <li>Model : MongoDB</li>
    <li>View : ReactJS</li>
    <li>Controller : NodeJS
        <ul>
            <li>alert-node</li>
            <li>body-parser</li>
            <li>concurrently</li>
            <li>connect-mongo</li>
            <li>express</li>
            <li>express-session</li>
            <li>mongoose</li>
            <li>nodemon</li>
        </ul>
    </li>
</ul>
<h2>PROCESS</h2>
    <ol>
        <li>In the administrator version (/administrator), can select, insert, update, delete the product information.</li>
        <li>In the user version(/), can add products into shopping cart as well as see the products that the user want to see by using filter function.</li>
        <li>Once the user clicks add button, the information for products would be stored in shopping cart with quantity and price.</li>
        <li>This information would be kept until program ends via session.</li>
    </ol>

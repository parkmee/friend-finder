// dependencies for express
const express = require('express');

// express server configuration
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public'))); // need this to run css

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router configuration
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// listener - starts server
app.listen(PORT, () => {
    console.log(`App listening on: http://localhost:${PORT}`);
});
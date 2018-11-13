// dependencies for express
const express = require('express');
const path = require('path');

// express server configuration
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router configuration
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener - starts server
app.listen(PORT, () => {
    console.log(`App listening on: http://localhost:${PORT}`);
});
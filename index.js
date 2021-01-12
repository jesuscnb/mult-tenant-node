const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require('compression');
const app = express();
app.use(compression());
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '50mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));

require('./routes/user.routes')(app);

const PORT = process.env.APP_HOST || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./controller/router');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.static('public'));
app.use(cors());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
const express = require('express')
    , app = express();

app.use(express.json());
app.use(require('./controllers'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
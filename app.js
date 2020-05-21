const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to the home page!");
});

const server = app.listen(process.env.PORT || 5000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://${host}:${port}');
});


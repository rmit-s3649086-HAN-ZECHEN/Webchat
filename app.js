const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send({'hi': 'HAN'})
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
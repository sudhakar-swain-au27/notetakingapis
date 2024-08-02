const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/notes', noteRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

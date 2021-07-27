const express = require('express')
const app = express()
const port = 3000
const dir = `${__dirname}/public/`;

app.get("*", (req, res) => {
  res.sendFile(dir + "index.html");
});

app.listen(1000);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
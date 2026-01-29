const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: "Backend Running Successfully !" });
});

app.listen(PORT, '0.0.0.0', () => console.log(`Backend listening on ${PORT}`));
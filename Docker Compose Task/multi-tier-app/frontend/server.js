const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to access backend API
app.get('/api', async (req, res) => {
  try {
    // Calling the backend Flask API using the service name 'backend'
    const response = await axios.get('http://backend:5000');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to backend' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});

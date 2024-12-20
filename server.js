// Import the Express module
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define the port to run the server
const PORT = 3000;
const replicaApp = process.env.APP_NAME
// Serve static files (CSS, images, etc.)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${replicaApp}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`${replicaApp} is running on http://localhost:${PORT}`);
});

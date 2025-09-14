const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'FNAF 6 - Connection Terminated',
        description: 'A tribute to the FNAF 6 ending with synchronized audio and subtitles'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'FNAF 6 Ending Tribute Server is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Connection Lost - 404',
        message: 'The page you are looking for has been terminated.'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).render('error', {
        title: 'System Malfunction - 500',
        message: 'An unexpected error occurred in the system.'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🎭 FNAF 6 Ending Tribute Server running on http://localhost:${PORT}`);
    console.log(`⚡ Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔥 Connection established...`);
});
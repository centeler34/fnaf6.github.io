# FNAF 6 Ending Tribute - Node.js Web Application

A Node.js web application tribute to the FNAF 6 ending with synchronized audio and subtitles featuring Henry's complete monologue.

## Features

-  **Atmospheric Design**: Dark, eerie FNAF 6 theme with creepy fonts and effects
-  **Synchronized Audio**: Complete Henry monologue with perfectly timed subtitles
-  **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
-  **Node.js Backend**: Express.js server with EJS templating
-  **Visual Effects**: Loading screens, glitch effects, and atmospheric animations
-  **Error Handling**: Custom 404 and 500 error pages with FNAF theming

## Installation

1. **Clone or download this repository**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
FNAF6/
├── server.js              # Express.js server
├── package.json           # Node.js dependencies and scripts
├── public/               # Static assets
│   └── assets/
│       ├── audio/        # Audio files
│       ├── background/   # Background images
│       ├── css/         # Stylesheets
│       └── js/          # Client-side JavaScript
├── views/               # EJS templates
│   ├── index.ejs        # Main page
│   ├── 404.ejs         # Not found page
│   └── error.ejs       # Server error page
└── README.md           # This file
```

## API Endpoints

- `GET /` - Main FNAF 6 tribute page
- `GET /health` - Health check endpoint
- `GET /*` - 404 error handling

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Audio**: HTML5 Audio API
- **Fonts**: Google Fonts (Creepster, Orbitron)

## Development

To run in development mode with auto-restart:

```bash
npm run dev
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Browser Support

- Modern browsers with HTML5 audio support
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - see LICENSE file for details.

---

**Connection Terminated** 

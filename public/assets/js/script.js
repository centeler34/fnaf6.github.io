// FNAF 6 Ending Tribute - Terminal Interface with Live Transcript
class FNAF6Tribute {
    constructor() {
        // Audio and video elements
        this.audio = document.getElementById('main-audio');
        this.creditsAudio = document.getElementById('credits-audio');
        this.backgroundVideo = document.getElementById('background-video');

        // Main screens
        this.terminalScreen = document.getElementById('terminal-screen');
        this.scottScreen = document.getElementById('scott-screen');
        this.creditsScreen = document.getElementById('credits-screen');
        this.loadingScreen = document.getElementById('loading-screen');

        // Content elements (transcript removed)

        // Terminal elements
        this.terminalOutput = document.getElementById('terminal-output');
        this.terminalInput = document.getElementById('terminal-input');
        this.connectionStatus = document.getElementById('connection-status');

        // State
        this.currentWordIndex = 0;
        this.isInScottScreen = false;
        this.terminalInitialized = false;

        // Word timings removed - audio only mode

        this.init();
    }

    init() {
        this.setupTerminal();
        this.setupAudio();
        this.setupBackground();
        this.setupKeyboardHandlers();
        this.startTerminalSequence();
    }

    setupTerminal() {
        // Hide other screens initially
        this.loadingScreen.style.display = 'none';

        // Focus terminal input
        this.terminalInput.focus();

        // Handle terminal input
        this.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.processCommand(this.terminalInput.value.trim());
                this.terminalInput.value = '';
            }
        });
    }

    setupAudio() {
        this.audio.addEventListener('loadedmetadata', () => {
            console.log('Audio loaded, duration:', this.audio.duration);
        });

        // Removed transcript update listener - audio only mode

        this.audio.addEventListener('ended', () => {
            this.onAudioEnded();
        });
    }

    setupBackground() {
        if (this.backgroundVideo) {
            this.backgroundVideo.addEventListener('loadeddata', () => {
                console.log('Background video loaded successfully');
            });

            this.backgroundVideo.addEventListener('error', (e) => {
                console.error('Error loading background video:', e);
            });
        }
    }

    setupKeyboardHandlers() {
        document.addEventListener('keydown', (e) => {
            if (this.isInScottScreen) {
                this.exitScottScreen();
            }
        });
    }

    startTerminalSequence() {
        // Initial connection sequence
        setTimeout(() => {
            this.addTerminalLine('FNAF6 System initializing...', 'warning');
            this.connectionStatus.textContent = 'Connecting...';
        }, 500);

        setTimeout(() => {
            this.addTerminalLine('Establishing connection to Freddy Fazbear\'s Pizza...', 'warning');
        }, 1500);

        setTimeout(() => {
            this.addTerminalLine('Connection established.', 'success');
            this.connectionStatus.textContent = 'Connected';
            this.connectionStatus.classList.add('connected');
        }, 3000);

        setTimeout(() => {
            this.addTerminalLine('Welcome to FNAF6 Terminal Interface', 'success');
            this.addTerminalLine('Available commands:', '');
            this.addTerminalLine('  /run_ending - Execute the final ending sequence', '');
            this.addTerminalLine('  /scott - Show appreciation message', '');
            this.addTerminalLine('  /help - Show this help message', '');
            this.addTerminalLine('');
            this.addTerminalLine('Type a command to continue...', 'warning');
            this.terminalInitialized = true;
        }, 4000);
    }

    addTerminalLine(text, type = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.textContent = text;
        this.terminalOutput.appendChild(line);
        this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    }

    processCommand(command) {
        if (!this.terminalInitialized) return;

        // Echo the command
        this.addTerminalLine(`user@fnaf6:~$ ${command}`);

        switch (command.toLowerCase()) {
            case '/run_ending':
                this.runEndingCommand();
                break;
            case '/scott':
                this.scottCommand();
                break;
            case '/help':
                this.helpCommand();
                break;
            case '':
                break;
            default:
                this.addTerminalLine(`Command not found: ${command}`, 'error');
                this.addTerminalLine('Type /help for available commands', 'warning');
                break;
        }
    }

    runEndingCommand() {
        this.addTerminalLine('Initiating ending sequence...', 'warning');
        this.addTerminalLine('Loading audio and video components...', 'warning');

        setTimeout(() => {
            this.addTerminalLine('Components loaded successfully', 'success');
            this.addTerminalLine('Starting Henry\'s final monologue...', 'success');
        }, 1000);

        setTimeout(() => {
            this.terminalScreen.classList.add('hidden');
            this.startAudioAndVideo();
        }, 2500);
    }

    scottCommand() {
        this.addTerminalLine('Loading appreciation message...', 'warning');

        setTimeout(() => {
            this.addTerminalLine('Message loaded', 'success');
            this.showScottScreen();
        }, 1000);
    }

    helpCommand() {
        this.addTerminalLine('Available commands:', 'success');
        this.addTerminalLine('  /run_ending - Execute the final ending sequence', '');
        this.addTerminalLine('  /scott - Show appreciation message for Scott Cawthon', '');
        this.addTerminalLine('  /help - Show this help message', '');
    }

    showScottScreen() {
        this.scottScreen.classList.add('active');
        this.isInScottScreen = true;
    }

    exitScottScreen() {
        this.scottScreen.classList.remove('active');
        this.isInScottScreen = false;
        this.addTerminalLine('Returned to terminal', 'success');
        this.terminalInput.focus();
    }

    startAudioAndVideo() {
        // Auto-play audio and video
        const audioPromise = this.audio.play();

        if (audioPromise !== undefined) {
            audioPromise.then(() => {
                console.log('Audio started successfully');

                // Sync video with audio
                if (this.backgroundVideo) {
                    this.backgroundVideo.currentTime = 0;
                    this.backgroundVideo.play().catch(e => console.log('Video play error:', e));
                }
            }).catch(error => {
                console.log('Audio autoplay failed:', error);
                // If autoplay fails, start video anyway
                if (this.backgroundVideo) {
                    this.backgroundVideo.play().catch(e => console.log('Video play error:', e));
                }
            });
        }
    }

    // Transcript functions removed - audio only mode

    onAudioEnded() {
        setTimeout(() => {
            // Show credits screen instead of returning to terminal
            this.showCreditsScreen();
        }, 2000);
    }

    showCreditsScreen() {
        this.creditsScreen.classList.add('active');

        // Auto-play credits audio
        if (this.creditsAudio) {
            this.creditsAudio.currentTime = 0;
            const creditsAudioPromise = this.creditsAudio.play();

            if (creditsAudioPromise !== undefined) {
                creditsAudioPromise.then(() => {
                    console.log('Credits audio started successfully');
                }).catch(error => {
                    console.log('Credits audio autoplay failed:', error);
                });
            }
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new FNAF6Tribute();
});

// Audio continues playing when navigating away from the site
// Removed visibility change handler to allow continuous audio playback
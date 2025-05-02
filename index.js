// Fixed Watch Tower JavaScript - Complete Solution

// Display first screen on load
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and ready');
    
    // Setup button handlers immediately
    setupButtonHandlers();
    
    // Hide loader after 2 seconds
    setTimeout(() => {
        console.log('Hiding loader');
        const loader = document.querySelector('.app-loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.8s ease';
            
            setTimeout(() => {
                loader.style.display = 'none';
                console.log('Loader hidden');
                
                // Make sure the first screen is visible
                const firstScreen = document.getElementById('screen1');
                if (firstScreen) {
                    firstScreen.classList.remove('hidden');
                    firstScreen.style.opacity = '1';
                    console.log('First screen displayed');
                    
                    // Start character animations on first screen
                    startCharacterAnimations();
                    
                    // Initialize geometric patterns
                    initGeometricPatterns();
                    
                    // Create animated background elements
                    createAnimatedBackground();
                } else {
                    console.error('First screen element not found');
                }
            }, 800);
        } else {
            console.error('Loader element not found');
        }
    }, 2000);
});

// Setup all button click handlers
function setupButtonHandlers() {
    console.log('Setting up button handlers');
    
    // Direct button click handler for screen 1
    const screen1btn = document.querySelector("#screen1 .btn-next");
    if (screen1btn) {
        console.log('Screen 1 button found');
        screen1btn.onclick = function() {
            console.log('Screen 1 button clicked');
            goToScreen(2);
        };
    } else {
        console.error('Screen 1 button not found');
    }
    
    // Direct button click handler for screen 2
    const screen2btn = document.querySelector("#screen2 .btn-next");
    if (screen2btn) {
        console.log('Screen 2 button found');
        screen2btn.onclick = function() {
            console.log('Screen 2 button clicked');
            goToScreen(3);
        };
    } else {
        console.error('Screen 2 button not found');
    }
    
    // Direct button click handler for screen 3
    const screen3btn = document.getElementById("createProfileBtn");
    if (screen3btn) {
        console.log('Screen 3 button found');
        screen3btn.onclick = function() {
            console.log('Screen 3 button clicked');
            if (validateProfile()) {
                goToScreen(4);
            }
        };
    } else {
        console.error('Screen 3 button not found');
    }
    
    // Direct button click handler for screen 4
    const screen4btn = document.getElementById("finalizeProfileBtn");
    if (screen4btn) {
        console.log('Screen 4 button found');
        screen4btn.onclick = function() {
            console.log('Screen 4 button clicked');
            redirectToMainApp();
        };
    } else {
        console.error('Screen 4 button not found');
    }
    
    // Add event listeners to character options
    setupCharacterSelection();
}

// Function to navigate between onboarding screens
function goToScreen(screenNumber) {
    console.log('Navigating to screen', screenNumber);
    
    // Get current visible screen
    const currentScreens = document.querySelectorAll('.onboarding:not(.hidden)');
    let currentScreenNum = 1;
    if (currentScreens.length > 0) {
        const currentId = currentScreens[0].id;
        if (currentId && currentId.startsWith('screen')) {
            currentScreenNum = parseInt(currentId.replace('screen', '')) || 1;
        }
    }
    
    // Determine if going forward or backward (for transition direction)
    const goingForward = screenNumber > currentScreenNum;
    console.log(goingForward ? 'Moving forward' : 'Moving backward');
    
    // Hide all screens with fade effect
    document.querySelectorAll('.onboarding').forEach(screen => {
        screen.style.opacity = '0';
        screen.style.transform = goingForward ? 'translateX(-5%)' : 'translateX(5%)';
        screen.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Add hidden class after fade out
        setTimeout(() => {
            screen.classList.add('hidden');
        }, 500);
    });
    
    // Show the target screen after fade out
    setTimeout(() => {
        const targetScreen = document.getElementById('screen' + screenNumber);
        if (targetScreen) {
            // Set initial position for entrance animation
            targetScreen.style.transform = goingForward ? 'translateX(5%)' : 'translateX(-5%)';
            targetScreen.style.opacity = '0';
            targetScreen.classList.remove('hidden');
            
            // Force reflow
            void targetScreen.offsetWidth;
            
            // Fade in the new screen
            setTimeout(() => {
                targetScreen.style.opacity = '1';
                targetScreen.style.transform = 'translateX(0)';
                console.log('Screen', screenNumber, 'visible');
                
                // Start character animations if on selection screen
                if (screenNumber === 4) {
                    animateSelectionCharacters();
                }
            }, 50);
        } else {
            console.error('Target screen', screenNumber, 'not found');
        }
    }, 500);
    
    // Play transition sound (placeholder)
    console.log('Playing transition sound');
}

// Initialize character animations on the first screen
function startCharacterAnimations() {
    console.log('Starting character animations');
    
    // Add animation class to main characters
    document.querySelectorAll('.character-exact-layout .character').forEach(character => {
        character.classList.add('animated');
    });
    
    // Add staggered delay to animations for a more natural feel
    const topTriangle = document.querySelector('.top-triangle');
    const leftSquare = document.querySelector('.left-square');
    const rightTriangle = document.querySelector('.right-triangle');
    const bottomCircle = document.querySelector('.bottom-circle');
    
    if (topTriangle) topTriangle.style.animationDelay = '0s';
    if (leftSquare) leftSquare.style.animationDelay = '0.5s';
    if (rightTriangle) rightTriangle.style.animationDelay = '0.8s';
    if (bottomCircle) bottomCircle.style.animationDelay = '0.3s';
}

// Animate characters on the selection screen
function animateSelectionCharacters() {
    console.log('Animating selection characters');
    
    document.querySelectorAll('.character-selection .character').forEach((character, index) => {
        character.classList.add('animated');
        // Add staggered animation
        character.style.animationDelay = (index * 0.2) + 's';
    });
}

function setupCharacterSelection() {
    const characterCards = document.querySelectorAll('.character-card');
  
    characterCards.forEach(card => {
      card.addEventListener('click', function () {
        // Remove selected class from all
        characterCards.forEach(c => c.classList.remove('selected'));
  
        // Add to the one clicked
        this.classList.add('selected');
  
        // Store selected character in localStorage
        const selectedCharacter = this.getAttribute('data-character');
        localStorage.setItem('selectedCharacter', selectedCharacter);
  
        // Optional: add bounce animation
        const characterEl = this.querySelector('.character');
        if (characterEl) {
          characterEl.style.animation = 'none';
          setTimeout(() => {
            characterEl.style.animation = 'bounce 0.5s ease';
          }, 10);
        }
      });
    });
  
    // Add bounce animation keyframes if not already added
    if (!document.getElementById('bounce-keyframes')) {
      const style = document.createElement('style');
      style.id = 'bounce-keyframes';
      style.innerHTML = `
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
// Initialize geometric patterns
function initGeometricPatterns() {
    console.log('Initializing geometric patterns');
    
    const screens = document.querySelectorAll('.onboarding');
    
    screens.forEach(screen => {
        const geometricBackground = screen.querySelector('.geometric-background');
        if (geometricBackground) {
            // Random movement for shapes
            const shapes = geometricBackground.querySelectorAll('.geometric-shape');
            shapes.forEach(shape => {
                // Add subtle floating animation
                setInterval(() => {
                    // Random movement within 10px
                    const xMove = Math.random() * 20 - 10;
                    const yMove = Math.random() * 20 - 10;
                    
                    // Apply transform with transition
                    shape.style.transition = 'transform 8s ease-in-out';
                    shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
                }, 8000); // Change position every 8 seconds
            });
        }
    });
}

// Create animated background elements
function createAnimatedBackground() {
    console.log('Creating animated background');
    
    // Check if animated-bg already exists
    if (!document.querySelector('.animated-bg')) {
        const animatedBg = document.createElement('div');
        animatedBg.className = 'animated-bg';
        document.querySelector('.app-container').appendChild(animatedBg);
        
        // Create particles
        for (let i = 0; i < 10; i++) {
            createParticle(animatedBg);
        }
        
        // Create power pulses
        for (let i = 0; i < 3; i++) {
            createPowerPulse(animatedBg);
        }
    }
}

// Create individual particles
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 5 and 15 pixels
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    
    // Add to container
    container.appendChild(particle);
    
    // Animate particle
    animateParticle(particle);
}

// Animate particles
function animateParticle(particle) {
    setInterval(() => {
        // Random movement within 50px
        const newX = parseFloat(particle.style.left) + (Math.random() * 20 - 10);
        const newY = parseFloat(particle.style.top) + (Math.random() * 20 - 10);
        
        // Keep within bounds
        const boundedX = Math.max(0, Math.min(100, newX));
        const boundedY = Math.max(0, Math.min(100, newY));
        
        // Apply new position with transition
        particle.style.transition = 'left 8s ease, top 8s ease';
        particle.style.left = `${boundedX}%`;
        particle.style.top = `${boundedY}%`;
    }, 8000);
}

// Create power pulse effect
function createPowerPulse(container) {
    const pulse = document.createElement('div');
    pulse.className = 'power-pulse';
    
    // Random size
    const size = Math.random() * 200 + 100;
    pulse.style.width = `${size}px`;
    pulse.style.height = `${size}px`;
    
    // Random position
    pulse.style.left = `${Math.random() * 100}%`;
    pulse.style.top = `${Math.random() * 100}%`;
    
    // Random animation delay
    pulse.style.animationDelay = `${Math.random() * 2}s`;
    
    // Add to container
    container.appendChild(pulse);
}

// Function to validate form data
function validateProfile() {
    console.log('Validating profile');
    
    const zipcode = document.getElementById('userZipcode').value;
    const email = document.getElementById('userEmail').value;

    if (!zipcode || !email) {
        showToast('PLEASE FILL IN THE REQUIRED FIELDS.');
        return false;
    }

    // Validate email format
    if (!validateEmail(email)) {
        showToast('PLEASE ENTER A VALID EMAIL ADDRESS.');
        return false;
    }

    return true;
}

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Function to save profile data and redirect to main app
function redirectToMainApp() {
    console.log('Redirecting to main app');
    
    // First check if a character is selected
    const selectedCharacter = localStorage.getItem('selectedCharacter');
    
  
    
    // Get form data from screen 3
    const zipcode = document.getElementById('userZipcode').value;
    const email = document.getElementById('userEmail').value;
    const name = document.getElementById('userName').value || 'User';

    // Save profile data to localStorage
    localStorage.setItem('userZipcode', zipcode);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    localStorage.setItem('onboardingComplete', 'true');

    // Show success message before redirecting
    showToast('PROFILE CREATED SUCCESSFULLY!');
    
    // Redirect to main app after a short delay
    setTimeout(() => {
        console.log('Redirecting to home.html');
        window.location.href = 'home.html';
    }, 1500);
}

// Toast message system
function showToast(message) {
    console.log('Showing toast:', message);
    
    const toast = document.getElementById('toast');
    if (toast) {
        // Update toast content
        if (toast.querySelector('.toast-message')) {
            toast.querySelector('.toast-message').textContent = message;
        } else {
            toast.textContent = message;
        }
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    } else {
        console.error('Toast element not found');
        alert(message); // Fallback
    }
}
// Updated JS functions for character selection

// Setup character selection functionality - Updated for character-card elements
function setupCharacterSelection() {
    console.log('Setting up character selection');
    const characters = ['olive', 'pinky', 'boxo', 'trigo', 'ghost'];
    
    const characterCards = document.querySelectorAll('.character-card');
    
    if (characterCards.length > 0) {
        console.log('Character cards found:', characterCards.length);
        
        characterCards.forEach(card => {
            card.addEventListener('click', function() {
                console.log('Character selected:', this.getAttribute('data-character'));
                
                // Remove selected class from all cards
                characterCards.forEach(c => c.classList.remove('selected'));
                
                // Add selected class to clicked card
                this.classList.add('selected');
                
                // Store selected character in localStorage
                const selectedCharacter = this.getAttribute('data-character');
                localStorage.setItem('selectedCharacter', selectedCharacter);
                
                // Add a pulse animation to the selected character
                const characterEl = this.querySelector('.character');
                if (characterEl) {
                    characterEl.classList.add('selected');
                }
            });
        });
    } else {
        // Fallback to original character selection if no cards found
        console.log('Character cards not found, trying original selection');
        const characterOptions = document.querySelectorAll('.character-option');
        
        characterOptions.forEach(option => {
            option.addEventListener('click', function() {
                console.log('Character selected:', this.getAttribute('data-character'));
                
                // Remove selected class from all options
                characterOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Store selected character in localStorage
                const selectedCharacter = this.getAttribute('data-character');
                localStorage.setItem('selectedCharacter', selectedCharacter);
                
                // Add a bounce animation to the selected character
                const characterEl = this.querySelector('.character');
                if (characterEl) {
                    characterEl.style.animation = 'none';
                    setTimeout(() => {
                        characterEl.style.animation = 'bounce 0.5s ease';
                    }, 10);
                }
            });
        });
    }
    
    // Setup back button if it exists
    const backButton = document.querySelector('.btn-back');
    if (backButton) {
        console.log('Back button found');
        backButton.addEventListener('click', function() {
            console.log('Back button clicked');
            goToScreen(3);
        });
    }
}

// Animate characters on the selection screen - Updated for new layout
function animateSelectionCharacters() {
    console.log('Animating selection characters');
    
    // Try new character cards first
    const characterElements = document.querySelectorAll('.character-card .character');
    
    if (characterElements.length > 0) {
        console.log('Animating character cards');
        characterElements.forEach((character, index) => {
            // Add staggered animation
            character.style.animationDelay = (index * 0.2) + 's';
        });
    } else {
        // Fallback to original character selection
        console.log('Animating original characters');
        document.querySelectorAll('.character-selection .character').forEach((character, index) => {
            character.classList.add('animated');
            // Add staggered animation
            character.style.animationDelay = (index * 0.2) + 's';
        });
    }
}

// Updated function to save profile data and redirect to main app
function redirectToMainApp() {
    console.log('Redirecting to main app');
    
    // First check if a character is selected
    const selectedCharacter = localStorage.getItem('selectedCharacter');
    
    if (!selectedCharacter) {
        showToast('PLEASE SELECT A CHARACTER.');
        return;
    }
    
    // Get form data from screen 3
    const zipcode = document.getElementById('userZipcode').value;
    const email = document.getElementById('userEmail').value;
    const name = document.getElementById('userName').value || 'User';

    // Save profile data to localStorage
    localStorage.setItem('userZipcode', zipcode);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    localStorage.setItem('onboardingComplete', 'true');

    // Show success message before redirecting
    showToast('PROFILE CREATED SUCCESSFULLY!');
    
    // Redirect to main app after a short delay
    setTimeout(() => {
        console.log('Redirecting to home.html');
        window.location.href = 'home.html';
    }, 1500);
}
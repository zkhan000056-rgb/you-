const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const happyMessage = document.getElementById('happyMessage');
const heartBg = document.getElementById('heartBg');

// Make the "No" button teleport away when hovered over
noBtn.addEventListener('mouseover', () => {
    // Generate random position within screen limits
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show success message when "Yes" is clicked
function celebrate() {
    happyMessage.className = "visible";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
}

// Function to generate continuous floating hearts background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3s to 5s
    heartBg.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Spawn a heart every 300ms
setInterval(createHeart, 300);

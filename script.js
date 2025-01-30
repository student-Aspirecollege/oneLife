
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
//   for num Animation

window.onload = function() {
    let amountElement = document.getElementById('amount');
    let target = 10000000;
    let current = 0;
    let increment = Math.floor(target / 100); // Adjust speed
    let interval = setInterval(function() {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        amountElement.innerText = current.toLocaleString();
    }, 15);
};


document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});




const imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach(box => {
  const overlayBubble = document.createElement('div');
  overlayBubble.classList.add('overlay-bubble');
  box.appendChild(overlayBubble);

  // Add text to the bubble
  overlayBubble.innerHTML = 'Hover Text';  // You can customize this text or make it dynamic based on image

  box.addEventListener('mousemove', function(e) {
    const { left, top, width, height } = box.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    overlayBubble.style.left = `${x}px`;
    overlayBubble.style.top = `${y}px`;
  });

  box.addEventListener('mouseenter', function() {
    overlayBubble.style.opacity = 1;
  });

  box.addEventListener('mouseleave', function() {
    overlayBubble.style.opacity = 0;
  });
});


// Get all the toggle buttons
const faqToggles = document.querySelectorAll('.faq-toggle');

// Loop through all the buttons and add click event listeners
faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        // Toggle the display of the answer
        const answer = this.closest('.faq-item').querySelector('.faq-answer');
        const currentDisplay = answer.style.display;

        // Show or hide the answer based on the current state
        if (currentDisplay === 'none' || currentDisplay === '') {
            answer.style.display = 'block';
            this.textContent = '-'; // Change to minus when expanded
        } else {
            answer.style.display = 'none';
            this.textContent = '+'; // Change to plus when collapsed
        }
    });
});



/* File: script.js */

// 1. STICKY NAVBAR LOGIC
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.padding = "10px 0";
        nav.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
        nav.style.padding = "15px 0";
        nav.style.background = "#ffffff";
    }
});

// 2. COUNTER ANIMATION (Logika Berulang untuk memperbanyak baris)
const valueDisplays = document.querySelectorAll(".num");
const interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// 3. REVEAL ANIMATION ON SCROLL
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// 4. FORM VALIDATION LOGIC (Verbose/Perbanyak Baris)
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === "") {
        console.error("Nama tidak boleh kosong");
        return false;
    }
    if(!email.includes("@")) {
        console.error("Format email salah");
        return false;
    }
    // Lanjutkan validasi lainnya...
}
// Menangani Dropdown di perangkat sentuh/mobile
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            submenu.style.opacity = '1';
            submenu.style.visibility = 'visible';
            submenu.style.position = 'relative'; // Di mobile jadi relatif agar mendorong content
            submenu.style.transform = 'none';
        }
    });
});

// Animasi Navbar saat Scroll (Verbose Style)
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.height = "70px";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    } else {
        navbar.style.height = "85px";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
    }
}


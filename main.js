// Smooth scroll for navigation
function scrollToSection() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Sticky navigation
window.addEventListener('scroll', () => { 
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});


function toggleMenu() {
    var nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}

// Close menu when clicking on a menu link
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});


function scrollToSection() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}



// pop up


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from redirecting
    
    // Send form data to FormSubmit
    let formData = new FormData(this);
    fetch(this.action, {
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            document.getElementById("popup-message").style.display = "flex"; // Show pop-up
            this.reset(); // Reset form after submission
        }
    }).catch(error => console.error("Error:", error));
});

// Close pop-up function
function closePopup() {
    document.getElementById("popup-message").style.display = "none";
}

// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

if(contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill all fields.");
            return;
        }

        if(!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();
    });
}

// ================= PROJECT BUTTONS =================

const projectButtons = document.querySelectorAll(".project-buttons .btn");

projectButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const projectName = this.closest(".project-card")
            .querySelector("h2").textContent;

        if(this.textContent.trim() === "Live Demo") {
            alert("Live Demo for " + projectName);
        }
    });
});

// ================= SMOOTH SCROLL =================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        const targetId = this.getAttribute("href");

        if(targetId !== "#") {
            const target = document.querySelector(targetId);

            if(target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});
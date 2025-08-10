document.addEventListener("DOMContentLoaded", function() {
    // Form validation and interaction
    const formInputs = document.querySelectorAll('.form-control');
    const continueBtn = document.querySelector('.continue-btn');
    const skipBtn = document.querySelector('.btn-primary');

    // Add focus and blur effects to form inputs
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#3b82f6';
            this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = '#e5e7eb';
            this.style.boxShadow = 'none';
        });

        // Add input validation
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#10b981';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
    });

    // Continue button functionality
    if (continueBtn) {
        continueBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const requiredFields = document.querySelectorAll('.form-control');
            
            requiredFields.forEach(field => {
                if (field.value.trim() === '') {
                    field.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    field.style.borderColor = '#10b981';
                }
            });

            if (isValid) {
                // Add loading animation
                this.innerHTML = 'Processing...';
                this.disabled = true;
                
                setTimeout(() => {
                    alert('Booking information submitted successfully!');
                    this.innerHTML = 'Continue';
                    this.disabled = false;
                }, 2000);
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Skip button functionality
    if (skipBtn) {
        skipBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            alert('Searching for available pilots...');
        });
    }

    // Navigation link active state management
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            console.log('Navigation to:', this.textContent);
        });
    });

    // Add smooth animations on page load
    const animatedElements = document.querySelectorAll('.section-title, .form-section, .airplane-img');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Initialize animations
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Date and time input formatting
    const dateInputs = document.querySelectorAll('.form-control');
    dateInputs.forEach((input, index) => {
        if (index < 3) { // Date inputs
            input.addEventListener('input', function() {
                // Add basic date formatting logic here if needed
                console.log('Date input changed:', this.value);
            });
        } else if (index >= 3 && index < 7) { // Time inputs
            input.addEventListener('input', function() {
                // Add basic time formatting logic here if needed
                console.log('Time input changed:', this.value);
            });
        }
    });

    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});


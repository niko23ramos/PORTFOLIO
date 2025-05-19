// Handle navbar active state and show only the clicked section
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Remove active class from all links
      document.querySelectorAll('.navbar a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
  
      // Hide all sections
      document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  
      // Show the clicked section
      const sectionId = this.getAttribute('href');
      const section = document.querySelector(sectionId);
      if (section) {
        section.style.display = 'block';
      }
    });
  });
  
  // Handle contact form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const data = {
      fullname: this.fullname.value,
      address: this.address.value,
      email: this.email.value,
      contact: this.contact.value,
      message: this.message.value
    };
  
    console.log("Form data:", data);
    alert("Message successfully sent!");
  
    this.reset();
  });
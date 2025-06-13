document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate a successful submission
  const name = document.getElementById("name").value;
  document.getElementById("formMessage").textContent = `Thank you, ${name}. Your message has been sent!`;

  // Reset form
  this.reset();
});

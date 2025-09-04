document.addEventListener('DOMContentLoaded', function () {
  // ======================
  // Dropdown toggle
  // ======================
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // click bubble na ho
    dropdownMenu.classList.toggle("show");
  });

  // Close dropdown when clicked outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".language-dropdown")) {
      dropdownMenu.classList.remove("show");
    }
  });

  // ======================
  // Form validation
  // ======================
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate successful login
    alert('Login successful! (This is a demo)');
  });

  // ======================
  // Language selection
  // ======================
  const languageButtons = document.querySelectorAll('.dropdown-menu button');
  languageButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const selectedLang = this.textContent;
      dropdownToggle.innerHTML = `🌐 ${selectedLang} <span class="arrow">▼</span>`;
      dropdownMenu.classList.remove("show");
      alert('Language changed to: ' + selectedLang);
    });
  });

  // ======================
  // Eye toggle (password visibility)
  // ======================
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    // Ek hi eye icon inject karo
    const eyeIcon = document.createElement("i");
    eyeIcon.classList.add("fa-solid", "fa-eye");
    togglePassword.appendChild(eyeIcon);

    togglePassword.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // Eye ↔ Eye-slash toggle
      if (type === "password") {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
      } else {
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      }
    });
  }
});

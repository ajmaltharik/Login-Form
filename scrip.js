const form = document.getElementById("loginForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

function validateInputs() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password === "") {
    alert("Please enter your password.");
    return false;
  }

  return true;
}

// Disable button if any field is empty
[nameInput, emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    const isValid =
      nameInput.value.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()) &&
      passwordInput.value.trim();

    loginBtn.disabled = !isValid;
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateInputs()) {
    alert("Login successful!");
    form.reset();
    loginBtn.disabled = true;
  }
});

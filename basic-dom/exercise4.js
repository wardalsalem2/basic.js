const form = document.forms["pw"];

form.onsubmit = function (event) {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  let isValid = true;

  const pw1Check = document.getElementById("pw1_check");
  const pw2Check = document.getElementById("pw2_check");

  if (password1.length < 6) {
    pw1Check.innerText = "Password must be at least 6 characters long";
    isValid = false;
  } else {
    pw1Check.innerText = "";
  }

  if (password1 !== password2) {
    pw2Check.innerText = "Passwords do not match.";
    isValid = false;
  } else {
    pw2Check.innerText = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
  if (pw2Check.textContent || pw1Check.textContent) {
    event.preventDefault();
  }
};
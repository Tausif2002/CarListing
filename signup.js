
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
  
      message.textContent = "";
      message.style.color = "red";
  
      if (!name || !email || !password || !confirmPassword) {
        message.textContent = "Please fill in all fields.";
        return;
      }
  
      if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
      }
  
      if (localStorage.getItem(email)) {
        message.textContent = "User already exists! Please login.";
        return;
      }
  
      const user = {
        name: name,
        email: email,
        password: password
      };
  
      localStorage.setItem(email, JSON.stringify(user));
      message.style.color = "green";
      message.textContent = "Signup successful! You can now log in.";

      setTimeout(()=>{
        window.location.href = "login.html";
      }, 2000)
      
  
      form.reset();
    });
  });
  
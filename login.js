import { showToast } from "./toastUtil.js";

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
  
      loginMessage.textContent = "";
      loginMessage.style.color = "red";
  
      if (!email || !password) {
        // loginMessage.textContent = "Please enter both email and password.";
        showToast({
          text:"Please enter both email and password.",
          background:"red"
        })
        return;
      }
  
      const storedUser = localStorage.getItem(email);
  
      if (!storedUser) {
        // loginMessage.textContent = "User does not exist. Please sign up.";
        showToast({
          text:"User does not exist. Please sign up",
          background:"red"
        })
        return;
      }
  
      const user = JSON.parse(storedUser);
  
      if (user.password !== password) {
        // loginMessage.textContent = "Incorrect password.";
        showToast({
          text:"Incorrect password.",
          background:"red"
        })
        return;
      }
  
      loginMessage.style.color = "green";
      loginMessage.textContent = `Welcome back, ${user.name}!`;
  
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));

      if(!localStorage.getItem(`cart_${user.email}`)){
        localStorage.setItem(`cart_${user.email}`,JSON.stringify([]))
      }

      window.location.href = "/"; 
    });
  });
  
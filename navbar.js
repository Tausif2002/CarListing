import { getCurrentUser,  getUserCart } from './cartUtils.js';

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (loginBtn && signupBtn && logoutBtn) {
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (loggedInUser) {
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    const user = JSON.parse(loggedInUser)

    usernameDisplay.textContent = `Hi, ${user.name}`;
    usernameDisplay.title =user.name; 
    usernameDisplay.style.display = "inline-block";

    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("loggedInUser");
      window.location.reload();
    });
  }
}


function updateNavbarCart() {
  const user = getCurrentUser();
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");

  if (user) {
    const cart = getUserCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.style.display = "inline-block";
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? "inline-block" : "none";
  } else {
    cartIcon.style.display = "none";
  }
}
updateNavbarCart();
// document.addEventListener('DOMContentLoaded', updateNavbarCart);
document.addEventListener('cartUpdated', updateNavbarCart);

document.querySelector("#cart-icon").addEventListener("click", () => {
  window.location.href = "cart.html";
});


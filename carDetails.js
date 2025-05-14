import { getCurrentUser, saveUserCart } from "./cartUtils.js";
import { cars } from "./data.js";
import { showToast } from "./toastUtil.js";

function getQueryParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  }

  const carId = getQueryParam('id');

  if (!carId) {
    alert("No car selected.");
    window.location.href = "carList.html";
  }



  const car = cars.find(c => c.id == carId);

  if (!car) {
    alert("Car not found!");
    window.location.href = "carList.html";
  }

  // Render car data
  document.getElementById("carTitle").textContent = car.title;
  document.getElementById("carLocation").textContent = car.location;
  document.getElementById("carPrice").textContent = `₹${car.price.toLocaleString()}`;
  document.getElementById("carOldPrice").textContent = `₹${car.oldPrice.toLocaleString()}`;
  document.getElementById("carBrand").textContent = car.brand;
  document.getElementById("carModel").textContent = car.model;
  document.getElementById("carSpeed").textContent = `${car.maxSpeed} km/h`;
  document.getElementById("carMileage").textContent = `${car.mileage} km`;
  document.getElementById("carYear").textContent = car.year;
  document.getElementById("carCondition").textContent = car.isNew ? "New" : "Used";
  document.getElementById("carImage").src = `public/images/${car.image}`;

  // Cart logic
  const user = JSON.parse(sessionStorage.getItem("loggedInUser")); // { email: "user@example.com" }
  const cartKey = `cart_${user?.email}`;
  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  let cartItem = cart.find(c => c.id === car.id);

  const cartContainer = document.querySelector(".cart-btn-container");

  function renderCartButton() {
    cartContainer.innerHTML = "";

    if (cartItem) {
      cartContainer.innerHTML = `
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQty(-1)">−</button>
          <span class="qty-display">${cartItem.quantity}</span>
          <button class="qty-btn" onclick="updateQty(1)">+</button>
        </div>
      `;
    } else {
      cartContainer.innerHTML = `
        <button class="cart-btn" onclick="addToCart()">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      `;
    }
  }

  window.addToCart = function () {
    const user = getCurrentUser();
    if(!user){
      showToast({
        text:"Please login to add item in cart",
        background:"red"
      })
        return;
    }
    
    cartItem = {id:car.id, quantity: 1 };
    cart.push(cartItem);
    saveUserCart(cart)
    document.dispatchEvent(new Event("cartUpdated"));
    renderCartButton();
  }

  window.updateQty = function (change) {
    if(cartItem?.quantity>5){
      showToast({
                  text:"You cannot add more that 6 quantity of an item.",
                  background:"red"
                })
      return
    }
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      cart = cart.filter(c => c.id !== car.id);
      cartItem = null;
    } else {
      const index = cart.findIndex(c => c.id === car.id);
      cart[index] = cartItem;
    }
    localStorage.setItem(cartKey, JSON.stringify(cart));
    document.dispatchEvent(new Event("cartUpdated"));
    renderCartButton();
  }

  renderCartButton();
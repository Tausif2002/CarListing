import { cars } from "./data.js";
  
  // Get cart from localStorage for the logged-in user
  function getUserCart() {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
  }
  
  // Render cart in HTML table
  function renderCartTable() {
    const cart = getUserCart();
    const tbody = document.querySelector("tbody");
    const totalsDiv = document.querySelector(".totals");
  
    tbody.innerHTML = "";
    let totalQuantity = 0;
    let totalPrice = 0;
  
    cart.forEach(item => {
      const car = cars.find(c => c.id === item.id);
      if (!car) return;
  
      const itemTotal = car.price * item.quantity;
      totalQuantity += item.quantity;
      totalPrice += itemTotal;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <div class="product-info">
            <img src="./public/images/${car.image}" alt="${car.title}" />
            <div>
              <div class="product-title">${car.title}</div>
              <div class="stars">★★★★★ (5.00)</div>
            </div>
          </div>
        </td>
        <td>
          <div class="quantity-controls">
            <button class="decrease-btn" data-id="${car.id}">-</button>
            <input type="text" value="${item.quantity}" readonly />
            <button class="increase-btn" data-id="${car.id}">+</button>
          </div>
        </td>
        <td>₹${car.price.toLocaleString()}</td>
        <td>₹${itemTotal.toLocaleString()}</td>
        <td><button class="delete-btn" data-id="${car.id}"><i class="fa fa-trash"></i></button></td>
      `;
      tbody.appendChild(row);
    });
  
    totalsDiv.innerHTML = `
      <p><strong>Total Quantity:</strong> ${totalQuantity}</p>
      <p><strong>Total Price:</strong> ₹${totalPrice.toLocaleString()}</p>
    `;
  
    addCartEventListeners();
  }
  
  // Attach event listeners to buttons
  function addCartEventListeners() {
    document.querySelectorAll(".increase-btn").forEach(btn =>
      btn.addEventListener("click", () => updateQty(btn.dataset.id, 1))
    );
  
    document.querySelectorAll(".decrease-btn").forEach(btn =>
      btn.addEventListener("click", () => updateQty(btn.dataset.id, -1))
    );
  
    document.querySelectorAll(".delete-btn").forEach(btn =>
      btn.addEventListener("click", () => removeFromCart(btn.dataset.id))
    );
  }
  
  // Update quantity in cart
  function updateQty(carId, delta) {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) return;
  
    let cart = JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
  
    cart = cart.map(item => {
      if (item.id == carId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    });
  
    localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    document.dispatchEvent(new Event("cartUpdated"));
    renderCartHandler()
  }
  
  // Remove item
  function removeFromCart(carId) {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) return;
  
    let cart = JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
    cart = cart.filter(item => item.id != carId);
  
    localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    document.dispatchEvent(new Event("cartUpdated"));
    renderCartHandler()
  }

  const renderCartHandler = ()=>{
    let cart = getUserCart();
    if(cart.length==0){
      const cartContainer = document.getElementById("cart-container")
      cartContainer.innerHTML=""
      cartContainer.innerHTML = `<div class="cart-empty">
      <img src=${'public/images/empty-cart.png'}>
      <p class="cart-empty-msg">Your Cart Is empty, Please add some item in cart</p>
      </div>
      `;
    }
    else{
      renderCartTable()
    }
  }
  

  document.addEventListener('DOMContentLoaded',()=>{
    renderCartHandler();
  })

  
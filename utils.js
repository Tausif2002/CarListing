import { getCartItemQty, getUserCart, saveUserCart } from "./cartUtils.js";
import { cars } from "./data.js";

export function renderCars(select, filteredCars) {
  select.innerHTML = "";

  // const cart = JSON.parse(localStorage.getItem("cart")) || [];

  filteredCars.forEach((car) => {
    const div = document.createElement("div");
    div.className = "card effect-item";

    const qtyInCart = getCartItemQty(car.id)
    console.log(qtyInCart)
    div.innerHTML = `
      <div class="card-header">
        <span class="badge ${car.isNew ? "new" : "used"}">${
      car.isNew ? "New" : "Used"
    }</span>
        <div class="icon-buttons">
          <div class="icon">
            <svg class="wishlist-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
              1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>

          <div class="icon cart-control">
            ${
              qtyInCart > 0
                ? `
                  <div class="quantity-control" data-id="${car.id}">
                    <button class="decrease-btn" data-id="${car.id}">-</button>
                    <span class="qty-display">${qtyInCart}</span>
                    <button class="increase-btn" data-id="${car.id}">+</button>
                  </div>
                `
                : `
                  <svg class="add-cart-icon add-to-cart-btn" data-id="${car.id}" color="#ff0200" fill="none" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5586 22C11.387 22 12.0586 21.317 12.0586 20.4746C12.0586 19.6321 11.387 18.9492 10.5586 18.9492C9.73017 18.9492 9.05859 19.6321 9.05859 20.4746C9.05859 21.317 9.73017 22 10.5586 22Z" fill="#ff0200"></path>
                <path d="M17.6177 22C18.4461 22 19.1177 21.317 19.1177 20.4746C19.1177 19.6321 18.4461 18.9492 17.6177 18.9492C16.7892 18.9492 16.1177 19.6321 16.1177 20.4746C16.1177 21.317 16.7892 22 17.6177 22Z" fill="#ff0200"></path>
                <path d="M2 2.06277C3.76471 2.0629 4.94118 1.4978 6.11765 3.75768M6.11765 3.75768H19.2461C20.6051 3.75768 21.5684 5.0841 21.1479 6.37649L19.5082 11.416C19.2402 12.2397 18.4725 12.7972 17.6064 12.7972H9.05882M6.11765 3.75768L9.05882 12.7972M20.8235 16.752H9.27151C8.17943 16.752 7.29412 15.8667 7.29412 14.7746V14.5619C7.29412 13.5873 8.0842 12.7972 9.05882 12.7972" stroke="#ff0200" stroke-linecap="round" stroke-width="1.8"></path>
                  </svg>
                `
            }
          </div>
        </div>

        <div class="image-effect">
          <a href="#">
            <img src="./public/images/${car.image}" alt="${car.brand} ${
      car.model
    }" />
          </a>
        </div>
      </div>

      <div class="card-body">
        <div class="brand">${car.brand}</div>
        <h4><a class="car-title" href="#">${car.year} ${car.title}</a></h4>

        <div class="price-rev-cont">
          <div class="review">
            <i class="fa-solid fa-star" style="color:#fbc715;"></i>
            <i class="fa-solid fa-star" style="color:#fbc715;"></i>
            <i class="fa-solid fa-star" style="color:#fbc715;"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span style="font-size: 14px;">(6)</span>
          </div>
        </div>

        <div class="price">
          <span class="after-dis-price">₹${car.price.toLocaleString()}</span>
          <span class="before-dis-price">₹${car.oldPrice.toLocaleString()}</span>
        </div>

        <div class="info">
          <div class="milage info-item">
            <img src="./public/images/road.svg" />
            <p>${car.mileage}(mi)</p>
          </div>
          <div class="top-speed info-item">
            <img src="./public/images/speed.svg" />
            <p>${car.maxSpeed}(KM)</p>
          </div>
          <div class="engine-type info-item">
            <img src="./public/images/engine.svg" />
            <p>2,350 (cc)</p>
          </div>
        </div>
      </div>
    `;

    select.appendChild(div);
  });

  // Attach listeners after DOM is rendered
  select.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      let cart = getUserCart();
      const itemIndex = cart.findIndex((item) => item.id === id);

      if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
      } else {
        cart.push({ id, quantity: 1 });
      }

      saveUserCart(cart);
      document.dispatchEvent(new Event("cartUpdated"));
      renderCars(select, filteredCars); 
    });
  });

  select.querySelectorAll(".increase-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      let cart = getUserCart();
      const item = cart.find((item) => item.id === id);
      if (item) item.quantity += 1;
      saveUserCart(cart);
      document.dispatchEvent(new Event("cartUpdated"));
      renderCars(select, filteredCars);
    });
  });

  select.querySelectorAll(".decrease-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      let cart = getUserCart();
      const itemIndex = cart.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        cart[itemIndex].quantity -= 1;
        if (cart[itemIndex].quantity <= 0) {
          cart.splice(itemIndex, 1); 
        }
        saveUserCart(cart);
        document.dispatchEvent(new Event("cartUpdated"));
        renderCars(select, filteredCars);
      }
    });
  });
}

export const populateFilters = (
  brandFilter,
  typeFilter,
  locationFilter,
  isHome
) => {
  const brands = [...new Set(cars.map((c) => c.brand))];
  const types = [...new Set(cars.map((c) => c.type))];
  const locations = [...new Set(cars.map((c) => c.location))];

  if (isHome) {
    brandFilter.innerHTML = `<option value="">Select Brand...</option>`;
    typeFilter.innerHTML = `<option value="">Select Type...</option>`;
    locationFilter.innerHTML = `<option value="">Select Location...</option>`;
  }
  fillSelect(brandFilter, brands, isHome);
  fillSelect(typeFilter, types, isHome);
  fillSelect(locationFilter, locations, isHome);
};

function fillSelect(select, values, isHome) {
  if (!isHome) {
    select.innerHTML = `<option value="">All</option>`;
  }
  values.forEach((val) => {
    const opt = document.createElement("option");
    opt.value = val;
    opt.textContent = val;
    select.appendChild(opt);
  });
}

//   export const addToCart= (carId)=>{
//     let user = sessionStorage.getItem("loggedInUser");
//     if(!user){
//       alert("Please LogIn");
//       return;
//     }
//     user =JSON.parse(user);
//     let userCart = JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];

//     userCart.push(carId)

//     localStorage.setItem(`cart_${user.email}`, userCart)
// }

// export const cartUIChange = ()=>{
//   const cartIcon = document.getElementById('cartIcon')
// const cartCount = document.getElementById('cartCount')
//   const user = JSON.parse(localStorage.getItem("loggedInUser"));
//   if(user){
//     let cart = JSON.parse(localStorage.getItem(`cart_${user.email}`));
//     cartIcon.style.display = 'inline-block';
//     cartCount.textContent = cart.length;
//   }
//   else{
//     cartIcon.style.display='none'
//   }
// }

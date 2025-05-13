import { cars } from "./data.js";
import {renderCars} from './utils.js'
import { populateFilters } from "./utils.js";
// import { addToCart } from './cartUtils.js';

const brandMap = {};
const brands = [];

cars.forEach((car) => {
  if (!brandMap[car.brand]) {
    brandMap[car.brand] = {
      count: 1,
      image: car.image
    };
  } else {
    brandMap[car.brand].count++;
  }
});

// Convert to array
for (const brand in brandMap) {
  brands.push({
    name: brand,
    image: brandMap[brand].image,
    count: brandMap[brand].count
  });
}

const brandList = document.getElementById("brandList");
const seeAllBtn = document.getElementById("seeAllBtn");

let isExpanded = false;

function renderBrands(data) {
  brandList.innerHTML = "";
  data.forEach(brand => {
    const div = document.createElement("div");
    div.className = "brand-card effect-item";
    div.innerHTML = `
    <a href=${`all-listings.html?brand=${brand.name}`} style="text-decoration:none; color:#3753f7">
      <div class="image-effect">
        <img src="public/images/${brand.image}" alt="${brand.name}">
      </div> 
      <div class="brand-info effect-item">
        <h3 class="brand-name">${brand.name}</h3>
        <p class="brand-quant">${brand.count} Items</p>
      </div><a/>
    `;
    // div.onclick = () => filterCarsByBrand(brand.name);
    brandList.appendChild(div);
  });
}


renderBrands(brands.slice(0, 10));

seeAllBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;
  renderBrands(isExpanded ? brands : brands.slice(0, 10));
  seeAllBtn.innerText = isExpanded ? "Show Less" : "See All";

  if (!isExpanded) {
    brandList.scrollIntoView({ behavior: "smooth" });
  }
});

const carList = document.getElementById("carList");



function filterCarsByBrand(brand) {
  const filtered = cars.filter((car) => car.brand === brand);
  renderCars(carList,filtered);
}


const brandFilter = document.getElementById("brandFilter");
const typeFilter = document.getElementById("typeFilter");
const locationFilter = document.getElementById("locationFilter");

populateFilters(brandFilter, typeFilter, locationFilter, true)

renderCars(carList,cars.slice(0, 12));


//For search on home page

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = document.getElementById('searchInput').value.trim();
  const location = locationFilter.value;
  const type = typeFilter.value;
  const brand = brandFilter.value;

  const params = new URLSearchParams();
  if(name) params.append('q', name);
  if(location) params.append("location", location);
  if(type) params.append("type",type);
  if(brand) params.append("brand",brand);

  window.location.href = `all-listings.html?${params.toString()}`
})



//cart-add

// document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
//   btn.addEventListener("click", function () {
//     const item = {
//       id: this.dataset.id,
//       name: this.dataset.title,
//       price: parseInt(this.dataset.price),
//       brand: this.dataset.brand,
//       year: this.dataset.year
//     };
//     addToCart(item);
//     alert("Item added to cart");
//   });
// });





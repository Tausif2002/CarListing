import {cars} from './data.js'
import { renderCars } from './utils.js';
import { populateFilters } from './utils.js';
  
  const carList = document.getElementById("carList");
  const brandFilter = document.getElementById("brandFilter");
  const typeFilter = document.getElementById("typeFilter");
  const locationFilter = document.getElementById("locationFilter");
  const conditionFilter = document.getElementById("conditionFilter");
  const priceFilter = document.getElementById("priceFilter");
  const resetBtn = document.getElementById("resetBtn");

  let filtered=[]

  
  function applyFilters() {
    const brand = brandFilter.value;
    const type = typeFilter.value;
    const location = locationFilter.value;
    const condition = conditionFilter.value;
    const priceRange = priceFilter.value;
    const searchQuery = new URLSearchParams(window.location.search);
    const keyword = searchQuery.get('q')?.toLocaleLowerCase() ||""
  
    filtered = cars.filter(car => {
      const isBrandMatch = !brand || car.brand === brand;
      const isTypeMatch = !type || car.type === type;
      const isLocationMatch = !location || car.location === location;
      const isConditionMatch = !condition ||
        (condition === "new" && car.isNew) ||
        (condition === "used" && !car.isNew);
      const isPriceMatch = (() => {
        if (!priceRange) return true;
        const [min, max] = priceRange.includes("+")
          ? [35000, Infinity]
          : priceRange.split("-").map(Number);
        return car.price >= min && car.price <= max;
      })();

      const isKeywordMatch  = !keyword || car.title.toLowerCase().includes(keyword) 
      ||car.brand.toLocaleLowerCase().includes(keyword)||car.model.toLocaleLowerCase().includes(keyword);

  
      return isBrandMatch && isTypeMatch && isLocationMatch && isConditionMatch && isPriceMatch && isKeywordMatch;
    });
  
    renderCars(carList,filtered);
  }
  
  function resetFilters() {
    brandFilter.value = "";
    typeFilter.value = "";
    locationFilter.value = "";
    conditionFilter.value = "";
    priceFilter.value = "";
    renderCars(carList,cars.slice(0, 9));
  }

  function prefillFromQuery(){
    const query = new URLSearchParams(window.location.search);
    if(query.has("brand")) brandFilter.value=query.get("brand");
    if(query.has("type")) typeFilter.value = query.get("type");
    if(query.has("location")) locationFilter.value = query.get("location")
  }
  
  [brandFilter, typeFilter, locationFilter, conditionFilter, priceFilter].forEach(filter =>
    filter.addEventListener("change", applyFilters)
  );
  
  resetBtn.addEventListener("click", resetFilters);

  let isExpanded = false;
  seeAllBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;
    renderCars(carList, isExpanded ? cars : cars.slice(0, 9));
    seeAllBtn.innerText = isExpanded ? "Show Less" : "See All";
  
    if (!isExpanded) {
      carList.scrollIntoView({ behavior: "smooth" });
    }
  });
  
  // populateFilters();
  
 
  populateFilters(brandFilter, typeFilter, locationFilter, false)
  prefillFromQuery();
  applyFilters();
  // if()
  renderCars(carList,filtered.slice(0, 9));
  
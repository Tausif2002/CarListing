
// export function getCurrentUser() {
//     return JSON.parse(sessionStorage.getItem("loggedInUser"));
//   }
  
//   export function getUserCartKey() {
//     const user = getCurrentUser();
//     return user ? `cart_${user.email}` : null;
//   }
  
//   export function getCart() {
//     const key = getUserCartKey();
//     if (!key) return [];
//     return JSON.parse(localStorage.getItem(key)) || [];
//   }
  
//   export function saveCart(cart) {
//     const key = getUserCartKey();
//     if (!key) return;
//     localStorage.setItem(key, JSON.stringify(cart));
//     document.dispatchEvent(new CustomEvent('cartUpdated'));
//   }
  
//   export function addToCart(item) {
//     const cart = getCart();
//     cart.push(item); // Extend logic for checking duplicates
//     saveCart(cart);
//   }
  
//   export function getCartCount() {
//     return getCart().length;
//   }


  //
  export function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem("loggedInUser"));
  }
  
  export function getUserCart() {
    const user = getCurrentUser();
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
  }
  
  export function saveUserCart(cart) {
    const user = getCurrentUser();
    if (!user) return;
    localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
  }
  
  export function getCartItemQty(productId) {
    const cart = getUserCart();
    const item = cart.find(c => c.id === productId);
    return item ? item.quantity : 0;
  }

  export function deleteAllCartItems(){
    const user = getCurrentUser();
    localStorage.setItem(`cart_${user.email}`, JSON.stringify([]))
    document.dispatchEvent(new Event("cartUpdated"));
  }
  
  export function updateCart(productId, delta) {
    let cart = getUserCart();
    const index = cart.findIndex(item => item.id === productId);
  
    if (index !== -1) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) cart.splice(index, 1);
    } else if (delta > 0) {
      cart.push({ id: productId, qty: 1 });
    }
  
    saveUserCart(cart);
  
    // Dispatch event to update cart icon
    document.dispatchEvent(new Event("cartUpdated"));
  }
  
  
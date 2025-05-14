import { deleteAllCartItems, getUserCart } from "./cartUtils.js";
import { cars } from "./data.js";

document.addEventListener("DOMContentLoaded",()=>{
     // Render cart in HTML table
      
        const cart = getUserCart();
        let totalQuantity = 0;
        let totalPrice = 0;
      
        cart.forEach(item => {
          const car = cars.find(c => c.id === item.id);
          if (!car) return;
      
          const itemTotal = car.price * item.quantity;
          totalQuantity += item.quantity;
          totalPrice += itemTotal;
              
        });
             
      
        const amountEle = document.getElementById("amount");
    amountEle.innerHTML=`Total Amount: ₹<span id="totalAmount">${totalPrice}</span>`
      }
    
)

document.getElementById('payBtn').addEventListener('click', function () {
    const amount = parseInt(document.getElementById("totalAmount").innerText) / 1000; 

    var options = {
      key: "rzp_test_0A4Vz6y4l3uUEv", 
      currency: "INR",
      name: "YourCar Checkout",
      description: "Payment for cars or accessories",
      image: "./public/images/logo.png",
      handler: function (response) {
        showToast({
          text:"Payment successful. Payment ID: " + response.razorpay_payment_id,
          background:"#4BB543"
        })
        window.location.href="./"
        deleteAllCartItems()
      },
      prefill: {
        name: "Tausif Shaikh",
        email: "tausif@example.com",
        contact: "9876543210"
      },
      theme: {
        color: "#3399cc"
      }
    };

    var rzp = new Razorpay(options);
    rzp.open();
})
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "✅ Booking Successful!";
});

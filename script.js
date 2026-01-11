document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "✅ Booking Successful!";
});
function addReview(){
  let name = document.getElementById("reviewName").value;
  let text = document.getElementById("reviewText").value;

  if(name=="" || text=="") return;

  let review = document.createElement("div");
  review.className="review-item";
  review.innerHTML = `<b>${name}</b><p>${text}</p>`;

  document.getElementById("reviewList").prepend(review);

  document.getElementById("reviewName").value="";
  document.getElementById("reviewText").value="";
}



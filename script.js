document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "✅ Booking Successful!";
});
// Load saved reviews when page opens
window.onload = function(){
  let saved = JSON.parse(localStorage.getItem("reviews"));
  if(saved){
    saved.forEach(r => showReview(r.name, r.text));
  }
};

function addReview(){
  let name = document.getElementById("reviewName").value;
  let text = document.getElementById("reviewText").value;

  if(name=="" || text=="") return;

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({name, text});
  localStorage.setItem("reviews", JSON.stringify(reviews));

  showReview(name, text);

  document.getElementById("reviewName").value="";
  document.getElementById("reviewText").value="";
}

function showReview(name, text){
  let review = document.createElement("div");
  review.className="review-item";
  review.innerHTML = `<b>${name}</b><p>${text}</p>`;
  document.getElementById("reviewList").prepend(review);
}



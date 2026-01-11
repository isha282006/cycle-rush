document.addEventListener("DOMContentLoaded", function () {

  const list = document.getElementById("reviewList");

  // Load reviews from localStorage
  const saved = JSON.parse(localStorage.getItem("reviews")) || [];
  saved.forEach(r => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `<b>${r.name}</b><p>${r.text}</p>`;
    list.appendChild(div);
  });

  window.addReview = function () {
    const name = document.getElementById("reviewName").value.trim();
    const text = document.getElementById("reviewText").value.trim();

    if (name === "" || text === "") {
      alert("Please enter your name and review");
      return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ name, text });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `<b>${name}</b><p>${text}</p>`;
    list.appendChild(div);

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";
  };

});
const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
};

if(localStorage.getItem("darkMode") === "true"){
  document.body.classList.add("dark");
}


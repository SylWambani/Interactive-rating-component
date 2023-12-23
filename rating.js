let ratingPage = document.querySelector(".rating-page");
let rating = document.querySelectorAll(".ratings");
let submitButton = document.querySelector(".submit-btn");
let thankyouPage = document.querySelector(".thankyou-page");

submitButton.addEventListener("click", (event) => {
  ratingPage.replaceWith(thankyouPage);
  thankyouPage.hidden = !thankyouPage.hidden;
});

rating.forEach((ratings) => {
  ratings.addEventListener("click", (event) => {
    let result = (document.querySelector(".results").innerHTML =
      "You selected " + event.target.id + " out of 5");
  });
});

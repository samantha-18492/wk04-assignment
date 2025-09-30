const reviewDisplay = document.getElementById("review-display");

//get details from database
async function fetchReviews() {
  const response = await fetch(
    `https://wk04-assignment-server.onrender.com/book-reviews`
  );
  const reviews = await response.json();
  createReviews(reviews);
}

function createReviews(reviewsArray) {
  //clear reviews without getting rid of the h4 element in the div
  const previousReviews = reviewDisplay.querySelectorAll(".review-container");
  previousReviews.forEach((reviewElement) => reviewElement.remove());

  // create elements based on database to display on page

  reviewsArray.forEach((review) => {
    const div = document.createElement("div");

    const usernameElement = document.createElement("p");
    const commentElement = document.createElement("p");
    const ratingElement = document.createElement("p");

    usernameElement.setAttribute("class", "username");
    usernameElement.innerText = review.username;

    commentElement.setAttribute("class", "comment");
    commentElement.innerText = `"${review.comment}"`;

    ratingElement.setAttribute("class", "rating");
    ratingElement.innerText = `Rating: ${review.rating}/5`;

    div.setAttribute("class", "review-container");
    div.append(commentElement, ratingElement, usernameElement);
    reviewDisplay.append(div);
  });
}

fetchReviews();

//click event
const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const userReview = Object.fromEntries(data);

  //post to database
  const response = await fetch(
    "https://wk04-assignment-server.onrender.com/book-reviews",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userReview),
    }
  );
  fetchReviews();
});

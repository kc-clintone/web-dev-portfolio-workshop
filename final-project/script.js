// scroll to projects when hero button clicked

const ctaBtn = document.getElementById("ctaBtn");

ctaBtn.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});


// contact button alert

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
  alert("Thanks for visiting! You can reach me at hello@email.com");
});

function Scroll(id) {
  let idButton = document.getElementById(id);
  if (!idButton) {
    return;
  }
  idButton.scrollIntoView();
}

// service-button
// service

window.onload = function() {
  document.getElementById("homepage-button").addEventListener("click", event => {
    event.preventDefault();
    Scroll("homepage");
  });
  document.getElementById("aboutus-button").addEventListener("click", event => {
    event.preventDefault();
    // idButton.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    Scroll("aboutus");
  });
  document.getElementById("service-button").addEventListener("click", event => {
    event.preventDefault();
    Scroll("service");
  });
  document.getElementById("contact-button").addEventListener("click", event => {
    event.preventDefault();
    Scroll("contact");
  });
  document.getElementById("external-button").addEventListener("click", event => {
    event.preventDefault();
    Scroll("service");
  });
};

function Scroll(id) {
  let idButton = document.getElementById(id);
  if (!idButton) {
    return;
  }
  idButton.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

// service-button
// service

window.onload = function() {
  document.getElementById("homepage-button").addEventListener("click", event => {
    event.preventDefault();
    Scroll("homepage");
  });
  document.getElementById("aboutUs-button").addEventListener("click", event => {
    event.preventDefault();

    Scroll("aboutUs");
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

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

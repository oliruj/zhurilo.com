// The address is stored reversed and base64-encoded and only assembled on click,
// so it never appears in the page source for scrapers.
document.querySelectorAll("[data-mail]").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var address = atob(link.getAttribute("data-mail")).split("").reverse().join("");
    window.location.href = "mailto:" + address;
  });
});

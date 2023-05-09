function toggleFilter() {
  var filter = document.getElementsByClassName("filter")[0];
  var button = document.getElementById("toggleButton");

  if (filter.style.display === "none") {
    filter.style.display = "block";
    button.style.backgroundColor = "#03C988";
    console.log("Filtro activado");
  } else {
    filter.style.display = "none";
    button.style.backgroundColor = "#1DA1F2";
    console.log("Filtro desactivado");
  }
}

var slider = document.getElementById("ship_range");
var output = document.getElementById("Ship_value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
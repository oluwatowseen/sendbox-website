
/*domestic shipping rate*/
var slider = document.getElementById("ship_range");
var output = document.getElementById("ship_value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

/*international shipping rate*/
var intlSlider = document.getElementById("intlShip_range");
var intlOutput = document.getElementById("intlShip_value");
intlOutput.innerHTML = intlSlider.value;

intlSlider.oninput = function() {
  intlOutput.innerHTML = this.value;
};
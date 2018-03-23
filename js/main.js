
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


function activation() {
    if ( document.getElementById("checker2").classList.contains('pill_active') ) {
        document.getElementById("checker2").classList.remove('pill_active'),
        document.getElementById("checker1").classList.add('pill_active');
    }
};
function intlActivation() {
    if ( document.getElementById("checker1").classList.contains('pill_active') ) {
        document.getElementById("checker1").classList.remove('pill_active'),
        document.getElementById("checker2").classList.add('pill_active');
    }
};
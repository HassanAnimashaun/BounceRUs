
function validateForm() {
	let name = document.forms["myForm"]["fname"].value;
	let email = document.forms["myForm"]["email"].value
	let phone = document.forms["myForm"]["telephone"].value
	let date = document.forms["myForm"]["date"].value
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


	// name validation
	if (name == "") {
	  alert("Name must be filled out");
	  return false;
	}
	//email validation
	if(email == ""){
		alert("please provide email");
		return false;
	}else if(!validRegex.test(email)){
		alert("Please provide a proper email address");
		return false;		
	}
	//phone number valiidation
	if(phone == ""){
		alert("Please provide a phone number")
		return false;
	}else if(isNaN(phone)){
		alert("Please provide a proper number");
		return false;
	}else if(phone.length < 10 ){
		alert("Please provide a proper number");
		return false;
	}
	return true;
} 

document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById('timeframe');

    // Get the saved value from localStorage
    const savedValue = localStorage.getItem('timeframe');

    // If there is a saved value, set the select element's value and show the right time frame
    if (savedValue) {
        selectElement.value = savedValue;
        showTimeFrame('time', selectElement);
    }

    function showTimeFrame(className, element) {
        const timeDivs = document.getElementsByClassName(className);
        for (let i = 0; i < timeDivs.length; i++) {
            timeDivs[i].style.display = element.value === "hourly" ? 'flex' : 'none';
        }

        // Save the current value of the selector to localStorage
        localStorage.setItem('timeframe', element.value);
    }

    selectElement.addEventListener('change', function() {
        showTimeFrame('time', this);
    });
});

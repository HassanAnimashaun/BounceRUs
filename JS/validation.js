function validateForm(){
	let x = document.forms["form"]["Fname"].value;
	if(x==" "){
		alert("Please enter First Name");
		return false;
	}
}
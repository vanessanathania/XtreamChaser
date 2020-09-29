const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const date = document.getElementById('birthday');
const nation = document.getElementById('nation');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs(){


	const emailValue = email.value.trim();
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const dateValue = date.value.trim();
	const nationValue = nation.value.trim();


	if(usernameValue === ''){
		setErrorFor(username, 'Username cannot be blank');
	} else if (usernameValue.length < 3) {
		setErrorFor(username, 'Username length must more then 3 characters');
	} 
	else if (usernameValue.length > 10) {
		setErrorFor(username, 'Username length must less then 20 characters');
	} else if (!isUsername(usernameValue)) {
		setErrorFor(username, 'Only alphabets are allowed');
	}else
	{
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') 
	{
		setErrorFor(password, 'Password cannot be blank');
	} else if (passwordValue.length < 5) {
		setErrorFor(password, 'Password length must more then 5 characters');
	} else if (passwordValue.length > 25) {
		setErrorFor(password, 'Password length must less then 25 characters');
	}  else {
		setSuccessFor(password);
	}

	if(dateValue === '') {
		setErrorFor(birthday, 'DOB cannot be blank');
	} else {
		setSuccessFor(birthday);
	}

	if(nationValue === '') {
		setErrorFor(nation, 'Nation cannot be blank');
	} else {
		setSuccessFor(nation);
	}

		if(document.getElementById('agree').checked) 
	{ 

		return true; 

	} else { 
		alert('Please indicate that you have read agree to the Terms and Conditions and Privacy Policy'); return false; 
	}




}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isUsername(username)
{
	return /^[A-Za-z]+$/.test(username);
}





const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function alerta(){
	const { value: email } = Swal.fire({
	  title: 'Input email address',
	  input: 'email',
	  inputPlaceholder: 'Enter your email address'
	})
	
}

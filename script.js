const btnPass= document.querySelector('.btnPass');
const imgPass= document.querySelector('.imgPass');
const inputPass= document.querySelector('#password');
const conPass=document.querySelector('#conPassword');
const submit= document.querySelector('.btn');

btnPass.addEventListener('click', ()=>{
    if(inputPass.type==="password"){
        inputPass.type="text";
        imgPass.src="eyeHide.png"
    }
    else{
        inputPass.type="password";
        imgPass.src="eyeShow.png"
    }
})


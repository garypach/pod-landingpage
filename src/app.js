window.onload = function(){
  
    let emailButton = document.getElementsByClassName('email-button')[0];
    let emailInput = document.getElementsByClassName('email-input')[0];
    let removeErr = ()=>{
        document.getElementsByClassName("email-error")[0].classList.remove("email-error--active")
    }
    let addErr = ()=>{
        document.getElementsByClassName("email-error")[0].classList.add("email-error--active")
    }
    let showSuccess = ()=>{
        document.getElementsByClassName("email-success")[0].classList.add('email-success--active');
        setTimeout(()=>{
            document.getElementsByClassName("email-success")[0].classList.remove('email-success--active');

        },3000);
    }
function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        showSuccess();
        return (true)
    }
    
    addErr();
    return (false)
}
emailButton.addEventListener('click', ()=>{
    ValidateEmail(emailInput.value);
})

emailInput.addEventListener('click', ()=>{
    removeErr();
})

}
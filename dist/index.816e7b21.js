window.onload = function() {
    let emailButton = document.getElementsByClassName('email-button')[0];
    let emailInput = document.getElementsByClassName('email-input')[0];
    let removeErr = ()=>{
        document.getElementsByClassName("email-error")[0].classList.remove("");
    };
    let addErr = ()=>{
        document.getElementsByClassName("email-error")[0].classList.add("");
    };
    let showSuccess = ()=>{
        document.getElementsByClassName("email-success")[0].classList.add('');
        setTimeout(()=>{
            document.getElementsByClassName("email-success")[0].classList.remove('');
        }, 3000);
    };
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            showSuccess();
            return true;
        }
        addErr();
        return false;
    }
    emailButton.addEventListener('click', ()=>{
        ValidateEmail(emailInput.value);
    });
    emailInput.addEventListener('click', ()=>{
        removeErr();
    });
};

//# sourceMappingURL=index.816e7b21.js.map

 const username = document.querySelector('#username');
 const pass = document.querySelector('#password');
 const pass2 = document.querySelector('#password2');
 const email = document.querySelector('#email ');
 const sendBtn = document.querySelector('.send ');
 const clearBtn = document.querySelector('.clear ');
 const popup = document.querySelector('.popup');
 


 const showError = (input,msg) => {
const formBox = input.parentElement;
const errorMsg = formBox.querySelector('.error-text');
formBox.classList.add('error');
errorMsg.textContent = msg;
}
const clearError = input => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');
    formBox.classList.remove('error')
    
errorMsg.textContent = '';

}
 const checkForm = input => {
input.forEach(el => {
    if(el.value===''){
        showError(el,el.placeholder);
        
    }
    else {
         clearError(el);
        console.log('ok');
    }
})
 }
 sendBtn.addEventListener('click',e =>{
    e.preventDefault();
    checkForm([username, pass, pass2, email]);
    
    checkLength(username,8);
    console.log('username length checked');
    checkLength(pass,8);
    console.log('pass length checked');
    checkLength(pass2,8);
    console.log('pass2 length checked');
    checkLength(email,8);
    console.log('email length checked');
    checkPassword(pass,pass2) 
    console.log('passwords match checked');
    checkMail(email);
    checkErrors();

 })
 clearBtn.addEventListener('click',e => {
e.preventDefault();



[username,pass,pass2,email].forEach(el=>{
    el.value='';
   clearError(el);
})


 })
 const checkLength = (input,min) => {
if(input.value.length < min) {
    showError(input, ` ${input.previousElementSibling.innerText.slice(0,-1)} musi miec min ${min} znakow! `);
} else{
    clearError(input);
}


  }
  const checkPassword = (pass,pass2) =>
  {if(pass.value!==pass2.value){
    showError(pass2,'hasla nie pasuja')
  }else{
    clearError(pass2);
}
  }
  const checkMail  = email => {
    
        
          
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
      if(re.test(email.value))
      {
        clearError(email);
      }
      else{
        showError(email,"Email  jest niepoprawny!");
      }
  }
  const checkErrors = () =>{
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;
    allInputs.forEach(el => {
        if(el.classList.contains('error')){
            errorCount++;
        }
    })
    if(errorCount ===0){
        popup.classList.add('show-popup');
    }
  }
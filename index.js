    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password= document.getElementById('password');
    const cpassword= document.getElementById('cpassword');

   //  Add Event--
   form.addEventListener('submit',(event)=>{
      event.preventDefault();
      validate();
   })
      const  sendData = (usernameVal, successRate, count) => {
         if(successRate === count){
            alert('Registration Successful');
            swal("Welcome! "+usernameVal, "Registration Successful", "success");
         }
      }
   // for final data validation
   const successMsg = (usernameVal) => {
      let formCont =document.getElementsByClassName('form-control');
      var count = formCont.length-1;
      for(var i =0; i<formCont.length; i++){
         if(formCont[i].className === 'form-control success')
         {
            var successRate = 0+i;
            sendData(usernameVal, successRate, count)
         }
         else{
            return false;
         }
      }
    
   }
   //  more email validate
   const isEmail =(emailVal) => {
      var atSymbol = emailVal.indexOf("@");
      if(atSymbol < 1) return false;
      var dot = emailVal.lastIndexOf('.');
      if(dot <= atSymbol + 2) return false;
      if(dot === email.length -1) return false;
      return true;
   }
  
   //  Define the validate function
    const validate = () =>{
    const usernameVal = username.value.trim();  
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim(); 
    const cpasswordVal = cpassword.value.trim();

     // Validate Username 
  
     if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
     }  
     else if(usernameVal.length <= 3){
        setErrorMsg(username,  'username minimum 3 character');
     }
     else{
        setSuccessMsg(username);
     }

     //Validate Email id
     if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
     }  
     else if(!isEmail(emailVal)){
        setErrorMsg(email,  'Not a valid Email');
     }
     else{
        setSuccessMsg(email);
     }
        //Validate Phone number
     if(phoneVal === ""){
        setErrorMsg(phone, 'phone number cannot be blank');
     }  
     else if(phoneVal.length != 10) {
        setErrorMsg(phone,  'Not a valid mobile number');
     }
     else{
        setSuccessMsg(phone);
      }

      //Validate password
     if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be null');
     }  
     else if(passwordVal.length <= 5 ){
        setErrorMsg(password,  'Minimumm 6 char');
     }
     else if(passwordVal !== cpasswordVal){
      setErrorMsg(password,  'Password is not matching');
     }
     else{
        setSuccessMsg(password);
    }
      //Validate confirm password
      if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'confrm password cannot be null');
     }  
     else if( cpasswordVal !== passwordVal){
        setErrorMsg(cpassword,  'Password is not matching');
     }
     else{
        setSuccessMsg(cpassword);
    }
     successMsg(usernameVal);
}

     function setErrorMsg(input, errormsg){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className ="form-control error";
        small.innerText = errormsg;             
    }
    function setSuccessMsg(input){
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
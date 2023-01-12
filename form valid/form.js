function validate(){
    let name = document.getElementById("name").value;  
    let mail = document.getElementById("email");
    let phonenumber = document.getElementById("phone-number"); 
    let password = document.getElementById("word");
    document.getElementById('nmaes').innerHTML= name;
        if(name.value.length <= 0) {  
            // document.getElementById('nmaes').innerHTML="Enter a valid name" 
            
            name.focus();  
            
        }
       
        if (mail.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return true;
          }
          else
          {
            document.getElementById("emailid").innerHTML = "Enter a valid mail"
            
          }
        if (!phonenumber.value.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)) {
            document.getElementById('tele').innerHTML="Enter the mobile number"
            phonenumber.focus();
            // return false;
        }
      
        // if (password.value.length <= 7) {
        //     document.getElementById('pass').innerHTML = "password must contain 5 characters"
        //     password.focus();
        //     return false;
        // }
        console.log("-"+password)
        if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
          console.log("in")
          document.getElementById('pass').innerHTML = ("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
          password.focus();
          // return false;
        }
    return false;
      }     
  
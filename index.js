function validation(){
        //Name Validation
        let Name = document.getElementById("InputName").value;
        let regName = /^[a-zA-Z ]{2,30}$/;
        if (regName.test(Name)){
            console.log(Name)
            document.getElementById("ErrorName").style.display= "none";
        }
        else{
            document.getElementById("ErrorName").style.display= "block";
            document.getElementById("ErrorName").innerHTML = "Please enter the valid name without numbers"
        }
        //Email Validation
        let Email = document.getElementById("InputEmail").value;
        let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (regEmail.test(Email)){
            console.log(Email)
            document.getElementById("ErrorEmail").style.display= "none";
        }
        else{
            document.getElementById("ErrorEmail").style.display= "block";
            document.getElementById("ErrorEmail").innerHTML = "Please enter the valid Email which should contain @ and ."
        }
        //Mobile number Validation
        let Number = document.getElementById("InputPhoneNumber").value;
        let regNumber = /^[0]?[789]\d{9}$/;
        if (regNumber.test(Number)){
            console.log(Number)
            document.getElementById("ErrorNumber").style.display= "none";
        }
        else{
            document.getElementById("ErrorNumber").style.display= "block";
            document.getElementById("ErrorNumber").innerHTML = "Please enter the valid phone number 10 digits"
        }
        
        //Dob Validation
        let givenDate = document.getElementById("InputDateOfBirth").value
        let toDay = new Date();
        if(new Date(givenDate) > toDay){
            document.getElementById("ErrorDate").style.display= "block";
            document.getElementById("ErrorDate").innerHTML = "Date of birth should less than today"
            
        }else if (givenDate === ""){
            document.getElementById("ErrorDate").style.display= "block";
            document.getElementById("ErrorDate").innerHTML = "Please select the date"
        }else{
            document.getElementById("ErrorDate").style.display= "none";
        }

        //Country Validation
        let Country =  document.getElementById("Countries").value;
        if (Country == "select"){
            document.getElementById("ErrorCountry").style.display= "block";
            document.getElementById("ErrorCountry").innerHTML = "Please select your country name"
        }else{
            document.getElementById("ErrorCountry").style.display= "none";
        }
        
        //Gender validation
        let Male = document.getElementById("Male").checked;
        let Female = document.getElementById("Female").checked;
        if (Male){
            document.getElementById("ErrorGender").style.display= "none";
        }else if(Female){
            document.getElementById("ErrorGender").style.display= "none";
        }else{
            document.getElementById("ErrorGender").style.display= "inline";
            document.getElementById("ErrorGender").innerHTML ="Please let us know that you are a male or female";
        }
        
        //password Validation
        let pass = document.getElementById("InputPassWord").value
        let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if (regPass.test(pass)){
            document.getElementById("ErrorPass").style.display= "none";
            alert(pass);
        }
        else{
            document.getElementById("ErrorPass").style.display= "block";
            document.getElementById("ErrorPass").innerHTML ="Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        }
        //Confirm Password Validation
        let ConfirmPass = document.getElementById("InputConfirmPassword").value;
        if (ConfirmPass != ""){
            if (pass == ConfirmPass ){
            document.getElementById("ErrorConfirmPass").style.display= "none";
            }else{
            document.getElementById("ErrorConfirmPass").style.display= "block";
            document.getElementById("ErrorConfirmPass").innerHTML ="Password doesn't match";
            }
        }
        //Terms and Condition Validation
        let check = document.getElementById("exampleCheck1").checked;
        if (check){
            document.getElementById("ErrorCheckBox").style.display= "none";
        }else{
            document.getElementById("ErrorCheckBox").style.display= "block";
            document.getElementById("ErrorCheckBox").innerHTML ="Please Check the terms and contions";
        }
        
    }
        




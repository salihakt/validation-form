var email = document.getElementById("field1");
var err1 = document.getElementById("err1");
var Pass = document.getElementById("field2");
var err2 = document.getElementById("err2");
var num = document.getElementById("field3");
var err3 = document.getElementById("err3")

var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
var regex2 =/^([A-Za-z0-9])?$/
function ValidateEmail(){
    if(email.value.trim()==""){
        err1.innerText="Field cannot be Empty";
        email.style.border="4px solid red"; 
        return false
    }
    else if(!email.value.match(regex)){
    err1.innerText="Email is not in correct format";
    email.style.border="5px solid red";
    return false
    }
    else{
        err1.innerText="";
        email.style.border="5px solid green";
        return true
    }
    

}
function ValidatePass(){
    if(Pass.value.trim()==""){
        err2.innerText="password cannot be empty";
        Pass.style.border="5px solid red"; 
        return false;

}

else if (Pass.value.length<3){   
    err2.innerText="Password should be more than 8 charactar";
    Pass.style.border="5px solid red"; 
    return false
}
else if (Pass.value.length<5){   
    err2.innerText="Password is too week";
    Pass.style.border="5px solid red"; 
    return false
}
else if (Pass.value.length<8){   
    err2.innerText="Password is medium";
    Pass.style.border="5px solid orange"; 
    return false
}

else {
    err2.innerText="Password is strong";
    Pass.style.border="5px solid green";
    return true
} 

}

function ValidateNumber(){
    if(num.value.trim()==""){
        err3.innerText="connot be empty";
        num.style.border="5px solid red"; 
        return false
    }

    else if (num.value.length<10){   
        err3.innerText="Number should be 10 digit ";
        num.style.border="5px solid red"; 
        return false
    }
   else{
       err3.innerText="";
       num.style.border="5px solid green";
        return true
}

}
function verify(){
    if(!ValidateEmail()||!ValidatePass()||!ValidateNumber()){
        return false
    }
    else{
        return true
    }
}
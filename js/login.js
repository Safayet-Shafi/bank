document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const email =emailField.value;
    
    const passwordField= document.getElementById('password-field');
    const password=passwordField.value;
    
    if(email == 'safayet@gmail.com' && password == 'efana'){
        window.location.href='bank.html';
    }
    else{
        alert("Enter Correct Email and Password");
    }
});
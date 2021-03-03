function submitForm() {
    var email = $('#email'). val();
    var enterpassword = $('#EnterPassword').val();
    console.log(email,enterpassword);
    if (email.toUpperCase() =="SUBMITFORM" && enterpassword.toUpperCase()=="SUBMITFORM") {
        console.log('test');
        window.location.href="homePage.html";
    } else{
        console.log('------>>>',email,'------>>>', enterpassword)
        console.log('email & EnterPassword incorrect');
        
    }
}
function submitCustomerInfo(form) {
    var fullName= $('#fullName').val();
    var mobileNumber= $('#mobileNumber').val();
    var emailAddress= $('#emailAddress').val();
    var message= $('message').val();
    if(fullName && mobileNumber && emailAddress && message) {
            let notifier=new AWN();
            Email.send({
                Host:"smtp.gmail.com",
                Username:"gopalakrishnang456@gmail.com",
                Password:"***********",
                To:"gopalgopalrko@gmail.com",
                From:"gopalakrishnang456@gmail.com",
                Subject:"Customer Request",
                Body:'<html><h2>Customer Details</h2><br>\n\
                <div> Name:'+ fullName+'</div><br>\n\
        div> Mobile Number:'+ mobileNumber +'</div><br>\n\
        <div> Customer Mail Id:'+ emailaddress + '</div><br>\n\
        <div> Message:'+ message + '</div></html>'
    }).then(function (message){ 
        console.log('------->>>',message);
                if(message =='OK'){
                    notifier.success('Successfully Submitted');
                    console.log('------>>>', message);
                    form.reset();
                }else{
                    notifier.alert('Service Error');
                }
                });
                
        
            }
            
    
}
    





<!DOCTYPE html>
<html>
    <head>
        <title>Giftedware - Talented Software</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/general.css" type="text/css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
        <script src="js/animations.js" ></script>
        <script src="js/formValidator.js" ></script>
    </head>
    <body>
        <div class="Header">
            <img src="images/giftedware.png" />
            <div class="SocialMediaLinks"><a href="https://facebook.com/giftedware" target="_blank"><img id="facebookLogo" src="images/fb_logo.png"/></a></div>
        </div>        
        <div class="Content">
            <div class="CommingSoonContent" >            
                Coming soon...
                <ul>
                    <li>High quality Software Development</li>
                    <li>Maintenance or recovery of software projects</li>
                    <li>Service contract provided by hours, days, months or project wide</li>
                </ul>                
            </div>
            <div class="ContactFormBox">            
                Contact us<br/>
                <form method="post" action="" id="contactForm">
                    <label>Name:</label>
                    <input type="text" value="" id="cName" name="cName"/>
                    <label>Email:</label>
                    <input type="text" id="cEmail" name="cEmail" value="" />
                    <label>Message:</label>
                    <textarea id="cMessage" name ="cMessage" cols="50" rows="10"></textarea>
                    <input id="btnSubmit" type="submit" value="Send" />
                </form>            
            </div>
        </div>
        <script type="text/javascript">
            var fbLink = new facebookLink();
            (function(){
                fbLink.initialize();          
                $('#btnSubmit').click(function(event){
                    validateContactForm(event);
                });
            })();
        </script>
    </body>
</html>
<?php 
    if(isset($_POST['cMessage'])){
        if(strlen(trim($_POST["cMessage"]))==0 ||
                strlen(trim($_POST["cName"])) == 0 || 
                strlen(trim($_POST["cEmail"]))== 0 || !filter_var($_POST["cEmail"],FILTER_VALIDATE_EMAIL))
                {
                    error_log("invalid email data");
                    exit;
                }
            
                
        require_once('utils/PHPMailer/class.phpmailer.php');
        $mail = new PHPMailer(); 
        $mail->Mailer='smtp'; // send via SMTP        
        $mail->SMTPAuth = true; // turn on SMTP authentication
        $mail->Username = "giftedwarecr@gmail.com"; // SMTP username
        $mail->Password = "@lphacode01"; // SMTP password
        $webmaster_email = "giftedwarecr@localhost"; //Reply to this email ID
        $email="giftedwarecr@gmail.com"; // Recipients email ID
        $name="giftedware"; // Recipient's name
        $mail->From = $webmaster_email;
        $mail->FromName = "Giftedware";
        $mail->AddAddress($email,$name);
        $mail->AddReplyTo($webmaster_email,"Giftedware");
        $mail->WordWrap = 50; // set word wrap        
        $mail->IsHTML(true); // send as HTML
        $mail->Subject = $_POST['cName'] . "-" . $_POST['cEmail'];
        $mail->Body = "<p>". $_POST["cMessage"] ."</p>"; //HTML Body
        $mail->AltBody = $_POST["cMessage"]; //Text Body

        if(!$mail->Send()) {
            error_log("Error sending message: " . $mail->ErrorInfo);
        }          
    }
?>

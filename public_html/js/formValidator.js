function validateEmailFied(fieldId)
{
    var email = $('#' + fieldId).val();    
    return /^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/.test(email);
}

function validateEmptyField(fieldId)
{
    var fieldSize = $('#'+fieldId).val().length;
    if(!(fieldSize > 0))
    {
        return false;
    }else    
    {
        return true;
    }
}

function validateContactForm(event)
{
    var emailError = false;
    var nameError = false;
    var messError = false;
    if(!validateEmptyField("cName")){
        nameError = true;        
    }
    else if(!validateEmailFied("cEmail")){
        emailError = true;
    }else if(!validateEmptyField("cMessage"))
    {
        messError = true;
    }    
    if(nameError || emailError || messError)
    {
        event.preventDefault();
        alert("All fields are required and the email address must be valid");
    }
}




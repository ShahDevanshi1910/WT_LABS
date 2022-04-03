function validate(forms){
    checkbox=""
    for(i=0;i<document.forms.sportscheck.length;i++){
        if(document.forms.sportscheck[i].checked)
        checkbox+=document.forms.sportscheck[i].value+'\n'
    }
    if(checkbox=="")
    alert("Please select Atleast Two option")
    else
    alert(checkbox)
    return false; 
}
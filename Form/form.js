function validation(){
    x=document.forms["loginform"]["username"].value;
    if(x==""){
        alert("Name must be filled out");
        return false;
    }

}
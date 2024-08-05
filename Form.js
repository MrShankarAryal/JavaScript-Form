 function validation(){
 let x =document.form;

 if(x.name.value,x.age.value,x.email.value,x.password1.value,x.password2.value==""){
    alert("Please fill the blanks");
    return false;
 }

 if(x.age.value < 18){
    alert("website is for adult only ");
    return false;
}
  
var a_p = x.email.value.indexOf("@");
var d_p = x.email.value.indexOf(".");
if( a_p < 1 || d_p <  a_p + 2 || d_p +2 >= x.email.value.length ){
alert("Email invalid");
    return false;}


   if(x.password1.value.length  < 6){
    alert("Password must greater than 6 digit");
    return false;}

    if(x.password1.value != x.password2.value){
   alert("password conformation failed");
   return false;}

   }
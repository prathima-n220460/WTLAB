let name="Dilchalchitrams Entetainers";
let email="dilchalchitrams123@gmail.com";
function login()
{
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  
  alert("sign up successfully!\n\n "+"username:"+name+"\nemail:"+email)
  
}
document.getElementById("sign up").addEventListener("click",login);
/*const confirm=function(){
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("password").value;

    if(cpassword===password){
        alert("password confirmed")

        }
    else{
       alert("Wrong password enter correctly!"  ) 
    }
}
*/
(function hi(){
   /* const t=document.createElement("p");
    t.innerHTML="page loaded successfully!"
    document.body.appendChild("t");*/
    console.log("this is automatically invoked");

})();

function display(){
    let name=document.getElementById("fname").value;
    let message=confirm("Do you want to submit you feedback?");
    if(message){
        alert("Thankyou!Dear "+name+"for sharing your feedback with us.")
    }
    else{
        let reason=promt("Give valid  reason for not sharing your feedback:")
        if(reason){
            alert("Thankyou!for your reply.");
        }
    }
}
/*document.getElementById("send").addEventListener("click",display);*/
import { supabase } from "./utils.js";

window.onload=innit;
var inputLogin;
var inputPassword;
var loginbtn;

async function innit(){

    const {data:{session}} = await supabase.auth.getSession();
    if(session){
       window.location.href = "index.html";
    } 

    inputLogin=document.getElementById("input-login")
    inputPassword=document.getElementById("input-password")

    loginbtn=document.getElementById("login-btn")
    loginbtn.addEventListener('click',login)
}

async function login(){

    let { data, error } = await supabase.auth.signInWithPassword({
  email: inputLogin.value,
  password: inputPassword.value
})

if(error){
  console.log(error.message)
}

if (data.session) {
    console.log("Usuario logueado:", data.session.user.id);
    access();
  } else {
    console.warn("sin sesion establecida")
  }

}

async function access(){
    window.location.href = "index.html";
}

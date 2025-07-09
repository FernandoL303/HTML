/*import {createClient} from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://mmcgruaofxzxpecdhvpl.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tY2dydWFvZnh6eHBlY2RodnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODA2OTgsImV4cCI6MjA2NTM1NjY5OH0.KXigWjfRLrBJFGr_9LFYKwtCucy6AxkF5BNziULUASQ'

const supabase=createClient(supabaseUrl,supabaseKey) */
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

const {data:{session}} = await supabase.auth.getSession();


if (data?.session) {
    console.log("Usuario logueado:", data.session.user.id);
    access();
  } else {
    console.log("Login fallido");
  }

}

async function access(){
    window.location.href = "index.html";
}

import { supabase } from "./utils.js";

var btnSignout
innit();

async function innit(){
    btnSignout=document.getElementById("btn-signout")
    btnSignout.addEventListener('click',signOut)
}


async function signOut() {
    console.log('signingout')
    const { error } = await supabase.auth.signOut()
    window.location.href = "login.html";
}

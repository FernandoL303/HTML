import { supabase } from "./utils.js";
import { getSession } from "./utils.js";


var businessNameContainer
var userNameContainer
var btnSignout

window.onload=innit();

async function innit(){
    btnSignout=document.getElementById("btn-signout")
    btnSignout.addEventListener('click',signOut)

    businessNameContainer=document.getElementById('business-name')
    userNameContainer=document.getElementById('user-name')

    getMainProfile();
}


async function signOut() {
    console.log('signingout')
    const { error } = await supabase.auth.signOut()
    window.location.href = "login.html";
}

async function getMainProfile(){

    let mysession=getSession();
    let { data, error } = await supabase
  .rpc('getmainprofile', {
    mysession
  })
  data=data[0]

  businessNameContainer.textContent=data.nombreempresa
  userNameContainer.textContent=data.nombreusuario
}

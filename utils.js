/*import {createClient} from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'*/

import {createClient} from 
'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://mmcgruaofxzxpecdhvpl.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tY2dydWFvZnh6eHBlY2RodnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODA2OTgsImV4cCI6MjA2NTM1NjY5OH0.KXigWjfRLrBJFGr_9LFYKwtCucy6AxkF5BNziULUASQ'

export const supabase=createClient(supabaseUrl,supabaseKey)

export async function checkSession(){
    const {data:{session}} = await supabase.auth.getSession();
    if(!session){
       window.location.href = "login.html";
    }
}

export function getSession(){
    const userID=localStorage.getItem("user_id")

    if(userID)
    {
        return userID
    }
    else
    {
        const{data:{session}} = supabase.auth.getSession();

        if(session){
            localStorage.setItem("user_id",session.user.id)
        }else{
            window.location.href='login.html'
        }
    }
}
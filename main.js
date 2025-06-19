import {createClient} from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://mmcgruaofxzxpecdhvpl.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tY2dydWFvZnh6eHBlY2RodnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODA2OTgsImV4cCI6MjA2NTM1NjY5OH0.KXigWjfRLrBJFGr_9LFYKwtCucy6AxkF5BNziULUASQ'

const supabase=createClient(supabaseUrl,supabaseKey)

window.onload= obtenerDescuentos;


var myid =3;

async function obtenerDescuentos(){

   let { data, error } = await supabase
  .rpc('my_discounts', {
    myid
  })
if (error) console.error(error)

    const lista=
document.getElementById("cardShow")
lista.innerHTML=''

data.forEach(descuento => {
    const div =document.createElement('div')
    div.classList.add('coupon');

    const coupontext= document.createElement('p')
    coupontext.classList.add("coupon-text");
    coupontext.textContent=`${descuento.nombre}`
    
    const couponDis=document.createElement('p')
    couponDis.classList.add("coupon-dis")
    couponDis.textContent=`${descuento.porcentaje}`
    
    div.appendChild(coupontext);
    div.appendChild(couponDis)
    
    lista.appendChild(div);
});

}


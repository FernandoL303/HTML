import {createClient} from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://mmcgruaofxzxpecdhvpl.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tY2dydWFvZnh6eHBlY2RodnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODA2OTgsImV4cCI6MjA2NTM1NjY5OH0.KXigWjfRLrBJFGr_9LFYKwtCucy6AxkF5BNziULUASQ'

const supabase=createClient(supabaseUrl,supabaseKey)

window.onload= obtenerDescuentos;

var myid =1;

async function obtenerDescuentos(){

   let { data, error } = await supabase
  .rpc('my_discounts', {
    myid
  })
if (error) console.error(error)
  else{
    console.log(data)
  }

    const lista=
document.getElementById("coupon-list")
lista.innerHTML=''

data.forEach(descuento => {

  const coupon=document.createElement('div');
  coupon.classList.add('coupon-card')
  
  const couponContent=document.createElement('div')
  couponContent.classList.add('coupon-content')


  const couponDiscount=document.createElement('div')
  couponDiscount.classList.add('coupon-discount')
  couponDiscount.textContent=`${descuento.porcentaje}`

  const couponBrand=document.createElement('div')
  couponBrand.classList.add('coupon-brand')


  const brandName=document.createElement('h2')
  brandName.classList.add('bran-name')
  brandName.textContent=`${descuento.nombre}`

  const brandLogo=document.createElement('div')
  brandLogo.classList.add('brand-logo')

  const img=document.createElement('img')
  img.src=`${descuento.logourl}`

  console.log(img.src)
 // img.alt=`${descuento.nombre} Logo`

  brandLogo.appendChild(img)

  couponBrand.appendChild(brandLogo)
  couponBrand.appendChild(brandName)

  couponContent.appendChild(couponBrand)
  couponContent.appendChild(couponDiscount)

  coupon.appendChild(couponContent)

  lista.appendChild(coupon)
});

}


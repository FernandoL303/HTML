/*import {createClient} from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://mmcgruaofxzxpecdhvpl.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tY2dydWFvZnh6eHBlY2RodnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODA2OTgsImV4cCI6MjA2NTM1NjY5OH0.KXigWjfRLrBJFGr_9LFYKwtCucy6AxkF5BNziULUASQ'

const supabase=createClient(supabaseUrl,supabaseKey) */
import { supabase } from "./utils.js";
var mysession;

window.onload= innit;


var filterCategory="TODOS";

var couponDivs=[];
var filterbtns=[];
var activeGiros=[];



async function innit(){

  const {data:{session}} = await supabase.auth.getSession();

  mysession=session.user.id;

 
  await getDescuentos();
  
  getGiros();
  
}

async function getDescuentos(){

  
   
let { data, error } = await supabase
  .rpc('my_discounts', {
    mysession
  })
if (error) console.error(error)

  

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



  brandLogo.appendChild(img)

  couponBrand.appendChild(brandLogo)
  couponBrand.appendChild(brandName)

  couponContent.appendChild(couponBrand)
  couponContent.appendChild(couponDiscount)

  coupon.appendChild(couponContent)

  coupon.data=`${descuento.nombre}`.toUpperCase() + "|"+`${descuento.giro}`.toUpperCase();



  if(!activeGiros.includes(descuento.giro)){
   
    activeGiros.push(descuento.giro)
    
  }

  couponDivs.push(coupon)
  lista.appendChild(coupon)
});

}


 async function getGiros(){
    let { data, error } = await supabase
    .rpc('getgiros')
    if (error) console.error(error)
    
    const lista = document.getElementById('filter-scroll')
    lista.innerHTML=''

    var butonAll=document.createElement('button')
    butonAll.classList.add('filter-btn')
    butonAll.classList.add('active')
    butonAll.textContent="Todos"
    butonAll.addEventListener('click',changeGiro)
    filterbtns.push(butonAll)

    lista.appendChild(butonAll)


    data.forEach(giro=>{

      

      if(activeGiros.includes(giro.nombre)){

      
        const button=document.createElement('button')
        button.classList.add('filter-btn');
        button.classList.add('inactive')
        button.textContent=`${giro.nombre}`
        button.addEventListener('click',changeGiro)
        filterbtns.push(button)

        lista.appendChild(button);
      }
    });

}

async function changeGiro(){
    filterbtns.forEach(button=>{
        button.classList.remove('active')
        button.classList.add('inactive')
    });

    this.classList.remove('inactive')
    this.classList.add('active')
    filterCategory=this.textContent.toUpperCase();

    search();
}

async function search(){
    var input
    input=document.getElementById('search-input')
    
    couponDivs.forEach(coupon=>{

      const couponData=coupon.data.split('|');
        
        if(filterCategory==couponData[1]||filterCategory=="TODOS"){
            coupon.style.display=""
        }else{
            coupon.style.display="none"
        }

    });
   
}


import {supabase} from '/utils.js'
import { getSession } from './utils.js';

window.onload=innit;

var brandLogo
var brandName
var couponDiscount
var inputDescuento
var myBussiness

async function innit(){
    brandLogo=document.getElementById("brand-logo");
    brandName=document.getElementById("brand-name")
    couponDiscount=document.getElementById("coupon-discount")
    inputDescuento=document.getElementById("input2")

    inputDescuento.addEventListener("input",displayDiscount)

    await getCoupon();
    await showDiscounts();
    enableCheckboxes();

}

 async function getCoupon(){
    var mysession=getSession();
    
    let { data, error } = await supabase
  .rpc('getmybusinesscoupon', {
    mysession
  })
if (error) console.error(error)
        
         myBussiness=data[0]
        brandLogo.src=myBussiness.logo_url;
        brandName.textContent=myBussiness.nombre
}

async function displayDiscount(){
    couponDiscount.textContent=inputDescuento.value+'%'
}

async function showDiscounts(){
  /*<div class="form-group">
			      <input type="checkbox" id="web-developer">
			      <label for="web-developer">
				      <span class="checkbox">
					      <span class="check"></span>
				      </span>
				    Bambinos
			      </label>
		      </div>*/

          
  const myid=myBussiness.negocioid;
  let { data, error } = await supabase
  .rpc('givendiscounts', {
    myid
  })
  if (error) console.error(error)
  
  console.log(data)
  const lista=document.getElementById("list-form")
  //lista.innerHTML='';

  let counter=1;
  data.forEach(business => {
    const div = document.createElement('div')
    div.classList.add('form-group')

    const checkbox=document.createElement('input')
    checkbox.type='checkbox'
    checkbox.id='check'+counter
  
    const label=document.createElement('label')
    label.setAttribute('for','check'+counter)
    counter+=1;

    console.log(checkbox.id)

    const span=document.createElement('span')
    span.classList.add('checkbox')
    
    const check=document.createElement('span')
    check.classList.add('check')

    span.appendChild(check)

    label.appendChild(span)
    label.appendChild(document.createTextNode(''+business.nombre))
    
   div.appendChild(checkbox)
   div.appendChild(label)
  
    

    div.dataset.negocioid=business.negocioid

    lista.appendChild(div)

  });
}

async function enableCheckboxes(){
   const selectAll = document.querySelector('.form-group.select-all input');
		const allCheckbox = document.querySelectorAll('.form-group:not(.select-all) input');
		let listBoolean = [];

		allCheckbox.forEach(item=> {
			item.addEventListener('change', function () {
				allCheckbox.forEach(i=> {
					listBoolean.push(i.checked);
				})
				if(listBoolean.includes(false)) {
					selectAll.checked = false;
				} else {
					selectAll.checked = true;
				}
				listBoolean = []
			})
		})

		selectAll.addEventListener('change', function () {
			if(this.checked) {
				allCheckbox.forEach(i=> {
					i.checked = true;
				})
			} else {
				allCheckbox.forEach(i=> {
					i.checked = false;
				})
			}
		})
}
 
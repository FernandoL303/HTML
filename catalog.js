import {createClient} from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://mmcgruaofxzxpecdhvpl.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tY2dydWFvZnh6eHBlY2RodnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODA2OTgsImV4cCI6MjA2NTM1NjY5OH0.KXigWjfRLrBJFGr_9LFYKwtCucy6AxkF5BNziULUASQ'

const supabase=createClient(supabaseUrl,supabaseKey)

window.onload=innit;
var searchbar;
var filterCategory;

var cardDivs=[];



async function innit(){
    searchbar=document.getElementById('search-input')
    searchbar.onkeyup=search;

    getCatalog();
}



async function getCatalog(){
    let { data, error } = await supabase
    .rpc('businesscatalog')
    if (error) console.error(error)

    const lista = document.getElementById('companies-list')
    lista.innerHTML=''

    data.forEach(company=>{

        const card=document.createElement('div')
        card.classList.add('company-card')

        const companyContent=document.createElement('div')
        companyContent.classList.add('company-content')

        const companyInfo=document.createElement('div')
        companyInfo.classList.add('company-info')

        const companyLogo=document.createElement('div')
        companyLogo.classList.add('company-logo')

        const img= document.createElement('img')
        img.src=`${company.logourl}`
        companyLogo.appendChild(img)

        const companyDetails=document.createElement('div')
        companyDetails.classList.add('company-details')

        const h3=document.createElement('h3')
        h3.classList.add('company-name')
        h3.textContent=`${company.nombre}`
        companyDetails.appendChild(h3)

        const p=document.createElement('p')
        p.classList.add('company-category')
        p.textContent=`${company.giro}`
        companyDetails.appendChild(p)

        const arrowIcon=document.createElement('div')
        arrowIcon.classList.add('arrow-icon')

        const i=document.createElement('i')
        i.classList.add('ri-arrow-right-s-line')
        arrowIcon.appendChild(i)

        companyInfo.appendChild(companyLogo)
        companyInfo.appendChild(companyDetails)

        companyContent.appendChild(companyInfo)
        companyContent.appendChild(arrowIcon)

        card.appendChild(companyContent)

        
        card.data=`${company.nombre}`.toUpperCase()
        

        cardDivs.push(card)
        lista.appendChild(card)
    });

}

async function search(){
    var input,filter,name,giro
    input=document.getElementById('search-input')
    filter=input.value.toUpperCase()


    cardDivs.forEach(card=>{

        if(card.data.indexOf(filter)>-1){
            card.style.display=""
        }else{
            card.style.display="none"
        }

    });
   
}
function updateNumber(product, productRate, isupdatenumber){
    const nbrInput= document.getElementById(product +'-input');
    let nbrValue= nbrInput.value;
    if(isupdatenumber){
        nbrValue= parseInt(nbrValue) +1;
    }
    else if(nbrValue>0){
        nbrValue= parseInt(nbrValue)-1;
    }
    nbrInput.value= nbrValue;
   const totalAmount= document.getElementById(product +'-total');
   totalAmount.innerText= nbrValue* productRate;
   totalPrize();
}
function productTotalAmount(product){
    const productInput= document.getElementById(product + '-input');
    const productValue= parseInt(productInput.value);
    return productValue;
}

function totalPrize(){
    const phoneTotal = productTotalAmount('phone') * 1219;
    const caseTotal = productTotalAmount('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax= subTotal/10;
    const total= subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tex').innerText= tax;
    document.getElementById('Total').innerText= total;
   
    
}


document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone', 1219, true);

})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone', 1219, false);
})
document.getElementById('phone-minus').addEventListener('click', function(){

})

document.getElementById('case-plus').addEventListener('click', function(){
  updateNumber('case', 59, true)
   
  
})
document.getElementById('case-minus').addEventListener('click', function(){
    // const nbrInput=document.getElementById('nbr-input');
    // const nbrValue= nbrInput.value;
    updateNumber('case',59, false)
})
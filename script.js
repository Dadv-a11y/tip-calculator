let bill = document.getElementById('Bill');
let numberPeople = document.getElementById('Number');
let custom = document.getElementById('custom')
let totalamount = document.getElementById('totalamount')
let amountperperson = document.getElementById('amountperperson')
let reset = document.getElementById('Reset')
let billinput=0 ;
let numberPeopleinput=1 ;
let tipAmounts=0 ;
function tip5(){
   let tip = 5 ;
   displaytipAmount(tip);
   if(numberPeopleinput==1){
    amountperperson.innerText='$0.00'
}
else{
    displayAmountPerPerson(numberPeopleinput)
}
}
function tip10(){
   let tip = 10 ;
   displaytipAmount(tip);
   if(numberPeopleinput==1){
    amountperperson.innerText='$0.00'
}
else{
    displayAmountPerPerson(numberPeopleinput)
}
}
function tip15(){
   let tip = 15 ;
   displaytipAmount(tip);
   if(numberPeopleinput==1){
    amountperperson.innerText='$0.00'
}
else{
    displayAmountPerPerson(numberPeopleinput)
}
}
function tip25(){
   let tip = 25 ;
   displaytipAmount(tip);
   if(numberPeopleinput==1){
    amountperperson.innerText='$0.00'
}
else{
    displayAmountPerPerson(numberPeopleinput)
}
}
function tip50(){
   let tip = 50 ;
   displaytipAmount(tip);
   if(numberPeopleinput==1){
    amountperperson.innerText='$0.00'
}
else{
    displayAmountPerPerson(numberPeopleinput)
}
}
 custom.addEventListener('keyup',function(){
    let tip = custom.value;
    displaytipAmount(tip);
    if(numberPeopleinput==1){
        amountperperson.innerText='$0.00'
    }
    else{
        displayAmountPerPerson(numberPeopleinput)
    }
 })
bill.addEventListener('keyup',function(){
     billinput = bill.value  ;
    if(billinput==0){
        bill.style.borderColor='red';
        document.getElementById('billerror').style.display='inline'
    }
    else{
        bill.style.borderColor='hsl(189, 41%, 97%)';
        document.getElementById('billerror').style.display='none'
        displaytipAmount(custom.value)
        displayAmountPerPerson(numberPeopleinput)
    }
    })
    

numberPeople.addEventListener('keyup',function(e){
        console.log(numberPeople.value)
        numberPeopleinput = numberPeople.value  ;
       displayAmountPerPerson(numberPeopleinput);
       if(numberPeopleinput==0){
        numberPeople.style.borderColor='red';
        document.getElementById('numbererror').style.display='inline'
    }
    else{
        numberPeople.style.borderColor='hsl(189, 41%, 97%)';
        document.getElementById('numbererror').style.display='none'
    }
    })
        

function tipAmount( bill ,tip){
  let results = (bill*tip)/100 ;
  console.log(results)
 return results  ; 
}

function AmountPerPerson(tip , number){
    results = tip/number;
    return  results.toFixed(2);
}
function displaytipAmount(tip){
     tipAmounts = tipAmount(billinput,tip)
    totalamount.innerHTML='$'+tipAmounts ;
}
function displayAmountPerPerson(numberPeopleinput){
    let amount = AmountPerPerson(tipAmounts,numberPeopleinput)
    amountperperson.innerText='$'+amount
}


reset.addEventListener('click',function(){
    amountperperson.innerText='$0.00'
    totalamount.innerHTML='$0.00'
    custom.value= null
    bill.value= null
    numberPeople.value= null
    billinput=0 ;
    numberPeopleinput=1 ;
     tipAmounts=0
})


const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        buttons.forEach(btn => {
            btn.style.backgroundColor = 'hsl(183, 100%, 15%)'; 
        });
        
        button.style.backgroundColor = 'hsl(172, 67%, 45%)'; 
        reset.style.backgroundColor ='hsl(172, 67%, 45%)'
    });
});

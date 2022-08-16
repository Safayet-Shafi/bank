//step -1 eventlistener with button
document.getElementById('btn-withdraw').addEventListener('click',function(){
   // step 2 getting withdraw amount
   const withdrawElement=document.getElementById('withdraw-field');
   const newWithdrawAmountString=withdrawElement.value;
   const newWithdrawAmount=parseFloat(newWithdrawAmountString);
   
   withdrawElement.value='';// cleaning input field
   // checking for number 
   if(isNaN(newWithdrawAmount)){
      alert('enter Number please');
      return;
   }
   
   //step 3 //getting previous witndraw amount
   const withdrawTotalElemnt = document.getElementById('withdraw-total');
   const previouswithdrawAmountString=withdrawTotalElemnt.innerText;
   const previouswithdrawAmount = parseFloat(previouswithdrawAmountString);

   // step 4 getting previous total
   const previousbalanceTotalElement=document.getElementById('banance-totat');
   const previousBalanceTotalString =previousbalanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);
   
   // checking for insufficinet amount
   if(newWithdrawAmount>previousBalanceTotal){
      alert('not enough money');
      return;
   }
   //step 5 updating current withdraw amount 
   const curretWithdrawTotal=previouswithdrawAmount+newWithdrawAmount;
   
   withdrawTotalElemnt.innerText=curretWithdrawTotal;
   
  
   //step 6 updating totat balance

   
    const newTotaBalance=previousBalanceTotal-newWithdrawAmount;

    previousbalanceTotalElement.innerText=newTotaBalance;



   
})
    

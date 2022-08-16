document.getElementById('btn-diposite').addEventListener('click',function(){
    
    const dipositeField=document.getElementById('diposite-field');
    const newDipositeAmountString=dipositeField.value;
    const newDipositeAmount =parseFloat(newDipositeAmountString);

    dipositeField.value='';

    if(isNaN(newDipositeAmount)){
        alert('Enter Number Please');
        return;
    }
    

    const dipositeTotatElement=document.getElementById('diposite-total');
    const previousDipositeTotalString=dipositeTotatElement.innerText;
    const previousDipositeTotal=parseFloat(previousDipositeTotalString);

    const currentDipositeTotai=previousDipositeTotal+newDipositeAmount;

    dipositeTotatElement.innerText=currentDipositeTotai;

    const previousBalanceElement=document.getElementById('banance-totat');
    const previousBalanceString=previousBalanceElement.innerText;
    const previousBalance=parseFloat(previousBalanceString);

    const currentBalance =previousBalance+newDipositeAmount;

    previousBalanceElement.innerText=currentBalance;
    

    
})
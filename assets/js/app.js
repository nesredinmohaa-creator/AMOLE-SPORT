// Simple calculator for potential payout
document.addEventListener('DOMContentLoaded',function(){
  const stakeEl=document.getElementById('stake');
  const oddsEl=document.getElementById('odds');
  const btn=document.getElementById('calc');
  const result=document.getElementById('result');
  function calc(){
    const stake=parseFloat(stakeEl.value)||0;
    const odds=parseFloat(oddsEl.value)||0;
    const payout=(stake*odds).toFixed(2);
    result.textContent=`Potential payout: ${payout}`;
  }
  btn.addEventListener('click',calc);
  // initial
  calc();
});

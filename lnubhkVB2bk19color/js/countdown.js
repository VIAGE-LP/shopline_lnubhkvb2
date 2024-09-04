const countdown = ()=>{
  const now = new Date();
  //倒數計時開始時間
  const target_start = new Date('2024/07/22 00:00:00'); 
  const differ_start = target_start.getTime() - now.getTime();
  //倒數計時開始區間
  const target_mid_start = new Date('2024/08/02 00:00:00'); 
  const differ_mid_start = target_mid_start.getTime() - now.getTime();
  //倒數計時結束區間
  const target_mid_end = new Date('2024/08/05 00:00:00'); 
  const differ_mid_end = target_mid_end.getTime() - now.getTime();
  //倒數計時結束時間
  const target_end = new Date('2024/08/06 00:00:00'); 
  const differ_end = target_end.getTime() - now.getTime();
// console.log(differ_end)
//  console.log(differ_start)
// console.log(differ_mid_start)
// console.log(differ_mid_end)

if((differ_end > 0) && (differ_start < 0) && ((differ_mid_start > 0) || (differ_mid_end < 0))){
  $("#cdtimer").show();
  $("#cdtimer_day").hide();
}else if((differ_end > 0) && (differ_start < 0) && (differ_mid_start < 0) && (differ_mid_end > 0)){
  $("#cdtimer").hide();
  $("#cdtimer_day").show();
}else if((differ_end < 0)){
  $("#cdtimer").hide();
  $("#cdtimer_day").hide();
}

  const ms = Math.floor(differ_end );
  const sec = Math.floor(differ_end  / 1000 % 60);
  const min = Math.floor(differ_end / 1000 / 60 % 60);
  const hour = Math.floor(differ_end / 1000 / 60 / 60 % 24);
  const day = Math.floor(differ_end / 1000 / 60 / 60 / 24);

  document.querySelector('#countdown .miriseconds').textContent = String(ms).slice(-3, -1);
  document.querySelector('#countdown .seconds').textContent = String(sec).padStart(2, '0');
  document.querySelector('#countdown .minutes').textContent = String(min).padStart(2, '0');
  document.querySelector('#countdown .hours').textContent = String(hour).padStart(2, '0');
  document.querySelectorAll('#countdown .day').textContent = String(day);
  for(i=0;i<=document.querySelectorAll('#countdown .day').length;i++){
    if(document.querySelectorAll('#countdown .day')[i]!=undefined)
    document.querySelectorAll('#countdown .day')[i].textContent = String(day);
  }
}
setInterval(countdown, 1);
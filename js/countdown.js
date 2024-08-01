const day_start = new Date('2024/08/02 00:00:00'); // 天倒數 開始時間
const sec_start = new Date('2024/08/05 00:00:00'); // 秒倒數 開始時間
const end = new Date('2024/08/06 00:00:00'); // 結束時間
let now = new Date();

//判斷進入網頁的時間點，是否在期間內
if ((now >= day_start) && (now <= end)) {
  //每1秒刷新一次
  setInterval(() => {
    now = new Date();
    const differ_end = end.getTime() - now.getTime();
    //判斷刷新後的now，是否還在期間內
    if (differ_end > 0) {
      //判斷顯示天倒數or秒倒數
      if ((now >= day_start) && (now < sec_start)) {
        $("#cdtimer_day").show();
        $("#cdtimer").hide();
      } else if ((now >= sec_start) && (now <= end)) {
        $("#cdtimer_day").hide();
        $("#cdtimer").show();
      }
      timer(differ_end);
    } else {
      $("#cdtimer_day").hide();
      $("#cdtimer").hide();
    }
  }, 1000);
};


function timer(differ_end) {
  const ms = Math.floor(differ_end);
  const sec = Math.floor(differ_end / 1000 % 60);
  const min = Math.floor(differ_end / 1000 / 60 % 60);
  const hour = Math.floor(differ_end / 1000 / 60 / 60 % 24);
  const day = Math.floor(differ_end / 1000 / 60 / 60 / 24);

  document.querySelector('#countdown .miriseconds').textContent = String(ms).slice(-3, -1);
  document.querySelector('#countdown .seconds').textContent = String(sec).padStart(2, '0');
  document.querySelector('#countdown .minutes').textContent = String(min).padStart(2, '0');
  document.querySelector('#countdown .hours').textContent = String(hour).padStart(2, '0');
  for (i = 0; i <= document.querySelectorAll('#countdown .day').length; i++) {
    if (document.querySelectorAll('#countdown .day')[i] != undefined)
      document.querySelectorAll('#countdown .day')[i].textContent = String(day).padStart(2, '0');
  }
}
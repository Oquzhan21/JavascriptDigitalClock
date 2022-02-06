const sec=document.querySelector('.secs');
const min=document.querySelector('.mins');
const hour=document.querySelector('.hours');

function hareket(){
    let second=new Date().getSeconds();
    let Minutes=new Date().getMinutes();
    let hourr=new Date().getHours();
    sec.style.transform = `rotate(${180 + (second * 6)}deg)`
    min.style.transform = `rotate(${180 + (minute * 6)}deg)`
    hours.style.transform = `rotate(${180 + (hour * 30)}deg)`
    console.log(second,Minutes,hourr);
}
setInterval(hareket,1000);
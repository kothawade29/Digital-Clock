console.log("HELLO");
setInterval(showtime,1000);
function showtime() {
    let time =new Date();

    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let currentTime=hour+':'+min+':'+sec;
    document.getElementById('clock').innerHTML=currentTime;
}
showtime();
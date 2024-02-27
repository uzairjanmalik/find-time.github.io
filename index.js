const time = prompt(`enter your time`);

if(time<=6){
    alert(`late night`);
}
else if(time<=12){
    alert(`morning`);
}
else if(time<=17){
    alert(`afternoon`);
}
else if(time<=20){
    alert(`evening`);
}
else if(time<=24){
    alert(`night`);
}
else{
    alert(`invalid time`)
}
var span= document.getElementById('price');
var car= document.getElementById('car').nodeValue;
if(car=="Hyundai Verna"){
    span.innerHTML="Rs.500";
}else if(car=="Ford Focus"){
    span.innerHTML="Rs.300";
}else{
    span.innerHTML="Rs.1000";
}
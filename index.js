setInterval(() => {
  date= new Date();
  hr= date.getHours();
  min= date.getMinutes();
  sec= date.getSeconds();

  hrRotation= 30*hr + min/2;
  minRotation= 6*min+sec/10;
  secRotation=6*sec;

  hour.style.transform = `rotate(${hrRotation}deg)`;
  minute.style.transform = `rotate(${minRotation}deg)`;
  second.style.transform = `rotate(${secRotation}deg)`;
  
},1000);

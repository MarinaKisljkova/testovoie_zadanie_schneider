"use strict"







function setText(id, text){
    let sale = document.querySelector('#sale');
    sale.innerHTML = text;
    
}



function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

  
  
  
  
  let date = new Date();
  
  
  
  
  

  if (date.getDay() == 0)
  {date.setDate(date.getDate() + 1);}
else if (date.getDay() == 1)
  {date.setDate(date.getDate() + 7);}
else if (date.getDay() == 2)
  {date.setDate(date.getDate() + 6);}
else if (date.getDay() == 3)
  {date.setDate(date.getDate() + 5);}
else if (date.getDay() == 4)
  {date.setDate(date.getDate() + 6);}
else if (date.getDay() == 5)
  {date.setDate(date.getDate() + 7);}
else if (date.getDay() == 6)
  {date.setDate(date.getDate() + 8);}

  setText('sale', ("Распродажа до " + formatDate(date)));









  
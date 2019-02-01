function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));

  setInterval(getRandomInt(2),10000);

  if(max= 1){document.getElementByID('etoile1').style.width = '35px'};
  if(max= 2){document.getElementByID('etoile2').style.width = '45px'};
  if(max= 3){document.getElementByID('etoile3').style.width = '65px'};
  if(max= 4){document.getElementByID('etoile4').style.width = '55px'};



}
$(document).ready(function() {
  const colorz = ['#EB9C9C', '#EBC49C', '#FFF287', '#B3E9D1', 
    '#B3CBE9', '#CAC7FF', '#D9B0F3', '#FFC5EC'];
  const lightColorz = ['#EB9C9C', '#EBC49C', '#FFF287', '#B3E9D1', 
    '#B3CBE9', '#CAC7FF', '#D9B0F3', '#FFC5EC'];

  //const elems = document.getElementsByClassName('colorchange');

  const elems = $('.colorchange');


  console.log(elems.length);
  for (let i=0; i<elems.length; i++) {
    console.log(elems[i]);
  }


  const colorChanger = document.getElementById('colorchanger');

  function colorChange() {
    const color = colorz[Math.floor(Math.random()*colorz.length)];
    const backgroundColor = lightColorz[Math.floor(Math.random()*lightColorz.length)];
    
    for (let i=0; i<elems.length; i++) {
      console.log(elems);
      elems[i].style.background = color;
    }
    document.body.style.background = backgroundColor; 
  }

    colorChanger.addEventListener('click', colorChange);


});

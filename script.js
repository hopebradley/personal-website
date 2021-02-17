$(document).ready(function() {

  const blueTheme = {
    headerFooter: '#b2cee3',
    main: '#1687a7',
    other: '#19576f',
    background: '#f6f5f5'
  }

  const purpleTheme = {
    headerFooter: '#c1a1d3', 
    main: '#1a508b',
    other: '#0d335d',
    background: '#fff3e6'
  }

  const coffeeTheme = {
    headerFooter: '#eabf9f', 
    main: '#b68973',
    other: '#1e212d',
    background: '#faf3e0'
  }

  const perryTheme = {
    headerFooter: '#a3d2ca', 
    main: '#5eaaa8',
    other: '#db6400',
    background: '#f8f1f1'
  }


  const colorz = [blueTheme, purpleTheme, coffeeTheme, perryTheme];
  
  const headFoot = $('.headfoot');
  const mainSection = $('.paras');
  const otherSection = $('.other-stuff');

  const colorChanger = document.getElementById('colorchanger');

  function colorLoop(section, color) {
    for (let i=0; i<section.length; i++) {
      console.log(section[i]);
      section[i].style.background = color;
    }
  }



  function colorChange() {
    const theme = Math.floor(Math.random()*colorz.length);
    const color1 = (colorz[theme]).headerFooter;
    const color2 = (colorz[theme]).main;
    const color3 = (colorz[theme]).other;
    const color4 = (colorz[theme]).background;

    colorLoop(headFoot, color1);
    colorLoop(mainSection, color2);
    colorLoop(otherSection, color3);
    document.body.style.background = color4; 

  }

    colorChanger.addEventListener('click', colorChange);


});

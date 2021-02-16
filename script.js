//alert('hellow');

const colorz = ['#EB9C9C', '#EBC49C', '#FFF287', '#B3E9D1', '#B3CBE9', '#CAC7FF', '#D9B0F3', '#FFC5EC'];
const lightColorz = ['#EB9C9C', '#EBC49C', '#FFF287', '#B3E9D1', '#B3CBE9', '#CAC7FF', '#D9B0F3', '#FFC5EC'];

const paras = document.getElementsByClassName('paras');

function colorChange() {
	const color = colorz[Math.floor(Math.random()*colorz.length)];
	const backgroundColor = lightColorz[Math.floor(Math.random()*lightColorz.length)];
	
	for (let i=0; i<paras.length; i++) {
		paras[i].style.background = color;
	}
	document.body.style.background = backgroundColor; 
 }

for (let i = 0; i<paras.length; i++) {
	paras[i].addEventListener('click', colorChange);
}



var instructionBtn =  document.getElementById('instructions');
var instructions = document.getElementById('inst');
var modal = document.getElementById('modal');
var start = document.getElementById('start');
var scoreText = document.getElementById('score');
modal.style.display = 'block';
scoreText.style.display = 'none'

instructionBtn.onclick = function(){
	instructions.style.display = 'block';
}

start.onclick = function() {	
	var container = document.getElementById('container');
	var score = 0;
	scoreText.style.display = 'block'

	modal.style.display = 'none';


	var item1 = {
		type: 'good',
		imgSrc: 'imgs/candycane.png'
	};
	var item2 = {
		type: 'bad',
		imgSrc: 'imgs/coal.png'
	};
	var item3 = {
		type: 'good',
		imgSrc: 'imgs/peppermint.png'
	};
	var item4 = {
		type: 'bad',
		imgSrc: 'imgs/socks.png'
	};
	var item5 = {
		type: 'good',
		imgSrc: 'imgs/cookie.png'
	};
	var item6 = {
		type: 'bad',
		imgSrc: 'imgs/apple.png'
	};
	var arr = [item1, item2, item3, item4, item5, item6]

	function randomNum(min, max){
		return Math.floor(Math.random() * max) + min;
	}

	function addItem(){
		var img = document.createElement('img');
		var randoNum = randomNum(0, 6);
		img.src = arr[randoNum].imgSrc;
		//console.log(img.src)
		img.style.top = randomNum(0, 1000) + 'px';
		img.setAttribute('class', 'item');
		img.addEventListener('click', function(){
			if(arr[randoNum].type == 'bad'){
				img.style.display = 'none';
				console.log('boo')
				score--;
				scoreText.innerHTML = "score:" + score
			}
			if (arr[randoNum].type == 'good'){
				img.style.display = 'none';
				console.log('yay')
				score++;
				scoreText.innerHTML = "score: " + score
			}
		})
		container.appendChild(img)
		if(container.childElementCount > 5){
			container.removeChild(container.childNodes[0])
		}
	}

	setInterval(addItem, 1000);
}
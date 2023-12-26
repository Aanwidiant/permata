const cacheKey = 'NUMBER';
if (typeof (Storage) !== 'undefined') {
	if (localStorage.getItem(cacheKey) === 'undefined') {
		localStorage.setItem(cacheKey, 0);
	}

	const likeme = document.querySelector('#likeme');
	const likecount = document.querySelector('#likecount');
	likeme.addEventListener('click', function (event) {
		let number = localStorage.getItem(cacheKey);
		number++;
		localStorage.setItem(cacheKey, number);
		likecount.innerText = localStorage.getItem(cacheKey);
	});
} else {
	alert('Browser tidak mendukung Wen Storage')
}

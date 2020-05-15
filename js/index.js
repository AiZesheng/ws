(function () {
	var html = document.documentElement;
	function init () {
		html.style.fontSize = document.body.offsetWidth / 3.75 + 'px';
	}
	window.onresize = init;
	init();
	var aRow = document.querySelectorAll('.row');
	var j = 0;
	var timer = setInterval(function () {
		aRow[j].style.opacity = 1;
		aRow[j].style.transform = 'translateY(0)';
		j++;
		if (j == aRow.length) {
			clearInterval(timer);
		}
	}, 3000);
})();
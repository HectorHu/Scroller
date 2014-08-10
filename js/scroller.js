(function() {
	var img_nav = document.getElementById('img-nav').getElementsByTagName('li');
	for(var i = 0; i < img_nav.length; ++i) {
		img_nav[i].onclick = function() {
			var nav_class = this.className;
			if(nav_class != 'selected') {
				var selected = document.getElementsByClassName('selected');
				selected[0].className = "";
				this.className = 'selected';
			}
		};
	}
})();
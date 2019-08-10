
	function showMore() {
		var dots = document.getElementById("dots");
    	var moreText = document.getElementById("more");
    	var showMoreBtn = document.getElementById("showMore");
  		var showLessBtn = document.getElementById("showLess");
    	
		  dots.style.display = "none";
		  showMoreBtn.style.display = "none";
		  moreText.style.display = "block";
		showLessBtn.style.display = "block";
	
	}

		function showLess() {
		var dots = document.getElementById("dots");
    	var moreText = document.getElementById("more");
    	var showMoreBtn = document.getElementById("showMore");
  		var showLessBtn = document.getElementById("showLess");
    	
		  dots.style.display = "inline";
		  showMoreBtn.style.display = "block";
		  moreText.style.display = "none";
			showLessBtn.style.display = "none";
	
	}
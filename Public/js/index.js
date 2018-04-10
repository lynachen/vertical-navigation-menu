		var menuPa = $(".menu-list");
		var menuSon = menuPa.children("dd");
		var listMore = $(".listmore");
		listMore.hide();
		if(menuSon.length > 8){
			menuPa.children("dd:gt(5)").hide();
			$(".listmore").show();
		}
		listMore.on("click",function(){
			if(!listMore.hasClass("more")){				
				menuPa.children("dd:gt(5)").slideDown();	
				listMore.addClass("more");
				listMore.html("收起↑");		
			} else{
				menuPa.children("dd:gt(5)").slideUp();
				listMore.removeClass("more");
				listMore.html("查看更多↓");
			}
		});
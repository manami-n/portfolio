$(function(){
	var url = document.URL,
		main = $('main'),
		pages = $('.pages');

	//animation stuffs
	var	scrollSpeed = 1000,
		scrollEasing = 'swing',
		slideSpeed = 500,
		slideEasing = 'linear';

	//add pageNav and ul to footer
	var footer = document.querySelector("footer");
	footer.innerHTML = ("<nav id=\"pageNav\"><ul></ul></nav>"); 
	//add 4 lists without links
	document.querySelector("#pageNav ul").innerHTML = ("<li class=\"Pn1\"><a href=\"javascript:void(0);\">TITLE</a></li><li class=\"Pn2\"><a href=\"javascript:void(0);\">Profile</a></li><li class=\"Pn3\"><a href=\"javascript:void(0);\">Works</a></li><li class=\"Pn4\"><a href=\"javascript:void(0);\">Contact</a></li>");

	//pageNav shows where we are, and add data to body
	var pageNav = $('#pageNav'),
		pageNavUl = pageNav.find('ul'),
		pageNavLi = pageNavUl.find('li'),
		pageNavLen = pageNavLi.length;

	//add activePage to NavLi
	pageNavUl.find('li:first').addClass('activePage');
	$('body').attr('data-page','1');

	//add pageDown triangle
	main.append('<div id="pageDown"><a href="javascript:void(0);"></a></div>');

	//when the page is load
	$(window).on("load",function(){

		//always load it on top
		$("html,body").stop().animate({scrollTop:0},10);

		//pages resize
		$(window).resize(function(){
			var wdHeight = $(window).height();
			pages.css({height:wdHeight});

			var resizeContTop = parseInt(main.css('top'));

			if(resizeContTop === 0){
				main.css({top:'0'});
			} else {
				var activePage = pageNavUl.find('li.activePage');
				activePage.each(function(){
					var posIndex = pageNavLi.index(activePage);
					main.css({top:-(wdHeight*posIndex)});
				});
			}
		}).resize(); 

		// slides
		var	slideBase = $('.slideBase');
		var slide = slideBase.find('.slide'),  //slide
			slideLength = slide.length;
		// add active slide to the first
		slide.eq('0').addClass('activeSlide').end().wrapAll('<div class="slideWrap"></div>');
		
		//add arrows to the slide base
		slideBase.append('<a href="javascript:void(0);" class="slidePrev"></a><a href="javascript:void(0);" class="slideNext"></a>');

		//something for each function, find slidewrap, arrows and nav
		var slideWrap = slideBase.find('.slideWrap'),
			slidePrev = slideBase.find('.slidePrev'),
			slideNext = slideBase.find('.slideNext'),
			slideNav = slideBase.find('.slideNav');
		//add slidePn (slide number) to the nav
		slide.each(function(i){
			slideNav.append('<a href="javascript:void(0);" class="slidePn'+(i+1)+'";"></a>');
		});
		//add slideNav to active class
		slideNav.find('a:first').addClass('slideNavActive');
		//preparation for slideNavActive
		var slideNavLi = slideNav.find('a'),
			slideNavCount = slideNav.find('a').length;


		//nav square clicking action animation
		slideNavLi.click(function(){
			if(!(slideWrap.is(':animated'))){
				var sNavIndex = slideNavLi.index(this),
				slideWidth = slide.width();
			slideWrap.stop().animate({left: -(slideWidth*sNavIndex)},slideSpeed,slideEasing);
			slideNavLi.removeClass('slideNavActive');
			$(this).addClass('slideNavActive');
			navActiveCheck();
			}
		});
		
		//nav arrows clicking action animation
		slidePrev.click(function(){
			slideWrap.not(':animated').each(function(){
				slideNav.find('.slideNavActive').prev().click();
				navActiveCheck();
			});
		});
		slideNext.click(function(){
			slideWrap.not(':animated').each(function(){
				slideNav.find('.slideNavActive').next().click();
				navActiveCheck();
			});
		});

		//activeSlide change
		function navActiveCheck(){
			//find slide nav active
			var navActiveNum = slideNav.find('.slideNavActive');
			navActiveNum.each(function(){
				//actIndex = this one from lengths
				var acvIndex = slideNavLi.index(this);
				// length + 1
				acvCount = acvIndex+1;

				//show or hide arrows
				if(1 == acvCount){
					slidePrev.css({display:'none'});
					slideNext.css({display:'block'});
				} else if(slideNavCount == acvCount){
					slidePrev.css({display:'block'});
					slideNext.css({display:'none'});
				} else {
					slidePrev.css({display:'block'});
					slideNext.css({display:'block'});
				}
			//replace activeSlide
			slide.removeClass('activeSlide').eq(acvIndex).addClass('activeSlide');
			});
		}
		navActiveCheck();

		//slide resize check
		$(window).resize(function(){
			var slideBaseW = document.querySelector("#p2 .pageInner").clientWidth,
				slideBaseH = document.documentElement.clientHeight,
				slideWrapW = parseInt(slideWrap.css('width')),
				h2Height = document.querySelector("#p3 h2").clientHeight,
				InnerHeight = document.documentElement.clientHeight * 0.9 - h2Height;
			slideBase.css({width:slideBaseW,height:slideBaseH});
			slideWrap.css({width:(slideWrapW*slideLength),height:InnerHeight,top:h2Height*2});
			slide.css({width:slideBaseW,height:InnerHeight});
			slidePrev.css({top:h2Height + 38});
			
			if (matchMedia("(max-device-width: 1024px)").matches) {
				slideNext.css({top:h2Height});
				slidePrev.css({top:h2Height});
				slideWrap.css({top:h2Height + 50});
			} else if (matchMedia("(max-device-width: 375px)").matches) {
				slideNext.css({top:h2Height * 2});
				slidePrev.css({top:h2Height * 2});
			}

		}).resize();

		setTimeout(function(){
			slideBase.css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},slideSpeed);
		},slideSpeed);

		// MouseWheelEvent
		var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
		$(document).on(mousewheelevent,function(e){
			if(!(main.is(':animated'))){
				var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
				if (delta < 0){
					motionDown();
				} else {
					motionUp();
				}
			}
		});

		// KeyEvent
		$('html').keydown(function(e){
			if(main.is(':animated') || main.find('*').is(':animated')){
			} else {
				var acvDataP = parseInt($('body').attr('data-page'));
				switch(e.which){
					case 33: // Key[PgUp]
					motionUp();
					break;

					case 34: // Key[PgDn]
					motionDown();
					break;

					case 38: // Key[↑]
					motionUp();
					break;

					case 40: // Key[↓]
					motionDown();
					break;

					case 37: // Key[←]
					var dsChkP = $('#p' + acvDataP + ' .slidePrev').css('display');
					if (!(dsChkP == 'none')){
						$('#p' + acvDataP + ' .slidePrev').click();
					}
					break;

					case 39: // Key[→]
					var dsChkN = $('#p' + acvDataP + ' .slideNext').css('display');
					if (!(dsChkN == 'none')){
						$('#p' + acvDataP + ' .slideNext').click();
					}
					break;
				}
			}
		});

		// FlickEvent
		var isTouch = ('ontouchstart' in window);
		main.on(
			{'touchstart': function(e){
				if(main.is(':animated')){
				e.preventDefault();
				} else {
					this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
					// this.pageY = (isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY); new
					this.topBegin = parseInt($(this).css('top'));
					this.top = parseInt($(this).css('top'));
					this.touched = true;
				}
			},'touchmove': function(e){
				if(!this.touched){return;}
				e.preventDefault();
				this.top = this.top - (this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY));
				//this.top = this.top - (this.pageY - (isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY));
				this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
				//this.pageY = (isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY);
			},'touchend': function(e){
				if (!this.touched) {return;}
				this.touched = false;

				if(((this.topBegin)-30) > this.top){
					motionDown();
				} else if(((this.topBegin)+30) < this.top){
					motionUp();
				}
			}
		});

		// ScrollUpEvent
		function motionUp(){
			var stageHeightU = pages.height(),
			contTopUp = parseInt(main.css('top')),
			moveTopUp = contTopUp + stageHeightU,
			acvDataP = parseInt($('body').attr('data-page'));
			$('input,textarea').blur();
			if(!(contTopUp === 0)){

				main.stop().animate({top:moveTopUp},scrollSpeed,scrollEasing);
				pageNavUl.find('li.activePage').removeClass('activePage').prev().addClass('activePage');
				
				$('body').attr('data-page',acvDataP-1);
				pageDownAcv();
				
			}
			replaceHash();
		}

		// ScrollDownEvent
		function motionDown(){
			var stageHeightD = pages.height(),
				contTopDown = parseInt(main.css('top')),
				moveTopDown = contTopDown - stageHeightD,
				acvDataP = parseInt($('body').attr('data-page'));
			$('input,textarea').blur();

			if(!(acvDataP === 4)){
				main.stop().animate({top:moveTopDown},scrollSpeed,scrollEasing);
				pageNavUl.find('li.activePage').removeClass('activePage').next().addClass('activePage');

				$('body').attr('data-page',acvDataP+1);
				pageDownAcv();
			}
			replaceHash();
		}


		// header Manami click
		$("#title").click(function(){
			if(!(main.is(':animated'))){
				var navIndex = pageNavLi.index(this),
					navLiTitle = pageNavUl.find('.Pn1');
				main.stop().animate({top:0},scrollSpeed,scrollEasing);
				pageNavUl.find('li.activePage').removeClass('activePage');
				navLiTitle.addClass('activePage');
				$('body').attr('data-page',navIndex+1);
				pageDownAcv();
				replaceHash();
			}
		});
		
		// pageNav click
		pageNavLi.click(function(){
			if(!(main.is(':animated'))){
				var pNavIndex = pageNavLi.index(this),
					pageHeight = $(window).height();
				main.stop().animate({top:-(pageHeight*pNavIndex)},scrollSpeed,scrollEasing);
				pageNavUl.find('li.activePage').removeClass('activePage');
				$(this).addClass('activePage');
				$('body').attr('data-page',pNavIndex+1);

				pageDownAcv();
				replaceHash();
			}
		});

		// PageDownBtnClick
		$('#pageDown a').click(function(){
			if(!(main.is(':animated'))){
				var navActive = pageNavUl.find('li.activePage');
				navActive.each(function(){
					var navIndex = pageNavLi.index(this),
						pageNavUl = navIndex+1;
					if(!(pageNavUl == pageNavLen)){
						$(this).next().click();
					}
				});
				replaceHash();
			}
		});
		//page down button show or hide
		function pageDownAcv(){
			var navActive = pageNav.find('li.activePage');
			navActive.each(function(){
				var pnIndexN = pageNavLi.index(this),
				slideNavCountN = pnIndexN+1;
				if(slideNavCountN == pageNavLen){
					$('#pageDown').css({display:'none'});
				} else {
					$('#pageDown').css({display:'block'});
				}
			});
		}
		// HashReplace
		function replaceHash(){
			var currentPage = pageNavUl.find('li.activePage'),
				pageNumber = (pageNavLi.index(currentPage))+1;
			location.hash = "page" + pageNumber;
		}
		replaceHash();

	});

	// HashChangeEvent
	$(window).on('hashchange',function(){
			var hashSplit = ((url.split("page")[1])-1);
			pageNavLi.eq(hashSplit).click();
	});

});
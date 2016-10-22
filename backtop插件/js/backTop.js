;(function(window,document,undefined){
	var backtop = function(ele,speed){
		this.ele = ele;
		this.clientHeight = document.documentElement.clientHeight;
		this.timer = null;
		this.isTop = true;
		this.speed = speed;
	}
	backtop.prototype = {
		init:function(){
			var _this = this;
			//绑定事件
			window.addEventListener('scroll',function(e){
				_this.Iscroll();
			});
			_this.ele.addEventListener('click',function(e){
				_this.click();
			});
			_this.ele.addEventListener('mouseenter',function(e){
				_this.mouseenter();
			});
			_this.ele.addEventListener('mouseleave',function(e){
				_this.mouseleave();
			});			
		},
		Iscroll:function(){
			//获取滚动的距离
			var osTop = document.documentElement.scrollTop||document.body.scrollTop;//IE、chrome
			if(osTop>=this.clientHeight){
				this.ele.style.filter = 'alpha(opacity:'+100+')';
				this.ele.style.opacity = 1;
				setTimeout(function(){
					this.ele.style.display = 'block';
				},500);
			}else{
				this.ele.style.filter = 'alpha(opacity:'+0+')';
				this.ele.style.opacity = 0;
				setTimeout(function(){
					this.ele.style.display = "none";
				},500);		
			}
			if(!this.isTop){
				clearInterval(this.timer);
			}
			this.isTop = false;
		},
		click:function(){
			var _this = this;
			var newele = this.removeC();
			newele[0].style.marginTop = -148+'px';
			this.timer = setInterval(function(){
				//获取滚动的距离
				var osTop = document.documentElement.scrollTop||document.body.scrollTop;//IE、chrome
				var ispeed = Math.floor(- osTop/_this.speed);
				document.documentElement.scrollTop = document.body.scrollTop =osTop + ispeed;
				_this.isTop = true;
				if(osTop == 0){
					newele[0].style.marginTop = 0 +'px';
					clearInterval(_this.timer);
				}
			});
		},
		removeC:function(){
			var nodes = this.ele.childNodes;
			for(var i = 0; i < nodes.length; i++) {   
			//如果是文本节点，并且值为空，则删除该节点  
			 if(nodes[i].nodeType == 3 && /\s/.test(nodes[i].nodeValue)) {             
			 	nodes[i].parentNode.removeChild(nodes[i]);              
			 } 
			}
			return nodes;
		},
		mouseenter:function(){
			var newele = this.removeC();
			newele[0].style.marginTop = -74+'px';
		},
		mouseleave:function(){
			if(!this.isTop){
				var newele = this.removeC();
				newele[0].style.marginTop = 0+'px';
			}			
		},
	}
	// var bb = new backtop(document.getElementById("bb"),35);
	// bb.init();
	var baTop = function(ele,speed){
		return  (new backtop(ele,speed).init());
	};
	window.baTop = baTop;
})(window,document);
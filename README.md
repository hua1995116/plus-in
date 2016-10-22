# backtop
###引入以下html片段
    <div id="bb">
	<div id="li">
		<img src="images/t1.png">
		<img src="images/t2.png">
		<img src="images/t3.png">
	</div>
</div>
###再引入js
    <script src="js/backTop.min.js"></script>
###将模块传入
    var ele = document.getElementById("bb");
    baTop(ele,55);

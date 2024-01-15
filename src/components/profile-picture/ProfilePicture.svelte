<div class="w-[230px] h-[230px] rounded-full bg-primary-300">
	<div class="socks">
	</div>
</div>

<style>
.socks {
	position: relative;
	width: 40px;
	top:10%;
	left: 45%;
	height: 100px;
	background: #ccc;
	border-top: solid 10px rebeccapurple;
	border-bottom: dashed 1px rebeccapurple;
	z-index: 1;
}
.socks:before {
	content: '';
	display: block;
	position: absolute;
	width: 40px;
	height:33px;
	top: 90px;
	z-index:-1;
	border-radius: 0 0 75px 35px;
	background: #CCC;
}
.socks:after {
	content: '';
	display: block;
	position: absolute;
	top: 92px;
	right: 32px;
	width: 40px;
	height: 75px;
	background: #ccc;
	border-radius: 0 0 75px 75px;
	transform: rotate(45deg);
	border-top: dashed 1px rebeccapurple;
}
</style>
<div class="w-[230px] h-[230px] rounded-full bg-primary-300">
	<div class="socks"></div>
</div>

<style>
	.socks {
		position: relative;
		width: 40px;
		top: 10%;
		left: 45%;
		height: 100px;
		border-top: solid 10px rebeccapurple;
		border-bottom: dashed 1px rebeccapurple;
		z-index: 1;
		background: repeating-linear-gradient(45deg, #444cf7, #444cf7 3px, #e5e5f7 3px, #e5e5f7 10px);
	}
	.socks:before {
		content: '';
		display: block;
		position: absolute;
		width: 40px;
		height: 33px;
		top: 90px;
		z-index: -1;
		border-radius: 0 0 75px 35px;
		background: #e5e5f7;
	}
	.socks:after {
		content: '';
		display: block;
		position: absolute;
		top: 92px;
		right: 32px;
		width: 40px;
		height: 75px;
		border-radius: 0 0 75px 75px;
		transform: rotate(45deg);
		border-top: dashed 1px rebeccapurple;
		background: repeating-linear-gradient(45deg, #444cf7, #444cf7 3px, #e5e5f7 3px, #e5e5f7 10px);
	}
</style>

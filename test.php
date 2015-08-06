<html>
	<head>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		
		<link rel="stylesheet" href="compiled/flipclock.css">
		<script src="compiled/flipclock.js"></script>
		
		<script type='text/javascript' id="__bs_script__">//<![CDATA[
		document.write("<script async src='http://HOST:3002/browser-sync/browser-sync-client.2.8.2.js'><\/script>".replace("HOST", location.hostname));
		//]]></script>
	</head>
	<body>
		<div class="clock" style="margin:2em;"></div>
		<div class="message"></div>
		
		<script type="text/javascript">
			var clock;
			
			$(document).ready(function() {
				var clock;
		
				clock = $('.clock').FlipClock({
					clockFace: 'Double'
				});
			});
		</script>
		
	</body>
</html>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/vyantagc/vyantagc/popme-style.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>

<script type="text/javascript">
    var go_current     	= window.location.href;
    var reff     	= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://queersodadults.com/zbzz4wstn?key=7583ecc167b6a5d945fda3c23f39022e",
                            "https://queersodadults.com/vuhfrxi7fg?key=a31f9b7f5fd91ec06ebee6569b1c8f58",
                        ]);

    var ars             = rChoice([
                            "https://garden.designonvine.com",
                            "https://bedroom.designonvine.com",
			                      "https://kitchen.designonvine.com",
			                      "https://livingroom.designonvine.com",
                        ]);


    var dir_type        = "arsae"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }

</script>

<script  src="https://cdn.jsdelivr.net/gh/vyantagc/vyantagc/popme-double-ads4.js" ></script>

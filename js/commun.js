	function showUnderNav(num_saison)	{
		if (document.getElementById("ul_exo_"+num_saison).style.display == "block")	{
			document.getElementById("ul_exo_"+num_saison).style.display= "none";
		}  else  {
			document.getElementById("ul_exo_"+num_saison).style.display= "block";
		}
	}
	
	function loadExo(url)	{
		self.location.href= "../" + url;
	}

	function showCode(div_name, btn_name)	{
		// hide all code's divs
		//document.getElementById("div_jsprompt").style.display= "none";
		document.getElementById("div_jsform").style.display= "none";
		document.getElementById("div_jquery").style.display= "none";
		document.getElementById("div_php").style.display= "none";
		// hide all code's button
		//document.getElementById("btn_jsprompt").style.display= "none";
		document.getElementById("btn_jsform").style.display= "none";
		document.getElementById("btn_jquery").style.display= "none";
		document.getElementById("btn_php").style.display= "none";
		// show the one clicked 
		document.getElementById(div_name).style.display= "block";
		document.getElementById(btn_name).style.display= "block";
		// show the form and the results if div_jsprompt is disabled
		document.getElementById("div_form_resultat").style.display= "block";
	}
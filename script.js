$( "#dropdownLink" ).click(function() {
	var btn = $(".dropbtn");
	if (btn.text() == "MAIN"){
		$( ".employeesMain" ).hide();
		$( ".employeesBLM" ).show();
		btn.text("BLACK LIVES MATTER: Fight for Freedom!");
		$("#dropdownLink").text("MAIN");
	}else{
		$( ".employeesMain" ).show();
		$( ".employeesBLM" ).hide();
		btn.text("MAIN");
		$("#dropdownLink").text("BLACK LIVES MATTER: Fight for Freedom!");
	}
});
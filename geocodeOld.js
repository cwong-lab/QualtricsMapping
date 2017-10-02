Qualtrics.SurveyEngine.addOnload(function() {
	//this.disableNextButton();
	var container = this;
	var done = $j("#NextButton");
	done.click(function(e) {
		var address = $j(".InputText").val();
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({address: address, componentRestrictions: {country: "Chile"}}, function(results, status) {
			if (status == 'OK') {
				Qualtrics.SurveyEngine.setEmbeddedData("lat", results[0].geometry.location.lat());
				Qualtrics.SurveyEngine.setEmbeddedData("lon", results[0].geometry.location.lng());
				container.clickNextButton();
			} else {
				alert("Unable to process your postal code. Please try again.");
			}
		});
	});
	//$j(this.getQuestionContainer()).append(done);
});

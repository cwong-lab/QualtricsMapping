Qualtrics.SurveyEngine.addOnload(function() {
    this.questionclick = function(event, element) {
        var postalcode = this.getTextInput();

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({componentRestrictions: {country: "Chile", postalCode: postalcode}}, function(results, status) {
            if (status == 'OK') {
                Qualtrics.SurveyEngine.setEmbeddedData("lat", results[0].geometry.location.lat());
                Qualtrics.SurveyEngine.setEmbeddedData("lon", results[0].geometry.location.lng());
                Qualtrics.SurveyEngine.clickNextButton();
            } else {
                Qualtrics.SurveyEngine.displayErrorMessage("Unable to process your postal code. Please try again.")
            }
        });
    };
});

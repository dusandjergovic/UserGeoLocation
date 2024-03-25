$(document).ready(function() {

    const x = $('<p>');

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
            $('div').append(x);
        }
    }

    function showPosition(position) {
        function getCityName(latitude, longitude) {
            $.ajax({
                url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
                success: function(response) {
                    console.log(response.address);
                    x.text(`You'r city is:${response.address.city}, and you'r country is ${response.address.country}`)
                    $('div').append(x);
                }
            })
        }
        getCityName(position.coords.latitude, position.coords.longitude);
    }
    
        $('#btn').click(function() {
            $(this).hide()
            getLocation();
        });

})
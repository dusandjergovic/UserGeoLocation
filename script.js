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
                    if (response && response.address && response.address.city) {
                                let city = response.address.city;
                                x.text('City: ' + city);
                                $('div').append(x);
                            } else {
                                x.text('City not found.');
                                $('div').append(x);
                            }
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
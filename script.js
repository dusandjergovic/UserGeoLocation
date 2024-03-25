$(document).ready(function() {
    
    $('#btn').click(function() {
        $.ajax({
            url: 'https://ip-api.com/json',
            success: function(response) {
                console.log(response);
                $('#btn').hide();
                let para = $('<p>');
                para.text(`Vasa zaemlja je ${response.country}, a trenutno se nalazite u gradu: ${response.city}`)
                $('div').append(para);
            }
        })
    })
})
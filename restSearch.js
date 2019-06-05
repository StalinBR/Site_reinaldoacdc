$('#submit').click(function() {
    $.ajax({
        url: 'http://127.0.0.1:5002/sugestions/',
        type: 'POST',
        data: {
            text: $('input[name="why"]').val()
        },
        success: function(msg) {
            alert('OK');
        }               
    });
});

$(document).ready(function() {
    
    var autocomplete = $( "#restSearch" ).autocomplete({
        minLength: 2,
        source: function (request, response) {
            var term = request.term;
            var restUrl = 'https://autocomplete-dito.herokuapp.com/sugestions/'+term;

            $.getJSON(restUrl, function (data) {
                var items = [];
                $.each(data, function (key, val) {                          
                    console.log(val);                    
                    items.push(val);
                });

                response(items);
            });
        },

        appendTo: $('#menu-container')
    })
});
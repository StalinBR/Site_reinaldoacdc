$(document).ready(function() {
    
    var autocomplete = $( "#restSearch" ).autocomplete({
        minLength: 2,
        source: function (request, response) {
            var term = request.term;
            var restUrl = 'https://autocomplete-dito.herokuapp.com/sugestions?text='+term;

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
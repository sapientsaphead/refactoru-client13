$(function(){
        var source   = $("#search-results-template").html();
        var searchTemplate = Handlebars.compile(source);
        var $results = $('#results')

        $('#search').on('keyup', function(e){
                if(e.keyCode === 13){
                        // do something
                        var val = $(this).val()
                        $(this).val("");
                        //route url, data that you're sending to server, 
                        // {search:val} = /search?search=val
                        // callback - the function
                        $.get('/search', {search : val}, function(data){
                                $results.html(searchTemplate(data))
                        });
                }
        });
});
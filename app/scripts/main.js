$(document).ready(function () {

    //reduces size of placeholder text in form on small screens 
    $(window).resize(function () {
        if ($(window).width() < 786) {
            $('input#search-input').attr('placeholder', 'Search for anything...');
        } else {
            $('input#search-input').attr('placeholder', 'Search for anything right here, right now...');
        }
    }).resize();
    
    var sortType = 'TITLE';
    var activeId = 'title';
    var passiveId = 'year';
    var datas = [];

    $('#search-form').submit(function(e) {
        e.preventDefault();

        //retrieves data from form after button click
        var $inputs = $('#search-form :input#search-input');
        var value = '';
        $inputs.each(function() {
            value = $(this).val();
        });

        //call to API using string from the form
        $.ajax('http://www.omdbapi.com/?s='+ value)
            .done(function(_datas) {
                //stores data from search in datas variable
                datas = _datas.Search;
                render();
        });
    });

    //listens for click on sort buttons and creates values for relevant variables accordingly
    $('#title-input, #date-input').on('click', function(e) {
        
        switch (e.currentTarget.value) {
            case 'TITLE':
                sortType = 'TITLE';
                activeId = 'title';
                passiveId = 'date';
                break;
            case 'RELEASE YEAR':
                sortType = 'RELEASE YEAR';
                activeId = 'date';
                passiveId = 'title';
                break;
            default:
                sortType = 'TITLE';
                activeId = 'title';
                passiveId = 'date';
                break;
        }

        toggleColour(e);
        render();
    });

    //changes colour of sort buttons according to which is active using value of activeID/passiveID set when sort buttons are clicked
    function toggleColour(e) {
        $('#' + activeId + '-input').addClass('sort-active').removeClass('sort-button');
        $('#' + passiveId + '-input').removeClass('sort-active').addClass('sort-button');
    }

    //sorts data according to value of sortType
    function sortDatas() {
        var sortProp = '';

        switch (sortType) {
            case 'TITLE':
                sortProp = 'Title';
                break;
            case 'RELEASE YEAR':
                sortProp = 'Year';
                break;
            default:
                sortType = 'Title';
                break;
        }

        datas.sort(function(a, b) {
            if(a[sortProp] > b[sortProp])
                return 1;
            if(a[sortProp] < b[sortProp])
                return -1;
            return 0;
        });
    }

    function render() {
        datas && datas.length && sortDatas();

        $('.film-list').empty();

        var results = null;

        //displays no results message or results depending on result of search
        if (!datas) {
            results = false;
            
            showResults(results);
        
        } else {
            results = true;         
            
            //iterates through results of search and creates HTML and relevant content
            $.each(datas, function(index, data) {
                var typeClass = '';
                var dataType = '';
                //creates correct content and class according to value of data.Type
                switch (data.Type) {
                    case 'movie':
                        dataType = 'film';
                        typeClass = 'type-movie';
                        break;
                    case 'series':
                    typeClass = 'type-series';
                        break;
                    case 'game':
                    typeClass = 'type-game';
                        break;    
                    default:
                        sortType = 'Title';
                        break;
                }

                createHTML(index, data, dataType, typeClass)
            });

            showResults(results);

        }
    }

    function createHTML(index, data, dataType, typeClass) {
        $('.film-list').append('<li class="film-listing col-xs-12 col-sm-6 col-md-4"></li>')
        $('.film-list').find('li').eq(index).append('<div class="film-container"><div class="film-inner row">' + ' <div class="col-xs-3"><img class="film-poster" alt="No image" src="' + data.Poster + '"/></div> <div class="film-info col-xs-9"><div class="film-type ' + typeClass + '">• ' + dataType + '</div><div class="film-title">' + data.Title + '</div><div class="film-year">' + data.Year + '</div><div class="film-imdbID">IMDB ' + data.imdbID + '</div></div></div></div>');
    }

    //shows/hides relevant HTML depending on whether or not any data came back from the search
    function showResults(results) {
        if (results) {
            $('#no-results-container').hide();
            $('#results-container').slideDown("slow"); 
        } else {
            $('#results-container').hide();
            $('#no-results-container').slideDown("slow");
        }   
    }
});

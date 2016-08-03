$(document).ready(function () {
    
    var sortType = 'TITLE';
    var datas = [];

    $('#search-input').on('input', function(e) {
        $.ajax('http://www.omdbapi.com/?s='+ e.currentTarget.value).done(function(_datas) {
            datas = _datas.Search;
            render();
        });
    });

    $('#title-input, #date-input').on('change', function(e) {
        switch (e.currentTarget.value) {
            case 'TITLE':
                sortType = 'TITLE';
                break;
            case 'DATE':
                sortType = 'DATE';
                break;
            default:
                sortType = 'TITLE';
                break;
        }

        render();
    });

    function sortDatas() {
        var sortProp = '';

        switch (sortType) {
            case 'TITLE':
                sortProp = 'Title';
                break;
            case 'DATE':
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

        // $.each(datas, function(index, data) {
        //     $('.film-list').append('<li>'+ data.Title +'</li>')
        //     $('.film-list').find('li').eq(index).append('<div style="display: none;">Year: ' + data.Year + ', imdbID: '+ data.imdbID +'<img src="' + data.Poster + '"/> ' + '</div>');
        // });

        // $('.film-list li').on('click', function() {
        //     $(this).find('div').slideToggle();
        // });

        $.each(datas, function(index, data) {
            console.log(data);
            $('.film-list').append('<li class="film-listing col-md-4"></li>')
            $('.film-list').find('li').eq(index).append('<div class="film-container"><div class="film-inner row">'+ ' <div class="col-md-3"><img class="film-poster" src="' + data.Poster + '"/></div> <div class="film-info col-md-9"><div class="film-type">• ' + data.Type + '</div><div class="film-title">' + data.Title + '</div><div class="film-year">' + data.Year + '</div></div></div></div>');
        });
    }
});

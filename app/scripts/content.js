var Content = function(){

	this.createHTML = function(index, data, dataType, typeClass){
        console.log(dataType, typeClass);
		$('.film-list').append('<li class="film-listing col-xs-12 col-sm-6 col-md-4"></li>')
		$('.film-list').find('li').eq(index).append('<div class="film-container"><div class="film-inner row">' + ' <div class="col-xs-3"><img class="film-poster" alt="No image" src="' + data.Poster + '"/></div> <div class="film-info col-xs-9"><div class="film-type ' + typeClass + '">• ' + dataType + '</div><div class="film-title">' + data.Title + '</div><div class="film-year">' + data.Year + '</div><div class="film-imdbID">IMDB ' + data.imdbID + '</div></div></div></div>');
	}

	this.showResults = function(results) {
		//shows/hides relevant HTML depending on whether or not any data came back from the search
        if (results) {
            $('#no-results-container').hide();
            $('#results-container').slideDown("slow"); 
        } else {
            $('#results-container').hide();
            $('#no-results-container').slideDown("slow");
        }   
    }

}
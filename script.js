// Random Quote Generator
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=92759&lang=en&";
var getQuote = function(data) {
	$(".quote-text").text(data.quoteText);
  
	var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +' @davidabernstein';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text('Author: ' + data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.getJSON(url, getQuote);

});
$("#quote").click(function() {
  $.getJSON(url, getQuote);
});
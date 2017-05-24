function Dino(){

}

Dino.prototype.getDinos = function(paragraphs, words, format, dinoWords) {
  $.get(`http://dinoipsum.herokuapp.com/api/?format=${format}&words=${words}&paragraphs=${paragraphs}`)
  .then(function(response) {
    console.log(response);
    dinoWords(response);
    // displayTitle(response.dinos.each.title);
    // displayStolenLocation(response.dinos.stolen_location);
  })
  .fail(function(error) {
    $('.showDinos').text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;

function Dino(){

}

Dino.prototype.getDinos = function(paragraphs, words, dinoWords) {
  $.get(`http://dinoipsum.herokuapp.com/api/?format=html&words=${words}&paragraphs=${paragraphs}`)
  .then(function(response) {
    alert("hey");
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

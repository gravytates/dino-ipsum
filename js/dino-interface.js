var Dino = require('./../js/dino.js').dinoModule;

var dinoWords = function(dinoipsum) {
  $('.showDinos').append(`${dinoipsum}`);
};

$(document).ready(function() {
  $("#dino-form").submit(function(e) {
    e.preventDefault();
    var dinoQuery = new Dino();
    var paragraphs = $("#paragraphs").val();
    var words = parseInt($("#words").val());
    dinoQuery.getDinos(paragraphs, words, dinoWords);
  });
});

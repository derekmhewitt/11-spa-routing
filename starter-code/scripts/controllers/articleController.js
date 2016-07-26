(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Done  Reveal only the articles section! */
    $('main section').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);

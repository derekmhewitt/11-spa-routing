(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE Derek Reveal only the about section! */
    $('main section').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);

// self executing function to handle site message dismiss functionality
(function() {
  var dismiss = function() {
    var dismiss_elements = document.getElementsByClassName('dismiss');

    var dismissElement = function() {
      document.getElementById(this.getAttribute('data-dismiss').className += ' hide'
    }

    for (var i = 0; i < dismiss_elements.length; i++) {
      var element = dismiss_elements[i];
      element.addEventListener('click', dismissElement);
    }
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    dismiss()
  })
})

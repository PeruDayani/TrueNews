document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('popupButton');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      window.alert("button pressed");
    });
  }, false);
}, false);
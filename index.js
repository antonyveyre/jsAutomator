
var buttons = require('sdk/ui/button/action');
var tmr = require('sdk/timers');
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {

  var myLoop = tmr.setInterval(function () {
    badooClick();

  }, 1000);

  function badooClick() {
    if (document.body.contains(document.getElementsByClassName('online-status online-status--offline') [0])) {
      var x = document.getElementsByClassName('online-status online-status--offline') [0].innerHTML
    }
    else {
      var x = document.getElementsByClassName('online-status online-status--online') [0].innerHTML
    }
    if (/il y a plus d'une semaine/.test(x)) {
      document.getElementsByClassName('b-link js-profile-header-vote') [1].click()
    }
    else {
      document.getElementsByClassName('b-link js-profile-header-toggle-layout') [0].click()
      tmr.clearInterval(myLoop)
    }
  }
}

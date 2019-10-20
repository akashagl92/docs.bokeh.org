  $.get("/en/latest/version.txt", function(data) {
    style = "font-size: 18px;width: 100%;text-align: center;background-color: pink;color: firebrick;padding: 5px;"
    loc = window.location.pathname;
    dev = /^\/en\/dev/
    if (dev.exec(loc)) {
      content = $('<div>THIS IS A DEV VERSION</div>').attr('style', style);
      $('html:first').prepend(content);
    }
    if (DOCUMENTATION_OPTIONS.VERSION != data) {
      content = $('<div>THIS IS AN OLD VERSION</div>').attr('style', style);
      $('html:first').prepend(content);
    }
  })

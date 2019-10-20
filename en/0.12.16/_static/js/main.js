$(document).ready(function() {

  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

  style = "font-family: sans-serif;font-size:15px;width:100%;height:120px;background-color: #D95B43;color: white;padding: 5px;padding-top:10px; padding-bottom:10px;position:fixed;top:0em; right:0em;z-index:1000000000000"
  $("body").css({"padding-top":"120px"})
  content = $('<div><p>This docs on this page refers to a PREVIOUS VERSION. For the latest stable release, go to <a style="color: black" href="https://docs.bokeh.org">https://docs.bokeh.org/</a></p><p>Archived docs for versions <= 1.0.4 have had to be modified from their original published configuration, and may be missing some features (e.g. source listing)</p><p><b>All users are encourage to update to version 1.1 or later, as soon as they are able.</b></p> </div>').attr('style', style);
  $('html:first').prepend(content);

  var loc = window.location.pathname;

  if (loc.split('docs/').length == 1 ) {
    // If index.html hide toc
    $('.toc .toctree-l1').addClass('hide');
    $('.toc').addClass('obfuscate');

  } else if (loc.split('gallery').length > 1) {
    // If gallery, dispense with toc, and manually add current under second nav
    $('.toc .toctree-l1').addClass('hide');
    $('.toc').addClass('obfuscate');
    $('.second-nav .nav-link a[href="#"]').addClass('current');

  } else {
    // Else, selectively hide toc
    var loc_part = loc.split('docs/')[1].split('.html')[0];

    if (loc_part.split('/').length > 1) {
      loc_part = loc_part.split('/')[0]
    }

    var l1_links = $('.toctree-l1');
    l1_links.each(function(i, l1_link) {
      if ( $(this).hasClass('current') ) {
        $(this).addClass('show');
      } else {
        var href = l1_link.childNodes[0].href;
        var href_part = href.split('docs/')[1].split('/')[0];
        if ( href_part.split('.html').length > 1 ) {
          href_part = href_part.split('.html')[0]
        }
        if (href_part == loc_part) {
          $(this).addClass('show');
        } else {
          $(this).addClass('hide');
        }
      }
    });

    // Add current class to the section of docs we're in
    var nav_links = $('.nav-link.doc-head a');
    nav_links.each(function(i, nav_link) {
      var href = nav_link.href;
      // skip links to external sites
      if (href.startsWith("https://bokeh.pydata.org")) {
        var href_part = href.split('docs/')[1].split('.html')[0];
        if (href_part.split('/').length > 1) {
          href_part = href_part.split('/')[0]
        }
        if (loc_part == href_part) {
          $(this).addClass('current');
        }
      }
    });
  }

  // Expander (used for collapsible code blocks)
  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });

});

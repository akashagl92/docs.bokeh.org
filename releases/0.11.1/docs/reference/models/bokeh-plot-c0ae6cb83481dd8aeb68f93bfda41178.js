
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("0aa4b205-565c-449b-aeb5-f2ed2f094263");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0aa4b205-565c-449b-aeb5-f2ed2f094263' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"eced6deb-9fb3-4fe6-a13f-1db7f959a871":{"roots":{"references":[{"attributes":{},"id":"74df72e5-1187-4392-88d7-025ce501b885","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"159ee8db-4f17-4c21-92a5-4db9c92263fa","type":"ColumnDataSource"},{"attributes":{},"id":"e3deea46-7c0f-4fcd-8f5f-cec08aa58a8f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e3deea46-7c0f-4fcd-8f5f-cec08aa58a8f","type":"BasicTickFormatter"},"plot":{"id":"b3cd2972-5ea6-461c-923a-3c15419e540f","type":"Plot"},"ticker":{"id":"74df72e5-1187-4392-88d7-025ce501b885","type":"BasicTicker"}},"id":"e6b3d50e-fbe1-4168-9149-983fbf74d1ab","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e008e17b-323f-42e4-b010-524bccaa9b2d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"078f9213-975b-42f9-9971-9fb9f018572d","type":"BasicTickFormatter"},"plot":{"id":"b3cd2972-5ea6-461c-923a-3c15419e540f","type":"Plot"},"ticker":{"id":"bb8d8611-85bd-4341-a7be-f65288c12930","type":"BasicTicker"}},"id":"532e309a-099a-4475-8e4e-004a0f7136a2","type":"LinearAxis"},{"attributes":{"below":[{"id":"e6b3d50e-fbe1-4168-9149-983fbf74d1ab","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"532e309a-099a-4475-8e4e-004a0f7136a2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"53760f7f-bb4d-4e82-bb0d-818bdbc7c5c1","type":"GlyphRenderer"},{"id":"e6b3d50e-fbe1-4168-9149-983fbf74d1ab","type":"LinearAxis"},{"id":"532e309a-099a-4475-8e4e-004a0f7136a2","type":"LinearAxis"},{"id":"22459b34-6c16-4aa3-aa5e-fca00dc61173","type":"Grid"},{"id":"c226856b-f95c-4575-b562-9df19aedbebe","type":"Grid"}],"title":null,"tool_events":{"id":"ebc7a543-3e41-42c9-b88b-ee71f3bc0dc0","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"0a016754-6b87-4033-962a-f10b81363fa4","type":"DataRange1d"},"y_range":{"id":"e008e17b-323f-42e4-b010-524bccaa9b2d","type":"DataRange1d"}},"id":"b3cd2972-5ea6-461c-923a-3c15419e540f","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"b3cd2972-5ea6-461c-923a-3c15419e540f","type":"Plot"},"ticker":{"id":"bb8d8611-85bd-4341-a7be-f65288c12930","type":"BasicTicker"}},"id":"c226856b-f95c-4575-b562-9df19aedbebe","type":"Grid"},{"attributes":{},"id":"078f9213-975b-42f9-9971-9fb9f018572d","type":"BasicTickFormatter"},{"attributes":{},"id":"bb8d8611-85bd-4341-a7be-f65288c12930","type":"BasicTicker"},{"attributes":{},"id":"ebc7a543-3e41-42c9-b88b-ee71f3bc0dc0","type":"ToolEvents"},{"attributes":{"plot":{"id":"b3cd2972-5ea6-461c-923a-3c15419e540f","type":"Plot"},"ticker":{"id":"74df72e5-1187-4392-88d7-025ce501b885","type":"BasicTicker"}},"id":"22459b34-6c16-4aa3-aa5e-fca00dc61173","type":"Grid"},{"attributes":{"data_source":{"id":"159ee8db-4f17-4c21-92a5-4db9c92263fa","type":"ColumnDataSource"},"glyph":{"id":"b210d76f-6abf-4c06-a167-6dec3f33c720","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"53760f7f-bb4d-4e82-bb0d-818bdbc7c5c1","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b210d76f-6abf-4c06-a167-6dec3f33c720","type":"DiamondCross"},{"attributes":{"callback":null},"id":"0a016754-6b87-4033-962a-f10b81363fa4","type":"DataRange1d"}],"root_ids":["b3cd2972-5ea6-461c-923a-3c15419e540f"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"eced6deb-9fb3-4fe6-a13f-1db7f959a871","elementid":"0aa4b205-565c-449b-aeb5-f2ed2f094263","modelid":"b3cd2972-5ea6-461c-923a-3c15419e540f"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));
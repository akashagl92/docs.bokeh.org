
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
  };var element = document.getElementById("96089936-6cf3-4027-97ea-e155361c8571");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '96089936-6cf3-4027-97ea-e155361c8571' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"1d85dd7e-a12f-4336-b15c-991999075289":{"roots":{"references":[{"attributes":{"callback":null},"id":"7e57d32b-9b90-49e1-91b8-c2f5e61a6c05","type":"DataRange1d"},{"attributes":{},"id":"0cdac066-5cc1-4b61-9e45-ddbee47d1c1c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9ac272dd-b0fb-4c59-a20e-f264aa3d141d","type":"BasicTickFormatter"},"plot":{"id":"53036467-cd21-4172-8007-7ad2a4271a17","type":"Plot"},"ticker":{"id":"0cdac066-5cc1-4b61-9e45-ddbee47d1c1c","type":"BasicTicker"}},"id":"2a356136-1477-4df9-8f06-6b4808dec8e6","type":"LinearAxis"},{"attributes":{},"id":"9ac272dd-b0fb-4c59-a20e-f264aa3d141d","type":"BasicTickFormatter"},{"attributes":{},"id":"a08b2581-9544-4e09-a004-c5644c2f04ed","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3171283-ae92-427c-a483-643c15813f2d","type":"Triangle"},{"attributes":{"below":[{"id":"3f02126a-f14c-4a18-9d18-3ffdc0b19981","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2a356136-1477-4df9-8f06-6b4808dec8e6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4a800ed2-84af-42c4-a4a5-f9eea051c846","type":"GlyphRenderer"},{"id":"3f02126a-f14c-4a18-9d18-3ffdc0b19981","type":"LinearAxis"},{"id":"2a356136-1477-4df9-8f06-6b4808dec8e6","type":"LinearAxis"},{"id":"00323cdc-7d63-43e1-835f-6e435dfbc02d","type":"Grid"},{"id":"7eed4c4c-d762-4e3a-a9dd-5ce37f4da67d","type":"Grid"}],"title":null,"tool_events":{"id":"8393cf7d-ad6e-4426-83a0-5dbd792c9aa8","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"7e57d32b-9b90-49e1-91b8-c2f5e61a6c05","type":"DataRange1d"},"y_range":{"id":"fb57b1df-f922-4eca-806e-d8f38d36defe","type":"DataRange1d"}},"id":"53036467-cd21-4172-8007-7ad2a4271a17","type":"Plot"},{"attributes":{},"id":"c44109cd-c7d0-4072-8498-da89e985a786","type":"BasicTicker"},{"attributes":{"data_source":{"id":"6e5aedfa-e4d5-42b5-a237-6d474608ce57","type":"ColumnDataSource"},"glyph":{"id":"f3171283-ae92-427c-a483-643c15813f2d","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4a800ed2-84af-42c4-a4a5-f9eea051c846","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"53036467-cd21-4172-8007-7ad2a4271a17","type":"Plot"},"ticker":{"id":"c44109cd-c7d0-4072-8498-da89e985a786","type":"BasicTicker"}},"id":"00323cdc-7d63-43e1-835f-6e435dfbc02d","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"53036467-cd21-4172-8007-7ad2a4271a17","type":"Plot"},"ticker":{"id":"0cdac066-5cc1-4b61-9e45-ddbee47d1c1c","type":"BasicTicker"}},"id":"7eed4c4c-d762-4e3a-a9dd-5ce37f4da67d","type":"Grid"},{"attributes":{"callback":null},"id":"fb57b1df-f922-4eca-806e-d8f38d36defe","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a08b2581-9544-4e09-a004-c5644c2f04ed","type":"BasicTickFormatter"},"plot":{"id":"53036467-cd21-4172-8007-7ad2a4271a17","type":"Plot"},"ticker":{"id":"c44109cd-c7d0-4072-8498-da89e985a786","type":"BasicTicker"}},"id":"3f02126a-f14c-4a18-9d18-3ffdc0b19981","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"6e5aedfa-e4d5-42b5-a237-6d474608ce57","type":"ColumnDataSource"},{"attributes":{},"id":"8393cf7d-ad6e-4426-83a0-5dbd792c9aa8","type":"ToolEvents"}],"root_ids":["53036467-cd21-4172-8007-7ad2a4271a17"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"1d85dd7e-a12f-4336-b15c-991999075289","elementid":"96089936-6cf3-4027-97ea-e155361c8571","modelid":"53036467-cd21-4172-8007-7ad2a4271a17"}];
          
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
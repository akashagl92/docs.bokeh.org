
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
  };var element = document.getElementById("6a7caf82-b788-4e0a-8622-26a4610124ae");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6a7caf82-b788-4e0a-8622-26a4610124ae' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d10efd39-f2c7-4dab-bb13-09278f772f3a":{"roots":{"references":[{"attributes":{"callback":null},"id":"3f9d6d4b-ab48-437f-af4e-5a5601b506da","type":"DataRange1d"},{"attributes":{},"id":"da3b7741-a297-4096-880c-492905ff305d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4557afb9-4883-478b-ab29-f22d58b070d8","type":"Plot"},"ticker":{"id":"018fcd60-1e1a-4edd-928a-f09723599aba","type":"BasicTicker"}},"id":"f64aef37-371d-42c4-b090-409fad5ef2d2","type":"Grid"},{"attributes":{"plot":{"id":"4557afb9-4883-478b-ab29-f22d58b070d8","type":"Plot"},"ticker":{"id":"da3b7741-a297-4096-880c-492905ff305d","type":"BasicTicker"}},"id":"8f1acbf8-7cbe-4155-9250-ffda692a7212","type":"Grid"},{"attributes":{},"id":"018fcd60-1e1a-4edd-928a-f09723599aba","type":"BasicTicker"},{"attributes":{"formatter":{"id":"96de29de-a5c3-4040-8969-7187683ab22f","type":"BasicTickFormatter"},"plot":{"id":"4557afb9-4883-478b-ab29-f22d58b070d8","type":"Plot"},"ticker":{"id":"da3b7741-a297-4096-880c-492905ff305d","type":"BasicTicker"}},"id":"7b5bbaf5-fc2b-458c-b087-cde9d7231fe5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1707372d-b929-4a99-a99b-3c8346e3cd5c","type":"ColumnDataSource"},"glyph":{"id":"5db3d7fa-6df5-4b18-a4b3-3f2107084155","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"567597d1-15dd-407f-ab2c-132f5c3a380a","type":"GlyphRenderer"},{"attributes":{},"id":"96de29de-a5c3-4040-8969-7187683ab22f","type":"BasicTickFormatter"},{"attributes":{},"id":"c57c8231-70c5-4f8f-af17-713bbb5b43e7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c57c8231-70c5-4f8f-af17-713bbb5b43e7","type":"BasicTickFormatter"},"plot":{"id":"4557afb9-4883-478b-ab29-f22d58b070d8","type":"Plot"},"ticker":{"id":"018fcd60-1e1a-4edd-928a-f09723599aba","type":"BasicTicker"}},"id":"21fa523c-61a3-4c91-9015-d9f08a84ff2d","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5db3d7fa-6df5-4b18-a4b3-3f2107084155","type":"Square"},{"attributes":{},"id":"96d85563-4eaa-40d3-91c8-cc250f0b425d","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"1707372d-b929-4a99-a99b-3c8346e3cd5c","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"ec36dcd7-0031-4a18-9f59-11e1d7459507","type":"DataRange1d"},{"attributes":{"below":[{"id":"7b5bbaf5-fc2b-458c-b087-cde9d7231fe5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"21fa523c-61a3-4c91-9015-d9f08a84ff2d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"567597d1-15dd-407f-ab2c-132f5c3a380a","type":"GlyphRenderer"},{"id":"7b5bbaf5-fc2b-458c-b087-cde9d7231fe5","type":"LinearAxis"},{"id":"21fa523c-61a3-4c91-9015-d9f08a84ff2d","type":"LinearAxis"},{"id":"8f1acbf8-7cbe-4155-9250-ffda692a7212","type":"Grid"},{"id":"f64aef37-371d-42c4-b090-409fad5ef2d2","type":"Grid"}],"title":null,"tool_events":{"id":"96d85563-4eaa-40d3-91c8-cc250f0b425d","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"ec36dcd7-0031-4a18-9f59-11e1d7459507","type":"DataRange1d"},"y_range":{"id":"3f9d6d4b-ab48-437f-af4e-5a5601b506da","type":"DataRange1d"}},"id":"4557afb9-4883-478b-ab29-f22d58b070d8","type":"Plot"}],"root_ids":["4557afb9-4883-478b-ab29-f22d58b070d8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"d10efd39-f2c7-4dab-bb13-09278f772f3a","elementid":"6a7caf82-b788-4e0a-8622-26a4610124ae","modelid":"4557afb9-4883-478b-ab29-f22d58b070d8"}];
          
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
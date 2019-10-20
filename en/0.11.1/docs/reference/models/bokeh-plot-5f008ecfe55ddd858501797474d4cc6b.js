
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
  };var element = document.getElementById("05768f11-155b-4e33-b46f-feb4b903537e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '05768f11-155b-4e33-b46f-feb4b903537e' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"4c340233-5ad7-49c7-90ee-b9fe5d4507c8":{"roots":{"references":[{"attributes":{},"id":"a7c7fbe7-3c83-4e23-9a7d-2bbd2d6e2171","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6bc83024-cf85-4002-b4e4-90dbeb2b7698","type":"Plot"},"ticker":{"id":"78aaccbf-7add-4118-94e9-63087ee58957","type":"BasicTicker"}},"id":"93dfc967-9f6b-41bf-aead-3f7c51807a4e","type":"Grid"},{"attributes":{"callback":null},"id":"fbda71c0-d805-40a2-87d8-34c7b5c9758f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"6bc83024-cf85-4002-b4e4-90dbeb2b7698","type":"Plot"},"ticker":{"id":"ddfd1e1e-6491-4902-b685-6bd3026c315d","type":"BasicTicker"}},"id":"60389e46-8431-473b-8b3e-4c7482ff3fbc","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4db95fb1-c50e-4aaa-8ee8-84ab73b77ff1","type":"SquareX"},{"attributes":{},"id":"07cc67d8-e325-43d3-b5db-836b9cefdd89","type":"ToolEvents"},{"attributes":{},"id":"3ab7f289-a4da-4d01-92ee-3182b424f387","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3ab7f289-a4da-4d01-92ee-3182b424f387","type":"BasicTickFormatter"},"plot":{"id":"6bc83024-cf85-4002-b4e4-90dbeb2b7698","type":"Plot"},"ticker":{"id":"78aaccbf-7add-4118-94e9-63087ee58957","type":"BasicTicker"}},"id":"931c3527-b727-4fd8-bae8-62c79e99ce4b","type":"LinearAxis"},{"attributes":{"below":[{"id":"931c3527-b727-4fd8-bae8-62c79e99ce4b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ea8da4b8-174e-44ee-86b6-ce7ffea1c914","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"40fe626f-2eda-4554-8f13-3a7679e7673f","type":"GlyphRenderer"},{"id":"931c3527-b727-4fd8-bae8-62c79e99ce4b","type":"LinearAxis"},{"id":"ea8da4b8-174e-44ee-86b6-ce7ffea1c914","type":"LinearAxis"},{"id":"93dfc967-9f6b-41bf-aead-3f7c51807a4e","type":"Grid"},{"id":"60389e46-8431-473b-8b3e-4c7482ff3fbc","type":"Grid"}],"title":null,"tool_events":{"id":"07cc67d8-e325-43d3-b5db-836b9cefdd89","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"fbda71c0-d805-40a2-87d8-34c7b5c9758f","type":"DataRange1d"},"y_range":{"id":"905dd4a9-9d14-474c-8606-22d5bc834497","type":"DataRange1d"}},"id":"6bc83024-cf85-4002-b4e4-90dbeb2b7698","type":"Plot"},{"attributes":{"data_source":{"id":"0c7705ba-c5b1-446e-9e9b-edd065c19543","type":"ColumnDataSource"},"glyph":{"id":"4db95fb1-c50e-4aaa-8ee8-84ab73b77ff1","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40fe626f-2eda-4554-8f13-3a7679e7673f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"0c7705ba-c5b1-446e-9e9b-edd065c19543","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"905dd4a9-9d14-474c-8606-22d5bc834497","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a7c7fbe7-3c83-4e23-9a7d-2bbd2d6e2171","type":"BasicTickFormatter"},"plot":{"id":"6bc83024-cf85-4002-b4e4-90dbeb2b7698","type":"Plot"},"ticker":{"id":"ddfd1e1e-6491-4902-b685-6bd3026c315d","type":"BasicTicker"}},"id":"ea8da4b8-174e-44ee-86b6-ce7ffea1c914","type":"LinearAxis"},{"attributes":{},"id":"78aaccbf-7add-4118-94e9-63087ee58957","type":"BasicTicker"},{"attributes":{},"id":"ddfd1e1e-6491-4902-b685-6bd3026c315d","type":"BasicTicker"}],"root_ids":["6bc83024-cf85-4002-b4e4-90dbeb2b7698"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"4c340233-5ad7-49c7-90ee-b9fe5d4507c8","elementid":"05768f11-155b-4e33-b46f-feb4b903537e","modelid":"6bc83024-cf85-4002-b4e4-90dbeb2b7698"}];
          
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
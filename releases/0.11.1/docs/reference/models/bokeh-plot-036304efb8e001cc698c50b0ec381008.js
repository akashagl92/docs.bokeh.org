
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
  };var element = document.getElementById("5adbaac8-e76f-4596-9340-bc1f2e4368b0");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5adbaac8-e76f-4596-9340-bc1f2e4368b0' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"18422dbd-9409-49d4-a0ef-3924e9517140":{"roots":{"references":[{"attributes":{},"id":"287e5ec0-a2f5-481a-b5e4-a3ebe0f44698","type":"BasicTickFormatter"},{"attributes":{},"id":"9dc25e61-011d-4588-8fe0-9049db17a757","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34fac023-b97f-437f-ba48-bb76cb595c3e","type":"Plot"},"ticker":{"id":"97bf89f5-04cb-434a-b018-13696c7ab712","type":"BasicTicker"}},"id":"88439dac-dfd2-4f0a-a29a-313ff5a579d1","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7b4f080-c2f0-4b3d-aa19-b536e61277f5","type":"Circle"},{"attributes":{},"id":"97bf89f5-04cb-434a-b018-13696c7ab712","type":"BasicTicker"},{"attributes":{},"id":"1d327317-2af8-46ff-8550-7cf9c7987fe9","type":"BasicTicker"},{"attributes":{},"id":"61ddd45a-e9b3-4146-bc12-93a97f7c53ff","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"fb6b4df9-b51a-4320-a8f1-f0431eec9254","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"14cf50c8-8d5f-4482-a1a1-6e1850c9f28e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9dc25e61-011d-4588-8fe0-9049db17a757","type":"BasicTickFormatter"},"plot":{"id":"34fac023-b97f-437f-ba48-bb76cb595c3e","type":"Plot"},"ticker":{"id":"97bf89f5-04cb-434a-b018-13696c7ab712","type":"BasicTicker"}},"id":"660119c4-e0d3-46c7-92e1-804eef6d4ffa","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fb6b4df9-b51a-4320-a8f1-f0431eec9254","type":"ColumnDataSource"},"glyph":{"id":"c7b4f080-c2f0-4b3d-aa19-b536e61277f5","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4c79d554-229c-45a5-89eb-2f544281bbae","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"660119c4-e0d3-46c7-92e1-804eef6d4ffa","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"43acc05c-1ec1-4140-963f-0f2df4ae255b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4c79d554-229c-45a5-89eb-2f544281bbae","type":"GlyphRenderer"},{"id":"660119c4-e0d3-46c7-92e1-804eef6d4ffa","type":"LinearAxis"},{"id":"43acc05c-1ec1-4140-963f-0f2df4ae255b","type":"LinearAxis"},{"id":"88439dac-dfd2-4f0a-a29a-313ff5a579d1","type":"Grid"},{"id":"ad4be139-f7a6-498f-9e31-5b9691e1e682","type":"Grid"}],"title":null,"tool_events":{"id":"61ddd45a-e9b3-4146-bc12-93a97f7c53ff","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"14cf50c8-8d5f-4482-a1a1-6e1850c9f28e","type":"DataRange1d"},"y_range":{"id":"ff4c6e43-2207-4d37-b824-a5c2959414a6","type":"DataRange1d"}},"id":"34fac023-b97f-437f-ba48-bb76cb595c3e","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"34fac023-b97f-437f-ba48-bb76cb595c3e","type":"Plot"},"ticker":{"id":"1d327317-2af8-46ff-8550-7cf9c7987fe9","type":"BasicTicker"}},"id":"ad4be139-f7a6-498f-9e31-5b9691e1e682","type":"Grid"},{"attributes":{"callback":null},"id":"ff4c6e43-2207-4d37-b824-a5c2959414a6","type":"DataRange1d"},{"attributes":{"formatter":{"id":"287e5ec0-a2f5-481a-b5e4-a3ebe0f44698","type":"BasicTickFormatter"},"plot":{"id":"34fac023-b97f-437f-ba48-bb76cb595c3e","type":"Plot"},"ticker":{"id":"1d327317-2af8-46ff-8550-7cf9c7987fe9","type":"BasicTicker"}},"id":"43acc05c-1ec1-4140-963f-0f2df4ae255b","type":"LinearAxis"}],"root_ids":["34fac023-b97f-437f-ba48-bb76cb595c3e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"18422dbd-9409-49d4-a0ef-3924e9517140","elementid":"5adbaac8-e76f-4596-9340-bc1f2e4368b0","modelid":"34fac023-b97f-437f-ba48-bb76cb595c3e"}];
          
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
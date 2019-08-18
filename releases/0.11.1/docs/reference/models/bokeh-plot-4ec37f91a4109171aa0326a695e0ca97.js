
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
  };var element = document.getElementById("6094b324-1c1f-4ef0-9e95-1a2a60b1634a");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6094b324-1c1f-4ef0-9e95-1a2a60b1634a' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6efe2692-b09c-4671-a3d8-675cae94a91e":{"roots":{"references":[{"attributes":{"plot":{"id":"bd6e2521-7063-4c70-b4d2-60b558469d10","type":"Plot"},"ticker":{"id":"ef38a61e-fa5c-4f1a-8925-be2b042bbd28","type":"BasicTicker"}},"id":"4e81888f-266c-43c8-9922-7678b9cb02e0","type":"Grid"},{"attributes":{},"id":"dc3ef1b9-cff1-4a81-819c-98273c04dcf6","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f82a4dbd-dbb2-4b04-940b-f10446226d99","type":"Diamond"},{"attributes":{},"id":"3aed917e-94b0-44d2-bded-1cc7fa5d130b","type":"ToolEvents"},{"attributes":{"callback":null},"id":"6b919015-51ac-49ce-b4ea-a5d935673f99","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1b8da4ff-03bf-4553-9b06-7aa77f055ca8","type":"ColumnDataSource"},"glyph":{"id":"f82a4dbd-dbb2-4b04-940b-f10446226d99","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"72df4499-d055-464b-ac6d-993bf15371c3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2f0c30fd-258c-45d1-9552-8e831fbc689c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0ee35c40-cbc3-41a8-9704-5ac426f7d136","type":"BasicTickFormatter"},"plot":{"id":"bd6e2521-7063-4c70-b4d2-60b558469d10","type":"Plot"},"ticker":{"id":"ef38a61e-fa5c-4f1a-8925-be2b042bbd28","type":"BasicTicker"}},"id":"8a3b5c36-e2b1-4b82-b90e-f06972c3cb50","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"bd6e2521-7063-4c70-b4d2-60b558469d10","type":"Plot"},"ticker":{"id":"dc3ef1b9-cff1-4a81-819c-98273c04dcf6","type":"BasicTicker"}},"id":"66184696-9935-4c38-a399-78d57df3744c","type":"Grid"},{"attributes":{},"id":"4d12123a-0e5b-4e36-b021-ed80388f3b70","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"1b8da4ff-03bf-4553-9b06-7aa77f055ca8","type":"ColumnDataSource"},{"attributes":{},"id":"0ee35c40-cbc3-41a8-9704-5ac426f7d136","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4d12123a-0e5b-4e36-b021-ed80388f3b70","type":"BasicTickFormatter"},"plot":{"id":"bd6e2521-7063-4c70-b4d2-60b558469d10","type":"Plot"},"ticker":{"id":"dc3ef1b9-cff1-4a81-819c-98273c04dcf6","type":"BasicTicker"}},"id":"da79ec78-0128-4cfd-8afa-84a2771a764c","type":"LinearAxis"},{"attributes":{"below":[{"id":"8a3b5c36-e2b1-4b82-b90e-f06972c3cb50","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"da79ec78-0128-4cfd-8afa-84a2771a764c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"72df4499-d055-464b-ac6d-993bf15371c3","type":"GlyphRenderer"},{"id":"8a3b5c36-e2b1-4b82-b90e-f06972c3cb50","type":"LinearAxis"},{"id":"da79ec78-0128-4cfd-8afa-84a2771a764c","type":"LinearAxis"},{"id":"4e81888f-266c-43c8-9922-7678b9cb02e0","type":"Grid"},{"id":"66184696-9935-4c38-a399-78d57df3744c","type":"Grid"}],"title":null,"tool_events":{"id":"3aed917e-94b0-44d2-bded-1cc7fa5d130b","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"2f0c30fd-258c-45d1-9552-8e831fbc689c","type":"DataRange1d"},"y_range":{"id":"6b919015-51ac-49ce-b4ea-a5d935673f99","type":"DataRange1d"}},"id":"bd6e2521-7063-4c70-b4d2-60b558469d10","type":"Plot"},{"attributes":{},"id":"ef38a61e-fa5c-4f1a-8925-be2b042bbd28","type":"BasicTicker"}],"root_ids":["bd6e2521-7063-4c70-b4d2-60b558469d10"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"6efe2692-b09c-4671-a3d8-675cae94a91e","elementid":"6094b324-1c1f-4ef0-9e95-1a2a60b1634a","modelid":"bd6e2521-7063-4c70-b4d2-60b558469d10"}];
          
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
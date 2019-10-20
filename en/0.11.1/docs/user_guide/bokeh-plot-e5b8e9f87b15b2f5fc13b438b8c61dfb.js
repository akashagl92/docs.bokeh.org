
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
  };var element = document.getElementById("1584d8cb-8854-41fd-aeda-8fdcd710ed67");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1584d8cb-8854-41fd-aeda-8fdcd710ed67' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f04f5f0f-8584-4f00-889b-94fc67e8fb40":{"roots":{"references":[{"attributes":{"callback":null,"plot":{"id":"56080058-5666-4510-8c0b-f86197ce3ef8","subtype":"Figure","type":"Plot"}},"id":"27d91d6a-81d5-4eb2-a313-f6c82ed67a24","type":"HoverTool"},{"attributes":{"below":[{"id":"0ce400a0-f102-48d9-9562-bd20a5418ba6","type":"LinearAxis"}],"left":[{"id":"0d90dd00-b83b-44d1-ba68-a979bfba3e1d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0ce400a0-f102-48d9-9562-bd20a5418ba6","type":"LinearAxis"},{"id":"1b074feb-bcd3-490a-abcc-cb9317c7d559","type":"Grid"},{"id":"0d90dd00-b83b-44d1-ba68-a979bfba3e1d","type":"LinearAxis"},{"id":"71043429-3a69-4098-a214-72c3a0957528","type":"Grid"},{"id":"6ceaba32-345b-4140-a401-f24de9bb1a69","type":"BoxAnnotation"},{"id":"5301c2eb-0d62-4ea9-aa8a-06e9a2130b89","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"a808266b-de96-4f2e-a780-943b0fa87750","type":"ToolEvents"},"tools":[{"id":"54be3cfd-7f7d-4fdd-9e4f-17f09a598636","type":"BoxSelectTool"},{"id":"27d91d6a-81d5-4eb2-a313-f6c82ed67a24","type":"HoverTool"}],"x_range":{"id":"ae2f2e1f-888e-41a4-91a9-e80db9db688b","type":"DataRange1d"},"y_range":{"id":"4e59602b-9d1c-44f6-be8d-b2befb574d59","type":"DataRange1d"}},"id":"56080058-5666-4510-8c0b-f86197ce3ef8","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6ceaba32-345b-4140-a401-f24de9bb1a69","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba8494be-0417-4854-bf07-fd7662e27381","type":"Circle"},{"attributes":{"data_source":{"id":"9bba00b0-c6fd-4db0-9d15-73451d5781a9","type":"ColumnDataSource"},"glyph":{"id":"ba8494be-0417-4854-bf07-fd7662e27381","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"de23e04b-0ccd-4971-927f-a727825e8664","type":"Circle"},"selection_glyph":null},"id":"5301c2eb-0d62-4ea9-aa8a-06e9a2130b89","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"ae2f2e1f-888e-41a4-91a9-e80db9db688b","type":"DataRange1d"},{"attributes":{},"id":"a808266b-de96-4f2e-a780-943b0fa87750","type":"ToolEvents"},{"attributes":{"formatter":{"id":"cb45daad-20f7-47f2-81e2-08f3bf0fbb52","type":"BasicTickFormatter"},"plot":{"id":"56080058-5666-4510-8c0b-f86197ce3ef8","subtype":"Figure","type":"Plot"},"ticker":{"id":"688bd062-5e97-4982-abe3-96c5997f9526","type":"BasicTicker"}},"id":"0ce400a0-f102-48d9-9562-bd20a5418ba6","type":"LinearAxis"},{"attributes":{},"id":"01369d64-5bc1-4600-9266-0b2464d71750","type":"BasicTicker"},{"attributes":{"plot":{"id":"56080058-5666-4510-8c0b-f86197ce3ef8","subtype":"Figure","type":"Plot"},"ticker":{"id":"688bd062-5e97-4982-abe3-96c5997f9526","type":"BasicTicker"}},"id":"1b074feb-bcd3-490a-abcc-cb9317c7d559","type":"Grid"},{"attributes":{},"id":"cb45daad-20f7-47f2-81e2-08f3bf0fbb52","type":"BasicTickFormatter"},{"attributes":{},"id":"688bd062-5e97-4982-abe3-96c5997f9526","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"de23e04b-0ccd-4971-927f-a727825e8664","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"6ceaba32-345b-4140-a401-f24de9bb1a69","type":"BoxAnnotation"},"plot":{"id":"56080058-5666-4510-8c0b-f86197ce3ef8","subtype":"Figure","type":"Plot"},"renderers":[{"id":"5301c2eb-0d62-4ea9-aa8a-06e9a2130b89","type":"GlyphRenderer"}]},"id":"54be3cfd-7f7d-4fdd-9e4f-17f09a598636","type":"BoxSelectTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"9bba00b0-c6fd-4db0-9d15-73451d5781a9","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"56080058-5666-4510-8c0b-f86197ce3ef8","subtype":"Figure","type":"Plot"},"ticker":{"id":"01369d64-5bc1-4600-9266-0b2464d71750","type":"BasicTicker"}},"id":"71043429-3a69-4098-a214-72c3a0957528","type":"Grid"},{"attributes":{"callback":null},"id":"4e59602b-9d1c-44f6-be8d-b2befb574d59","type":"DataRange1d"},{"attributes":{},"id":"563458e0-91a6-4460-9acb-a0f248680f52","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"563458e0-91a6-4460-9acb-a0f248680f52","type":"BasicTickFormatter"},"plot":{"id":"56080058-5666-4510-8c0b-f86197ce3ef8","subtype":"Figure","type":"Plot"},"ticker":{"id":"01369d64-5bc1-4600-9266-0b2464d71750","type":"BasicTicker"}},"id":"0d90dd00-b83b-44d1-ba68-a979bfba3e1d","type":"LinearAxis"}],"root_ids":["56080058-5666-4510-8c0b-f86197ce3ef8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"f04f5f0f-8584-4f00-889b-94fc67e8fb40","elementid":"1584d8cb-8854-41fd-aeda-8fdcd710ed67","modelid":"56080058-5666-4510-8c0b-f86197ce3ef8"}];
          
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
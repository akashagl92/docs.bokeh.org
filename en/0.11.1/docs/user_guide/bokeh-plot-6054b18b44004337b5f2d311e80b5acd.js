
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
  };var element = document.getElementById("e3cced3e-7f9a-4436-b18f-eafd299656b7");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e3cced3e-7f9a-4436-b18f-eafd299656b7' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"ab290b9c-aa3b-43f6-8d54-4bada4ec9c95":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2236fde-035b-4962-a608-e033be177551","type":"BasicTicker"}},"id":"fe3ea9f1-1aa4-4b36-ac16-dafd6b04ba8e","type":"Grid"},{"attributes":{"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"}},"id":"d5b07015-41eb-48d7-b4d9-b6d3ea0410ab","type":"ResetTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"},"ticker":{"id":"a52407f5-81bd-4c12-8e97-aad54cb8d64f","type":"BasicTicker"}},"id":"a8af3be7-25ad-4687-ba92-715f887e9502","type":"Grid"},{"attributes":{"formatter":{"id":"e43f5d96-c502-458e-8ad0-b7abfcb71876","type":"BasicTickFormatter"},"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"},"ticker":{"id":"a52407f5-81bd-4c12-8e97-aad54cb8d64f","type":"BasicTicker"}},"id":"36fed3a3-6e91-4bd8-b7ac-bcf24016aec5","type":"LinearAxis"},{"attributes":{"formatter":{"id":"30f6dbd1-6602-4cd9-ab91-a87c2051f4b0","type":"BasicTickFormatter"},"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2236fde-035b-4962-a608-e033be177551","type":"BasicTicker"}},"id":"49e5db26-a843-44ef-a153-c80e8aba0862","type":"LinearAxis"},{"attributes":{},"id":"a52407f5-81bd-4c12-8e97-aad54cb8d64f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9b20b510-5684-46be-af81-8c50677ed9a3","type":"BoxAnnotation"},"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"}},"id":"a98c29fa-e378-44a9-9cf6-9734f4574ed6","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c3e5a3a-5d78-4610-9468-9f2176201455","type":"Circle"},{"attributes":{"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"}},"id":"636a5d9c-a188-4ac4-a1bc-10e93e72caa0","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"}},"id":"73a6a22d-c5e3-4a6a-821b-1cc654a5df14","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"ab4d113b-4395-473f-b24f-e9aaa977b912","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"856fa890-d94e-476f-a431-d5670331d03e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8011f74d-ec94-42cd-a1b3-2315f21aeb5a","type":"Circle"},{"attributes":{"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"}},"id":"58bbd799-1449-4830-9301-e4ddba66b450","type":"PanTool"},{"attributes":{"data_source":{"id":"856fa890-d94e-476f-a431-d5670331d03e","type":"ColumnDataSource"},"glyph":{"id":"8c3e5a3a-5d78-4610-9468-9f2176201455","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8011f74d-ec94-42cd-a1b3-2315f21aeb5a","type":"Circle"},"selection_glyph":null},"id":"0bd4dfbe-3a47-4374-b260-2f4335b8bc1d","type":"GlyphRenderer"},{"attributes":{},"id":"c2236fde-035b-4962-a608-e033be177551","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b20b510-5684-46be-af81-8c50677ed9a3","type":"BoxAnnotation"},{"attributes":{},"id":"8aa54fa7-1de7-4721-a64f-178b14bd408a","type":"ToolEvents"},{"attributes":{},"id":"30f6dbd1-6602-4cd9-ab91-a87c2051f4b0","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"36fed3a3-6e91-4bd8-b7ac-bcf24016aec5","type":"LinearAxis"}],"left":[{"id":"49e5db26-a843-44ef-a153-c80e8aba0862","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"36fed3a3-6e91-4bd8-b7ac-bcf24016aec5","type":"LinearAxis"},{"id":"a8af3be7-25ad-4687-ba92-715f887e9502","type":"Grid"},{"id":"49e5db26-a843-44ef-a153-c80e8aba0862","type":"LinearAxis"},{"id":"fe3ea9f1-1aa4-4b36-ac16-dafd6b04ba8e","type":"Grid"},{"id":"9b20b510-5684-46be-af81-8c50677ed9a3","type":"BoxAnnotation"},{"id":"0bd4dfbe-3a47-4374-b260-2f4335b8bc1d","type":"GlyphRenderer"}],"tool_events":{"id":"8aa54fa7-1de7-4721-a64f-178b14bd408a","type":"ToolEvents"},"tools":[{"id":"58bbd799-1449-4830-9301-e4ddba66b450","type":"PanTool"},{"id":"73a6a22d-c5e3-4a6a-821b-1cc654a5df14","type":"WheelZoomTool"},{"id":"a98c29fa-e378-44a9-9cf6-9734f4574ed6","type":"BoxZoomTool"},{"id":"636a5d9c-a188-4ac4-a1bc-10e93e72caa0","type":"PreviewSaveTool"},{"id":"1d5ac2ff-ce4f-42da-bec8-0af649e2e1f0","type":"ResizeTool"},{"id":"d5b07015-41eb-48d7-b4d9-b6d3ea0410ab","type":"ResetTool"},{"id":"a1dae0e2-5693-4cb1-89e5-b085fd0c6ffc","type":"HelpTool"}],"x_range":{"id":"ab4d113b-4395-473f-b24f-e9aaa977b912","type":"DataRange1d"},"y_range":{"id":"c2200229-db30-43b5-9842-77c3bf40e683","type":"DataRange1d"}},"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"c2200229-db30-43b5-9842-77c3bf40e683","type":"DataRange1d"},{"attributes":{"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"}},"id":"1d5ac2ff-ce4f-42da-bec8-0af649e2e1f0","type":"ResizeTool"},{"attributes":{},"id":"e43f5d96-c502-458e-8ad0-b7abfcb71876","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"84e21f77-ed61-415c-a694-e0b71e13de47","subtype":"Figure","type":"Plot"}},"id":"a1dae0e2-5693-4cb1-89e5-b085fd0c6ffc","type":"HelpTool"}],"root_ids":["84e21f77-ed61-415c-a694-e0b71e13de47"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"ab290b9c-aa3b-43f6-8d54-4bada4ec9c95","elementid":"e3cced3e-7f9a-4436-b18f-eafd299656b7","modelid":"84e21f77-ed61-415c-a694-e0b71e13de47"}];
          
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
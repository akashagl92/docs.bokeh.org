
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
  };var element = document.getElementById("3908122e-b500-4eb0-9780-37e1cdc9aa96");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3908122e-b500-4eb0-9780-37e1cdc9aa96' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"28682d40-275c-41e4-8f43-7b2df9cc9c9f":{"roots":{"references":[{"attributes":{"below":[{"id":"5a9b3ede-9965-4308-8a9c-7ee466042ff8","type":"LinearAxis"}],"left":[{"id":"c755f1c5-a90c-4fa9-9b57-c6eb6a15ff6f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5a9b3ede-9965-4308-8a9c-7ee466042ff8","type":"LinearAxis"},{"id":"36b933d4-42d0-435f-9569-d227bbdb1a5a","type":"Grid"},{"id":"c755f1c5-a90c-4fa9-9b57-c6eb6a15ff6f","type":"LinearAxis"},{"id":"8f21df5d-e0a3-49ae-9d7c-41d65ecd41d3","type":"Grid"},{"id":"7941e2f9-cd01-42c8-8a7d-61ae31a9dd2c","type":"BoxAnnotation"},{"id":"257e082e-4026-4101-a23c-987a71c89b1e","type":"GlyphRenderer"}],"tool_events":{"id":"2132f53c-c514-497c-aaa3-847935bf4c2e","type":"ToolEvents"},"tools":[{"id":"b0450ffc-3d05-4fa3-a1e9-e72b13850094","type":"PanTool"},{"id":"ed95ff7a-f4a0-4de0-b5c4-941ef9a7118d","type":"WheelZoomTool"},{"id":"e84eeb57-e94e-42e8-9710-8329a2699069","type":"BoxZoomTool"},{"id":"cf74d91f-0810-42a1-95d4-a92cab8fd9b0","type":"PreviewSaveTool"},{"id":"fb215fd2-c70b-4454-8ba4-8742272d83b0","type":"ResizeTool"},{"id":"6bd91111-6790-4bda-b8a4-49f8aba0b921","type":"ResetTool"},{"id":"67c33a86-4d7c-495e-908e-98cc3bd26459","type":"HelpTool"}],"x_range":{"id":"58a9c183-cd28-4947-a2d1-e88b67f241cb","type":"DataRange1d"},"y_range":{"id":"09c6efc3-2ba5-4e28-afb1-bad97f4745eb","type":"DataRange1d"}},"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7941e2f9-cd01-42c8-8a7d-61ae31a9dd2c","type":"BoxAnnotation"},{"attributes":{},"id":"cc2dc04e-c32d-4395-9b9d-3f92e78829c4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b150856f-d6b4-45ef-8141-746717ea9cf0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"}},"id":"6bd91111-6790-4bda-b8a4-49f8aba0b921","type":"ResetTool"},{"attributes":{"callback":null},"id":"58a9c183-cd28-4947-a2d1-e88b67f241cb","type":"DataRange1d"},{"attributes":{},"id":"659f5183-3874-4be2-9f23-9d33c151e669","type":"BasicTicker"},{"attributes":{"callback":null},"id":"09c6efc3-2ba5-4e28-afb1-bad97f4745eb","type":"DataRange1d"},{"attributes":{},"id":"f2cc4975-8743-438c-9c7c-36ee58c2e355","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cc2dc04e-c32d-4395-9b9d-3f92e78829c4","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"},"ticker":{"id":"659f5183-3874-4be2-9f23-9d33c151e669","type":"BasicTicker"}},"id":"c755f1c5-a90c-4fa9-9b57-c6eb6a15ff6f","type":"LinearAxis"},{"attributes":{},"id":"2132f53c-c514-497c-aaa3-847935bf4c2e","type":"ToolEvents"},{"attributes":{"data_source":{"id":"b150856f-d6b4-45ef-8141-746717ea9cf0","type":"ColumnDataSource"},"glyph":{"id":"40e156ee-6ea5-46c7-bd62-8cd15666c9a6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"909fd721-6d85-48ae-b459-e3a6048dd738","type":"Circle"},"selection_glyph":null},"id":"257e082e-4026-4101-a23c-987a71c89b1e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7941e2f9-cd01-42c8-8a7d-61ae31a9dd2c","type":"BoxAnnotation"},"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"}},"id":"e84eeb57-e94e-42e8-9710-8329a2699069","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"}},"id":"67c33a86-4d7c-495e-908e-98cc3bd26459","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"40e156ee-6ea5-46c7-bd62-8cd15666c9a6","type":"Circle"},{"attributes":{"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2cc4975-8743-438c-9c7c-36ee58c2e355","type":"BasicTicker"}},"id":"36b933d4-42d0-435f-9569-d227bbdb1a5a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"909fd721-6d85-48ae-b459-e3a6048dd738","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"},"ticker":{"id":"659f5183-3874-4be2-9f23-9d33c151e669","type":"BasicTicker"}},"id":"8f21df5d-e0a3-49ae-9d7c-41d65ecd41d3","type":"Grid"},{"attributes":{"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"}},"id":"ed95ff7a-f4a0-4de0-b5c4-941ef9a7118d","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"}},"id":"b0450ffc-3d05-4fa3-a1e9-e72b13850094","type":"PanTool"},{"attributes":{},"id":"d150a58a-c3c6-4260-8899-6c15b0be342a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d150a58a-c3c6-4260-8899-6c15b0be342a","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2cc4975-8743-438c-9c7c-36ee58c2e355","type":"BasicTicker"}},"id":"5a9b3ede-9965-4308-8a9c-7ee466042ff8","type":"LinearAxis"},{"attributes":{"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"}},"id":"fb215fd2-c70b-4454-8ba4-8742272d83b0","type":"ResizeTool"},{"attributes":{"plot":{"id":"e0687a44-2392-4936-b627-6a7b4221587e","subtype":"Figure","type":"Plot"}},"id":"cf74d91f-0810-42a1-95d4-a92cab8fd9b0","type":"PreviewSaveTool"}],"root_ids":["e0687a44-2392-4936-b627-6a7b4221587e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"28682d40-275c-41e4-8f43-7b2df9cc9c9f","elementid":"3908122e-b500-4eb0-9780-37e1cdc9aa96","modelid":"e0687a44-2392-4936-b627-6a7b4221587e"}];
          
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
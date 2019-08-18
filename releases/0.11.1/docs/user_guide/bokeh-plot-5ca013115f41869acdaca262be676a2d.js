
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
  };var element = document.getElementById("cfd8f9ae-b6a0-40de-90d0-16ce87800f85");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cfd8f9ae-b6a0-40de-90d0-16ce87800f85' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"67ecd042-8d0b-4579-abdf-e109320fa41a":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"d44314c2-86c3-422f-a7ea-f85a928b1412","type":"ColumnDataSource"},{"attributes":{},"id":"07660b6a-708d-4769-96c4-7603e93fcf1c","type":"ToolEvents"},{"attributes":{"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"}},"id":"0425d89f-e15c-4c60-a140-99ea3798882d","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"b96ff0ea-9dd8-4a39-990c-6f6564d03146","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b5dc9847-8b07-4ea2-bb49-fb700a4719ae","type":"BoxAnnotation"},{"attributes":{"bounds":[2,4],"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"34f396da-72d8-4808-a299-f33cd9dd8d69","type":"BasicTicker"}},"id":"e6d426ef-dcbe-4857-8641-1b9e012b8321","type":"Grid"},{"attributes":{"data_source":{"id":"d44314c2-86c3-422f-a7ea-f85a928b1412","type":"ColumnDataSource"},"glyph":{"id":"3397f50b-922e-40e3-b781-487c77dc411a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b0c79b4d-a511-4ed3-8a8d-067df6febe52","type":"Circle"},"selection_glyph":null},"id":"d5a79057-5e24-42de-8ecb-d1c95a131b15","type":"GlyphRenderer"},{"attributes":{},"id":"fb449d16-13f7-4ed4-a2b6-d7d829273ec7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"73eb97dc-1e59-4dfd-a1d4-9d66cf94ff6f","type":"DataRange1d"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f1520e9-c666-4c1e-8cd9-9f391554fcb9","type":"BasicTicker"}},"id":"db3973f8-1d10-4fab-9379-db31691b1b61","type":"Grid"},{"attributes":{"formatter":{"id":"ec8059bd-da51-403c-8d13-461813e8b924","type":"BasicTickFormatter"},"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"34f396da-72d8-4808-a299-f33cd9dd8d69","type":"BasicTicker"}},"id":"417dbaf9-ab1f-4708-9fde-f4c88387d02b","type":"LinearAxis"},{"attributes":{"below":[{"id":"417dbaf9-ab1f-4708-9fde-f4c88387d02b","type":"LinearAxis"}],"left":[{"id":"1ce18dad-f372-4cf1-8233-df81a69977b2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"417dbaf9-ab1f-4708-9fde-f4c88387d02b","type":"LinearAxis"},{"id":"e6d426ef-dcbe-4857-8641-1b9e012b8321","type":"Grid"},{"id":"1ce18dad-f372-4cf1-8233-df81a69977b2","type":"LinearAxis"},{"id":"db3973f8-1d10-4fab-9379-db31691b1b61","type":"Grid"},{"id":"b5dc9847-8b07-4ea2-bb49-fb700a4719ae","type":"BoxAnnotation"},{"id":"d5a79057-5e24-42de-8ecb-d1c95a131b15","type":"GlyphRenderer"}],"tool_events":{"id":"07660b6a-708d-4769-96c4-7603e93fcf1c","type":"ToolEvents"},"tools":[{"id":"37742ccc-a9aa-458f-886d-6f1b977ba1d5","type":"PanTool"},{"id":"0425d89f-e15c-4c60-a140-99ea3798882d","type":"WheelZoomTool"},{"id":"29e5b864-4df0-4284-aec7-5f59548f6bfa","type":"BoxZoomTool"},{"id":"8fe9f610-9194-41d1-bfa5-d21aaef7144d","type":"PreviewSaveTool"},{"id":"717a807d-bfa9-4a4a-8843-2a55e04b51bd","type":"ResizeTool"},{"id":"4b601bcf-e80c-484d-908d-d08d2f08e66a","type":"ResetTool"},{"id":"aeee4a93-2f56-4810-b5d2-3153d8738119","type":"HelpTool"}],"x_range":{"id":"b96ff0ea-9dd8-4a39-990c-6f6564d03146","type":"DataRange1d"},"y_range":{"id":"73eb97dc-1e59-4dfd-a1d4-9d66cf94ff6f","type":"DataRange1d"}},"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"}},"id":"717a807d-bfa9-4a4a-8843-2a55e04b51bd","type":"ResizeTool"},{"attributes":{"overlay":{"id":"b5dc9847-8b07-4ea2-bb49-fb700a4719ae","type":"BoxAnnotation"},"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"}},"id":"29e5b864-4df0-4284-aec7-5f59548f6bfa","type":"BoxZoomTool"},{"attributes":{},"id":"ec8059bd-da51-403c-8d13-461813e8b924","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0c79b4d-a511-4ed3-8a8d-067df6febe52","type":"Circle"},{"attributes":{"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"}},"id":"37742ccc-a9aa-458f-886d-6f1b977ba1d5","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3397f50b-922e-40e3-b781-487c77dc411a","type":"Circle"},{"attributes":{"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"}},"id":"aeee4a93-2f56-4810-b5d2-3153d8738119","type":"HelpTool"},{"attributes":{"formatter":{"id":"fb449d16-13f7-4ed4-a2b6-d7d829273ec7","type":"BasicTickFormatter"},"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f1520e9-c666-4c1e-8cd9-9f391554fcb9","type":"BasicTicker"}},"id":"1ce18dad-f372-4cf1-8233-df81a69977b2","type":"LinearAxis"},{"attributes":{},"id":"34f396da-72d8-4808-a299-f33cd9dd8d69","type":"BasicTicker"},{"attributes":{"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"}},"id":"8fe9f610-9194-41d1-bfa5-d21aaef7144d","type":"PreviewSaveTool"},{"attributes":{},"id":"4f1520e9-c666-4c1e-8cd9-9f391554fcb9","type":"BasicTicker"},{"attributes":{"plot":{"id":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8","subtype":"Figure","type":"Plot"}},"id":"4b601bcf-e80c-484d-908d-d08d2f08e66a","type":"ResetTool"}],"root_ids":["fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"67ecd042-8d0b-4579-abdf-e109320fa41a","elementid":"cfd8f9ae-b6a0-40de-90d0-16ce87800f85","modelid":"fd3f94a6-9ae2-43a6-bd66-b1c6f46f6ce8"}];
          
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
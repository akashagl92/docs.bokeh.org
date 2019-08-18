
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
  };var element = document.getElementById("26fa4c3b-f324-4256-837c-2d13f3e58e3e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '26fa4c3b-f324-4256-837c-2d13f3e58e3e' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"47b7f1b6-3c9a-4c22-98f9-f6b23553b9b1":{"roots":{"references":[{"attributes":{},"id":"2efff990-3456-42df-bdc1-cbfc05942b0f","type":"BasicTicker"},{"attributes":{},"id":"39695858-b72a-41fe-a87d-6f4f929361dc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"}},"id":"c1785b1d-42dc-4fac-96b0-3566489adf25","type":"ResetTool"},{"attributes":{},"id":"5bda389d-8e12-438e-a612-0d252e12a8c5","type":"ToolEvents"},{"attributes":{"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"}},"id":"27c21f5d-4d99-4ed6-9ae3-143b8e3ffc29","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c10cac94-e6d2-4995-83e4-ef6aad9d3d13","type":"DataRange1d"},{"attributes":{"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"}},"id":"f5508ee4-e127-40cf-af1b-17ed2baf08ab","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d267f9e-57bc-45b6-8f26-f408ad211e53","type":"Asterisk"},{"attributes":{"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"}},"id":"48fa9444-348d-483c-8e66-4c33a571b57f","type":"PreviewSaveTool"},{"attributes":{},"id":"49ba3caf-409b-44c1-a6e8-fc9c1b823c1f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"fdad6064-c6ab-4d5c-b47c-2258a0c10cd5","type":"BoxAnnotation"},"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"}},"id":"b4970702-b865-40ae-9e62-dd6514e55c6f","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"2efff990-3456-42df-bdc1-cbfc05942b0f","type":"BasicTicker"}},"id":"bcdadfd5-2ea3-41f8-a3e4-10f2ca7d2176","type":"Grid"},{"attributes":{"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"}},"id":"27f386d6-a9c3-48cf-95ff-76ed54a68fb7","type":"ResizeTool"},{"attributes":{},"id":"18ed4a47-9e85-4548-b318-5eb6154140ed","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"}},"id":"7aa61ad8-0a80-4d19-9ee0-2582d436c742","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"91228993-a3e6-456f-9b73-06a95f2f97a1","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"bbe6e381-c3c9-4875-aece-a17b8b9a3011","type":"LinearAxis"}],"left":[{"id":"fd1038e4-bf14-4af2-a773-8e6b6c5792f1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bbe6e381-c3c9-4875-aece-a17b8b9a3011","type":"LinearAxis"},{"id":"f1cb36f5-967f-48b0-9177-61b59ff0e936","type":"Grid"},{"id":"fd1038e4-bf14-4af2-a773-8e6b6c5792f1","type":"LinearAxis"},{"id":"bcdadfd5-2ea3-41f8-a3e4-10f2ca7d2176","type":"Grid"},{"id":"fdad6064-c6ab-4d5c-b47c-2258a0c10cd5","type":"BoxAnnotation"},{"id":"39488c99-0d59-43e8-bcfa-7b41cd10903d","type":"GlyphRenderer"}],"tool_events":{"id":"5bda389d-8e12-438e-a612-0d252e12a8c5","type":"ToolEvents"},"tools":[{"id":"7aa61ad8-0a80-4d19-9ee0-2582d436c742","type":"PanTool"},{"id":"27c21f5d-4d99-4ed6-9ae3-143b8e3ffc29","type":"WheelZoomTool"},{"id":"b4970702-b865-40ae-9e62-dd6514e55c6f","type":"BoxZoomTool"},{"id":"48fa9444-348d-483c-8e66-4c33a571b57f","type":"PreviewSaveTool"},{"id":"27f386d6-a9c3-48cf-95ff-76ed54a68fb7","type":"ResizeTool"},{"id":"c1785b1d-42dc-4fac-96b0-3566489adf25","type":"ResetTool"},{"id":"f5508ee4-e127-40cf-af1b-17ed2baf08ab","type":"HelpTool"}],"x_range":{"id":"367054a6-29ac-4f84-9a4d-7084a719e18e","type":"DataRange1d"},"y_range":{"id":"c10cac94-e6d2-4995-83e4-ef6aad9d3d13","type":"DataRange1d"}},"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"367054a6-29ac-4f84-9a4d-7084a719e18e","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a57d5509-ab46-4633-ba3a-70b522db6473","type":"Asterisk"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fdad6064-c6ab-4d5c-b47c-2258a0c10cd5","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"18ed4a47-9e85-4548-b318-5eb6154140ed","type":"BasicTickFormatter"},"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"2efff990-3456-42df-bdc1-cbfc05942b0f","type":"BasicTicker"}},"id":"fd1038e4-bf14-4af2-a773-8e6b6c5792f1","type":"LinearAxis"},{"attributes":{"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"49ba3caf-409b-44c1-a6e8-fc9c1b823c1f","type":"BasicTicker"}},"id":"f1cb36f5-967f-48b0-9177-61b59ff0e936","type":"Grid"},{"attributes":{"formatter":{"id":"39695858-b72a-41fe-a87d-6f4f929361dc","type":"BasicTickFormatter"},"plot":{"id":"98301a62-660e-49ce-8f33-09962f1be48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"49ba3caf-409b-44c1-a6e8-fc9c1b823c1f","type":"BasicTicker"}},"id":"bbe6e381-c3c9-4875-aece-a17b8b9a3011","type":"LinearAxis"},{"attributes":{"data_source":{"id":"91228993-a3e6-456f-9b73-06a95f2f97a1","type":"ColumnDataSource"},"glyph":{"id":"2d267f9e-57bc-45b6-8f26-f408ad211e53","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":{"id":"a57d5509-ab46-4633-ba3a-70b522db6473","type":"Asterisk"},"selection_glyph":null},"id":"39488c99-0d59-43e8-bcfa-7b41cd10903d","type":"GlyphRenderer"}],"root_ids":["98301a62-660e-49ce-8f33-09962f1be48f"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"47b7f1b6-3c9a-4c22-98f9-f6b23553b9b1","elementid":"26fa4c3b-f324-4256-837c-2d13f3e58e3e","modelid":"98301a62-660e-49ce-8f33-09962f1be48f"}];
          
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
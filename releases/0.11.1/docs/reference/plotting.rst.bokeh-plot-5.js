
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
  };var element = document.getElementById("1b2fdf08-c992-4489-aacd-767517feb849");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1b2fdf08-c992-4489-aacd-767517feb849' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"bd0b32b9-c633-414c-b0f9-f9a6e063dc55":{"roots":{"references":[{"attributes":{"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"}},"id":"3f284ded-1e9e-4ce0-9a13-780edd99add4","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb4562ad-861e-4e31-8e33-6b22ed1e6027","type":"Cross"},{"attributes":{},"id":"9fcf4727-4bb9-427c-8fc5-43c45334a699","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"}},"id":"8b5c553a-1575-4571-b8f3-15e7e1f0929f","type":"ResetTool"},{"attributes":{"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"}},"id":"9e7bb0cb-7958-485c-96d9-fb5807ce918d","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"}},"id":"439cf7a9-5ccc-4588-902b-7aa97fa6bd88","type":"ResizeTool"},{"attributes":{},"id":"06aec9c5-b215-4721-9715-0415f5b84936","type":"BasicTicker"},{"attributes":{"below":[{"id":"84430d3b-f769-4087-85a4-da51567168ca","type":"LinearAxis"}],"left":[{"id":"52047a94-b2cc-4847-924c-98a7cba9d540","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"84430d3b-f769-4087-85a4-da51567168ca","type":"LinearAxis"},{"id":"cb6f8689-c11e-4274-b3fe-69668e5bb90d","type":"Grid"},{"id":"52047a94-b2cc-4847-924c-98a7cba9d540","type":"LinearAxis"},{"id":"8a17d85d-cfc5-4d3b-8b47-5e1efd371bdc","type":"Grid"},{"id":"224a7360-f46b-446a-839c-905c0c31dae0","type":"BoxAnnotation"},{"id":"d6fa4bb3-7d26-4ce7-90b4-593e2d021e52","type":"GlyphRenderer"}],"tool_events":{"id":"d4bdfa55-057e-47e0-88b4-943ea39409dd","type":"ToolEvents"},"tools":[{"id":"eca8061c-c4c3-40ad-899a-d8115d351c0e","type":"PanTool"},{"id":"69ab948c-b3d4-4cb3-bf60-e460ef8cd1b3","type":"WheelZoomTool"},{"id":"90072edb-be4e-4f54-a906-6e8b4e3e5036","type":"BoxZoomTool"},{"id":"9e7bb0cb-7958-485c-96d9-fb5807ce918d","type":"PreviewSaveTool"},{"id":"439cf7a9-5ccc-4588-902b-7aa97fa6bd88","type":"ResizeTool"},{"id":"8b5c553a-1575-4571-b8f3-15e7e1f0929f","type":"ResetTool"},{"id":"3f284ded-1e9e-4ce0-9a13-780edd99add4","type":"HelpTool"}],"x_range":{"id":"1f870560-78dc-4493-b8fd-4b19530aee9d","type":"DataRange1d"},"y_range":{"id":"cce2221b-4e06-4412-9a79-7a121a5bdf85","type":"DataRange1d"}},"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"224a7360-f46b-446a-839c-905c0c31dae0","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cf69680-32e9-492d-985d-74353588a890","type":"Cross"},{"attributes":{"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"06aec9c5-b215-4721-9715-0415f5b84936","type":"BasicTicker"}},"id":"cb6f8689-c11e-4274-b3fe-69668e5bb90d","type":"Grid"},{"attributes":{"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"}},"id":"eca8061c-c4c3-40ad-899a-d8115d351c0e","type":"PanTool"},{"attributes":{"data_source":{"id":"988dd905-019f-4060-83e7-c66792db433c","type":"ColumnDataSource"},"glyph":{"id":"5cf69680-32e9-492d-985d-74353588a890","type":"Cross"},"hover_glyph":null,"nonselection_glyph":{"id":"bb4562ad-861e-4e31-8e33-6b22ed1e6027","type":"Cross"},"selection_glyph":null},"id":"d6fa4bb3-7d26-4ce7-90b4-593e2d021e52","type":"GlyphRenderer"},{"attributes":{},"id":"d4bdfa55-057e-47e0-88b4-943ea39409dd","type":"ToolEvents"},{"attributes":{"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"}},"id":"69ab948c-b3d4-4cb3-bf60-e460ef8cd1b3","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"678d1609-8585-4683-a72c-7d8c1213a0d3","type":"BasicTickFormatter"},"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a8dffd3-a8d0-4597-9911-a79374c6421f","type":"BasicTicker"}},"id":"52047a94-b2cc-4847-924c-98a7cba9d540","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"988dd905-019f-4060-83e7-c66792db433c","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"224a7360-f46b-446a-839c-905c0c31dae0","type":"BoxAnnotation"},"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"}},"id":"90072edb-be4e-4f54-a906-6e8b4e3e5036","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a8dffd3-a8d0-4597-9911-a79374c6421f","type":"BasicTicker"}},"id":"8a17d85d-cfc5-4d3b-8b47-5e1efd371bdc","type":"Grid"},{"attributes":{"formatter":{"id":"9fcf4727-4bb9-427c-8fc5-43c45334a699","type":"BasicTickFormatter"},"plot":{"id":"36668f92-e7fc-4bf0-a86b-1078fea92a1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"06aec9c5-b215-4721-9715-0415f5b84936","type":"BasicTicker"}},"id":"84430d3b-f769-4087-85a4-da51567168ca","type":"LinearAxis"},{"attributes":{},"id":"7a8dffd3-a8d0-4597-9911-a79374c6421f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1f870560-78dc-4493-b8fd-4b19530aee9d","type":"DataRange1d"},{"attributes":{},"id":"678d1609-8585-4683-a72c-7d8c1213a0d3","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"cce2221b-4e06-4412-9a79-7a121a5bdf85","type":"DataRange1d"}],"root_ids":["36668f92-e7fc-4bf0-a86b-1078fea92a1d"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"bd0b32b9-c633-414c-b0f9-f9a6e063dc55","elementid":"1b2fdf08-c992-4489-aacd-767517feb849","modelid":"36668f92-e7fc-4bf0-a86b-1078fea92a1d"}];
          
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
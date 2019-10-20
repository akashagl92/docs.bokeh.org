
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
  };var element = document.getElementById("77121cef-4cfb-4f04-a709-dc8a5ae96588");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '77121cef-4cfb-4f04-a709-dc8a5ae96588' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"bdbeb34a-0978-4745-adcb-1745f6234175":{"roots":{"references":[{"attributes":{"overlay":{"id":"cfc5bf8a-1152-4b62-aaa8-71606546cee0","type":"BoxAnnotation"},"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"}},"id":"3f9b819e-48d4-4007-9e07-da0a7c33f4b4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"}},"id":"2c2d13f0-ca72-4683-8bca-bdf5710da330","type":"ResizeTool"},{"attributes":{},"id":"c6744880-ee86-436b-9a14-c36957d31768","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c6744880-ee86-436b-9a14-c36957d31768","type":"BasicTickFormatter"},"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e057041-65c6-4616-8329-235b3b1a8066","type":"BasicTicker"}},"id":"9f0be7b5-21db-490d-a2c7-bc82f37cb9d5","type":"LinearAxis"},{"attributes":{"below":[{"id":"50ab1689-c754-4392-bc11-8da846592ff1","type":"LinearAxis"}],"left":[{"id":"9f0be7b5-21db-490d-a2c7-bc82f37cb9d5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"50ab1689-c754-4392-bc11-8da846592ff1","type":"LinearAxis"},{"id":"7bf9bd7c-132d-42d7-82db-fb0e04650f73","type":"Grid"},{"id":"9f0be7b5-21db-490d-a2c7-bc82f37cb9d5","type":"LinearAxis"},{"id":"da629278-12b8-4751-9447-a23bb110f702","type":"Grid"},{"id":"cfc5bf8a-1152-4b62-aaa8-71606546cee0","type":"BoxAnnotation"},{"id":"e79e6eb7-cf71-47bf-95c0-e31e75d61278","type":"GlyphRenderer"}],"tool_events":{"id":"ecb4fac6-b6ed-4867-ab80-cbf44c9f81d8","type":"ToolEvents"},"tools":[{"id":"cf4f5e1e-ad13-4d38-a0e6-177852cb77ce","type":"PanTool"},{"id":"3e954fa9-3b68-4e71-a200-5a07312fdee4","type":"WheelZoomTool"},{"id":"3f9b819e-48d4-4007-9e07-da0a7c33f4b4","type":"BoxZoomTool"},{"id":"ffa86808-a40a-40a5-942d-0c6e9daa3707","type":"PreviewSaveTool"},{"id":"2c2d13f0-ca72-4683-8bca-bdf5710da330","type":"ResizeTool"},{"id":"8cb8bcb6-6fe1-4397-a3a0-376cfaccc873","type":"ResetTool"},{"id":"6a2fb44d-88b7-4b6a-8680-3a42aecfb2e6","type":"HelpTool"}],"x_range":{"id":"ffe279a6-eb2f-4fa6-be59-a7676677a505","type":"DataRange1d"},"y_range":{"id":"ee9d581d-dc7b-4c4c-ad12-27bd958ba8ce","type":"DataRange1d"}},"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cfc5bf8a-1152-4b62-aaa8-71606546cee0","type":"BoxAnnotation"},{"attributes":{},"id":"ecb4fac6-b6ed-4867-ab80-cbf44c9f81d8","type":"ToolEvents"},{"attributes":{},"id":"46bb2839-f7e2-44c8-9ace-1848502aea42","type":"BasicTicker"},{"attributes":{"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"}},"id":"cf4f5e1e-ad13-4d38-a0e6-177852cb77ce","type":"PanTool"},{"attributes":{"formatter":{"id":"95518307-03a6-42d4-a29a-17898d1d4dd4","type":"BasicTickFormatter"},"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"},"ticker":{"id":"46bb2839-f7e2-44c8-9ace-1848502aea42","type":"BasicTicker"}},"id":"50ab1689-c754-4392-bc11-8da846592ff1","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.0,3.0,"NaN",4.0,5.0],"y":[6,7,2,4,4,5]}},"id":"1288da2f-9309-4f03-857b-d3ad6fa748c1","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"}},"id":"6a2fb44d-88b7-4b6a-8680-3a42aecfb2e6","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e057041-65c6-4616-8329-235b3b1a8066","type":"BasicTicker"}},"id":"da629278-12b8-4751-9447-a23bb110f702","type":"Grid"},{"attributes":{"callback":null},"id":"ffe279a6-eb2f-4fa6-be59-a7676677a505","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ee9d581d-dc7b-4c4c-ad12-27bd958ba8ce","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2141c3d-52db-4a95-8278-9b925936eeca","type":"Line"},{"attributes":{},"id":"6e057041-65c6-4616-8329-235b3b1a8066","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"021a2d7c-5124-4548-ab39-cc9c9b665849","type":"Line"},{"attributes":{"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"}},"id":"3e954fa9-3b68-4e71-a200-5a07312fdee4","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1288da2f-9309-4f03-857b-d3ad6fa748c1","type":"ColumnDataSource"},"glyph":{"id":"d2141c3d-52db-4a95-8278-9b925936eeca","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"021a2d7c-5124-4548-ab39-cc9c9b665849","type":"Line"},"selection_glyph":null},"id":"e79e6eb7-cf71-47bf-95c0-e31e75d61278","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"}},"id":"ffa86808-a40a-40a5-942d-0c6e9daa3707","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"},"ticker":{"id":"46bb2839-f7e2-44c8-9ace-1848502aea42","type":"BasicTicker"}},"id":"7bf9bd7c-132d-42d7-82db-fb0e04650f73","type":"Grid"},{"attributes":{"plot":{"id":"8458fff4-e3b7-4b33-b088-735300c46644","subtype":"Figure","type":"Plot"}},"id":"8cb8bcb6-6fe1-4397-a3a0-376cfaccc873","type":"ResetTool"},{"attributes":{},"id":"95518307-03a6-42d4-a29a-17898d1d4dd4","type":"BasicTickFormatter"}],"root_ids":["8458fff4-e3b7-4b33-b088-735300c46644"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"bdbeb34a-0978-4745-adcb-1745f6234175","elementid":"77121cef-4cfb-4f04-a709-dc8a5ae96588","modelid":"8458fff4-e3b7-4b33-b088-735300c46644"}];
          
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
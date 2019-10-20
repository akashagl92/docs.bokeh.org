
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
  };var element = document.getElementById("d15809b1-74c8-4fd1-86cf-523cb191644f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd15809b1-74c8-4fd1-86cf-523cb191644f' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"1b33dccf-491b-47a2-af6f-8f2655e824a8":{"roots":{"references":[{"attributes":{"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8ff0f68-0cc0-46d6-8c98-619b4e3f807e","type":"BasicTicker"}},"id":"d1933e83-6b13-4496-b16b-d00560b59826","type":"Grid"},{"attributes":{},"id":"a71f6f08-ce53-45b8-b516-bce3f8695587","type":"BasicTicker"},{"attributes":{"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"}},"id":"112fa3ff-4d0b-4cbb-92c4-5f50014ef6e9","type":"ResetTool"},{"attributes":{"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"}},"id":"ba870508-c6c3-4842-bf06-15744bf49b06","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"8eabdaa9-10b9-42ed-848b-28d18bf601aa","type":"ColumnDataSource"},"glyph":{"id":"b331fde4-5fd7-42d5-b723-adcbc176a83a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5a7cedb1-f132-4d74-a7e6-926737de59e8","type":"Circle"},"selection_glyph":null},"id":"d09238a3-7f1a-4d10-89f5-adad9ad1dd0f","type":"GlyphRenderer"},{"attributes":{},"id":"f16d9036-177d-400e-940f-813cc234fb8c","type":"ToolEvents"},{"attributes":{"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"}},"id":"bb05ef2b-25ba-49c1-8b4d-de2aada73575","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a7cedb1-f132-4d74-a7e6-926737de59e8","type":"Circle"},{"attributes":{"formatter":{"id":"10300e91-9c25-4106-b881-e6c099a0ed90","type":"BasicTickFormatter"},"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8ff0f68-0cc0-46d6-8c98-619b4e3f807e","type":"BasicTicker"}},"id":"4a4ae3fc-3e31-4a7e-8c88-039f2242e788","type":"LinearAxis"},{"attributes":{"below":[{"id":"4a4ae3fc-3e31-4a7e-8c88-039f2242e788","type":"LinearAxis"}],"left":[{"id":"1d598641-e746-49af-980f-c836a19eef7f","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"4a4ae3fc-3e31-4a7e-8c88-039f2242e788","type":"LinearAxis"},{"id":"d1933e83-6b13-4496-b16b-d00560b59826","type":"Grid"},{"id":"1d598641-e746-49af-980f-c836a19eef7f","type":"LinearAxis"},{"id":"e558a2d4-288a-4a60-afff-d160a5531dc6","type":"Grid"},{"id":"46a1e3a8-01e3-4444-8af3-b0971d2d5f0a","type":"BoxAnnotation"},{"id":"d09238a3-7f1a-4d10-89f5-adad9ad1dd0f","type":"GlyphRenderer"}],"tool_events":{"id":"f16d9036-177d-400e-940f-813cc234fb8c","type":"ToolEvents"},"tools":[{"id":"bb05ef2b-25ba-49c1-8b4d-de2aada73575","type":"PanTool"},{"id":"ba870508-c6c3-4842-bf06-15744bf49b06","type":"WheelZoomTool"},{"id":"43266b0b-4c49-403a-9335-f66c875ec1b0","type":"BoxZoomTool"},{"id":"462558b7-b8cf-4b6c-820c-73aaf3d33edd","type":"PreviewSaveTool"},{"id":"e76e254d-6adc-400c-aafc-10fb3b740018","type":"ResizeTool"},{"id":"112fa3ff-4d0b-4cbb-92c4-5f50014ef6e9","type":"ResetTool"},{"id":"d99c58c1-a84f-40b1-bf8a-953f282dd200","type":"HelpTool"}],"x_range":{"id":"8b2b7da9-db3b-4b47-88dd-9f5aa311efec","type":"DataRange1d"},"y_range":{"id":"713fa014-961f-4293-9ac2-6feff2978d9c","type":"DataRange1d"}},"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e8ff0f68-0cc0-46d6-8c98-619b4e3f807e","type":"BasicTicker"},{"attributes":{"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"}},"id":"462558b7-b8cf-4b6c-820c-73aaf3d33edd","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"713fa014-961f-4293-9ac2-6feff2978d9c","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a71f6f08-ce53-45b8-b516-bce3f8695587","type":"BasicTicker"}},"id":"e558a2d4-288a-4a60-afff-d160a5531dc6","type":"Grid"},{"attributes":{"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"}},"id":"e76e254d-6adc-400c-aafc-10fb3b740018","type":"ResizeTool"},{"attributes":{"formatter":{"id":"f9927384-7cb4-47ec-b30d-a698377c49d5","type":"BasicTickFormatter"},"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a71f6f08-ce53-45b8-b516-bce3f8695587","type":"BasicTicker"}},"id":"1d598641-e746-49af-980f-c836a19eef7f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b331fde4-5fd7-42d5-b723-adcbc176a83a","type":"Circle"},{"attributes":{},"id":"f9927384-7cb4-47ec-b30d-a698377c49d5","type":"BasicTickFormatter"},{"attributes":{},"id":"10300e91-9c25-4106-b881-e6c099a0ed90","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"46a1e3a8-01e3-4444-8af3-b0971d2d5f0a","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"46a1e3a8-01e3-4444-8af3-b0971d2d5f0a","type":"BoxAnnotation"},"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"}},"id":"43266b0b-4c49-403a-9335-f66c875ec1b0","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"8b2b7da9-db3b-4b47-88dd-9f5aa311efec","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"8eabdaa9-10b9-42ed-848b-28d18bf601aa","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"670641e4-9384-49db-9238-931963a5d7a6","subtype":"Figure","type":"Plot"}},"id":"d99c58c1-a84f-40b1-bf8a-953f282dd200","type":"HelpTool"}],"root_ids":["670641e4-9384-49db-9238-931963a5d7a6"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"1b33dccf-491b-47a2-af6f-8f2655e824a8","elementid":"d15809b1-74c8-4fd1-86cf-523cb191644f","modelid":"670641e4-9384-49db-9238-931963a5d7a6"}];
          
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
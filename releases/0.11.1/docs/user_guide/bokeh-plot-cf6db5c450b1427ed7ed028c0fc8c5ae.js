
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
  };var element = document.getElementById("471d2285-8b2d-4431-a2d1-bbdfc764eb64");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '471d2285-8b2d-4431-a2d1-bbdfc764eb64' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"bed58361-c72c-4700-9f9d-f7f9ef5b7a20":{"roots":{"references":[{"attributes":{"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"}},"id":"1dfff9bc-1b87-4cd5-9ac1-cbecb095ed1b","type":"ResizeTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"980f213c-63c8-461e-8d79-6d087b737b27","type":"Segment"},{"attributes":{},"id":"1d00f273-fa95-4498-a172-8b33b38fec9c","type":"ToolEvents"},{"attributes":{},"id":"3ca7a8fb-f124-4cd9-a128-e52760e361f1","type":"BasicTicker"},{"attributes":{"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f9619e6-2174-445f-a1dc-c38df360d134","type":"BasicTicker"}},"id":"6bfce15f-4588-4719-ac17-0bf764b50281","type":"Grid"},{"attributes":{"callback":null},"id":"86863305-0dcf-40b0-b3b7-352e36659168","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ca7a8fb-f124-4cd9-a128-e52760e361f1","type":"BasicTicker"}},"id":"0d355f21-9e46-4f40-8379-5b8e56f82d54","type":"Grid"},{"attributes":{"overlay":{"id":"4789abdc-60b4-42a4-8434-e16a57845487","type":"BoxAnnotation"},"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"}},"id":"e374debf-2254-46b9-a273-c24d3ffd0799","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"}},"id":"6a5a7e8a-e882-4627-a55f-38b74e3c0501","type":"PanTool"},{"attributes":{"formatter":{"id":"c39c6030-9a8c-4e8a-b9bd-442de4439521","type":"BasicTickFormatter"},"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ca7a8fb-f124-4cd9-a128-e52760e361f1","type":"BasicTicker"}},"id":"550fa186-50c8-4ea3-9ad8-cb86ed721c24","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4789abdc-60b4-42a4-8434-e16a57845487","type":"BoxAnnotation"},{"attributes":{},"id":"8f9619e6-2174-445f-a1dc-c38df360d134","type":"BasicTicker"},{"attributes":{"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"}},"id":"3202fb9e-c199-4fa0-b960-2ae78c68183e","type":"PreviewSaveTool"},{"attributes":{"data_source":{"id":"49a3d491-4784-4aa0-8229-65f41c502e85","type":"ColumnDataSource"},"glyph":{"id":"14225704-50ed-4410-9c61-2b41e1a5860e","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"980f213c-63c8-461e-8d79-6d087b737b27","type":"Segment"},"selection_glyph":null},"id":"6fb5d8f4-2941-41e8-8996-48f17f3a36cc","type":"GlyphRenderer"},{"attributes":{},"id":"06f4ab4a-e23c-4f26-bc96-cbf78ee94639","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"}},"id":"25756dc1-324d-4bd9-b969-3096969caca0","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y0","x0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"49a3d491-4784-4aa0-8229-65f41c502e85","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"}},"id":"22612c39-322b-4ab6-ad23-dda88dba4a65","type":"ResetTool"},{"attributes":{"formatter":{"id":"06f4ab4a-e23c-4f26-bc96-cbf78ee94639","type":"BasicTickFormatter"},"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f9619e6-2174-445f-a1dc-c38df360d134","type":"BasicTicker"}},"id":"4bc55b97-9e6e-4534-8615-151f5cebc97f","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"14225704-50ed-4410-9c61-2b41e1a5860e","type":"Segment"},{"attributes":{"callback":null},"id":"ea0a7bc5-2e41-4c1a-b114-07f9c5fd8f4f","type":"DataRange1d"},{"attributes":{},"id":"c39c6030-9a8c-4e8a-b9bd-442de4439521","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"4bc55b97-9e6e-4534-8615-151f5cebc97f","type":"LinearAxis"}],"left":[{"id":"550fa186-50c8-4ea3-9ad8-cb86ed721c24","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4bc55b97-9e6e-4534-8615-151f5cebc97f","type":"LinearAxis"},{"id":"6bfce15f-4588-4719-ac17-0bf764b50281","type":"Grid"},{"id":"550fa186-50c8-4ea3-9ad8-cb86ed721c24","type":"LinearAxis"},{"id":"0d355f21-9e46-4f40-8379-5b8e56f82d54","type":"Grid"},{"id":"4789abdc-60b4-42a4-8434-e16a57845487","type":"BoxAnnotation"},{"id":"6fb5d8f4-2941-41e8-8996-48f17f3a36cc","type":"GlyphRenderer"}],"tool_events":{"id":"1d00f273-fa95-4498-a172-8b33b38fec9c","type":"ToolEvents"},"tools":[{"id":"6a5a7e8a-e882-4627-a55f-38b74e3c0501","type":"PanTool"},{"id":"25756dc1-324d-4bd9-b969-3096969caca0","type":"WheelZoomTool"},{"id":"e374debf-2254-46b9-a273-c24d3ffd0799","type":"BoxZoomTool"},{"id":"3202fb9e-c199-4fa0-b960-2ae78c68183e","type":"PreviewSaveTool"},{"id":"1dfff9bc-1b87-4cd5-9ac1-cbecb095ed1b","type":"ResizeTool"},{"id":"22612c39-322b-4ab6-ad23-dda88dba4a65","type":"ResetTool"},{"id":"4a47b8af-74ff-4dac-b090-306468e066ba","type":"HelpTool"}],"x_range":{"id":"ea0a7bc5-2e41-4c1a-b114-07f9c5fd8f4f","type":"DataRange1d"},"y_range":{"id":"86863305-0dcf-40b0-b3b7-352e36659168","type":"DataRange1d"}},"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"9fea954f-16ea-48d5-a726-f990eb01a999","subtype":"Figure","type":"Plot"}},"id":"4a47b8af-74ff-4dac-b090-306468e066ba","type":"HelpTool"}],"root_ids":["9fea954f-16ea-48d5-a726-f990eb01a999"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"bed58361-c72c-4700-9f9d-f7f9ef5b7a20","elementid":"471d2285-8b2d-4431-a2d1-bbdfc764eb64","modelid":"9fea954f-16ea-48d5-a726-f990eb01a999"}];
          
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
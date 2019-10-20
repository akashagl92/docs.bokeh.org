
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
  };var element = document.getElementById("332d6019-a4c3-474b-b304-d09ce08e66aa");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '332d6019-a4c3-474b-b304-d09ce08e66aa' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d81fe1cc-4c4d-438a-a735-b1b1fda7edb9":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"19e131c9-b9a1-483e-81eb-bc38e4f4d90e","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2e6b0a-4713-42d8-9a94-c8ce134701a2","type":"BasicTicker"}},"id":"b4fb7c69-5ff9-45db-a8a3-a5d567e5e79f","type":"Grid"},{"attributes":{"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"}},"id":"f5da9abd-6509-439b-aca4-c2a098a5c0d5","type":"ResetTool"},{"attributes":{"overlay":{"id":"e0f97479-fb27-4c36-b0c2-cac0032b286c","type":"BoxAnnotation"},"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"}},"id":"64644201-cdd1-46e4-ad73-620bf7513bf5","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3dce3af-2f4d-4942-8b8b-4760f8b18a2d","type":"Square"},{"attributes":{"data_source":{"id":"19e131c9-b9a1-483e-81eb-bc38e4f4d90e","type":"ColumnDataSource"},"glyph":{"id":"c3dce3af-2f4d-4942-8b8b-4760f8b18a2d","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"2b055767-57f9-4743-a2c1-8298790351ac","type":"Square"},"selection_glyph":null},"id":"03e0a710-9342-46b1-bf5f-66b3ac3c561c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e0f7116-8f19-49ed-999a-93dd2f992146","type":"BasicTicker"}},"id":"24d7bb2e-46b2-4eb1-a76b-81555d515cee","type":"Grid"},{"attributes":{},"id":"0e2e6b0a-4713-42d8-9a94-c8ce134701a2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ef88be04-78cb-4255-a33a-26e6c48f1404","type":"DataRange1d"},{"attributes":{"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"}},"id":"7f34d20d-5414-4b8d-94b7-db47d221aa98","type":"HelpTool"},{"attributes":{"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"}},"id":"f71d1250-e282-4631-8c1e-2af1a1bd53ee","type":"PanTool"},{"attributes":{},"id":"6e0f7116-8f19-49ed-999a-93dd2f992146","type":"BasicTicker"},{"attributes":{},"id":"52733c16-97e7-4788-bc64-ee494a54507e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a27234b1-1053-4be1-9763-2590a70f38b4","type":"DataRange1d"},{"attributes":{"formatter":{"id":"52733c16-97e7-4788-bc64-ee494a54507e","type":"BasicTickFormatter"},"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2e6b0a-4713-42d8-9a94-c8ce134701a2","type":"BasicTicker"}},"id":"57fb0f0f-c6d3-4d60-9bfe-da2036d0b68c","type":"LinearAxis"},{"attributes":{},"id":"aa0168cf-fe5d-44d6-a3c6-53e45607e639","type":"ToolEvents"},{"attributes":{"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"}},"id":"3304698e-033e-46d0-903a-babe869d1eba","type":"PreviewSaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b055767-57f9-4743-a2c1-8298790351ac","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0f97479-fb27-4c36-b0c2-cac0032b286c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"}},"id":"e46cf036-f046-40e7-93e9-bfc59135fd71","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"bb0f3f9c-2f93-4c5e-a7a3-10d2365aa7c9","type":"LinearAxis"}],"left":[{"id":"57fb0f0f-c6d3-4d60-9bfe-da2036d0b68c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bb0f3f9c-2f93-4c5e-a7a3-10d2365aa7c9","type":"LinearAxis"},{"id":"24d7bb2e-46b2-4eb1-a76b-81555d515cee","type":"Grid"},{"id":"57fb0f0f-c6d3-4d60-9bfe-da2036d0b68c","type":"LinearAxis"},{"id":"b4fb7c69-5ff9-45db-a8a3-a5d567e5e79f","type":"Grid"},{"id":"e0f97479-fb27-4c36-b0c2-cac0032b286c","type":"BoxAnnotation"},{"id":"03e0a710-9342-46b1-bf5f-66b3ac3c561c","type":"GlyphRenderer"}],"tool_events":{"id":"aa0168cf-fe5d-44d6-a3c6-53e45607e639","type":"ToolEvents"},"tools":[{"id":"f71d1250-e282-4631-8c1e-2af1a1bd53ee","type":"PanTool"},{"id":"e46cf036-f046-40e7-93e9-bfc59135fd71","type":"WheelZoomTool"},{"id":"64644201-cdd1-46e4-ad73-620bf7513bf5","type":"BoxZoomTool"},{"id":"3304698e-033e-46d0-903a-babe869d1eba","type":"PreviewSaveTool"},{"id":"4d7c35db-c57c-4a2f-b788-15981f4f5ca2","type":"ResizeTool"},{"id":"f5da9abd-6509-439b-aca4-c2a098a5c0d5","type":"ResetTool"},{"id":"7f34d20d-5414-4b8d-94b7-db47d221aa98","type":"HelpTool"}],"x_range":{"id":"a27234b1-1053-4be1-9763-2590a70f38b4","type":"DataRange1d"},"y_range":{"id":"ef88be04-78cb-4255-a33a-26e6c48f1404","type":"DataRange1d"}},"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"}},"id":"4d7c35db-c57c-4a2f-b788-15981f4f5ca2","type":"ResizeTool"},{"attributes":{"formatter":{"id":"d0591cc8-b732-4454-a880-25b9a2ef3d3a","type":"BasicTickFormatter"},"plot":{"id":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e0f7116-8f19-49ed-999a-93dd2f992146","type":"BasicTicker"}},"id":"bb0f3f9c-2f93-4c5e-a7a3-10d2365aa7c9","type":"LinearAxis"},{"attributes":{},"id":"d0591cc8-b732-4454-a880-25b9a2ef3d3a","type":"BasicTickFormatter"}],"root_ids":["c0d3590a-cd23-46de-9b8b-a1ac69d9220a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"d81fe1cc-4c4d-438a-a735-b1b1fda7edb9","elementid":"332d6019-a4c3-474b-b304-d09ce08e66aa","modelid":"c0d3590a-cd23-46de-9b8b-a1ac69d9220a"}];
          
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
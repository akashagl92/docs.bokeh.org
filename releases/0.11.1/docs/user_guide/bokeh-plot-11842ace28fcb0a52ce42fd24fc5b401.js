
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
  };var element = document.getElementById("7703beb4-fe5e-4b39-8932-cbfd7f9548ec");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7703beb4-fe5e-4b39-8932-cbfd7f9548ec' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"517048c1-131d-4e7b-9790-77db9e2e6b52":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec914bf0-eba3-405b-9b0e-982b6c055714","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["xs","ys","line_alpha","line_color"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"58b1246b-c744-4c90-bdcf-6d97385848d7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"}},"id":"91b3cead-6962-4b71-b8df-a3ae0dce46bc","type":"ResetTool"},{"attributes":{"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"}},"id":"ba60a04e-da8a-4de4-a581-0a19489d95ec","type":"HelpTool"},{"attributes":{"data_source":{"id":"58b1246b-c744-4c90-bdcf-6d97385848d7","type":"ColumnDataSource"},"glyph":{"id":"ea04ebba-908b-4667-b1c8-6abc2b29527c","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"8cbed039-1fe9-4802-9fe7-68ca823a70de","type":"MultiLine"},"selection_glyph":null},"id":"5c8c9b3e-cfe7-46f4-8c13-9757380e1ac9","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"614866fa-566d-4548-922d-56a6fecf9988","type":"BasicTickFormatter"},"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd986fd3-cb18-45c7-80e9-ea3b4976c7d8","type":"BasicTicker"}},"id":"94f8d6cd-0bcf-4d78-ac46-76f0e6970835","type":"LinearAxis"},{"attributes":{},"id":"fd986fd3-cb18-45c7-80e9-ea3b4976c7d8","type":"BasicTicker"},{"attributes":{},"id":"922bbd9f-bbed-4091-aa81-203d1f77079b","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"8cbed039-1fe9-4802-9fe7-68ca823a70de","type":"MultiLine"},{"attributes":{"callback":null},"id":"87b46bff-c765-4da2-925e-16afd1451668","type":"DataRange1d"},{"attributes":{"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"}},"id":"08a5a358-81f7-4652-9159-a0452f6081df","type":"PreviewSaveTool"},{"attributes":{"below":[{"id":"77bff4ed-5ac9-4cce-a5e3-fa1bd71e115b","type":"LinearAxis"}],"left":[{"id":"94f8d6cd-0bcf-4d78-ac46-76f0e6970835","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"77bff4ed-5ac9-4cce-a5e3-fa1bd71e115b","type":"LinearAxis"},{"id":"4a28acfd-dad0-404b-ae38-56609b3537cf","type":"Grid"},{"id":"94f8d6cd-0bcf-4d78-ac46-76f0e6970835","type":"LinearAxis"},{"id":"f864fb4e-4807-4628-aae3-1661f86ee9c9","type":"Grid"},{"id":"ec914bf0-eba3-405b-9b0e-982b6c055714","type":"BoxAnnotation"},{"id":"5c8c9b3e-cfe7-46f4-8c13-9757380e1ac9","type":"GlyphRenderer"}],"tool_events":{"id":"e79d59b0-04fb-492d-9d05-e7d2db7e1c5a","type":"ToolEvents"},"tools":[{"id":"e85a0602-ccd1-488b-a013-45cee230162e","type":"PanTool"},{"id":"45cfdba7-1748-41ef-8b4b-7b9f5aad4a06","type":"WheelZoomTool"},{"id":"3f155d0d-8e03-4767-a35b-c218c28955fc","type":"BoxZoomTool"},{"id":"08a5a358-81f7-4652-9159-a0452f6081df","type":"PreviewSaveTool"},{"id":"157965ee-3f70-4271-a268-de16f321cbc1","type":"ResizeTool"},{"id":"91b3cead-6962-4b71-b8df-a3ae0dce46bc","type":"ResetTool"},{"id":"ba60a04e-da8a-4de4-a581-0a19489d95ec","type":"HelpTool"}],"x_range":{"id":"87b46bff-c765-4da2-925e-16afd1451668","type":"DataRange1d"},"y_range":{"id":"13c6b39d-43b2-4019-a3fb-d5dfd65c7db5","type":"DataRange1d"}},"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"13c6b39d-43b2-4019-a3fb-d5dfd65c7db5","type":"DataRange1d"},{"attributes":{},"id":"e79d59b0-04fb-492d-9d05-e7d2db7e1c5a","type":"ToolEvents"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"ea04ebba-908b-4667-b1c8-6abc2b29527c","type":"MultiLine"},{"attributes":{"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"}},"id":"157965ee-3f70-4271-a268-de16f321cbc1","type":"ResizeTool"},{"attributes":{"overlay":{"id":"ec914bf0-eba3-405b-9b0e-982b6c055714","type":"BoxAnnotation"},"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"}},"id":"3f155d0d-8e03-4767-a35b-c218c28955fc","type":"BoxZoomTool"},{"attributes":{},"id":"614866fa-566d-4548-922d-56a6fecf9988","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd986fd3-cb18-45c7-80e9-ea3b4976c7d8","type":"BasicTicker"}},"id":"f864fb4e-4807-4628-aae3-1661f86ee9c9","type":"Grid"},{"attributes":{},"id":"9637788c-2c39-47be-a917-2ab5e3b5ac56","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"}},"id":"45cfdba7-1748-41ef-8b4b-7b9f5aad4a06","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"9637788c-2c39-47be-a917-2ab5e3b5ac56","type":"BasicTickFormatter"},"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"},"ticker":{"id":"922bbd9f-bbed-4091-aa81-203d1f77079b","type":"BasicTicker"}},"id":"77bff4ed-5ac9-4cce-a5e3-fa1bd71e115b","type":"LinearAxis"},{"attributes":{"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"}},"id":"e85a0602-ccd1-488b-a013-45cee230162e","type":"PanTool"},{"attributes":{"plot":{"id":"39bd7afa-cd3d-43d1-af11-9f59107a8486","subtype":"Figure","type":"Plot"},"ticker":{"id":"922bbd9f-bbed-4091-aa81-203d1f77079b","type":"BasicTicker"}},"id":"4a28acfd-dad0-404b-ae38-56609b3537cf","type":"Grid"}],"root_ids":["39bd7afa-cd3d-43d1-af11-9f59107a8486"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"517048c1-131d-4e7b-9790-77db9e2e6b52","elementid":"7703beb4-fe5e-4b39-8932-cbfd7f9548ec","modelid":"39bd7afa-cd3d-43d1-af11-9f59107a8486"}];
          
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
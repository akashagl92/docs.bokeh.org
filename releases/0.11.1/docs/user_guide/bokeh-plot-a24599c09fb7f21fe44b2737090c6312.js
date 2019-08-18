
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
  };var element = document.getElementById("e15160ba-363e-4013-ae99-5c8adfb1992c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e15160ba-363e-4013-ae99-5c8adfb1992c' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2c8fbe2b-7bd1-4c1e-b49f-616df4f0d966":{"roots":{"references":[{"attributes":{},"id":"c0bcfd1a-23e6-4bb8-b58f-cd490292549b","type":"ToolEvents"},{"attributes":{"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}},"id":"89abce22-ab1b-41c9-8ed3-79aa1216f58b","type":"ResetTool"},{"attributes":{"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}},"id":"0a667398-868a-4e65-937b-a9e0d162aed6","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"6718449a-e068-4b19-86f1-ff61a3d0141c","type":"BasicTickFormatter"},"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e09dc14-ba5b-44a3-bbd4-4795f9b382c8","type":"BasicTicker"}},"id":"451b5625-c6cb-4461-835b-cde4eda049e5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e09dc14-ba5b-44a3-bbd4-4795f9b382c8","type":"BasicTicker"}},"id":"c8790fc6-63dc-4794-b2fa-b077c2b92b11","type":"Grid"},{"attributes":{},"id":"0e09dc14-ba5b-44a3-bbd4-4795f9b382c8","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d8ed8d0-a3de-4c3f-91cb-7ff4e00a81b6","type":"Oval"},{"attributes":{"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}},"id":"1238581c-f0d6-44d6-9e4c-2fd576efdb43","type":"PreviewSaveTool"},{"attributes":{},"id":"0871107a-caf3-4ce2-b152-950965a2df99","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f898df1-5b12-4c6d-9c2a-184d342602a5","type":"BasicTicker"}},"id":"31c3b106-5161-4df2-892c-ff00df60e1e3","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5308bc7f-89ff-47c9-a531-9a37d80b3dcd","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"5308bc7f-89ff-47c9-a531-9a37d80b3dcd","type":"BoxAnnotation"},"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}},"id":"0174d736-0ef6-45bf-8218-ed526d97ea21","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"0871107a-caf3-4ce2-b152-950965a2df99","type":"BasicTickFormatter"},"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f898df1-5b12-4c6d-9c2a-184d342602a5","type":"BasicTicker"}},"id":"4be22ba7-2f63-45b2-b0b4-82851bb38281","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7658deb9-caf5-4ede-b2de-309786333729","type":"DataRange1d"},{"attributes":{},"id":"6f898df1-5b12-4c6d-9c2a-184d342602a5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0655a6e7-3451-439e-8ff9-6dbecb28aead","type":"DataRange1d"},{"attributes":{"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}},"id":"b80df8be-98b8-488a-9e47-67199b7063ac","type":"HelpTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3ca90d9-da80-46e1-9cba-37ee4c811aa0","type":"Oval"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"6a23859d-7af9-414a-bc3e-1f648b34d28e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6a23859d-7af9-414a-bc3e-1f648b34d28e","type":"ColumnDataSource"},"glyph":{"id":"7d8ed8d0-a3de-4c3f-91cb-7ff4e00a81b6","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"a3ca90d9-da80-46e1-9cba-37ee4c811aa0","type":"Oval"},"selection_glyph":null},"id":"e2e4e472-60aa-41d9-8c6e-0520b9563856","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}},"id":"67fab652-9f7b-4117-a676-69e5524a7221","type":"PanTool"},{"attributes":{"plot":{"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}},"id":"0640a4d8-9437-48d5-b178-19cb539a3cf7","type":"ResizeTool"},{"attributes":{},"id":"6718449a-e068-4b19-86f1-ff61a3d0141c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"4be22ba7-2f63-45b2-b0b4-82851bb38281","type":"LinearAxis"}],"left":[{"id":"451b5625-c6cb-4461-835b-cde4eda049e5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4be22ba7-2f63-45b2-b0b4-82851bb38281","type":"LinearAxis"},{"id":"31c3b106-5161-4df2-892c-ff00df60e1e3","type":"Grid"},{"id":"451b5625-c6cb-4461-835b-cde4eda049e5","type":"LinearAxis"},{"id":"c8790fc6-63dc-4794-b2fa-b077c2b92b11","type":"Grid"},{"id":"5308bc7f-89ff-47c9-a531-9a37d80b3dcd","type":"BoxAnnotation"},{"id":"e2e4e472-60aa-41d9-8c6e-0520b9563856","type":"GlyphRenderer"}],"tool_events":{"id":"c0bcfd1a-23e6-4bb8-b58f-cd490292549b","type":"ToolEvents"},"tools":[{"id":"67fab652-9f7b-4117-a676-69e5524a7221","type":"PanTool"},{"id":"0a667398-868a-4e65-937b-a9e0d162aed6","type":"WheelZoomTool"},{"id":"0174d736-0ef6-45bf-8218-ed526d97ea21","type":"BoxZoomTool"},{"id":"1238581c-f0d6-44d6-9e4c-2fd576efdb43","type":"PreviewSaveTool"},{"id":"0640a4d8-9437-48d5-b178-19cb539a3cf7","type":"ResizeTool"},{"id":"89abce22-ab1b-41c9-8ed3-79aa1216f58b","type":"ResetTool"},{"id":"b80df8be-98b8-488a-9e47-67199b7063ac","type":"HelpTool"}],"x_range":{"id":"7658deb9-caf5-4ede-b2de-309786333729","type":"DataRange1d"},"y_range":{"id":"0655a6e7-3451-439e-8ff9-6dbecb28aead","type":"DataRange1d"}},"id":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22","subtype":"Figure","type":"Plot"}],"root_ids":["33a6c77f-5928-4232-b5e1-f3efcb5e4a22"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"2c8fbe2b-7bd1-4c1e-b49f-616df4f0d966","elementid":"e15160ba-363e-4013-ae99-5c8adfb1992c","modelid":"33a6c77f-5928-4232-b5e1-f3efcb5e4a22"}];
          
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
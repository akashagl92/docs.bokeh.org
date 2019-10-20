
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
  };var element = document.getElementById("73f69087-8d1d-47ab-a024-fb97a144c3c5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '73f69087-8d1d-47ab-a024-fb97a144c3c5' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"fa7a652f-4d2b-440a-a644-848a33b76039":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"fec91b36-bd29-447b-8582-f6fd3bb3124d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fec91b36-bd29-447b-8582-f6fd3bb3124d","type":"ColumnDataSource"},"glyph":{"id":"1316d12c-673b-44ff-b318-8b2a29f3801c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"635240c8-a3b2-444d-b6cd-c69750f1d92d","type":"Circle"},"selection_glyph":null},"id":"0c79f458-68b2-489f-9161-8980092b63e0","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f226a439-9207-4ca9-9baa-f1d0a680d6df","type":"BasicTickFormatter"},"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"},"ticker":{"id":"12cd0824-269e-49fc-996d-a11335b9a1d4","type":"BasicTicker"}},"id":"76f014eb-aba0-4ed8-9499-2cdc9d13f630","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1316d12c-673b-44ff-b318-8b2a29f3801c","type":"Circle"},{"attributes":{},"id":"f0a19b7e-0751-4065-aeab-05c52a90c6ae","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"},"ticker":{"id":"12cd0824-269e-49fc-996d-a11335b9a1d4","type":"BasicTicker"}},"id":"f0e7ec8d-8b2a-4a5f-b13d-794cae81b066","type":"Grid"},{"attributes":{"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}},"id":"d26a44ef-7c3a-4167-be40-1a418c04eacf","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"d4262a57-f26b-4d9e-8a0c-227ff1368825","type":"DataRange1d"},{"attributes":{"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}},"id":"e443e1b6-b449-4e09-8a18-68fa66914241","type":"PreviewSaveTool"},{"attributes":{},"id":"f95a9530-7586-4b31-878c-13bb36e1d981","type":"ToolEvents"},{"attributes":{"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}},"id":"8d471426-78ca-4edb-9c30-eab299f37621","type":"HelpTool"},{"attributes":{},"id":"5831884f-7a56-4ecc-bc46-9ae11bf5a77f","type":"BasicTicker"},{"attributes":{},"id":"f226a439-9207-4ca9-9baa-f1d0a680d6df","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"13e49833-8ed9-4639-82ce-a169df80dc2c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f0a19b7e-0751-4065-aeab-05c52a90c6ae","type":"BasicTickFormatter"},"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5831884f-7a56-4ecc-bc46-9ae11bf5a77f","type":"BasicTicker"}},"id":"03b0acc3-36d1-45e6-8801-fe2e0d3d0f07","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"635240c8-a3b2-444d-b6cd-c69750f1d92d","type":"Circle"},{"attributes":{"overlay":{"id":"cd8e4959-7bcd-439b-a1ed-aec8d5d99fce","type":"BoxAnnotation"},"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}},"id":"ff463afe-ae9f-451e-88f8-9dc78139f36c","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}},"id":"1c0e485e-2b21-441d-94b9-ec69e895bf97","type":"PanTool"},{"attributes":{},"id":"12cd0824-269e-49fc-996d-a11335b9a1d4","type":"BasicTicker"},{"attributes":{"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}},"id":"8f0cbbb7-c381-4f0a-8717-f08493b89d61","type":"ResizeTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cd8e4959-7bcd-439b-a1ed-aec8d5d99fce","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}},"id":"1af36f37-6a85-46d3-9108-92d039e00054","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5831884f-7a56-4ecc-bc46-9ae11bf5a77f","type":"BasicTicker"}},"id":"f5506a51-6147-4ffe-b4f2-3482414b32a4","type":"Grid"},{"attributes":{"below":[{"id":"76f014eb-aba0-4ed8-9499-2cdc9d13f630","type":"LinearAxis"}],"left":[{"id":"03b0acc3-36d1-45e6-8801-fe2e0d3d0f07","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"76f014eb-aba0-4ed8-9499-2cdc9d13f630","type":"LinearAxis"},{"id":"f0e7ec8d-8b2a-4a5f-b13d-794cae81b066","type":"Grid"},{"id":"03b0acc3-36d1-45e6-8801-fe2e0d3d0f07","type":"LinearAxis"},{"id":"f5506a51-6147-4ffe-b4f2-3482414b32a4","type":"Grid"},{"id":"cd8e4959-7bcd-439b-a1ed-aec8d5d99fce","type":"BoxAnnotation"},{"id":"0c79f458-68b2-489f-9161-8980092b63e0","type":"GlyphRenderer"}],"tool_events":{"id":"f95a9530-7586-4b31-878c-13bb36e1d981","type":"ToolEvents"},"tools":[{"id":"1c0e485e-2b21-441d-94b9-ec69e895bf97","type":"PanTool"},{"id":"d26a44ef-7c3a-4167-be40-1a418c04eacf","type":"WheelZoomTool"},{"id":"ff463afe-ae9f-451e-88f8-9dc78139f36c","type":"BoxZoomTool"},{"id":"e443e1b6-b449-4e09-8a18-68fa66914241","type":"PreviewSaveTool"},{"id":"8f0cbbb7-c381-4f0a-8717-f08493b89d61","type":"ResizeTool"},{"id":"1af36f37-6a85-46d3-9108-92d039e00054","type":"ResetTool"},{"id":"8d471426-78ca-4edb-9c30-eab299f37621","type":"HelpTool"}],"x_range":{"id":"13e49833-8ed9-4639-82ce-a169df80dc2c","type":"DataRange1d"},"y_range":{"id":"d4262a57-f26b-4d9e-8a0c-227ff1368825","type":"DataRange1d"}},"id":"97c380d3-7a77-446c-aed5-e9b3f494b02a","subtype":"Figure","type":"Plot"}],"root_ids":["97c380d3-7a77-446c-aed5-e9b3f494b02a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"fa7a652f-4d2b-440a-a644-848a33b76039","elementid":"73f69087-8d1d-47ab-a024-fb97a144c3c5","modelid":"97c380d3-7a77-446c-aed5-e9b3f494b02a"}];
          
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

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
  };var element = document.getElementById("6b1ed2ac-894e-46b7-8fb2-220c67f39294");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6b1ed2ac-894e-46b7-8fb2-220c67f39294' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"edf91baa-5d89-495a-abbc-7bc73aedc601":{"roots":{"references":[{"attributes":{"format":"0.0%"},"id":"762b8746-baec-49aa-bfd3-f4d55c023255","type":"NumeralTickFormatter"},{"attributes":{"data_source":{"id":"58add4b4-4bd3-4e4d-9260-014b0198b955","type":"ColumnDataSource"},"glyph":{"id":"5b5fb383-6dbd-4f4e-8f0b-cf4bd62ab5d7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"68da9c1f-0d99-4c17-8aff-c42705402cf7","type":"Circle"},"selection_glyph":null},"id":"354d9b7f-585a-41f1-b1be-c66d0a5bca60","type":"GlyphRenderer"},{"attributes":{"format":"$0.00"},"id":"94e5c1e7-a94b-4311-9f4c-71f5f1a98621","type":"NumeralTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"},"ticker":{"id":"b464ac8b-83ff-4c76-9167-c1fe819a4ba0","type":"BasicTicker"}},"id":"093ef8a4-391d-4f26-b7fe-93bb0584e916","type":"Grid"},{"attributes":{"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}},"id":"11640d21-cabc-4cf0-b61b-dbb0bc290af6","type":"HelpTool"},{"attributes":{"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"},"ticker":{"id":"c608b090-1b24-4a03-8096-2805dc9e7011","type":"BasicTicker"}},"id":"9b3d26ce-6055-49fd-a6d0-19de602b2d79","type":"Grid"},{"attributes":{"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}},"id":"97a4f616-4064-4346-91d1-03ec611c2ec7","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}},"id":"fb3a47e5-f5f3-406c-b677-235b374e87f1","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"68da9c1f-0d99-4c17-8aff-c42705402cf7","type":"Circle"},{"attributes":{"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}},"id":"2be9f922-1001-4a06-b397-68f130258483","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b5fb383-6dbd-4f4e-8f0b-cf4bd62ab5d7","type":"Circle"},{"attributes":{},"id":"78d3aef6-d3e1-4cc4-8c71-0d70ddf09005","type":"ToolEvents"},{"attributes":{"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}},"id":"21e3b6e5-f734-4462-96bf-a67717aa73c1","type":"PreviewSaveTool"},{"attributes":{},"id":"b464ac8b-83ff-4c76-9167-c1fe819a4ba0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"94e5c1e7-a94b-4311-9f4c-71f5f1a98621","type":"NumeralTickFormatter"},"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"},"ticker":{"id":"b464ac8b-83ff-4c76-9167-c1fe819a4ba0","type":"BasicTicker"}},"id":"757b0336-920a-40fb-ace9-5e2bf83b24a5","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"58add4b4-4bd3-4e4d-9260-014b0198b955","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8854d242-e497-4208-906b-6ab95efd636e","type":"BoxAnnotation"},{"attributes":{},"id":"c608b090-1b24-4a03-8096-2805dc9e7011","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8854d242-e497-4208-906b-6ab95efd636e","type":"BoxAnnotation"},"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}},"id":"2f24cca0-84d1-4f74-a3bd-48eafe940f39","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"5485129e-1b51-457c-9c0a-ac754f6708c3","type":"DataRange1d"},{"attributes":{"formatter":{"id":"762b8746-baec-49aa-bfd3-f4d55c023255","type":"NumeralTickFormatter"},"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"},"ticker":{"id":"c608b090-1b24-4a03-8096-2805dc9e7011","type":"BasicTicker"}},"id":"ac874bc4-0cac-4177-be63-e09b1f283e82","type":"LinearAxis"},{"attributes":{"callback":null},"id":"55671704-49b4-4c8e-a32d-ae938410d4f3","type":"DataRange1d"},{"attributes":{"plot":{"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}},"id":"012fb364-451e-4e6e-9546-871f388458e8","type":"ResizeTool"},{"attributes":{"below":[{"id":"ac874bc4-0cac-4177-be63-e09b1f283e82","type":"LinearAxis"}],"left":[{"id":"757b0336-920a-40fb-ace9-5e2bf83b24a5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ac874bc4-0cac-4177-be63-e09b1f283e82","type":"LinearAxis"},{"id":"9b3d26ce-6055-49fd-a6d0-19de602b2d79","type":"Grid"},{"id":"757b0336-920a-40fb-ace9-5e2bf83b24a5","type":"LinearAxis"},{"id":"093ef8a4-391d-4f26-b7fe-93bb0584e916","type":"Grid"},{"id":"8854d242-e497-4208-906b-6ab95efd636e","type":"BoxAnnotation"},{"id":"354d9b7f-585a-41f1-b1be-c66d0a5bca60","type":"GlyphRenderer"}],"tool_events":{"id":"78d3aef6-d3e1-4cc4-8c71-0d70ddf09005","type":"ToolEvents"},"tools":[{"id":"fb3a47e5-f5f3-406c-b677-235b374e87f1","type":"PanTool"},{"id":"97a4f616-4064-4346-91d1-03ec611c2ec7","type":"WheelZoomTool"},{"id":"2f24cca0-84d1-4f74-a3bd-48eafe940f39","type":"BoxZoomTool"},{"id":"21e3b6e5-f734-4462-96bf-a67717aa73c1","type":"PreviewSaveTool"},{"id":"012fb364-451e-4e6e-9546-871f388458e8","type":"ResizeTool"},{"id":"2be9f922-1001-4a06-b397-68f130258483","type":"ResetTool"},{"id":"11640d21-cabc-4cf0-b61b-dbb0bc290af6","type":"HelpTool"}],"x_range":{"id":"55671704-49b4-4c8e-a32d-ae938410d4f3","type":"DataRange1d"},"y_range":{"id":"5485129e-1b51-457c-9c0a-ac754f6708c3","type":"DataRange1d"}},"id":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00","subtype":"Figure","type":"Plot"}],"root_ids":["ec6a159b-2f89-4655-9dbd-cc81f69a2a00"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"edf91baa-5d89-495a-abbc-7bc73aedc601","elementid":"6b1ed2ac-894e-46b7-8fb2-220c67f39294","modelid":"ec6a159b-2f89-4655-9dbd-cc81f69a2a00"}];
          
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
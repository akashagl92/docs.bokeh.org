
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
  };var element = document.getElementById("f93dfd86-baca-453f-ace4-ffb5b5725d73");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f93dfd86-baca-453f-ace4-ffb5b5725d73' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"65d031d4-0550-471b-96f9-f638f31014f0":{"roots":{"references":[{"attributes":{"overlay":{"id":"a761ca02-beb9-4759-b4f1-5abc93137cac","type":"BoxAnnotation"},"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}},"id":"65294cbf-0a71-4e8b-bf1b-a284fe6ab98b","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y0","x0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"65bb7ef0-cb6a-4107-ad9b-5e95491321ca","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0a27ce7-7415-4cef-bc32-1273c9d9e437","type":"BasicTicker"}},"id":"d5148406-60fb-4942-a9b6-2a9fbb2a4d4a","type":"Grid"},{"attributes":{"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}},"id":"f75b7435-1eef-4e67-995d-75368e76d572","type":"ResizeTool"},{"attributes":{},"id":"d014ed6d-6ed2-44d9-a751-073d0fae9f84","type":"BasicTickFormatter"},{"attributes":{},"id":"b26f81d0-23c7-4dfa-9139-028f0809cc86","type":"BasicTicker"},{"attributes":{"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}},"id":"8e8196b1-252f-4bd0-acb1-e717cb2dd819","type":"PanTool"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"63cb5997-77bb-4128-8d36-40278170eccb","type":"Segment"},{"attributes":{"formatter":{"id":"d014ed6d-6ed2-44d9-a751-073d0fae9f84","type":"BasicTickFormatter"},"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0a27ce7-7415-4cef-bc32-1273c9d9e437","type":"BasicTicker"}},"id":"1243cd33-140d-4b55-acb8-e49b71325cf7","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"6c45d0ee-1288-4d53-97ba-8ae8854a9d4a","type":"Segment"},{"attributes":{"callback":null},"id":"596e4474-e827-41eb-99ed-e3bbd1de22c6","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"},"ticker":{"id":"b26f81d0-23c7-4dfa-9139-028f0809cc86","type":"BasicTicker"}},"id":"1e74acfa-9a6d-4bd8-a2e7-eb86d718d0bc","type":"Grid"},{"attributes":{"callback":null},"id":"47688a0f-927a-4a40-a602-7e3d41b9ae5f","type":"DataRange1d"},{"attributes":{},"id":"249f7dd0-b2d6-439a-814a-9e02d4879e46","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}},"id":"152621ec-f9c8-44fc-98bb-e473a4b45c10","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}},"id":"767f1ef6-62da-43f9-87fa-8286c2a0bf25","type":"ResetTool"},{"attributes":{},"id":"d0a27ce7-7415-4cef-bc32-1273c9d9e437","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a761ca02-beb9-4759-b4f1-5abc93137cac","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"249f7dd0-b2d6-439a-814a-9e02d4879e46","type":"BasicTickFormatter"},"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"},"ticker":{"id":"b26f81d0-23c7-4dfa-9139-028f0809cc86","type":"BasicTicker"}},"id":"6b8a9eb7-d09f-4d99-bd10-bd71db315261","type":"LinearAxis"},{"attributes":{"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}},"id":"d669ddbf-1b6f-4f86-85d0-17773f3cf592","type":"HelpTool"},{"attributes":{},"id":"daae9532-f292-4b35-8cf1-4ad6b0d00584","type":"ToolEvents"},{"attributes":{"plot":{"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}},"id":"07b31f77-774b-4e1f-b2d4-979df4fe7eab","type":"PreviewSaveTool"},{"attributes":{"data_source":{"id":"65bb7ef0-cb6a-4107-ad9b-5e95491321ca","type":"ColumnDataSource"},"glyph":{"id":"63cb5997-77bb-4128-8d36-40278170eccb","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"6c45d0ee-1288-4d53-97ba-8ae8854a9d4a","type":"Segment"},"selection_glyph":null},"id":"76a2e98d-3892-4572-9a89-5aa752150066","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1243cd33-140d-4b55-acb8-e49b71325cf7","type":"LinearAxis"}],"left":[{"id":"6b8a9eb7-d09f-4d99-bd10-bd71db315261","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1243cd33-140d-4b55-acb8-e49b71325cf7","type":"LinearAxis"},{"id":"d5148406-60fb-4942-a9b6-2a9fbb2a4d4a","type":"Grid"},{"id":"6b8a9eb7-d09f-4d99-bd10-bd71db315261","type":"LinearAxis"},{"id":"1e74acfa-9a6d-4bd8-a2e7-eb86d718d0bc","type":"Grid"},{"id":"a761ca02-beb9-4759-b4f1-5abc93137cac","type":"BoxAnnotation"},{"id":"76a2e98d-3892-4572-9a89-5aa752150066","type":"GlyphRenderer"}],"tool_events":{"id":"daae9532-f292-4b35-8cf1-4ad6b0d00584","type":"ToolEvents"},"tools":[{"id":"8e8196b1-252f-4bd0-acb1-e717cb2dd819","type":"PanTool"},{"id":"152621ec-f9c8-44fc-98bb-e473a4b45c10","type":"WheelZoomTool"},{"id":"65294cbf-0a71-4e8b-bf1b-a284fe6ab98b","type":"BoxZoomTool"},{"id":"07b31f77-774b-4e1f-b2d4-979df4fe7eab","type":"PreviewSaveTool"},{"id":"f75b7435-1eef-4e67-995d-75368e76d572","type":"ResizeTool"},{"id":"767f1ef6-62da-43f9-87fa-8286c2a0bf25","type":"ResetTool"},{"id":"d669ddbf-1b6f-4f86-85d0-17773f3cf592","type":"HelpTool"}],"x_range":{"id":"596e4474-e827-41eb-99ed-e3bbd1de22c6","type":"DataRange1d"},"y_range":{"id":"47688a0f-927a-4a40-a602-7e3d41b9ae5f","type":"DataRange1d"}},"id":"ff667d7a-91bc-4e36-b69c-60a569e63c16","subtype":"Figure","type":"Plot"}],"root_ids":["ff667d7a-91bc-4e36-b69c-60a569e63c16"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"65d031d4-0550-471b-96f9-f638f31014f0","elementid":"f93dfd86-baca-453f-ace4-ffb5b5725d73","modelid":"ff667d7a-91bc-4e36-b69c-60a569e63c16"}];
          
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
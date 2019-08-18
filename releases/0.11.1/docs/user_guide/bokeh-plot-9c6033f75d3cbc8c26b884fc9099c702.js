
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
  };var element = document.getElementById("b4d279ca-68ee-43b6-b0ca-43081f947285");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b4d279ca-68ee-43b6-b0ca-43081f947285' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"4409aa8d-711e-4dfc-ad42-c6b1558d1122":{"roots":{"references":[{"attributes":{"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"}},"id":"7c85d0ac-09d0-4a6c-8cfd-27c67f38beb9","type":"PreviewSaveTool"},{"attributes":{},"id":"9d070804-6a3f-4c4a-8597-cabcb42f4870","type":"BasicTicker"},{"attributes":{"below":[{"id":"59497e4f-d262-46dc-9afb-56fa23f064fd","type":"LinearAxis"}],"left":[{"id":"fbcf5d8b-8562-4a8a-9994-c0266086ce42","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"59497e4f-d262-46dc-9afb-56fa23f064fd","type":"LinearAxis"},{"id":"2e762ba6-40f7-492e-8c52-c15cc0a0b581","type":"Grid"},{"id":"fbcf5d8b-8562-4a8a-9994-c0266086ce42","type":"LinearAxis"},{"id":"6f11f40e-7514-40eb-93c6-8fe82f82fb60","type":"Grid"},{"id":"4a3175b7-bc15-4bf8-b3aa-f1d5d801caef","type":"BoxAnnotation"},{"id":"42f5ad30-bb0d-42ff-8a19-6d0e03a6bcdb","type":"GlyphRenderer"}],"tool_events":{"id":"a6722054-4fa7-40f5-9f16-685c201c0b13","type":"ToolEvents"},"tools":[{"id":"56b356b2-5c61-447e-9f95-6c8084a5802e","type":"PanTool"},{"id":"81b2264e-bdb1-4663-baa6-aa2c9015532a","type":"WheelZoomTool"},{"id":"a66643cf-bdca-4639-a0ec-3b7b82805924","type":"BoxZoomTool"},{"id":"7c85d0ac-09d0-4a6c-8cfd-27c67f38beb9","type":"PreviewSaveTool"},{"id":"17b2bdea-9917-4911-8404-612d83310bcd","type":"ResizeTool"},{"id":"a616c56e-7e62-41d6-8343-e9158b8538f5","type":"ResetTool"},{"id":"0d7e7dbc-43f6-45e1-b5c8-c2f0d0883970","type":"HelpTool"}],"x_range":{"id":"46252292-c5ea-4b62-b260-28490a21f11f","type":"DataRange1d"},"y_range":{"id":"22ffd358-3e6f-4a4c-b424-d3081a7e5593","type":"DataRange1d"}},"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1.0,2.0,3.0,"NaN",4.0,5.0,6.0],"y":[6.0,7.0,5.0,"NaN",7.0,3.0,6.0]}},"id":"f910be84-21f3-41fa-9166-d20d7cbc0918","type":"ColumnDataSource"},{"attributes":{},"id":"a6722054-4fa7-40f5-9f16-685c201c0b13","type":"ToolEvents"},{"attributes":{"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"}},"id":"56b356b2-5c61-447e-9f95-6c8084a5802e","type":"PanTool"},{"attributes":{"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d070804-6a3f-4c4a-8597-cabcb42f4870","type":"BasicTicker"}},"id":"2e762ba6-40f7-492e-8c52-c15cc0a0b581","type":"Grid"},{"attributes":{"callback":null},"id":"22ffd358-3e6f-4a4c-b424-d3081a7e5593","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f6880486-3128-41a1-96cd-b66a155d3075","type":"BasicTickFormatter"},"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d070804-6a3f-4c4a-8597-cabcb42f4870","type":"BasicTicker"}},"id":"59497e4f-d262-46dc-9afb-56fa23f064fd","type":"LinearAxis"},{"attributes":{},"id":"256da8ac-4bcf-4f12-a3fc-1373f8f17a29","type":"BasicTicker"},{"attributes":{"overlay":{"id":"4a3175b7-bc15-4bf8-b3aa-f1d5d801caef","type":"BoxAnnotation"},"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"}},"id":"a66643cf-bdca-4639-a0ec-3b7b82805924","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"}},"id":"a616c56e-7e62-41d6-8343-e9158b8538f5","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"},"ticker":{"id":"256da8ac-4bcf-4f12-a3fc-1373f8f17a29","type":"BasicTicker"}},"id":"6f11f40e-7514-40eb-93c6-8fe82f82fb60","type":"Grid"},{"attributes":{"formatter":{"id":"3a2e9c2f-deb9-4032-a577-ecf8895ca339","type":"BasicTickFormatter"},"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"},"ticker":{"id":"256da8ac-4bcf-4f12-a3fc-1373f8f17a29","type":"BasicTicker"}},"id":"fbcf5d8b-8562-4a8a-9994-c0266086ce42","type":"LinearAxis"},{"attributes":{"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"}},"id":"0d7e7dbc-43f6-45e1-b5c8-c2f0d0883970","type":"HelpTool"},{"attributes":{"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"}},"id":"81b2264e-bdb1-4663-baa6-aa2c9015532a","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b46289d-97f0-4cd9-8710-68ee3cbefd80","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4a3175b7-bc15-4bf8-b3aa-f1d5d801caef","type":"BoxAnnotation"},{"attributes":{},"id":"3a2e9c2f-deb9-4032-a577-ecf8895ca339","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f910be84-21f3-41fa-9166-d20d7cbc0918","type":"ColumnDataSource"},"glyph":{"id":"4bea42f2-ced5-470b-92bb-2c311c6575d7","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"9b46289d-97f0-4cd9-8710-68ee3cbefd80","type":"Patch"},"selection_glyph":null},"id":"42f5ad30-bb0d-42ff-8a19-6d0e03a6bcdb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"61fcb05c-67fb-40a3-9478-91dd045d2264","subtype":"Figure","type":"Plot"}},"id":"17b2bdea-9917-4911-8404-612d83310bcd","type":"ResizeTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bea42f2-ced5-470b-92bb-2c311c6575d7","type":"Patch"},{"attributes":{},"id":"f6880486-3128-41a1-96cd-b66a155d3075","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"46252292-c5ea-4b62-b260-28490a21f11f","type":"DataRange1d"}],"root_ids":["61fcb05c-67fb-40a3-9478-91dd045d2264"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"4409aa8d-711e-4dfc-ad42-c6b1558d1122","elementid":"b4d279ca-68ee-43b6-b0ca-43081f947285","modelid":"61fcb05c-67fb-40a3-9478-91dd045d2264"}];
          
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
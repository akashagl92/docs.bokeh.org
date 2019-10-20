
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
  };var element = document.getElementById("ac47e5ce-c7e0-471f-86b9-a8681970abd5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac47e5ce-c7e0-471f-86b9-a8681970abd5' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"88a4698d-ae6f-4ed9-be42-9f7b3f511074":{"roots":{"references":[{"attributes":{},"id":"72d2a25b-82c1-474f-b74d-37e712526a14","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"}},"id":"d9f74f38-dd2e-4847-8de4-28915b81fd12","type":"HelpTool"},{"attributes":{"formatter":{"id":"2423d211-2e93-426c-9e9e-c406e3b1ac46","type":"BasicTickFormatter"},"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0dde55f9-7c5f-4fca-96ca-ecae472c49e6","type":"BasicTicker"}},"id":"7b84b9c6-00a7-4632-a6d3-aca388712848","type":"LinearAxis"},{"attributes":{"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"}},"id":"7967cf8c-16e9-4b61-b1aa-80cf9b9037ee","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"484315b0-02a7-48b9-ab46-d782f6930c69","type":"BoxAnnotation"},"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"}},"id":"60374695-b4f9-47dc-8635-a5c736d3b644","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"}},"id":"104b7191-eb42-4ecb-9d5d-766193ff780c","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"20773fc9-6ea3-401d-b79f-8b5eed87ff65","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"484315b0-02a7-48b9-ab46-d782f6930c69","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"05cf6779-58d1-4dac-b193-9a1da438260b","type":"ColumnDataSource"},"glyph":{"id":"352c6aa7-e68f-42a5-a884-6c2485af6401","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"d2f7174c-c0c8-4f6a-8bc9-2945ed7893b3","type":"Oval"},"selection_glyph":null},"id":"d4394d94-7726-4050-86e4-efa66c9c1445","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"}},"id":"4da76b00-c4de-44d8-9773-0b2e64e9643f","type":"PanTool"},{"attributes":{"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"}},"id":"e2d49666-2571-4fb4-8658-b62dbb43a862","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"05cf6779-58d1-4dac-b193-9a1da438260b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0dde55f9-7c5f-4fca-96ca-ecae472c49e6","type":"BasicTicker"}},"id":"eb898fac-cb32-46ca-871d-50cfddd3cecd","type":"Grid"},{"attributes":{},"id":"ce19f5de-ab4a-4170-96a6-6c15f4a36256","type":"BasicTicker"},{"attributes":{"below":[{"id":"7b84b9c6-00a7-4632-a6d3-aca388712848","type":"LinearAxis"}],"left":[{"id":"74756d5c-8d68-4bac-a365-cd658612575e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7b84b9c6-00a7-4632-a6d3-aca388712848","type":"LinearAxis"},{"id":"eb898fac-cb32-46ca-871d-50cfddd3cecd","type":"Grid"},{"id":"74756d5c-8d68-4bac-a365-cd658612575e","type":"LinearAxis"},{"id":"814a5f6e-d159-4546-8004-f131a800485e","type":"Grid"},{"id":"484315b0-02a7-48b9-ab46-d782f6930c69","type":"BoxAnnotation"},{"id":"d4394d94-7726-4050-86e4-efa66c9c1445","type":"GlyphRenderer"}],"tool_events":{"id":"86b70abc-34ea-4eb6-b797-c04e1f37d90c","type":"ToolEvents"},"tools":[{"id":"4da76b00-c4de-44d8-9773-0b2e64e9643f","type":"PanTool"},{"id":"7967cf8c-16e9-4b61-b1aa-80cf9b9037ee","type":"WheelZoomTool"},{"id":"60374695-b4f9-47dc-8635-a5c736d3b644","type":"BoxZoomTool"},{"id":"104b7191-eb42-4ecb-9d5d-766193ff780c","type":"PreviewSaveTool"},{"id":"b5d308f9-4d3c-434a-8b89-e8d1a0cb0895","type":"ResizeTool"},{"id":"e2d49666-2571-4fb4-8658-b62dbb43a862","type":"ResetTool"},{"id":"d9f74f38-dd2e-4847-8de4-28915b81fd12","type":"HelpTool"}],"x_range":{"id":"41b3b8b1-2fbe-4dbe-b1dc-27dff53bcde3","type":"DataRange1d"},"y_range":{"id":"20773fc9-6ea3-401d-b79f-8b5eed87ff65","type":"DataRange1d"}},"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0dde55f9-7c5f-4fca-96ca-ecae472c49e6","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2f7174c-c0c8-4f6a-8bc9-2945ed7893b3","type":"Oval"},{"attributes":{"dimension":1,"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce19f5de-ab4a-4170-96a6-6c15f4a36256","type":"BasicTicker"}},"id":"814a5f6e-d159-4546-8004-f131a800485e","type":"Grid"},{"attributes":{"formatter":{"id":"72d2a25b-82c1-474f-b74d-37e712526a14","type":"BasicTickFormatter"},"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce19f5de-ab4a-4170-96a6-6c15f4a36256","type":"BasicTicker"}},"id":"74756d5c-8d68-4bac-a365-cd658612575e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"41b3b8b1-2fbe-4dbe-b1dc-27dff53bcde3","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"352c6aa7-e68f-42a5-a884-6c2485af6401","type":"Oval"},{"attributes":{},"id":"86b70abc-34ea-4eb6-b797-c04e1f37d90c","type":"ToolEvents"},{"attributes":{"plot":{"id":"f98dac38-34d9-4431-8214-906c3c9ab61e","subtype":"Figure","type":"Plot"}},"id":"b5d308f9-4d3c-434a-8b89-e8d1a0cb0895","type":"ResizeTool"},{"attributes":{},"id":"2423d211-2e93-426c-9e9e-c406e3b1ac46","type":"BasicTickFormatter"}],"root_ids":["f98dac38-34d9-4431-8214-906c3c9ab61e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"88a4698d-ae6f-4ed9-be42-9f7b3f511074","elementid":"ac47e5ce-c7e0-471f-86b9-a8681970abd5","modelid":"f98dac38-34d9-4431-8214-906c3c9ab61e"}];
          
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
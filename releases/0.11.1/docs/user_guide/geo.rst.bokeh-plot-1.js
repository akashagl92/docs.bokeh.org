
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
  };var element = document.getElementById("c5fad87e-2cb0-47e1-a357-c9490bc8ba2c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5fad87e-2cb0-47e1-a357-c9490bc8ba2c' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"435a6176-e984-40ac-8ecb-6063f49d8d86":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95a0deff-60aa-430c-bb14-1c64a5bf1841","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":null},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"e8060aaa-6cb9-40c0-824d-33dd1a4c2ea2","type":"Circle"},{"attributes":{"plot":{"id":"1bf85cbf-5ce6-47ce-aaaf-c4f178ce4fd1","type":"GMapPlot"}},"id":"5f8222e9-7322-4906-b8ec-e92c7b6182ae","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["lon","lat"],"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]}},"id":"1bf71150-cf38-4fb3-a61e-385dfce93f5d","type":"ColumnDataSource"},{"attributes":{"map_options":{"lat":30.29,"lng":-97.73,"map_type":"roadmap","zoom":11},"renderers":[{"id":"7dc40d8a-865b-4c02-bb22-6a00fdc315c1","type":"GlyphRenderer"},{"id":"95a0deff-60aa-430c-bb14-1c64a5bf1841","type":"BoxAnnotation"}],"title":"Austin","tool_events":{"id":"17bf1300-a9c5-4c62-bebf-3047de0ee14b","type":"ToolEvents"},"tools":[{"id":"67439fb4-69f1-4769-9d44-59a958b1a64a","type":"PanTool"},{"id":"5f8222e9-7322-4906-b8ec-e92c7b6182ae","type":"WheelZoomTool"},{"id":"7f65ed1d-e64b-47f9-841e-00111c74bfeb","type":"BoxSelectTool"}],"x_range":{"id":"30ea9248-4243-4ce6-9d28-85ba3f61cc99","type":"DataRange1d"},"y_range":{"id":"da3b5ae3-3368-4e18-82fd-0713ab8e13a9","type":"DataRange1d"}},"id":"1bf85cbf-5ce6-47ce-aaaf-c4f178ce4fd1","type":"GMapPlot"},{"attributes":{"callback":null,"overlay":{"id":"95a0deff-60aa-430c-bb14-1c64a5bf1841","type":"BoxAnnotation"},"plot":{"id":"1bf85cbf-5ce6-47ce-aaaf-c4f178ce4fd1","type":"GMapPlot"}},"id":"7f65ed1d-e64b-47f9-841e-00111c74bfeb","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"1bf85cbf-5ce6-47ce-aaaf-c4f178ce4fd1","type":"GMapPlot"}},"id":"67439fb4-69f1-4769-9d44-59a958b1a64a","type":"PanTool"},{"attributes":{"data_source":{"id":"1bf71150-cf38-4fb3-a61e-385dfce93f5d","type":"ColumnDataSource"},"glyph":{"id":"e8060aaa-6cb9-40c0-824d-33dd1a4c2ea2","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7dc40d8a-865b-4c02-bb22-6a00fdc315c1","type":"GlyphRenderer"},{"attributes":{},"id":"17bf1300-a9c5-4c62-bebf-3047de0ee14b","type":"ToolEvents"},{"attributes":{"callback":null},"id":"30ea9248-4243-4ce6-9d28-85ba3f61cc99","type":"DataRange1d"},{"attributes":{"callback":null},"id":"da3b5ae3-3368-4e18-82fd-0713ab8e13a9","type":"DataRange1d"}],"root_ids":["1bf85cbf-5ce6-47ce-aaaf-c4f178ce4fd1"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"435a6176-e984-40ac-8ecb-6063f49d8d86","elementid":"c5fad87e-2cb0-47e1-a357-c9490bc8ba2c","modelid":"1bf85cbf-5ce6-47ce-aaaf-c4f178ce4fd1"}];
          
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
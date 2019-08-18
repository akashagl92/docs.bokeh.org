
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
  };var element = document.getElementById("04016ee7-a426-42e4-9dd8-e72d7e2bdad5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '04016ee7-a426-42e4-9dd8-e72d7e2bdad5' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8636604e-031f-4860-a136-edf898b77dad":{"roots":{"references":[{"attributes":{"overlay":{"id":"e01d849b-80f8-4afe-b6d3-d16b6037cdce","type":"BoxAnnotation"},"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"}},"id":"2d81e614-2137-4908-8b97-d25cf9d46c31","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"5543313e-77f2-4f93-a155-3604b0123945","type":"ColumnDataSource"},"glyph":{"id":"f015b571-d8e3-4fc2-ac64-f4eaf84d7afc","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"c2bd4423-0502-4ff8-a610-7a53e0db525a","type":"Annulus"},"selection_glyph":null},"id":"414fd485-85f1-4920-9c09-767789a04c27","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"955e1b86-e97d-4bdc-947e-7132c3b078dd","type":"BasicTicker"}},"id":"c6bc45a4-a0f2-4dd2-a5d4-87991d5ffaa3","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"5543313e-77f2-4f93-a155-3604b0123945","type":"ColumnDataSource"},{"attributes":{},"id":"7450ea05-7a51-4d41-9cc1-7c9df3c850b9","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2bd4423-0502-4ff8-a610-7a53e0db525a","type":"Annulus"},{"attributes":{"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"}},"id":"ab0b8516-f462-4ace-871f-82486eb377ad","type":"ResizeTool"},{"attributes":{"dimension":1,"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"7450ea05-7a51-4d41-9cc1-7c9df3c850b9","type":"BasicTicker"}},"id":"d098fe5a-f782-4a5a-bdb2-a85a5bd8d2a4","type":"Grid"},{"attributes":{"formatter":{"id":"4186ced9-e3a1-481c-9d1e-90b11c6bf803","type":"BasicTickFormatter"},"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"955e1b86-e97d-4bdc-947e-7132c3b078dd","type":"BasicTicker"}},"id":"ee743416-5ce2-4499-99a2-9006b0e6a960","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"f015b571-d8e3-4fc2-ac64-f4eaf84d7afc","type":"Annulus"},{"attributes":{"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"}},"id":"d800e6d1-887c-4574-abec-d21743a13f6b","type":"HelpTool"},{"attributes":{"formatter":{"id":"fdb0458e-166b-4a25-9d7b-a65843a5a837","type":"BasicTickFormatter"},"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"7450ea05-7a51-4d41-9cc1-7c9df3c850b9","type":"BasicTicker"}},"id":"457d4c73-8c31-4735-91e0-4bf4c2c60feb","type":"LinearAxis"},{"attributes":{"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"}},"id":"c7aeeb41-debb-43ea-a6c2-b206da4c80c5","type":"ResetTool"},{"attributes":{"callback":null},"id":"e28f3f9f-5047-464c-9e6c-5f8a1ae20d28","type":"DataRange1d"},{"attributes":{"below":[{"id":"ee743416-5ce2-4499-99a2-9006b0e6a960","type":"LinearAxis"}],"left":[{"id":"457d4c73-8c31-4735-91e0-4bf4c2c60feb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ee743416-5ce2-4499-99a2-9006b0e6a960","type":"LinearAxis"},{"id":"c6bc45a4-a0f2-4dd2-a5d4-87991d5ffaa3","type":"Grid"},{"id":"457d4c73-8c31-4735-91e0-4bf4c2c60feb","type":"LinearAxis"},{"id":"d098fe5a-f782-4a5a-bdb2-a85a5bd8d2a4","type":"Grid"},{"id":"e01d849b-80f8-4afe-b6d3-d16b6037cdce","type":"BoxAnnotation"},{"id":"414fd485-85f1-4920-9c09-767789a04c27","type":"GlyphRenderer"}],"tool_events":{"id":"4c634c2a-6911-40ef-9c93-31f19d52d8c2","type":"ToolEvents"},"tools":[{"id":"480f789a-2726-4867-ac21-65fb88ea367d","type":"PanTool"},{"id":"a47ac350-f82d-4961-b0ae-89b238b9ab77","type":"WheelZoomTool"},{"id":"2d81e614-2137-4908-8b97-d25cf9d46c31","type":"BoxZoomTool"},{"id":"dc03b1e8-48c0-49de-9d9c-e61b2a509661","type":"PreviewSaveTool"},{"id":"ab0b8516-f462-4ace-871f-82486eb377ad","type":"ResizeTool"},{"id":"c7aeeb41-debb-43ea-a6c2-b206da4c80c5","type":"ResetTool"},{"id":"d800e6d1-887c-4574-abec-d21743a13f6b","type":"HelpTool"}],"x_range":{"id":"e28f3f9f-5047-464c-9e6c-5f8a1ae20d28","type":"DataRange1d"},"y_range":{"id":"fcecbf46-c145-4196-8660-689a87db2560","type":"DataRange1d"}},"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fdb0458e-166b-4a25-9d7b-a65843a5a837","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e01d849b-80f8-4afe-b6d3-d16b6037cdce","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"}},"id":"480f789a-2726-4867-ac21-65fb88ea367d","type":"PanTool"},{"attributes":{},"id":"4c634c2a-6911-40ef-9c93-31f19d52d8c2","type":"ToolEvents"},{"attributes":{},"id":"955e1b86-e97d-4bdc-947e-7132c3b078dd","type":"BasicTicker"},{"attributes":{},"id":"4186ced9-e3a1-481c-9d1e-90b11c6bf803","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"}},"id":"dc03b1e8-48c0-49de-9d9c-e61b2a509661","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"fcecbf46-c145-4196-8660-689a87db2560","type":"DataRange1d"},{"attributes":{"plot":{"id":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a","subtype":"Figure","type":"Plot"}},"id":"a47ac350-f82d-4961-b0ae-89b238b9ab77","type":"WheelZoomTool"}],"root_ids":["e9a09ad3-0b83-4a89-935e-2f6a87420b9a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8636604e-031f-4860-a136-edf898b77dad","elementid":"04016ee7-a426-42e4-9dd8-e72d7e2bdad5","modelid":"e9a09ad3-0b83-4a89-935e-2f6a87420b9a"}];
          
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
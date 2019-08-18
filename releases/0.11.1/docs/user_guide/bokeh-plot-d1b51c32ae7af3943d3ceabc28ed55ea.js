
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
  };var element = document.getElementById("dd3c411e-6588-48bc-8893-076297c61181");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'dd3c411e-6588-48bc-8893-076297c61181' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"692680cd-fdeb-4345-b930-76aee84a1c3f":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"510ea230-3ca0-46bf-9380-a6a17b7806b8","type":"Circle"},{"attributes":{"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"}},"id":"bd22a2d8-f911-4d99-895d-ffde1235b747","type":"ResizeTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"7f435724-6661-47f4-ac99-4f4266b8edde","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"30e5e9c5-f479-4b1f-b98a-fd1f19d30c94","type":"Circle"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"8c6283ad-d03a-4e19-9553-a4e2c0974a8f","type":"FactorRange"},{"attributes":{"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"}},"id":"b3498fb8-0f8c-4352-8717-6e1d18c400f6","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74513b25-996a-4ea9-95a5-15f518a5d9f6","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"74513b25-996a-4ea9-95a5-15f518a5d9f6","type":"BoxAnnotation"},"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"}},"id":"c9108919-40dc-49f4-b412-75cd127b9a4b","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"aa567380-b72c-4d08-960a-f4a63f65ca43","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7f435724-6661-47f4-ac99-4f4266b8edde","type":"ColumnDataSource"},"glyph":{"id":"30e5e9c5-f479-4b1f-b98a-fd1f19d30c94","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"510ea230-3ca0-46bf-9380-a6a17b7806b8","type":"Circle"},"selection_glyph":null},"id":"ec0dd314-0606-4265-ae8a-c80276de09e9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"}},"id":"de54ca76-34e4-458f-9aad-4b93e08dc84a","type":"HelpTool"},{"attributes":{"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"}},"id":"7cb99650-1b63-4804-8204-e88b14c75231","type":"WheelZoomTool"},{"attributes":{},"id":"d2057b4b-2a48-497c-b9f6-b5c66234227f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9c2d6634-96de-43f8-b9df-68b09dc1d63c","type":"CategoricalTickFormatter"},"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"11ac96a6-7efd-4789-90c2-8a8f5641f9f3","type":"CategoricalTicker"}},"id":"cbda2d66-9fd2-4dff-9ced-10af887f28d6","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"}},"id":"0dc4b767-7996-4fe2-95e5-9ea915290d23","type":"PreviewSaveTool"},{"attributes":{"dimension":1,"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"11ac96a6-7efd-4789-90c2-8a8f5641f9f3","type":"CategoricalTicker"}},"id":"76995907-c4bf-499d-bd4c-8aa8bec1a935","type":"Grid"},{"attributes":{},"id":"a43a8150-a03b-4c0c-a832-e91d417ae3a0","type":"ToolEvents"},{"attributes":{"formatter":{"id":"de7dcd1b-e016-4517-a688-1b05a0911968","type":"BasicTickFormatter"},"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2057b4b-2a48-497c-b9f6-b5c66234227f","type":"BasicTicker"}},"id":"3bc9ece9-46fb-4b8d-860f-f0f0def740d1","type":"LinearAxis"},{"attributes":{"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"}},"id":"d4d2698f-3aec-4796-917a-f2c2f8a71df7","type":"PanTool"},{"attributes":{},"id":"11ac96a6-7efd-4789-90c2-8a8f5641f9f3","type":"CategoricalTicker"},{"attributes":{},"id":"de7dcd1b-e016-4517-a688-1b05a0911968","type":"BasicTickFormatter"},{"attributes":{},"id":"9c2d6634-96de-43f8-b9df-68b09dc1d63c","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"3bc9ece9-46fb-4b8d-860f-f0f0def740d1","type":"LinearAxis"}],"left":[{"id":"cbda2d66-9fd2-4dff-9ced-10af887f28d6","type":"CategoricalAxis"}],"renderers":[{"id":"3bc9ece9-46fb-4b8d-860f-f0f0def740d1","type":"LinearAxis"},{"id":"77465fc9-1fda-4384-9115-9d3da7f91a17","type":"Grid"},{"id":"cbda2d66-9fd2-4dff-9ced-10af887f28d6","type":"CategoricalAxis"},{"id":"76995907-c4bf-499d-bd4c-8aa8bec1a935","type":"Grid"},{"id":"74513b25-996a-4ea9-95a5-15f518a5d9f6","type":"BoxAnnotation"},{"id":"ec0dd314-0606-4265-ae8a-c80276de09e9","type":"GlyphRenderer"}],"tool_events":{"id":"a43a8150-a03b-4c0c-a832-e91d417ae3a0","type":"ToolEvents"},"tools":[{"id":"d4d2698f-3aec-4796-917a-f2c2f8a71df7","type":"PanTool"},{"id":"7cb99650-1b63-4804-8204-e88b14c75231","type":"WheelZoomTool"},{"id":"c9108919-40dc-49f4-b412-75cd127b9a4b","type":"BoxZoomTool"},{"id":"0dc4b767-7996-4fe2-95e5-9ea915290d23","type":"PreviewSaveTool"},{"id":"bd22a2d8-f911-4d99-895d-ffde1235b747","type":"ResizeTool"},{"id":"b3498fb8-0f8c-4352-8717-6e1d18c400f6","type":"ResetTool"},{"id":"de54ca76-34e4-458f-9aad-4b93e08dc84a","type":"HelpTool"}],"x_range":{"id":"aa567380-b72c-4d08-960a-f4a63f65ca43","type":"DataRange1d"},"y_range":{"id":"8c6283ad-d03a-4e19-9553-a4e2c0974a8f","type":"FactorRange"}},"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2057b4b-2a48-497c-b9f6-b5c66234227f","type":"BasicTicker"}},"id":"77465fc9-1fda-4384-9115-9d3da7f91a17","type":"Grid"}],"root_ids":["d489e8dc-d607-4a02-8eb5-e7acd6df51f8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"692680cd-fdeb-4345-b930-76aee84a1c3f","elementid":"dd3c411e-6588-48bc-8893-076297c61181","modelid":"d489e8dc-d607-4a02-8eb5-e7acd6df51f8"}];
          
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
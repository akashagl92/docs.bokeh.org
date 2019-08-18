
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
  };var element = document.getElementById("b186829f-359a-45d0-9eec-101737696ef9");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b186829f-359a-45d0-9eec-101737696ef9' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"0218aaac-6830-46cd-9751-7de84091aa66":{"roots":{"references":[{"attributes":{"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"}},"id":"ffedfa5d-1f81-44a8-8580-2e9fe31ff258","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b653eb59-6ab9-4bab-b658-a3fbf489ac92","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"}},"id":"bc5bf82d-1e9e-4c04-a771-cb27e7e57b1f","type":"ResetTool"},{"attributes":{"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"}},"id":"315a7535-5fcc-42fd-a1ca-86812f63d5d9","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"537c158a-8fd2-4ca5-99a9-8f41662a8cf7","type":"Diamond"},{"attributes":{},"id":"0b104c38-306f-45fe-8a19-900bbbf38d4c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0b104c38-306f-45fe-8a19-900bbbf38d4c","type":"BasicTickFormatter"},"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6e3c509-8e42-4d20-a61f-56f1cc7190e6","type":"BasicTicker"}},"id":"01c522d5-0cd7-47b0-99cc-f5956bb3e00d","type":"LinearAxis"},{"attributes":{"below":[{"id":"25c36eb8-2ac9-4901-bee6-b94865d86478","type":"LinearAxis"}],"left":[{"id":"01c522d5-0cd7-47b0-99cc-f5956bb3e00d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"25c36eb8-2ac9-4901-bee6-b94865d86478","type":"LinearAxis"},{"id":"83a48877-03c7-4b11-b716-d39fee7db676","type":"Grid"},{"id":"01c522d5-0cd7-47b0-99cc-f5956bb3e00d","type":"LinearAxis"},{"id":"210b1d8a-9f33-46d0-bc41-4c02c33e6749","type":"Grid"},{"id":"b653eb59-6ab9-4bab-b658-a3fbf489ac92","type":"BoxAnnotation"},{"id":"b2d6cbaa-0eaa-4d64-97c8-571b0f13d2f8","type":"GlyphRenderer"}],"tool_events":{"id":"6c369c79-b1a8-4a9c-ac4d-992a72b63dee","type":"ToolEvents"},"tools":[{"id":"315a7535-5fcc-42fd-a1ca-86812f63d5d9","type":"PanTool"},{"id":"ffedfa5d-1f81-44a8-8580-2e9fe31ff258","type":"WheelZoomTool"},{"id":"493b320a-da84-437f-b02e-d61a3af7d753","type":"BoxZoomTool"},{"id":"08c9fac0-55bf-4070-b46c-d72dfbe73017","type":"PreviewSaveTool"},{"id":"7eddc4f8-4c00-471a-9251-5b9cdf02544f","type":"ResizeTool"},{"id":"bc5bf82d-1e9e-4c04-a771-cb27e7e57b1f","type":"ResetTool"},{"id":"e64f1236-e29a-4982-bdeb-d3f7aab4b2d3","type":"HelpTool"}],"x_range":{"id":"b53e9a22-cadf-4895-b84d-b2c4f0d98259","type":"DataRange1d"},"y_range":{"id":"1ebde79f-0ff6-443d-9bfd-bfe49ebae466","type":"DataRange1d"}},"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6e3c509-8e42-4d20-a61f-56f1cc7190e6","type":"BasicTicker"}},"id":"210b1d8a-9f33-46d0-bc41-4c02c33e6749","type":"Grid"},{"attributes":{"callback":null},"id":"1ebde79f-0ff6-443d-9bfd-bfe49ebae466","type":"DataRange1d"},{"attributes":{"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ba2e072-de47-485e-a9b2-876fe38f0d6d","type":"BasicTicker"}},"id":"83a48877-03c7-4b11-b716-d39fee7db676","type":"Grid"},{"attributes":{},"id":"b6e3c509-8e42-4d20-a61f-56f1cc7190e6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"0340a0b2-2c7c-4a58-a801-ceba0fba80bd","type":"ColumnDataSource"},{"attributes":{},"id":"6124ca5a-636a-4047-a0a0-610e05b2525b","type":"BasicTickFormatter"},{"attributes":{},"id":"6ba2e072-de47-485e-a9b2-876fe38f0d6d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6124ca5a-636a-4047-a0a0-610e05b2525b","type":"BasicTickFormatter"},"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ba2e072-de47-485e-a9b2-876fe38f0d6d","type":"BasicTicker"}},"id":"25c36eb8-2ac9-4901-bee6-b94865d86478","type":"LinearAxis"},{"attributes":{"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"}},"id":"08c9fac0-55bf-4070-b46c-d72dfbe73017","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"}},"id":"7eddc4f8-4c00-471a-9251-5b9cdf02544f","type":"ResizeTool"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4502ffb-1b3d-443d-b229-ef75f63bd7c4","type":"Diamond"},{"attributes":{"data_source":{"id":"0340a0b2-2c7c-4a58-a801-ceba0fba80bd","type":"ColumnDataSource"},"glyph":{"id":"b4502ffb-1b3d-443d-b229-ef75f63bd7c4","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":{"id":"537c158a-8fd2-4ca5-99a9-8f41662a8cf7","type":"Diamond"},"selection_glyph":null},"id":"b2d6cbaa-0eaa-4d64-97c8-571b0f13d2f8","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b53e9a22-cadf-4895-b84d-b2c4f0d98259","type":"DataRange1d"},{"attributes":{"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"}},"id":"e64f1236-e29a-4982-bdeb-d3f7aab4b2d3","type":"HelpTool"},{"attributes":{},"id":"6c369c79-b1a8-4a9c-ac4d-992a72b63dee","type":"ToolEvents"},{"attributes":{"overlay":{"id":"b653eb59-6ab9-4bab-b658-a3fbf489ac92","type":"BoxAnnotation"},"plot":{"id":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6","subtype":"Figure","type":"Plot"}},"id":"493b320a-da84-437f-b02e-d61a3af7d753","type":"BoxZoomTool"}],"root_ids":["e44580b1-bd9e-48a8-a6b3-38673b10a6b6"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"0218aaac-6830-46cd-9751-7de84091aa66","elementid":"b186829f-359a-45d0-9eec-101737696ef9","modelid":"e44580b1-bd9e-48a8-a6b3-38673b10a6b6"}];
          
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
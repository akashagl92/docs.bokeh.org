
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
  };var element = document.getElementById("9270534d-9107-4bfd-b95d-95f06245e1bb");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9270534d-9107-4bfd-b95d-95f06245e1bb' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"90c5693e-8291-4bad-a107-9e099b3ffc3a":{"roots":{"references":[{"attributes":{"formatter":{"id":"30899161-2f75-41e0-aa4c-8cece47f1da8","type":"BasicTickFormatter"},"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"80f7c4cc-614a-4b65-872e-969669b3f9f4","type":"BasicTicker"}},"id":"ed48a05a-50cd-4918-a534-96584383180a","type":"LinearAxis"},{"attributes":{"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"}},"id":"672bba5a-0384-4437-8f71-994e8359fa32","type":"HelpTool"},{"attributes":{"callback":null},"id":"262c6f98-0b02-46ba-aaea-bc7d4fc9699b","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79240c3a-5b6b-4765-9864-322fbd8b7da2","type":"BoxAnnotation"},{"attributes":{},"id":"e22289cf-6ff9-443d-afbc-7f500854bbf1","type":"ToolEvents"},{"attributes":{"callback":null},"id":"6d111e52-078c-46f8-95d3-8fdf13879eb3","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7337b71b-123a-4367-87c9-c873e251bf8d","type":"Circle"},{"attributes":{"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"}},"id":"599ee42d-a294-4f14-bc9f-2710d4726594","type":"PanTool"},{"attributes":{},"id":"30899161-2f75-41e0-aa4c-8cece47f1da8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"}},"id":"b920b982-e964-4881-b848-7b1edf8f6ef3","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"79240c3a-5b6b-4765-9864-322fbd8b7da2","type":"BoxAnnotation"},"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"}},"id":"7b22a5a2-c764-4fe9-9010-a1911d3d2d62","type":"BoxZoomTool"},{"attributes":{},"id":"80f7c4cc-614a-4b65-872e-969669b3f9f4","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"ed48a05a-50cd-4918-a534-96584383180a","type":"LinearAxis"}],"left":[{"id":"472d2980-0357-4c20-afd1-2822d1d3698c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ed48a05a-50cd-4918-a534-96584383180a","type":"LinearAxis"},{"id":"5e32a9ab-7acf-4d87-abaa-294a899a9df5","type":"Grid"},{"id":"472d2980-0357-4c20-afd1-2822d1d3698c","type":"LinearAxis"},{"id":"bf3ee96d-aafa-4088-9438-c4ffb4e038d4","type":"Grid"},{"id":"79240c3a-5b6b-4765-9864-322fbd8b7da2","type":"BoxAnnotation"},{"id":"abb35ea6-90d4-4939-baa6-0db207d6cd30","type":"GlyphRenderer"}],"tool_events":{"id":"e22289cf-6ff9-443d-afbc-7f500854bbf1","type":"ToolEvents"},"tools":[{"id":"599ee42d-a294-4f14-bc9f-2710d4726594","type":"PanTool"},{"id":"b920b982-e964-4881-b848-7b1edf8f6ef3","type":"WheelZoomTool"},{"id":"7b22a5a2-c764-4fe9-9010-a1911d3d2d62","type":"BoxZoomTool"},{"id":"dde4ef5f-5d5c-493d-b12d-e989165164f7","type":"PreviewSaveTool"},{"id":"adcad636-b87e-427e-b47e-52d0285dbaa2","type":"ResizeTool"},{"id":"514da9e0-1f10-4249-bc69-b30ffd45756c","type":"ResetTool"},{"id":"672bba5a-0384-4437-8f71-994e8359fa32","type":"HelpTool"}],"x_range":{"id":"6d111e52-078c-46f8-95d3-8fdf13879eb3","type":"DataRange1d"},"y_range":{"id":"262c6f98-0b02-46ba-aaea-bc7d4fc9699b","type":"DataRange1d"}},"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"50bfb8ac-86cd-4d31-a6a9-df185108be56","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"}},"id":"adcad636-b87e-427e-b47e-52d0285dbaa2","type":"ResizeTool"},{"attributes":{"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"}},"id":"dde4ef5f-5d5c-493d-b12d-e989165164f7","type":"PreviewSaveTool"},{"attributes":{"data_source":{"id":"215d71b3-0957-4e7b-9df5-f52484eaf45a","type":"ColumnDataSource"},"glyph":{"id":"c0149f79-5981-41b6-9acc-b16c6c960fe9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7337b71b-123a-4367-87c9-c873e251bf8d","type":"Circle"},"selection_glyph":null},"id":"abb35ea6-90d4-4939-baa6-0db207d6cd30","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"80f7c4cc-614a-4b65-872e-969669b3f9f4","type":"BasicTicker"}},"id":"5e32a9ab-7acf-4d87-abaa-294a899a9df5","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0149f79-5981-41b6-9acc-b16c6c960fe9","type":"Circle"},{"attributes":{"formatter":{"id":"50bfb8ac-86cd-4d31-a6a9-df185108be56","type":"BasicTickFormatter"},"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"217fc4e2-8514-4b41-a4b0-8305a56d276e","type":"BasicTicker"}},"id":"472d2980-0357-4c20-afd1-2822d1d3698c","type":"LinearAxis"},{"attributes":{"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"}},"id":"514da9e0-1f10-4249-bc69-b30ffd45756c","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"215d71b3-0957-4e7b-9df5-f52484eaf45a","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"cee64835-70ea-4464-b4a1-b704a187e77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"217fc4e2-8514-4b41-a4b0-8305a56d276e","type":"BasicTicker"}},"id":"bf3ee96d-aafa-4088-9438-c4ffb4e038d4","type":"Grid"},{"attributes":{},"id":"217fc4e2-8514-4b41-a4b0-8305a56d276e","type":"BasicTicker"}],"root_ids":["cee64835-70ea-4464-b4a1-b704a187e77c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"90c5693e-8291-4bad-a107-9e099b3ffc3a","elementid":"9270534d-9107-4bfd-b95d-95f06245e1bb","modelid":"cee64835-70ea-4464-b4a1-b704a187e77c"}];
          
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
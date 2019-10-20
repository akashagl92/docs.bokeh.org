
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
  };var element = document.getElementById("024f3774-203f-49c1-9b7e-37d6c6bf327c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '024f3774-203f-49c1-9b7e-37d6c6bf327c' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3009a182-e5e0-4fa0-96ed-eef0be1172d6":{"roots":{"references":[{"attributes":{"callback":null},"id":"d3ccf37c-8f35-410e-a6c6-863b162ca90c","type":"DataRange1d"},{"attributes":{"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"}},"id":"90dda023-fd7b-42b0-b9a9-14b36eb12b23","type":"PanTool"},{"attributes":{},"id":"c84c8ebc-195f-469a-b709-9ef0ba77817c","type":"ToolEvents"},{"attributes":{"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"}},"id":"9c12c4ae-93f0-4053-9130-485352b1cee1","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"30f9e8a5-e87b-4ab7-a02f-19f6b21f958d","type":"BoxAnnotation"},"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"}},"id":"3008c701-fa25-4f0b-8740-3372b48ea883","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30f9e8a5-e87b-4ab7-a02f-19f6b21f958d","type":"BoxAnnotation"},{"attributes":{},"id":"8685da23-f031-4961-9da6-6ed8666a5cf0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"9848a4d9-676e-4781-893c-952a1a05a518","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5a53854d-9597-4620-82f1-8074bda02de3","type":"BasicTickFormatter"},"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"8685da23-f031-4961-9da6-6ed8666a5cf0","type":"BasicTicker"}},"id":"ca9fc55e-7002-4dd8-8d3f-1f0b219b9aee","type":"LinearAxis"},{"attributes":{},"id":"5a53854d-9597-4620-82f1-8074bda02de3","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4052af84-bc73-40c0-bc55-0f077a1668d2","type":"Line"},{"attributes":{"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"}},"id":"8b57b21d-c559-4ccf-bbe4-5d1398fc918f","type":"ResetTool"},{"attributes":{},"id":"030d14d2-940b-47d5-9394-dbcdcc7878cf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb90fcf3-69f8-4cd9-b8ab-73d724c8391f","type":"BasicTicker"}},"id":"cafa47d2-31fa-47d5-b9ea-3e20a32be047","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"8685da23-f031-4961-9da6-6ed8666a5cf0","type":"BasicTicker"}},"id":"94df1b2a-b758-4c70-ac3d-7080993cb6a5","type":"Grid"},{"attributes":{"below":[{"id":"7f5d5bf0-10f9-4adb-b9bf-a840bb3ae63e","type":"LinearAxis"}],"left":[{"id":"ca9fc55e-7002-4dd8-8d3f-1f0b219b9aee","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7f5d5bf0-10f9-4adb-b9bf-a840bb3ae63e","type":"LinearAxis"},{"id":"cafa47d2-31fa-47d5-b9ea-3e20a32be047","type":"Grid"},{"id":"ca9fc55e-7002-4dd8-8d3f-1f0b219b9aee","type":"LinearAxis"},{"id":"94df1b2a-b758-4c70-ac3d-7080993cb6a5","type":"Grid"},{"id":"30f9e8a5-e87b-4ab7-a02f-19f6b21f958d","type":"BoxAnnotation"},{"id":"1bf2040a-cb74-4681-ab63-3c1b3507c974","type":"GlyphRenderer"}],"tool_events":{"id":"c84c8ebc-195f-469a-b709-9ef0ba77817c","type":"ToolEvents"},"tools":[{"id":"90dda023-fd7b-42b0-b9a9-14b36eb12b23","type":"PanTool"},{"id":"9c12c4ae-93f0-4053-9130-485352b1cee1","type":"WheelZoomTool"},{"id":"3008c701-fa25-4f0b-8740-3372b48ea883","type":"BoxZoomTool"},{"id":"901cf93b-af63-4b5d-bacd-fe8b7c53f209","type":"PreviewSaveTool"},{"id":"d801448b-bf4a-4a80-b291-e3ea1661a50c","type":"ResizeTool"},{"id":"8b57b21d-c559-4ccf-bbe4-5d1398fc918f","type":"ResetTool"},{"id":"a64f7627-685c-490f-860e-37850e4ddd54","type":"HelpTool"}],"x_range":{"id":"d3ccf37c-8f35-410e-a6c6-863b162ca90c","type":"DataRange1d"},"y_range":{"id":"bd2f041b-e642-4848-9873-47ede2e61bee","type":"DataRange1d"}},"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"9848a4d9-676e-4781-893c-952a1a05a518","type":"ColumnDataSource"},"glyph":{"id":"eb940191-685d-4ebe-8dfd-b468d0cc5c64","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"4052af84-bc73-40c0-bc55-0f077a1668d2","type":"Line"},"selection_glyph":null},"id":"1bf2040a-cb74-4681-ab63-3c1b3507c974","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb940191-685d-4ebe-8dfd-b468d0cc5c64","type":"Line"},{"attributes":{"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"}},"id":"a64f7627-685c-490f-860e-37850e4ddd54","type":"HelpTool"},{"attributes":{"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"}},"id":"901cf93b-af63-4b5d-bacd-fe8b7c53f209","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"}},"id":"d801448b-bf4a-4a80-b291-e3ea1661a50c","type":"ResizeTool"},{"attributes":{},"id":"eb90fcf3-69f8-4cd9-b8ab-73d724c8391f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"bd2f041b-e642-4848-9873-47ede2e61bee","type":"DataRange1d"},{"attributes":{"formatter":{"id":"030d14d2-940b-47d5-9394-dbcdcc7878cf","type":"BasicTickFormatter"},"plot":{"id":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb90fcf3-69f8-4cd9-b8ab-73d724c8391f","type":"BasicTicker"}},"id":"7f5d5bf0-10f9-4adb-b9bf-a840bb3ae63e","type":"LinearAxis"}],"root_ids":["78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"3009a182-e5e0-4fa0-96ed-eef0be1172d6","elementid":"024f3774-203f-49c1-9b7e-37d6c6bf327c","modelid":"78a60c17-d5ab-42d4-b0b9-3cbea5cf5c44"}];
          
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
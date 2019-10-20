
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
  };var element = document.getElementById("a3c13ab8-be77-44aa-984b-ac80abd14a1d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a3c13ab8-be77-44aa-984b-ac80abd14a1d' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e0ee458d-56b1-44b3-883e-8619eabbb4c6":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"e80ee383-1608-4f5c-b70c-31af03d100d9","type":"Arc"},{"attributes":{"callback":null},"id":"0d7ad370-b15e-43e6-a8bc-6e7aeee2fb84","type":"DataRange1d"},{"attributes":{},"id":"cf53a741-0b0d-450c-a885-c21f3e4187c6","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"cf53a741-0b0d-450c-a885-c21f3e4187c6","type":"BasicTickFormatter"},"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3651e997-d294-4cc0-b9a0-032da3061186","type":"BasicTicker"}},"id":"70e0a855-3457-498b-93e3-1b5d99b117f6","type":"LinearAxis"},{"attributes":{"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"}},"id":"20b2739d-457c-4446-a4fa-cde2821f4ba3","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"}},"id":"ecf1859f-d463-4371-abda-74d3edd08dcd","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"}},"id":"761743bf-af36-4a06-ad9a-77232795fb3a","type":"ResetTool"},{"attributes":{"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"}},"id":"9c73895b-4556-4115-bb95-f852e6c8e652","type":"ResizeTool"},{"attributes":{"formatter":{"id":"dad2e626-b14b-45b8-841a-8556895da993","type":"BasicTickFormatter"},"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2906b86-651a-430f-b75c-45aab55eea1a","type":"BasicTicker"}},"id":"1b76c530-7469-4936-9530-ac8f0d2c2481","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"a0d2e0f9-7ac0-459d-956a-b08e3c8198c0","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1b76c530-7469-4936-9530-ac8f0d2c2481","type":"LinearAxis"}],"left":[{"id":"70e0a855-3457-498b-93e3-1b5d99b117f6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1b76c530-7469-4936-9530-ac8f0d2c2481","type":"LinearAxis"},{"id":"223c0355-4ccd-48dc-8ab7-e52324cb1709","type":"Grid"},{"id":"70e0a855-3457-498b-93e3-1b5d99b117f6","type":"LinearAxis"},{"id":"ffefbcc4-c816-4121-b6df-6e193ce27585","type":"Grid"},{"id":"dd7be2a1-0e18-4bae-8949-0f8b7b586904","type":"BoxAnnotation"},{"id":"79e5c88a-5b69-458c-b83b-c6917334b095","type":"GlyphRenderer"}],"tool_events":{"id":"85e4d494-29df-4012-85b3-b2ff7d7daf51","type":"ToolEvents"},"tools":[{"id":"4d23c6c8-f473-4614-b416-aeb9d38e18ee","type":"PanTool"},{"id":"20b2739d-457c-4446-a4fa-cde2821f4ba3","type":"WheelZoomTool"},{"id":"d720c93b-d50c-4ee6-866c-3150750dd861","type":"BoxZoomTool"},{"id":"ecf1859f-d463-4371-abda-74d3edd08dcd","type":"PreviewSaveTool"},{"id":"9c73895b-4556-4115-bb95-f852e6c8e652","type":"ResizeTool"},{"id":"761743bf-af36-4a06-ad9a-77232795fb3a","type":"ResetTool"},{"id":"9d13e8fb-9d10-4bee-8098-6b1b7a524497","type":"HelpTool"}],"x_range":{"id":"9ac741f7-bb8f-4855-93b8-56cef3c3f2f7","type":"DataRange1d"},"y_range":{"id":"0d7ad370-b15e-43e6-a8bc-6e7aeee2fb84","type":"DataRange1d"}},"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"dd7be2a1-0e18-4bae-8949-0f8b7b586904","type":"BoxAnnotation"},"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"}},"id":"d720c93b-d50c-4ee6-866c-3150750dd861","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"9ac741f7-bb8f-4855-93b8-56cef3c3f2f7","type":"DataRange1d"},{"attributes":{"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"}},"id":"4d23c6c8-f473-4614-b416-aeb9d38e18ee","type":"PanTool"},{"attributes":{},"id":"dad2e626-b14b-45b8-841a-8556895da993","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2906b86-651a-430f-b75c-45aab55eea1a","type":"BasicTicker"}},"id":"223c0355-4ccd-48dc-8ab7-e52324cb1709","type":"Grid"},{"attributes":{},"id":"3651e997-d294-4cc0-b9a0-032da3061186","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dd7be2a1-0e18-4bae-8949-0f8b7b586904","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"}},"id":"9d13e8fb-9d10-4bee-8098-6b1b7a524497","type":"HelpTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"92396359-74d2-43a9-8297-e30bf6cd036b","type":"Arc"},{"attributes":{"data_source":{"id":"a0d2e0f9-7ac0-459d-956a-b08e3c8198c0","type":"ColumnDataSource"},"glyph":{"id":"92396359-74d2-43a9-8297-e30bf6cd036b","type":"Arc"},"hover_glyph":null,"nonselection_glyph":{"id":"e80ee383-1608-4f5c-b70c-31af03d100d9","type":"Arc"},"selection_glyph":null},"id":"79e5c88a-5b69-458c-b83b-c6917334b095","type":"GlyphRenderer"},{"attributes":{},"id":"a2906b86-651a-430f-b75c-45aab55eea1a","type":"BasicTicker"},{"attributes":{},"id":"85e4d494-29df-4012-85b3-b2ff7d7daf51","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"a0b1bb7d-be57-4308-acb7-5124ef65311a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3651e997-d294-4cc0-b9a0-032da3061186","type":"BasicTicker"}},"id":"ffefbcc4-c816-4121-b6df-6e193ce27585","type":"Grid"}],"root_ids":["a0b1bb7d-be57-4308-acb7-5124ef65311a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"e0ee458d-56b1-44b3-883e-8619eabbb4c6","elementid":"a3c13ab8-be77-44aa-984b-ac80abd14a1d","modelid":"a0b1bb7d-be57-4308-acb7-5124ef65311a"}];
          
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
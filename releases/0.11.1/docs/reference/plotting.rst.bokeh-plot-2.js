
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
  };var element = document.getElementById("96c30e4f-df25-4742-bb75-760494c7567b");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '96c30e4f-df25-4742-bb75-760494c7567b' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"ca71ed61-a941-4796-ad2f-2543a7980f83":{"roots":{"references":[{"attributes":{"callback":null},"id":"19856998-2908-45b5-92da-7e0790bc9d22","type":"DataRange1d"},{"attributes":{"callback":null},"id":"f0728e16-3c7d-4d52-8426-29cdf5766c1e","type":"DataRange1d"},{"attributes":{"below":[{"id":"b4dafb1a-ed21-4dc1-8eb7-5b71f678b80a","type":"LinearAxis"}],"left":[{"id":"b28a18f7-df75-43b0-89d4-c61f6c472bc8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b4dafb1a-ed21-4dc1-8eb7-5b71f678b80a","type":"LinearAxis"},{"id":"b7e32d4a-71e3-44e7-b199-1b85b83d0faa","type":"Grid"},{"id":"b28a18f7-df75-43b0-89d4-c61f6c472bc8","type":"LinearAxis"},{"id":"5669ec76-56d8-4499-b572-ec5cb22fccc5","type":"Grid"},{"id":"6896d1ae-7790-4b3d-8d6f-8153848c8fc6","type":"BoxAnnotation"},{"id":"2812eeed-7aea-439c-8dc1-d1aa73acc447","type":"GlyphRenderer"}],"tool_events":{"id":"15d59082-7916-472b-ba16-13d817b56662","type":"ToolEvents"},"tools":[{"id":"4fa0fceb-2905-4266-920f-b843da4ef1ee","type":"PanTool"},{"id":"3edc24a2-0109-4975-a2db-431a080a9633","type":"WheelZoomTool"},{"id":"962f8c50-df4e-4593-8be6-faf508fc269f","type":"BoxZoomTool"},{"id":"250b0978-6d09-4312-af69-165ab64fb015","type":"PreviewSaveTool"},{"id":"5b22b114-ef82-4dbf-89c8-485083ee09c3","type":"ResizeTool"},{"id":"5a3a889c-aaa7-4cb7-adf2-2bd9e1f4c5c6","type":"ResetTool"},{"id":"c08c6706-26e8-40e7-aecb-2d6ac6cdda41","type":"HelpTool"}],"x_range":{"id":"f0728e16-3c7d-4d52-8426-29cdf5766c1e","type":"DataRange1d"},"y_range":{"id":"19856998-2908-45b5-92da-7e0790bc9d22","type":"DataRange1d"}},"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"4a8fc8b2-a7bd-433e-827d-50301130da9b","type":"BasicTickFormatter"},"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"},"ticker":{"id":"71035307-94de-4f99-a1b4-bd4f908e0d9c","type":"BasicTicker"}},"id":"b4dafb1a-ed21-4dc1-8eb7-5b71f678b80a","type":"LinearAxis"},{"attributes":{"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"}},"id":"c08c6706-26e8-40e7-aecb-2d6ac6cdda41","type":"HelpTool"},{"attributes":{"overlay":{"id":"6896d1ae-7790-4b3d-8d6f-8153848c8fc6","type":"BoxAnnotation"},"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"}},"id":"962f8c50-df4e-4593-8be6-faf508fc269f","type":"BoxZoomTool"},{"attributes":{},"id":"d5d2ecfc-0d2b-4bf1-865f-27a57addbb7e","type":"BasicTickFormatter"},{"attributes":{},"id":"71035307-94de-4f99-a1b4-bd4f908e0d9c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"cb5a0066-b500-4b83-8c33-ceda0d55aace","type":"ColumnDataSource"},"glyph":{"id":"f9f55aa5-a1b7-4248-b974-a42346303d9b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c8e8fcda-f4f7-498b-a2e1-2967fd6d833c","type":"Circle"},"selection_glyph":null},"id":"2812eeed-7aea-439c-8dc1-d1aa73acc447","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"},"ticker":{"id":"041f0dcc-c026-43ad-9d16-cc9b0149f6d0","type":"BasicTicker"}},"id":"5669ec76-56d8-4499-b572-ec5cb22fccc5","type":"Grid"},{"attributes":{"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"}},"id":"4fa0fceb-2905-4266-920f-b843da4ef1ee","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6896d1ae-7790-4b3d-8d6f-8153848c8fc6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"}},"id":"5a3a889c-aaa7-4cb7-adf2-2bd9e1f4c5c6","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8e8fcda-f4f7-498b-a2e1-2967fd6d833c","type":"Circle"},{"attributes":{"formatter":{"id":"d5d2ecfc-0d2b-4bf1-865f-27a57addbb7e","type":"BasicTickFormatter"},"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"},"ticker":{"id":"041f0dcc-c026-43ad-9d16-cc9b0149f6d0","type":"BasicTicker"}},"id":"b28a18f7-df75-43b0-89d4-c61f6c472bc8","type":"LinearAxis"},{"attributes":{"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"}},"id":"250b0978-6d09-4312-af69-165ab64fb015","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"}},"id":"5b22b114-ef82-4dbf-89c8-485083ee09c3","type":"ResizeTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"cb5a0066-b500-4b83-8c33-ceda0d55aace","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9f55aa5-a1b7-4248-b974-a42346303d9b","type":"Circle"},{"attributes":{"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"}},"id":"3edc24a2-0109-4975-a2db-431a080a9633","type":"WheelZoomTool"},{"attributes":{},"id":"4a8fc8b2-a7bd-433e-827d-50301130da9b","type":"BasicTickFormatter"},{"attributes":{},"id":"15d59082-7916-472b-ba16-13d817b56662","type":"ToolEvents"},{"attributes":{"plot":{"id":"364595fc-0911-497d-9207-ee696f905916","subtype":"Figure","type":"Plot"},"ticker":{"id":"71035307-94de-4f99-a1b4-bd4f908e0d9c","type":"BasicTicker"}},"id":"b7e32d4a-71e3-44e7-b199-1b85b83d0faa","type":"Grid"},{"attributes":{},"id":"041f0dcc-c026-43ad-9d16-cc9b0149f6d0","type":"BasicTicker"}],"root_ids":["364595fc-0911-497d-9207-ee696f905916"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"ca71ed61-a941-4796-ad2f-2543a7980f83","elementid":"96c30e4f-df25-4742-bb75-760494c7567b","modelid":"364595fc-0911-497d-9207-ee696f905916"}];
          
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